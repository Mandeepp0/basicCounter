const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const valuebtn = document.querySelector('.value');
console.log(valuebtn.innerHTML);

let value = 0;
const valueChanger = (value) => {
    valuebtn.innerHTML = `<h1>${value}</h1>`;
    
}

const coolAnimation = () => {
    let i = value;

    loopIteration = () => {
        valueChanger(i);
        value =0;
        if(i<=0){
            const pos = setTimeout(loopIteration, 27);
            ++i;
            if(i >=0){
                valueChanger(0);
                clearTimeout(pos);
            }
        }
        else{
            const neg = setTimeout(loopIteration, 27);
            --i;
            if(i<=0){
                valueChanger(0);
                clearTimeout(neg);
            }
            // console.log("STill called", i);
        }
    }
    loopIteration();
};

// coolAnimation(20);


decrease.addEventListener('click', () => valueChanger(--value))
increase.addEventListener('click', ()=>valueChanger(++value))
// reset.addEventListener('click', () => (value = 0,valueChanger(0)))

reset.addEventListener('click', coolAnimation)
