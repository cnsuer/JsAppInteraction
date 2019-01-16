//
//  ViewController.swift
//  JsAppInteractive
//
//  Created by apple on 2019/1/16.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

	@IBOutlet weak var hashPath: UITextField!
	
	override func viewDidLoad() {
        super.viewDidLoad()
		
    }
	
	@IBAction func jiaohu(_ sender: Any) {
		
		let jsJiaohu = JsAppInteractiveController()
		jsJiaohu.originY = .navgationNar
		let path = urlStringFrom(bundle: "web")
		jsJiaohu.urlString = path
		navigationController?.pushViewController(jsJiaohu, animated: true)
		
	}
	
	@IBAction func hash(_ sender: Any) {
		
		let hash = HashPathController()
		hash.originY = .navgationNar
		let end = hashPath.text ?? "game"
		let path = urlStringFrom(bundle: "web2", hash: end)
		hash.urlString = path
		navigationController?.pushViewController(hash, animated: true)
		
	}
}
