window.addEventListener('load',function(){
    

 let small=document.querySelector('.small');
let big=document.querySelector('.big');
let bigImg=document.querySelector('.big>img');
let mask=document.querySelector('.mask');
let opac=document.querySelector('.opac');
let sw=small.offsetWidth;    //小盒子宽度
let sh=small.offsetHeight;   //小盒子高度
let mw=mask.offsetWidth;     //遮罩宽度
let mh=mask.offsetHeight;    //遮罩高度
let bw=big.offsetWidth;    //大盒子宽度
let bh=big.offsetHeight;    //大盒子高度
console.log(mw);


opac.addEventListener('mousemove',function(e){
	  let ox=e.offsetX-mw/2;
       let oy=e.offsetY-mh/2;
	if(ox>=sw-mw){
   	ox=sw-mw;
   }
   if(ox<=0){
   	ox=0;
   }
    if(oy>=sh-mh){
    	oy=sh-mh;
    }
    if(oy<=0){
    	oy=0;
    }
   
   console.log(ox);
   console.log(oy);
  bigImg.style.width=bw*sw/mw+'px';   //宽高：遮罩/小盒子=大盒子/图片
  bigImg.style.height=bh*sh/mh+'px';
  bigImg.style.left=-sw*ox/mw+'px';  //定位：遮罩相对小盒子的定位/小盒子=图片相对大盒子定位/大盒子
  bigImg.style.top=-sh*oy/mh+'px';
  mask.style.left=ox+'px';
  mask.style.top=oy+'px';
 

})
















})