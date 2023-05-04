const getColor=() =>{
    const RandomNumber = Math.floor(Math.random()*16777215);
    const randomCode ="#"+RandomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;

    // to copy the hex code in clipboard
    // navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener("click",getColor);


// initial call
getColor();