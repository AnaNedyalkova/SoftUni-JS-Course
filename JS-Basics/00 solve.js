function generatePasswords(n, l) {
  // Генерираме всички възможни пароли чрез 5 вложени цикъла

  for (let d1 = 1; d1 <= n; d1++) {
      for (let d2 = 1; d2 <= n; d2++) {
          for (let l1 = 0; l1 < l; l1++) {
              for (let l2 = 0; l2 < l; l2++) {
                  for (let d3 = 1; d3 <= n; d3++) {
                      // Петият символ трябва да е по-голям от първите два
                      if (d3 > d1 && d3 > d2) {
                          // Преобразуваме индекси за буквите в символи (l1, l2)
                          let letter1 = String.fromCharCode(97 + l1); // 'a' е 97 в ASCII
                          let letter2 = String.fromCharCode(97 + l2); // 'a' е 97 в ASCII
                          
                          // Генерираме паролата и я отпечатваме
                          let password = `${d1}${d2}${letter1}${letter2}${d3}`;
                          if (d1 !== 1 || d2 !== 1 || l1 !== 0 || l2 !== 0 || d3 !== 1) {
                              process.stdout.write(" ");
                          }
                          process.stdout.write(password);
                      }
                  }
              }
          }
      }
  }
}

// Четене на входа от потребителя
let n = parseInt(prompt("Enter the value for n (1 to 9):"));
let l = parseInt(prompt("Enter the value for l (1 to 9):"));

// Извикваме функцията за генериране на пароли
generatePasswords(2, 4);