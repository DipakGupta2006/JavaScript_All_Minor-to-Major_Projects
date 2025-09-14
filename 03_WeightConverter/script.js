let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let input = document.querySelector('.inputs').value;
    input = Number(input);

    if (input === 0 || isNaN(input)) {
        alert('Please enter a valid number');
        return;
    }

    let one = document.querySelector('.one');   // kg
    let two = document.querySelector('.two');   // mg
    let three = document.querySelector('.three'); // pounds

    one.innerText ="Kilogram: " + (input / 1000).toFixed(4) + " kg";
    two.innerText ="Milligram: " + (input * 1000).toFixed(0) + " mg";
    three.innerText ="Pound: " + (input / 453.592).toFixed(4) + " lb";
});
