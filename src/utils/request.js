
/**
 * options={url,type} @param type是请求类型，query表示从url上走，json，表示json序列化走，从body走
 */
export const post = (options) =>{
    options.header=options.header||{}
    if (options.type === 'json') {
        options.header['content-type'] = 'application/json'
    }else{
        options.header['content-type'] = 'application/x-www-form-urlencoded'
    }
    return new Promise((resolve,reject) => {
        wx.request({
            url: options.url, //仅为示例，并非真实的接口地址
            data: options.param,
            method: options.method ? options.method : 'POST',
            header:options.header,
            success (res) {
                resolve(res)
            },fail(res){
                reject(res)
            }
        })
    })
}
export const get = (option) => {
    option.method = 'GET'
    return post(option)
}