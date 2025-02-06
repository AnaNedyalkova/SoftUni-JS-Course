function repeatString(str, repeatCount)  {
    result = "";
for (let i = 0; i < repeatCount; i++) {
    result+= str;
}
return result;
}
console.log(repeatString("abc", 3));