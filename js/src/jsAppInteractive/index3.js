
export default function SendMessageToApp() {

  let messageName = 'nullName'
  let params = ''; 
  let callback;

  //app定义的的方法名
  if (typeof arguments[0] == "string") {
    messageName = arguments[0]
  }

  //传递的参数或者回调函数
  let arg1 = arguments[1];
  if (typeof arg1 == "function") {
    callback = arg1
  }else if (typeof arg1 != "undefined") {
      params = arg1
  }

  //回调函数
  if (typeof arguments[2] == "function") {
    callback = arguments[2]
  }

  if (callback) {
    let fun_name = getFunName(callback)
    window[fun_name] = callback
  }

  if (window.webkit != undefined) {
    sendToIOS(messageName, params)
  }else{
     //貌似安卓传的参数，不能是数组和对象，所以这里json一下
    if (typeof params != "string") {
      params = JSON.stringify(params)
    }
    sendToAndroid(messageName, params)
  }
}

function sendToIOS(messageName, params) {
  window.webkit.messageHandlers[messageName].postMessage(params)
  // let commond = 'window.webkit.messageHandlers.' + messageName + '.postMessage(' + `'${params}'` + ')'
  // eval(commond)
  // Vue.prototype.$bridge.callHandler(messageName, params, callback) //iOS的一个框架: WKWebViewJavascriptBridge
}

function sendToAndroid(messageName, params) {
  // let commond = 'Send.' + messageName + '(' + `'${params}'` + ')'
  // console.log(commond)
  try {
    if (params.length > 0) {
      console.log("有参")
      AndroidWebViewBridge[messageName](params)
    }else{
      console.log("无参")
      AndroidWebViewBridge[messageName]()
    }
  } catch(error) {
    console.log(error)
  }

}

function getFunName(fn) {
  //"getvalueFromApp"
  //"bound getvalueFromApp"
  let res = fn.name.split(' ')
  if (res.length > 1) {
    return res[1]
  }else if (res.length > 0) {
    return res[0]
  }
}