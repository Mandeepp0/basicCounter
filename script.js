const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const valuebtn = document.querySelector('.value');
console.log(valuebtn.innerHTML);

let value = 0;
const valueChanger = (value) => {
    valuebtn.innerHTML = `<h1>${value}</h1>`;
}

const coolAnimation = (num) => {
    while(num>=0){
        console.log(num);
        num--;
    }
};

coolAnimation(20);


decrease.addEventListener('click', () => valueChanger(--value))
increase.addEventListener('click', ()=>valueChanger(++value))
reset.addEventListener('click', () => (value = 0,valueChanger(0)))
