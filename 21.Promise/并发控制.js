/**1.最大并发请求队列 (猿辅导)
题目：有多个请求需要发出，存在input数组中，请实现一个限制最大并发数量为2的请求方法，将请求的返回保存在output数组，请求方法为fetch(url,callback)。
解答：
这里有两种思路，一种是将数组分割为两个一组的多个数组，每次传入一个数组，用promise.all的方法，当两个请求都返回了再调用下一个，但这种方法的局限性是，其中某一个请求很慢，就会阻塞整个队列。
另一种思路是维护一个请求队列，利用递归的方法不停的推入请求，可设置任意最大并发数，具体代码如下:*/
function handleFetchQueue(input, max) {
	const requestsQueue = []; // 请求队列
    let i = 0;
    const handleRequest = (url) => {
		const req = fetch(url).then(res=>{
			const index = handleRequest.findIndex(req)
			requestsQueue.splice(index,1)
			addRreq()
		})
		const addRreq = ()=>{
			if (requestsQueue.push(req) < max) {
				handleRequest(input[++i]);
			  }
		}
		addRreq()
        
  	}
    handleRequest(input[i]);
}

//参考：23行代码实现一个带并发数限制的fetch请求函数 https://juejin.cn/post/6844903796506624014

