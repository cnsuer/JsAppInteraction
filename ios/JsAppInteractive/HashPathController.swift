//
//  HashPathController.swift
//  JsAppInteractive
//
//  Created by apple on 2019/1/16.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit
import WebKit

class HashPathController: JLXXWKWebViewController {
	
	override func viewDidLoad() {
		super.viewDidLoad()
		
		//js交互
		scriptMessages = ["goToDeveloper", "goToEventDetail", "goToGame"]
		let messageHandler = JLXXWKWebViewScriptMessageHandler(delegate: self)
		setUpConfiguration(webView?.configuration, scriptMessageHandler: messageHandler)
		
		//禁止webView瞎鸡巴弹
		webView?.scrollView.bounces = false
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
	
	func goToController(_ controller: UIViewController) {
		if let navigationController = navigationController {
			navigationController.pushViewController(controller, animated: true)
		}else{
			let nav = UINavigationController(rootViewController: controller)
			let closeItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(closeNewPage))
			controller.navigationItem.leftBarButtonItem = closeItem
			present(nav, animated: true, completion: nil)
		}
		
	}
	@objc private func closeNewPage() {
		dismiss(animated: true, completion: nil)
	}
	
}

extension HashPathController: JLXXWKWebViewScriptMessageDelegate {

	func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
		
		print("---- userContentController didReceive message begin----")
		print("---- message.name----")
		print(message.name)
		print("---- message.body----")
		print(message.body)
		print("----userContentController didReceive message end----")
		if message.name == "goToEventDetail" {
			goToEventDetail()
		}else if message.name == "goToDeveloper" {
			goToDeveloper()
		}else if message.name == "goToGame"{
			goToGame()
		}
	}
	
	func goToGame() {
		let game = HashPathController()
		game.originY = .navgationNar
		let path = urlStringFrom(bundle: "web2", hash: "game")
		game.urlString = path
		goToController(game)
	}
	
	func goToEventDetail() {
		let eventDetail = EventDetailController()
		eventDetail.originY = .navgationNar
		let path = urlStringFrom(bundle: "web2", hash: "eventDetail")
		eventDetail.urlString = path
		goToController(eventDetail)
	}
	func goToDeveloper( ) {
		let dev = DeveloperController()
		dev.originY = .navgationNar
		let path = urlStringFrom(bundle: "web2", hash: "developer")
		dev.urlString = path
		goToController(dev)
	}
	
	
}
