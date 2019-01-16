
export function saoYiSao(params = '') {
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.saoyisao.postMessage(params)
  }else{
    try {
      Send.saoyisao()
    } catch(error) {
      console.log(error)
    }
  }
}

export function share(params = '') {
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.share.postMessage(params)
  }else {
    Send.share()
  }
}

export function storeValueForKey(params = '') {
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.storeValueForKey.postMessage(params)
  }else {
    Send.storeValue(params)
  }
}

export function getValueForKey(params = '') {
  if (window.webkit != undefined) {
    window.webkit.messageHandlers.getValueForKey.postMessage(params)
  }else {
    Send.getValue(params)
  }
}