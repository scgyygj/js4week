// let data=[];
class  storfe{
    constructor(){
        this.data=[                                                  //属性
            {num:1,name:'张三',age:13,sex:'男',tel:123456789},
            {num:2,name:'李四',age:12,sex:'女',tel:123456789},
            {num:3,name:'王五',age:13,sex:'女',tel:123456789},
            {num:4,name:'赵六',age:13,sex:'男',tel:123456789},
            {num:5,name:'李那',age:13,sex:'女',tel:123456789},
            {num:6,name:'张产',age:13,sex:'男',tel:123456789},
            {num:7,name:'王三',age:13,sex:'女',tel:123456789},
            {num:8,name:'找吧',age:13,sex:'男',tel:123456789}
        ];
    }
    //初始化数据
    _init(){
       localStorage.setItem('students',JSON.stringify(this.data))  //设置数据
    }
    //获取数据
     getData() {
         let data = JSON.parse(localStorage.getItem('students'));    //先获取，不管有没有
         if (!data) {
             this._init();      // 如果没有，给他初始化
         }
         return this.data = JSON.parse(localStorage.getItem('students'))
     }
        //更新
     update(index,key,value){     // indexn  哪一行    key 哪一个属性    value 改成什么
         this.data[index][key]=value;
            this.save();              //保存数据
         }
      //保存
      save(){
         localStorage.setItem('students',JSON.stringify(this.data)); //把页面中的值保存到数据
         }
      //删除
      del(index){
          this.data.splice(index,1)
          this.save();
      }
      //增加
    push(index){          //index是一个对象
          this.data.push(index);
          this.save();
     }











}
