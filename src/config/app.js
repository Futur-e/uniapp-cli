// +----------------------------------------------------------------------
// | 网络请求相关的配置信息
// +----------------------------------------------------------------------
export const config = {
	// 小程序配置 APP可以进行单独配置
	// 请求域名 格式： https://请求域名
	// HTTP_REQUEST_URL: '/dpc',
	HTTP_REQUEST_URL: "http://localhost:9090",




	HEADER: {
		'content-type': 'application/json',
	},
	// 回话密钥名称 请勿修改此配置
	TOKENNAME: 'Authori-zation',
	// 缓存时间 0 永久
	EXPIRE: 0,
	//分页最多显示条数
	LIMIT: 10
}
