window.onload = function(){
	var obtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //获取可视区域的高度
	var timer = null;
	var isTop = true;
	//滚动条滚动时触发
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;	 
		if(osTop >= clientHeight){   //当滚动条的高度大于可视区域的高度时，显示返回顶部图片
				obtn.style.display = 'block';
			}else{
				obtn.style.display = 'none';
			}
		//是否停止定时器(在还未回到顶部时)
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
	obtn.onclick = function(){
		//设置定时器
		timer = setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;	
			var ispeed = Math.floor(-osTop / 5);   //Math.floor()向下取整
		    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;   //由快到慢返回顶部
		    isTop = true;
		    if(osTop == 0){  //回到顶部时清除定时器
		    	clearInterval(timer);
		    }
		},30)
	}
}