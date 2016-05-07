window.onload = function(){
	waterfall('main','box');  //调用waterfall函数
	var dataInt ={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'}]};//模拟后台数据
	window.onscroll = function(){
		if(checkScroolSlide){
			var oParent = document.getElementById('main');
			waterfall('main','box');
			//将数据块渲染到当前页面的尾部
			for(var i=0;i<dataInt.data.length;i++){ //先遍历
				
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src ="images/"+dataInt.data[i].src;  //获取到图片
				oPic.appendChild(oImg);
			}
		}
		// checkScroolSlide();
	}
}
function waterfall(parent,box){
       //将main下的所有class为box的元素取出来
       var oParent = document.getElementById(parent);
       var oBoxs = getByClass(oParent,box);
       //计算整个页面显示的列数（页面宽度/box的宽）
       var oBoxW = oBoxs[0].offsetWidth;
       var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
       //设置main的宽度
       oParent.style.cssText = 'width:'+oBoxW*cols + 'px;margin:0 auto';
       var hArr=[];
       for(i =0;i<oBoxs.length;i++){
       	if(i<cols){
       		hArr.push(oBoxs[i].offsetHeight);
       	}else{
       		var minH = Math.min.apply(null,hArr);
       		var index = getMinhIndex(hArr,minH);
       		oBoxs[i].style.position = 'absolute';
       		oBoxs[i].style.top = minH+'px';
       		oBoxs[i].style.left = oBoxW*index +'px';   //一个盒子的宽*索引
       		// oBoxs[i].style.left = oBoxs[index].offsetleft='px';
       		hArr[index] += oBoxs[i].offsetHeight;
       	}
       }
      // console.log(hArr);
}

//根据class获取元素
function getByClass(parent,className){
	var boxArr = new Array();  //用来存储获取到的所有class为box的元素
	oElements = parent.getElementsByTagName('*');
	for( var i =0 ;i < oElements.length;i++){
		if(oElements[i].className == className)
		{
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}

//检测是否具备了滚动条加载数据库的条件
function checkScroolSlide(){
	var oParent = document.getElementById('main');
	var oBox = getByClass('oParent','box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetTop)/2;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;   //滚动条滚动的距离
	var heigth = document.body.clientHeight || document.documentElement.clientHeight;
	return(lastBoxH<scrollTop+height)?true:false; //返回true时，可以加载数据库，反之，不加载
	// console.log(scrollTop); 
}
