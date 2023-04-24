/**
 * 从promise 中解析出最原始返回对象
 */
type HttpResult = {
    code: number,
    message: string,
    data: any
}

type AjaxResponse = Promise<Promise<HttpResult>>


type PromiseType<T> = T extends Promise<infer P> ? PromiseType<P> : T

type AwaitePromiseType = PromiseType<AjaxResponse>

export { }