window.onload=function(){
let leftli=document.querySelector('.zuo')
let lefts=leftli.querySelectorAll('.zuo>li');
let color=['red','yellow','green','skyblue','blue']
console.log(lefts);
let floor=document.querySelectorAll('.box1');   //页面中所有的楼层
let ch=window.innerHeight;     //浏览器高度
let flag=true;
let floorArr=[];                   //所有楼层到文档顶部的距离
    floor.forEach(elements=>{
        floorArr.push(elements.offsetTop)
     } )

   lefts.forEach((element,index)=>{
	element.onclick=()=>{
		flag=false;
		// document.body.scrollTop=floorArr[index];
		for(let i=0;i<lefts.length;i++){
			lefts[i].style.background='none';
		}
		element.style.background=color[index];
		// this.style.background=color[index];
		animate(document.body,{scrollTop:floorArr[index]},()=>{flag=true});
	}
	
})

 window.onscroll=function(){

 	floorArr.forEach((value,index)=>{
       let scrolltop=document.body.scrollTop;
       if(ch+scrolltop>=value){
       	let imgs=floor[index].getElementsByTagName('img');
         	for (let i=0;i<imgs.length;i++){
    	     imgs[i].src=imgs[i].getAttribute('prusrc');


        }

       }

       // 按扭随页面滚动换颜色
       if(flag){
        if(ch+scrolltop>=floorArr[index]){        //浏览器的高度+滚动的高度>=离文档的高度
    	     	for(let i=0;i<lefts.length;i++){
			lefts[i].style.background='none';
		}
       	lefts[index].style.background=color[index];
       }	
       }
      
 })


}




































}