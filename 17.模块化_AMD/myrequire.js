// require和define还是有区别的，defined中的函数需要有返回值，一个是加载一个是定义
(function () {
    const registry = {}
    let moudle = null
    const tasks = [] //存储待处理的模块任务
    const createNode = function (depend) {
        let script = document.createElement("script");
        script.src = `./${depend}.js`;
        script.setAttribute("data-moduleName", depend);
        let fs = document.getElementsByTagName('script')[0];
        fs.parentNode.insertBefore(script, fs);
        return script;
    }
    const hasAlldependencies = function (dependencies) {
        let hasValue = true
        dependencies.forEach(depd => {
            if (!registry.hasOwnProperty(depd)) { //如果当前需要的每个依赖在缓存中都能找到，那么它就是有有依赖的
                hasValue = false
            }
        })
        return hasValue
    }

    const implementCallback = function (tasks) {
        if (tasks.length) {
            tasks.forEach((module, index) => {
                if (hasAlldependencies(module.dependencies)) { // 有所需依赖
                    //传参就是模块的depedencies的具体值，从缓存中取
                    const returnValue = module.callback(...module.dependencies.map(it => registry[it])) 
                    if (module.name) { // 加入缓存
                        registry[module.name] = returnValue
                    }
                    tasks.splice(index, 1) // 把当前模块从任务中删除
                    implementCallback(tasks)  // 解决了一个依赖需要再递归一下，也许别的依赖它的也能被解决
                }
            })
        }
    }
    const require = function (dependencies, callback) {
        if (!dependencies.length) { //这个文件没有依赖项
            moudle = {
                value: callback()  // value是模块的返回值，也是回调函数需要的参数
            }
        } else { //这个文件有依赖项
            moudle = {
                dependencies,
                callback
            }
            tasks.push(moudle)
            dependencies.forEach(function (item) {
                if (!registry[item]) {
                    createNode(item).onload = function () {  // 为每个动态创建的script添加回调
                        let modulename = this.dataset.modulename
                        if (moudle.hasOwnProperty('value')) {  // 无须依赖
                            registry[modulename] = moudle.value   // 直接把模块的结果放到缓存里
                        } else {
                            moudle.name = modulename
                            if (hasAlldependencies(moudle.dependencies)) { // ToDo 需要依赖，但是依赖我都有
                                registry[modulename] = moudle.callback(...moudle.dependencies.map(it => cache[it]))
                            }
                        }
                        implementCallback(tasks) // 递归执行callback
                    }
                }

            })
        }
    }
    window.require = require
    window.define = require
})(window)

