function sortArrayBy2Criteria(arr) {
arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
return arr.join('\n')
}
console.log(sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));