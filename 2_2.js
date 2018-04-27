// ===============2.2
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
//=============== 2.3
const identifyf = para => () => para
var four = identifyf(3);
four();
// ===============2.4 
const addf = a=>b=>add(a,b);
// ===============2.5 
const liftf = fn => a => b=> fn(a,b)
liftf(mul)(5)(6); // 30
//=============== 2.6
const curry = (fn, a) => b => fn(a,b)
// console.log(curry(mul, 5)(6)); // 30
// let curry = require ('lodash/curry');
// console.log(123,add3(sub,2)(3)); // 6
// ============== 2.7

const inc1 = a => add(a,1)
const inc2 = a => addf(a)(1)
const inc3 = a => liftf(add)(1)(a)
const inc4 = a => curry(add,1)(a)
// console.log(inc1(6), inc2(6), inc3(6), inc4(6));
// ================ 2.8
const twice = fn => a=> fn(a,a);
var doubl = twice(add);
doubl(11); // 22
var square = twice(mul);
square(11); // 121
// console.log(doubl(11), square(11));
// ================ 2.9
const reverse = fn => (a,b) => fn(b, a)
var bus = reverse(sub);
// console.log(bus(3, 2)) // -1
// ================ 2.10------------------
const composeu = (f1,f2) => a => f2(f1(a))
// console.log(composeu(doubl, square)(5)); // 100
// ================ 2.11------------------
const composeb = (f1, f2) =>(a,b,c)=> f2(f1(a,b),c)
// console.log(composeb(add, mul)(2, 3, 7)); // 35
// ================ 2.12------------------
// 
let count = 0 ;
const limit = (fn, n) => (a,b) => n >= ++count ? fn(a,b) : undefined 
var addLimited = limit(add, 2);
// console.log(addLimited(3, 4)); // 7
// console.log(addLimited(3, 5)); // undefined
// console.log(addLimited(4, 5)); // undefined

// =============== 2.13 
const from =  a => () =>  a++ 
// var index = from(0);
// console.log(index()); // 0
// console.log(index()); // 1
// index(); // 2

// 2.14
const to = (gen, n) =>{
	return () => {
		let a = gen();
		if(n>a) return a
	}
}  

var index = to(from(1), 3);
// console.log(index()); // 1
// console.log(index()); // 2
// console.log(index()); // undefined
// console.log(index()); // undefined
// 2.15
const fromTo = (from_, to_) =>  () => {
		if(to_ > from_  ) return from_ ++
	}
var index = fromTo(0, 3);
// console.log(index()); // 1
// console.log(index()); // 2
// console.log(index()); // undefined
// console.log(index()); // undefined

// 2.16 1.17
const element = (arr, fn ) =>   {
	i =0 ;
	return () =>   {
		if(fn) return arr[fn()];
		return arr[i++]
	}
}

var ele = element([1, 2, 3, 4], fromTo(1, 3));

// console.log(ele()); // 2 => index 1
// console.log(ele()); // 2 => index 1
// console.log(ele()); // 2 => index 1

// 2.18
const collect = (fn, arr) =>  {
	return () => {
		let a = fn();
		if(a!==undefined)arr.push(a);
		return a
	}
}
var array = [];
var col = collect(fromTo(0, 2), array);
// console.log(col()); // 0
// console.log(col()); // 0
// console.log(col()); // 0
// console.log(array); // [0, 1]
// 2.19
const filter = (f1, f2 ) => {
	return ()=> {
		let x = f1()
		if(f2(x)) return x
		else return f1()
	}
}
var fil = filter(fromTo(0, 5),
  function even(value) {
    return (value % 2) === 0;
  });
// console.log(fil()); // 0
// console.log(fil()); // 0
// console.log(fil()); // 0
// console.log(fil()); // 0
// console.log(fil()); // 0

// 2.20
const concat = (f1,f2)=>{
	return () => {
		let a = f1()
		if(a!==undefined) return a;
		else return f2()
	}
}
var con = concat(fromTo(0, 3), fromTo(0, 2));
// console.log(con()); // 0
// console.log(con()); // 0
// console.log(con()); // 0
// console.log(con()); // 0
// console.log(con()); // 0
// console.log(con()); // 0
// console.log(con()); // 0
// 2.21 Make a function gensymf that makes a function that generatres unique symbols

const gensymf = ch => {
	let i = 1;
	return () => {
		return ch+i++
	}
}
// var genG = gensymf('G');
// var genH = gensymf('H');
// console.log(genG()); // G1
// console.log(genG()); // G1
// console.log(genH()); // G1
// console.log(genH()); // G1

// 2.22
// inc1 la ham tu dong tang
const gensymff=  (inc1, i) => ch => {
	return () => {
		return ch+inc(i)
	}
}

// var genG = gensymf('G');
// var genH = gensymf('H');
// console.log(genG()); // G1
// console.log(genG()); // G1
// console.log(genH()); // G1
// console.log(genH()); // G1

// 2.23 
const fibonaccif = (a,b) =>  () => {
		let x = a+b;
		a = b;
		b = x;
		return a;
	}
var fib = fibonaccif(0, 1); // must by fibonaccif(0, 1)
console.log(fib()); // 0
console.log(fib()); // 0
console.log(fib()); // 0
console.log(fib()); // 0
console.log(fib()); // 0
console.log(fib()); // 0
// 2.24
const counter = n => {
	return {
		up() {
			return n++
		},
		down() {
			return n--
		}
	}
}
var obj = counter(10);
var up = obj.up;
var down = obj.down;

console.log(up()); // 11
console.log(down()); // 11
console.log(up()); // 11
console.log(down()); // 11
// 2.25 
const  revocable  = fn => ({
		"invoke":   fn,
		revoke() {
			// this.invoke = 1
			this.fn = ()=>1
			// this
			console.log(this)
		}
	})
var rev = revocable(add);
var addRev = rev.invoke;
console.log(addRev(3, 4)); // undefined
rev.revoke();
console.log(addRev(2,3)); // undefined


// console.log(liftf (add)(1)(2))
// module.exports={add,sub,mul};
// const func = (fn,a,b) => fn(a,b)
// console.log( func(add,1,2) );

// function identifyf (fn) {
// 	return function (b) {
// 		return a+b 
// 	}
// }

// var four = identifyf(3)(4);
// four(); // 4

// console.log(four)
// const liftf = fn => a => b => fn(a,b)

// console.log(liftf(add)(1)(2));



// module.exports = {
// 	add,sub,mul
// }

// let curry = require ('lodash/curry');
// const add3 = curry((fn, b, c) => fn( b ,c))
// // add3(1, 2, 3); // 6
// // add3(1, 2)(3); // 6
// // add3(1)(2, 3); // 6
// console.log(123,add3(sub,2)(3)); // 6