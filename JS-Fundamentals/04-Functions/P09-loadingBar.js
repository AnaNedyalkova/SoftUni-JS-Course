function loadingBar(num) {

    let bar = `${num}% [`
    let percentCount = num / 10;
    let dotCount = 10 - percentCount;

    bar += '%'.repeat(percentCount);
    bar += '.'.repeat(dotCount);
    bar += ']';

    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(bar);
        console.log('Still loading...');
    }
}
loadingBar(100);