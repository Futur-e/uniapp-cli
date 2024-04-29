// +----------------------------------------------------------------------
// | 网络请求request工具类
// +----------------------------------------------------------------------



import {config} from "../config/app";

/**
 * 发送请求
 * url：api
 * method:请求方法
 * data:参数
 * isAuth：是否需要登录 true是需要登陆 false是不需要登陆
 * isVerify：是否需要校验 true是需要校验 false是不需要校验
 */
function baseRequest(url, method, data, {
	isAuth = false,
	isVerify = false 
}) {
	let Url = config.HTTP_REQUEST_URL,
		header = config.HEADER;
	//微信小程序如果需要登录状态才能请求的数据的话，
	//需要传递token token可以在登录的时候获取到token放到缓存中 
	//在这里进行缓存token的获取
	//isAuth = false;时 需要登录状态，并获取到token TOKENNAME
	if(isAuth){
		if (uni.getStorageSync('authorization')) {
			header.authorization = uni.getStorageSync('authorization')
		}
	}
	
	return new Promise((reslove, reject) => {
		uni.request({
			url: Url + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
				reslove(res);
			},
			fail: (msg) => {
				console.log("网络请求失败返回的数据  " + JSON.stringify(msg))
				let data = {
					mag: msg,
					status: 1,//1没网
				}
				uni.showToast({
					title:JSON.stringify(msg),
					icon:'error',
					duration:2000
				})
				
				reject(data);
			}
		})
	});
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});

export default request;