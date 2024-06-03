/*轮播图*/
var imgShow = document.getElementsByClassName('parent')[0],
  dotList = document.querySelectorAll('.dots >.clearfix > li');
var btnLeft = document.getElementsByClassName('btnLeft')[0],
  btnRight = document.getElementsByClassName('btnRight')[0];
var dotLen = dotList.length,
  index = 0; //轮播层的图片索引，0表示第一张

//圆点显示
function showRadius() {
  for(var i = 0; i < dotLen; i++) {
    if(dotList[i].className === "on"){
      dotList[i].className = "off";
    }
  }
  dotList[index].className = "on";
}

//向左移动
btnLeft.onclick = function() {
  index--;
  if(index < 0){  /*第1张向左时，变为第4张*/
    index = 3;
  }
  showRadius();
  var left;
  var imgLeft = imgShow.style.left;
  if(imgLeft === "0px") { /*当是第1张时，每张图片左移，移3张图，位置为-(3*980)*/
    left = -2940;
  }
  else{
    left = parseInt(imgLeft) + 980; /*由于left为负数，每左移一张加980*/
  }
  imgShow.style.left = left + "px";
}

//向右移动
btnRight.onclick = function() {
  index++;
  if(index > 3){  /*第4张向右时，变为第1张*/
    index = 0;
  }
  showRadius();
  var right;
  var imgLeft = imgShow.style.left;
  if(imgLeft === "-2940px") { /*当是第4张时，第1张的位置为0*/
    right = 0;
  }
  else{
    right = parseInt(imgLeft) - 980; /*由于left为负数，每右移一张减980*/
  }
  imgShow.style.left = right + "px";
}

// 自动轮播
var timer;
function autoPlay() {
  timer = setInterval(function() {
    var right;
    var imgLeft = imgShow.style.left;
    if(imgLeft === "-2940px") {
      right = 0;
    }
    else{
      right = parseInt(imgLeft) - 980;
    }
    imgShow.style.left = right + "px";
  } ,2000)
}
autoPlay();

for(var i = 0; i < dotLen; i++) {
  /*利用闭包传递索引*/
  (function(i) {
    dotList[i].onclick = function() {
      var dis = index - i; //当前位置和点击的距离
      imgShow.style.left = (parseInt(imgShow.style.left) + dis * 980) + "px";
      index = i; //显示当前位置的圆点
      showRadius();
    }
  })(i);
}

 /*图片跟随鼠标移动*/
document.onmousemove = function(e) {
  var follower = document.getElementById('follower');
  follower.style.left = e.pageX +15 + 'px'; //加的数字是鼠标和图片的距离，如果不加图片可能挡住鼠标导致无法点击
  follower.style.top = e.pageY +15+ 'px';
}

