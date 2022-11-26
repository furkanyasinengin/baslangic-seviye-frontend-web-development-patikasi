let testDom = document.querySelector('#test');
testDom.addEventListener('click', testClick);

function testClick() {
    this.style.color = 'red'
}