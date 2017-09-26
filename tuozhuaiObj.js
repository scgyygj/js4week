//属性
//this.obj
//this,isX
//this.isY
//this.rangerX
//this.rangerY
//方法
//move



class Drag{
	constructor(obj){            //写属性
        this.obj=obj;                         //谁动
	}
	move(){
		let that=this;
		this.obj.addEventListener('mousedown',function(e){
			let ox=e.offsetX;
			let oy=e.offsetY;
			console.log(ox)
			console.log(oy)

			document.addEventListener('mousemove',fn);

			that.obj.addEventListener('mouseup',function(){
				document.removeEventListener('mousemove',fn);
			})
			function fn(e){
				let cx=e.clientX-ox;
				let cy=e.clientY-oy;
				that.obj.style.left=cx+'px';
				that.obj.style.top=cy+'px';
			}
		})
	}
}

