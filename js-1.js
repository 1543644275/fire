// JavaScript Document
window.onload=choosePic;
var thisAd=0;
var adImages=new Array("photo/16.jpg","photo/15.jpg","photo/18.jpg");//创建数组

function choosePic(){
	"use strict";//严格模式
	thisAd=Math.floor((Math.random()*adImages.length));
	document.getElementById("Ad").scr=adImages[thisAd];
	advertisement();//调用advertisement函数
}

function advertisement(){//定义函数
	"use strict";//严格模式
	thisAd++;
	if(thisAd === adImages.length){thisAd=0;}
	document.getElementById("Ad").src=adImages[thisAd];//调用getElementById方法
	setTimeout(advertisement,2*1000);
}
