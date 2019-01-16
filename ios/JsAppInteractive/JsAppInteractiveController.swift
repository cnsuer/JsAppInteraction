//
//  ViewController.swift
//  JsAppInteractive
//
//  Created by apple on 2019/1/16.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit
import WebKit

class JsAppInteractiveController: JLXXWKWebViewController {

	override func viewDidLoad() {
		super.viewDidLoad()
		
		//js交互
		scriptMessages = ["saoyisao", "sendString" ,"sendDic" ,"sendArray" ,"getValue"]
		let messageHandler = JLXXWKWebViewScriptMessageHandler(delegate: self)
		setUpConfiguration(webView?.configuration, scriptMessageHandler: messageHandler)
	}

	func webViewEvaluateJS(_  jsStr: String) {
		webView?.evaluateJavaScript(jsStr) { (res, err) in
			if err != nil {
				print("----------evaluateJavaScriptErr Begin----------")
				print(err ?? "err")
				print("----------evaluateJavaScriptErr End----------")
			}else {
				print("success")
			}
		}
	}

}

extension JsAppInteractiveController: JLXXWKWebViewScriptMessageDelegate {
	
	func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
		
		
		print("---- userContentController didReceive message begin----")
		print("---- message.name----")
		print(message.name)
		print("---- message.body----")
		print(message.body)
		print("----userContentController didReceive message end----")
		
		if message.name == "saoyisao" {
			print("!!!!---------------!!!!")
			print(message.name)
			print("!!!!---------------!!!!")
		}else if message.name == "sendDic", let dictionary = message.body as? Dictionary<String, Any>  {
			print("!!!!---------------!!!!")
			print(message.name)
			print(dictionary)
			print("!!!!---------------!!!!")
		}else if message.name == "sendArray", let arr = message.body as? Array<Any> {
			print("!!!!---------------!!!!")
			print(message.name)
			print(arr)
			print("!!!!---------------!!!!")
		}else if message.name == "getValue", let key = message.body as? String {
			let res = "你的key为\(key)," +  "我是返回的数据,哈哈!"
			let jsStr = "getvalueFromApp(\"\(res)\")"
			webViewEvaluateJS(jsStr)
		}
		
		
	}
	
}

