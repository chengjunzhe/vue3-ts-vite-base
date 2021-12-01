/**
 * 校验手机号
 * ***/
export function validMobile(str: string) {
  return /^1[3-9]\d{9}$/.test(str)
}

/**
 * 是不是Objct
 * ***/
export function isObject(val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

/**
 * 是不是function
 * ***/
export function isFunction(val: any) {
  return Object.prototype.toString.call(val) === '[object Function]'
}

/**
 * 是不是promise
 * ***/
export function isPromise(val: any) {
  return Object.prototype.toString.call(val) === '[object Promise]'
}
