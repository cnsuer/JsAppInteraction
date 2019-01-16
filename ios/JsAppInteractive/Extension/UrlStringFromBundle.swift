//
//  UrlStringFromBundle.swift
//  IGW
//
//  Created by apple on 2019/1/9.
//  Copyright © 2019年 JLXX. All rights reserved.
//

import Foundation

func urlStringFrom(bundle named: String = "web", hash path: String = "game") -> String {
	if let bundlePath = Bundle.main.path(forResource: named, ofType: "bundle"), let webBundle = Bundle(path: bundlePath), let indexPath = webBundle.path(forResource: "index", ofType: "html") {
		let url = URL(fileURLWithPath: indexPath)
		return url.absoluteString + "#/" + path
	}
	return "http://192.168.1.48:8090" //"https://www.baidu.com"
}
