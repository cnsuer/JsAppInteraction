//
//  DeveloperController.swift
//  IGW
//
//  Created by apple on 2019/1/9.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit
import WebKit

class DeveloperController: JLXXWKWebViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
		//js交互
		scriptMessages = ["goToDeveloper", "goToEventDetail"]
		let messageHandler = JLXXWKWebViewScriptMessageHandler(delegate: self)
		setUpConfiguration(webView?.configuration, scriptMessageHandler: messageHandler)
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
extension DeveloperController: JLXXWKWebViewScriptMessageDelegate {
	
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
		}
	}
	
	func goToEventDetail() {
		let eventDetail = EventDetailController()
		eventDetail.originY = .navgationNar
		let path = urlStringFrom(bundle: "web2", hash: "eventDetail")
		eventDetail.urlString = path
		goToController(eventDetail)
	}
	func goToDeveloper() {
		let dev = DeveloperController()
		dev.originY = .navgationNar
		let path = urlStringFrom(bundle: "web2", hash: "developer")
		dev.urlString = path
		goToController(dev)
	}
	
}
