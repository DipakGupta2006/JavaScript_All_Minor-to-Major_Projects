let password = document.getElementById('password');
let btn = document.getElementById('btn');
let updateBtn = document.getElementById('clearBtn');
let copyBtn = document.getElementById('copyBtn');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";


btn.addEventListener('click', () => {
    let length = document.getElementById('input').value;

   if (length === "" || isNaN(length)) {
        alert("Please enter a valid number!");
    }
 
    else{
     let num = '';
    for (let i = 0; i < length; i++) {
    let digit = charset[Math.floor(Math.random() * charset.length)];

    num += digit;
    console.log(num);
      let out = document.getElementById('output');
      out.innerText = num;
              out.style.color = "black";
        out.style.textAlign = "center";
        out.style.padding = "10px";
    }
  }

});

updateBtn.addEventListener('click', () => {
    let length = document.getElementById('input').value;

   if (length === "" || isNaN(length)) {
        alert("Please enter a valid number!");
    }
    else{
        let length = parseInt(document.getElementById('input').value);
     let num = '';
    for (let i = 0; i < length; i++) {
    let digit = charset[Math.floor(Math.random() * charset.length)];
    num += digit;
    let out = document.getElementById('output');
      out.innerText = num;
        out.style.color = "black";
        out.style.textAlign = "center";
        out.style.padding = "10px";      
    }
    }
});

copyBtn.addEventListener('click', () => {
    if (document.getElementById('output').innerText === ""){ 
        alert("Please generate a password first!");
    }
    else{
    let out = document.getElementById('output').innerText;
    navigator.clipboard.writeText(out);
    alert("Password copied to clipboard!");
    }
});

