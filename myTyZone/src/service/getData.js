import fetch from '../config/fetch'
/*
import fetchJsonp from 'fetch-jsonp'
*/
/**
 * 创建临时数据
 */
/*
export const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
*/
/*
 export var accountLogin = (data) => fetchJsonp('POST', 'https://open.e.189.cn/api/logbox/oauth2/loginSubmit.do', {data})
*/
export var accountLogin = (userName, psw) => fetch('POST', 'https://open.e.189.cn/api/logbox/oauth2/loginSubmit.do?userName=' + userName + '&password=' + psw)

