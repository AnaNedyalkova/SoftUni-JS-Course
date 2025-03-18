function extractFile(string) {
let fileName = string.split('\\').pop();

let lastDotIndex = fileName.lastIndexOf('.');

let fileNameExtract = fileName.slice(0, lastDotIndex);
let fileExtention = fileName.slice(lastDotIndex+1);

console.log(`File name: ${fileNameExtract}`)

console.log(`File extension: ${fileExtention}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');