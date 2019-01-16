
export default function SendMessageToApp() {

  let messageName = 'nullName'
  let params = ''; 
  let callback;

  if (typeof arguments[0] == "string") {
    messageName = arguments[0]
  }

  if (typeof arguments[1] == "function") {
    callback = arguments[1]
  }else if (typeof arguments[1] != "undefined") {
    params = arguments[1]
  }

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
    sendToAndroid(messageName, params)
  }
}

function sendToIOS(messageName, params) {
  let commond = 'window.webkit.messageHandlers.' + messageName + '.postMessage(' + `'${params}'` + ')'
  eval(commond)
  // Vue.prototype.$bridge.callHandler(messageName, params, callback) //iOS的一个框架: WKWebViewJavascriptBridge
}

function sendToAndroid(messageName, params) {
  let commond = 'Send.' + messageName + '(' + `'${params}'` + ')'
  console.log(commond)
  try {
    eval(commond)
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