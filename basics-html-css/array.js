//Array--------------
const arr = [
    {name:"Ford"},
    {name:"BMW"},
    {name:"Fiat"}];
const ast = arr.find((element) => {
       return  element.name=="BMW";
    });
console.log(ast);
const astt = arr.filter((element, index, arr) => {
       return  element.name=="BMW";
    });
    console.log(astt);
const a1 = new Array("hy", "hu", "gt", "fg");
console.log(a1.length);
const tf = a1.toReversed();
console.log(tf);
const f = a1.includes("hy");
console.log(f);
console.log("first : " + a1[0] + "," + "second :" + a1[a1.length - 1]);
a1.shift();
a1.pop();
console.log(a1);
const t = a1.length;
console.log(t);
const a2 = [2,5,8,9,49,0];
const re = a2.toString();  
console.log(re);
const numbers = [1, 2, 5, 4, 3,4, 5, 5,3];
const res = numbers.join('-');
console.log(res);
const a3 = [1,2,3,5,3,4,5,4,5];
const db = a3.map((element, index) => {
    return element*element;
});
console.log(db);
const eve = a3.filter((element) => {
    return element % 2 == 0;
})
console.log(eve);
const red = a3.reduce((total, element) => {
    return total + element;
});
console.log(red);
 
     
 
 

const upp = a1.forEach(name => {
  console.log(name.toUpperCase());
});
 console.log(a1.concat(a3));
 console.log(a2.sort(function(a, b){return a - b}));
 console.log(a1.indexOf("gt"));
const se = new Set(a3);
const es = [...se];
console.log(es);

const users = [
  { id: 1, name: "Ayush", age: 21 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Simran", age: 19 }
];
const gerr = users.map((element) => {
    return element.name;
})
console.log(gerr);
const agea = users.filter((element) => {
       return element.age > 20;
    });
    const tw = agea.map((element) => {
        return element.name;
    });
    console.log(tw);
     
const a5 = [1, [2, [3, 4], 5]];
console.log(a5.flat());
 
const aveage = users.reduce((acc, element) => {
   return (acc += element.age)/users.length;
});
console.log(aveage);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 }
];
const pri = products.sort((a, b) => a.price - b.price );
console.log(pri);
console.log(products.map((element) => {
    return element.name;
}));
const gti = products.filter((element) => {
    return element.price > 900;
});
console.log(gti);
console.log(products.includes(products.price > 900));

const arr6 = [1, 2, 3, 4, 5];
const ajk = arr6.filter((element) => {
    return (element % 2 !== 0) 
});
console.log(ajk); 
    
const arr7 = [18, 22, 30, 15];
const bn = arr7.some((value, arr) => {
    return value > 18;
});
console.log(bn);
const cn = arr7.every((value, arr) => {
    return value >= 18;
});
console.log(cn);


//promises--------------

function server() {
    return new Promise((success, failure) => {
        setTimeout(() => {
            success("Connected to server");
        }, 2000);
    });
}
server()
.then(data => console.log (data) )
.catch(err => console.log(err));

function sorse() {
    return new Promise((success, failure) => {
        setTimeout(() => {
            failure("Network Error");
        }, 3000);
    });
}
sorse()
.then(data => console.log (data) )
.catch(err => console.log("Network Error"));

//promise chaining-------

function chainp() {
    return Promise.resolve(2);
}
chainp()
.then((resolve) => {
    return resolve*5;
})
.then((resolve) => {
    return resolve - 3;
})
.then((resolve) => {
     console.log(resolve);
})
.catch((err) => console.log(err));







