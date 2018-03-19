//http://web.archive.org/web/20110725013125/http://www.digital-web.com/articles/scope_in_javascript/
//http://www.ecma-international.org/ecma-262/8.0/index.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

// 1 this & Object prototype
    // 1.1 this:
        // this là một trong những cơ chế gây rối nhất trong JS, theo em this là gì ?
        // Cách hiểu 1: this trỏ tới function f, đúng hay sai?
        // ham là 1 kiểu object và this là 1 keyWord. tùy thuộc vào context mà this đại diện/ đề cập đến các đối tượng khác nhau 
        // this trong function la globle object 

// ----------------------------------------------------------- vi dụ 1 ------------------------------------------------------------
function f(num) {
    // this.count++; // ghi lại gía trị đếm hàm f được gọi bao nhiêu lần
    this.count = 12;// private => khong truy nhap thay đổi từ bên ngoài
    console.log("f: " + num, 'count: '+f.cocount);// return f: 1 count NaN
    
}
// console.log(f);
// f.count = 0;

f(1);// log ra gia trj cua num
f(2);
f(3);
f(4);
f(5);

// in ra số lần hàm f đc gọi: 5 lần
console.log(f.count); // return 0 neu có khia báo f.count trước đó // return undefined khi khai báo this.count = 12 
// count khong the thay doi tư ben ngoài 
// mỗi lần gọi f(num) thì tạo vùng nhớ mới 
// 
console.log("--------------------------end of vd 1----------------------------------------");
// ---------------------------------------------------------- ví dụ 2 ----------------------------------------------------
// Cách hiểu 2: this trỏ tới scope của function, đúng hay sai?
function f() {
  var a = 2;
//   this.g(); // lỗi vì trong hàm f() không có hàm g
}

function g() {
  console.log(this.a); // return undefined vi trong ham g() khong có gia trị a chưa khai 
}

// g();
console.log("--------------------------end of vd 2----------------------------------------");

// -----------------------------------------------------------vd 3 --------------------------------
function fn() {
    console.log("fn")
}

fn(); // cách gọi 1 : gọi hàm thông thường

var o = {
  method: fn
}

o.method(); // cách gọi 2: gọi hàm bằng cách truy cập thuộc tính của đối tượng (clousre)

fn.call(); // cách gọi 3: tương đương  call(this)
fn.call(this); // this đề câp đến  đối tượng global là toàn thể  // 
new fn(); // cách gọi 4: người dùng tự định nghĩa 1 kiểu biến / đối tượng mơi // trường hợp này trã về đối tượng là hàm fn()

console.log("--------------------------end of vd 3----------------------------------------");
// Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
function f() {
  console.log(this.a);// undefined 
}
// this đề cập đến function f 
var a = 2;

f(); // ??

console.log("--------------------------end of vd 4----------------------------------------");
// Cho đoạn code sau, kết quả in ra là gì ?
function g() {
//   "use strict"; // 
  console.log(this.b);// lỗi vì cần khai báo trước khi gọi ??
}

var b = 2;

g(); // ??
console.log("--------------------------end of vd 5----------------------------------------");
// Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
function f() {
    this.a = 100;
  console.log(this.a);
}

var o = {
  a: 2,
  f: f.call(f)
};

o.f; //  return 2 vì trong ES6 this luôn là đối tượng cha ngoài cùng 
// nếu muốn trã về undefined hoặc giá trị trong function f thí làm như trên 
console.log("--------------------------end of vd 6----------------------------------------");
//Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
function f() {
    this.a = "fucntion f"
  console.log(this.a);
}

var o = {
  a: 2,
  f: f
};

var g = o.f;
///////////////////////////////////// this trỏ đên fucntion f()
g(); // ??   
console.log("--------------------------end of vd 7----------------------------------------");
// Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
function f() {
  console.log(this.a);
}

var o = {
  a: 2
};

var g = f.apply(o);// this trỏ đến đối tượng o

