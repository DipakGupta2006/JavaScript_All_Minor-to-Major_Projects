let btn = document.querySelector(".btn")
let copybtn = document.querySelector(".copybtn")
function intToRoman(num) {
    // Input validation
    if (!Number.isInteger(num) || num <= 0 || num > 3999) {
        return "Please enter an integer between 1 and 3999";
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let roman = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            roman += symbols[i];
            num -= values[i];
        }
    }

    return roman;
}

btn.addEventListener("click", ()=>{

    let num = document.querySelector(".num").value;

    num = Number(num);

    if (!Number.isInteger(num) || num <= 0 || num > 3999) {
        alert("Please enter a valid integer between 1 and 3999");
        return;
    }

    let ans = document.querySelector(".innerbox");
    let roman = intToRoman(num);
    ans.innerText = "Roman Number: " + intToRoman(num);
})


copybtn.addEventListener("click", ()=>{
    let ansText = document.querySelector(".innerbox").innerText;
    if(ansText === "" || ansText.includes("Invalid")){
        alert("Nothing to copy!");
        return;
    }

    // Extract only the Roman numeral, remove "Roman number: "
    let roman = ansText.replace("Roman number: ", "");

    navigator.clipboard.writeText(roman)
        .then(()=>{
            alert("Roman numeral " + roman + " copied to clipboard!");
        })
        .catch(err=>{
            alert("Failed to copy to clipboard");
            console.error(err);
        });
});
