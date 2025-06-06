function sortBy2criteria(data) {

    data.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    console.log(data.join('\n'));
    
}
sortBy2criteria(['alpha', 
'beta', 
'gamma']);