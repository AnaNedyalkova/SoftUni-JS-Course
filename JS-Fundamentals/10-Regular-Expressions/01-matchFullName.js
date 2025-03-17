function matchFullName(str) {
    
    let patternNames = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm
    let result = str.match(patternNames);
    console.log(result.join(' '))
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");