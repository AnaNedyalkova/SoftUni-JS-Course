const fs = require ('fs');  

// fs.writeFileSync ( //create file in the same directory            
//     './demo.txt',
//     'Hello, super nice text is written here'
// )

let output = fs.readFileSync('./demo.txt'); //reads one file 

console.log(output.toString());//.toString makes it human readable

fs.writeFileSync('./data.json',
    JSON.stringify ([{name: 'Ana', age: 33, tel: "+359 889 756 45"}])
)
    const jsonData = fs.readFileSync('data.json');
    const data = JSON.parse(jsonData);
    data.push({name: "Ema", age: 5, tel: 'None'});
    
fs.writeFileSync(
    './data.json',
     JSON.stringify(data)
    )



