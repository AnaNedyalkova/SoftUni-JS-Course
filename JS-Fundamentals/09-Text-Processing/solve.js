function solve (){
    let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";

   while (text.includes('.bg')) {
    text = text.replace('.bg', '.com')
}
console.log(text);
}
solve()