f.call(o); // ??/ this trỏ đến đối tượng o
// g(); // ??
console.log("--------------------------end of vd 8---------------------------------------");
// Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
function f(a) {
  this.a = a;
}

var g = new f(2);
console.log(g.a); // ??? in ra 2 
// Viết dụ kết hợp cả 4 cách gọi hàm để chỉ ra thứ tự khi gọi hàm ảnh hưởng đến this ra sao?

function dnd (){
    this. b ;
    console.log(b);
}

var o = {
    a: 2,
    fun1: dnd.call(b),
    fun2: dnd()
};

// ưu tiên 1 là sử dung bin call apply xác định chính xác this trỏ đến cái gì 
// thứ 2 là sử dụng this là cha của nó 



// Từ đó theo em quy tác để xác định this là gì?
console.log("--------------------------end of vd 9---------------------------------------");

// --------------------------------------------------------- ví dụ bên ngoài --------------------------------------------
// cách dùng 
function x (){
    x.dnd = 1;
    // console.log(x.dnd);//return 1
    // console.log(this.dnd);// return undefined
    // console.log(dnd);// error  not defined
    // console.log(x); // return function x
}
function y(){
    this.dnd = 2;
    // console.log(dnd);// return 2
    // console.log(this.dnd);// return 2
    // console.log(y); // return function y
    // console.log(y.dnd); // return undefined
    // console.log(this);// what is this ??????????
}
x(); 
// console.log (x);// return { [Function: x] dnd: 1 }
y();
// console.log(y); // return function y
// console.log(this);// return {}
var Employee = {
    age: 34,
    calculateAge: function(){
       return this.age * 10;
    }
};

// Employee.calculateAge();

// //////////////////////////////////////////////////////
// 1.2 Objects
    // Liệt kê lại 6 kiểu nguyên thuỷ trong JS ? liệt kê những kiểu Object có sẵn trong JS?
        // 1 number
        // 2 string 
        // 3 null
        // 4 undefined
        // 5 boolean
        // 6 object
    // Có những cách nào để clone 1 object ?
        // 1: khai bao binh thường : 
        var obj = { a: 1, b:2}
        // 2: dung cách khai báo mới trong es6 
        var a = 'foo', 
            b = 42, 
            c = {};
        // Shorthand property names (ES2015)
        var o = {a, b, c};
        // hoặc 
        var {a:x,b:y,c:z} = o;
        // tương tự với aray :
        var [m,n,q]=[x,y,z];
        console.log("m=",m); // in ra m= too
// 1.3 Iteration
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
    // Có những cách nào để duyệt các phần tử trong 1 array ? Viết code ví dụ
        arr.map((e,i,arr)=>{

        });
        arr.forEach((e,i,arr) => {
            
        });

        var person = {fname:"John", lname:"Doe", age:25}; 
        var text = "";
        var x;
        for (x in person) {
            text += person[x] + " ";
        }

        arr.filter(e=>1);

    // Có những cách nào để duyệt các thuộc tính trong 1 object? Viết code ví dụ
    arr.map((e,i,arr)=>{

    });
    arr.forEach((e,i,arr) => {
        
    });

    var person = {fname:"John", lname:"Doe", age:25}; 
    var text = "";
    var x;
    for (x in person) {
        text += person[x] + " ";
    }
    
    arr.filter(e=>1);
// 1.4 Class Theory
    // Nhớ lại OOP là gì ? các thuộc tính của OOP?
    
    // So sánh "class" và "instance"

    // Constructor là gì? khai bao gia trioj mac dinh cho ham 




// 1.5 Prototypes
    // Xem xét đoạn code sau, em có nhận xét gì ?
    // var o1 = {
    //   a: 2
    // }

    // var o2 = Object.create(o1);

    // console.log(o2.a); // ??

    // o1.a = 10;
    // console.log(o2.a); // ??
    // Tìm hiểu về Oject.prototype
    // dung de thay doi gia tri 1 thuwoc tinh
    // hoac tao thuoc tinh moi 