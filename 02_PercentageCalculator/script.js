let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let num = document.querySelector(".number").value;  // get the value
    part = Number(num); // convert from string to number
    let total = document.querySelector(".total").value;  // get the value
    total = Number(total); // convert from string to number
    let percentage = (part / total) * 100; // calculate percentage
    
    let ans = document.querySelector(".ans");
    ans.innerText = percentage + "%"; // use num, not number
});
