//
//  EventDetailController.swift
//  IGW
//
//  Created by apple on 2019/1/9.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit
import WebKit

class EventDetailController: JLXXWKWebViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
		//js交互
		scriptMessages = ["goToReplyDetail"]
		let messageHandler = JLXXWKWebViewScriptMessageHandler(delegate: self)
		setUpConfiguration(webView?.configuration, scriptMessageHandler: messageHandler)
	}
	
	override func viewWillAppear(_ animated: Bool) {
		super.viewWillAppear(animated)
		
		navigationController?.setNavigationBarHidden(false, animated: true)
		
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
extension EventDetailController: JLXXWKWebViewScriptMessageDelegate {
	
	func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
		
		print("---- userContentController didReceive message begin----")
		print("---- message.name----")
		print(message.name)
		print("---- message.body----")
		print(message.body)
		print("----userContentController didReceive message end----")
		if message.name == "goToReplyDetail" {
			goToReplyDetail()
		}else if message.name == "goToDeveloper" {
			goToDeveloper()
		}
	}
	
	
	func goToReplyDetail() {
		let replyDetail = ReplyDetailController()
		let path = urlStringFrom(bundle: "web2", hash: "replyDetail")
		replyDetail.urlString = path
		goToController(replyDetail)
	}
	
	func goToDeveloper( ) {
		let dev = DeveloperController()
		let path = urlStringFrom(bundle: "web2", hash: "developer")
		dev.urlString = path
		goToController(dev)
	}
	
}
