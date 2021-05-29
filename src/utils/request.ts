import config from "../config/index";
// 新营销平台返回类型
class XYXResponse {
    code: number = 200;
    data: object = {};
}
const baseUrl = config.baseUrl;
const defaultHeaders = { "Content-Type": "text/plain;charset=UTF-8" };
const request = async (url: string, method: string, data?: object, headers?: object, cancelToken: boolean = false) => {
    let requestUrl = baseUrl + url;
    let option: RequestInit = {};
    option.method = method;
    option.headers = { ...defaultHeaders, ...headers };
    if (!cancelToken) {
        option.headers.token = localStorage.getItem('token') || "";
    }
    if (data) {
        if (method.toUpperCase() === "GET") {
            // 解构参数,将对象转换为URL参数
            let params = "";
            for (const [key, value] of Object.entries(data)) {
                if (value !== undefined && value !== null) {
                    params += `${key}=${value}&`;
                }
            }
            requestUrl = `${requestUrl}?${params}`;
        } else {
            option.body = JSON.stringify(data);
        }
    }
    // 发送请求
    let response = await fetch(requestUrl, option);
    // 处理结果
    if (response.ok) {
        let result: XYXResponse = await response.json();
        if (result.code === 401) {
            // 未认证通过，清除token，重定向至登录页面
            console.log("未认证通过");
            localStorage.setItem("token", "");
        } else {
            return result;
        }
    } else {
        throw new Error(response.statusText);
    }
}
export default request;