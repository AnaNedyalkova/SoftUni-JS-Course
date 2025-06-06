
// // function solve () {

// // }
// // solve()

// function printText(text) {
//     console.log('I love' + text);
// }
// printText('JavaScript')

// let name = 'George';
// console.log(name.charAt(2));

// Number(true)
// console.log(Number('String'));


// let a = 10;
// let b = 20;
// let c = a>b ? a:b;
// console.log(c);


const obj = {
    a: 10,
    b: function () {
      console.log(this.a);
      const inner = () => {
        console.log(this.a);
      };
      inner();
    },
  };
  
  const b = obj.b;
  b(); // Output?
  obj.b(); // Output?
 

