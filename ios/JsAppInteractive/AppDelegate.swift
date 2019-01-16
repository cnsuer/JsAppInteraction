//
//  AppDelegate.swift
//  JsAppInteractive
//
//  Created by apple on 2019/1/16.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

	var window: UIWindow?


	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
		
		createKeyWindow()
		
		return true
	}
	
	func createKeyWindow() {
		window = UIWindow(frame: UIScreen.main.bounds)
		window?.backgroundColor = .white
		window?.makeKeyAndVisible()
		
		let etbank = ViewController()
		etbank.originY = .statusBar
		let path = urlStringFrom()
		etbank.urlString = path
		
		let nav = UINavigationController(rootViewController: etbank)
		window?.rootViewController = nav
		
	}

}

