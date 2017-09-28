let table=document.querySelector('tbody');
let obj=new storfe();
let students=obj.getData();
console.log(students);
//获取元素
load();
function load() {
    students.forEach((element,index)=>{
        trs(element,index);
    })


}
function trs(element,index) {
    let tr=document.createElement('tr');
    tr.id=index;
    for(let j in element){
        tr.innerHTML+=`
              <td type="${j}">${element[j]}</td>
              `
    }
    tr.innerHTML+=`
             <td class="del"><button class="delbtn">删除</button></td>
             `
    table.appendChild(tr);
}
//修改
let td=document.querySelector('td');
table.addEventListener('dblclick',function (e) {
    let td=e.target;
    let old=td.innerText;
    td.innerText='';
    let input=document.createElement('input');
    td.appendChild(input);
    input.value=old;
    input.addEventListener('blur',function () {
        let intex = td.parentNode.id;
        let value = input.value;
        td.removeChild(input);
        let key = td.getAttribute('type');

        if (value) {
            td.innerText=value;
        }
        else{
            td.innerText=old;
        }
        obj.update(index,key,value);
    })
})


table.addEventListener('dblclick',function (e) {
    //修改
//     let element=e.target;
//     if(element.nodeName='TD'&& element.className!='delbtn'){
//         let text=element.innerText;
//         element.innerHTML='';
//         let input=document.createElement('input');
//         element.appendChild(input);
//         input.value=text;
//         input.addEventListener('blur',function () {
//
//             let nowtext=input.value.trim();
//             element.removeChild(input);
//             if(nowtext){
//                 element.innerText=nowtext;
//             }
//             else{
//                 element.innerText=text;
//             }
//             let index=element.parentNode.id;
//             let key=element.getAttribute('type');
//             let value=nowtext;
//             if(nowtext){
//                 element.innerText=nowtext;
//             }
//             else{
//                 element.innerText=text;
//             }
//              obj.update(index,key,value);
//         })
//     }
//
// })
// //删除
table.addEventListener('click',function (e) {
  let element=e.target;

   if(element.className=='delbtn'){
    let trs=element.parentNode.parentNode;
    table.removeChild(trs);
    let index=trs.id;
       obj.del(index,1);
       table.innerHTML='';
       load();
}
})
//增加
let  add=document.querySelector('.add');
add.addEventListener('click',function () {
    let arr= {num:9,name:'王五',age:13,sex:'女',tel:123456789};
   trs(arr,table.childElementCount)   //获取arr的子元素
    obj.push(arr);
})


// 获取元素
// let add=document.querySelector('.add');
// add.addEventListener('click',function  () {
//     students.forEach((element,index)=>{
//          let trs=document.createElement('tr');
//           for(let j in element){
//               trs.innerHTML+=`
//               <td type="${j}">${element[j]}</td>
//               `
//           }
//            trs.innerHTML+=`
//              <td class="del"><button class="delbtn">删除</button></td>
//              `
//         table.appendChild(trs);})
//     })

// })
//
