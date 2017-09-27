let shuru=document.querySelector('#shuru');
let button=document.querySelector('.tijiao');
let shuchu=document.querySelector('.shuchu');
let num=document.querySelector('.btn span');
let nr=document.querySelector('.lynr');
let name=document.querySelector('.daming')
shuru.addEventListener('keyup',function(event){
	 
    // for(let i=0;i<100;i++){
    // 	if(shuru.value[i]!='')
    		num.innerHTML=100-shuru.value.length;
    // }
	
	
})
shuru.addEventListener('keydown',function(e){
    	if( e.shiftKey&&e.keyCode==13){
            let text=shuru.value   //获取输入框里的内容
            let Name=name.value
            if(text==''){
                alert('请输入您的留言');
                return;
            }

            let lis=document.createElement('li');
            lis.style.opacity='1';
            r=Math.round(Math.random()*255);
            g=Math.round(Math.random()*255);
            b=Math.round(Math.random()*255);
            lis.style.background='rgb('+r+','+g+','+b+')';
            let color=getComputedStyle(shuchu,null).background;
            console.log(color);
            //样式
            lis.className='shuchu'
            lis.innerHTML=`
    <img src="20160717182104_5ixNZ.jpeg" alt="">
    <div class="right">
        <div class="lyname">${Name}</div>
        <div class="lynr">${text}</div>
    </div>
   `
            shuchu.prepenchild(lis);

            shuru.value=null;
            name.value=null;
            num.innerHTML=100;
    	}
    })

button.addEventListener('click',function(){
    let text=shuru.value   //获取输入框里的内容
    let Name=name.value
    if(text==''){
    	alert('请输入您的留言');
    	return;
    }

    let lis=document.createElement('li');
    lis.style.opacity='1';
    r=Math.round(Math.random()*255);
    g=Math.round(Math.random()*255);
    b=Math.round(Math.random()*255);
    lis.style.background='rgb('+r+','+g+','+b+')';
    let color=getComputedStyle(shuchu,null).background;
    console.log(color);
    //样式
    lis.className='shuchu'
   lis.innerHTML=`
        <img src="20160717182104_5ixNZ.jpeg" alt="">
        <div class="right">
        <div class="lyname">${Name}</div>
        <div class="lynr">${text}</div>
    </div>
   `
    shuchu.prepenchild(lis);
   
    shuru.value=null;
    name.value=null;
    num.innerHTML=100;
})
//点击之后变颜色
let lyq=document.querySelector('.lyq')

lyq.addEventListener('mouseover',function (e) {
    let element=e.target;

    // let img=document.querySelector('.lyq>li>img')
    if(element.nodeName=='LI') {
        let li=document.querySelector('.lyq>li')
        e.stopPropagation();
        element.onmouseover=function () {
           element.style.boxShadow = '0px 0px 10px 5px rgba(0,0,0,1)'
       }


    }

},true)
lyq.addEventListener('mouseout',function (e) {
    let element=e.target;
    console.log(element);

    // let img=document.querySelector('.lyq>li>img')
    if(element.nodeName=='LI') {
        // element.style.background='red';
        element.onmouseout=function () {
            element.style.boxShadow = 'none'
            }
    }

})