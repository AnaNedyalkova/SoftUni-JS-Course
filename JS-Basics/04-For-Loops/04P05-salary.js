// TODO:
// 1. Get known arguments
// 2. For loop
// 2.1. Handle Website
// 2.2. Handle salary lost
// 3. Print salary left

function salary(input) {

    let tabsOpen = input[0];
    let salary = input[1];

    let n = input.length - 1;

    for (i = 2; i <= n; i++) {
        let currentTab = input[i];

        switch (currentTab) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }

        if (salary <= 0) {
            console.log('You have lost your salary.');
            return;
        }
    }
    console.log(salary);
}
salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);

