<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
    <body>
    <script>
    let objarr=[
    {num:001,name:'张三',age:13,sex:'男',tel:123456789},
    {num:002,name:'李四',age:12,sex:'女',tel:123456789},
    {num:003,name:'王五',age:13,sex:'女',tel:123456789},
    {num:004,name:'赵六',age:13,sex:'男',tel:123456789},
    {num:005,name:'李那',age:13,sex:'女',tel:123456789},
    {num:006,name:'张产',age:13,sex:'男',tel:123456789},
    {num:007,name:'王三',age:13,sex:'女',tel:123456789},
    {num:008,name:'找吧',age:13,sex:'男',tel:123456789},

]
localStorage.setItem('student',JSON.stringify(objarr));
let t=JSON.parse(localStorage.getItem('student'));
console.log(t);
</script>
</body>
</html>
