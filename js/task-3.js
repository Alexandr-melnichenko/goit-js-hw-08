const nameInput = document.querySelector("input#name-input");
let nameOutput = document.querySelector("span#name-output");

const handlInput = (event) => {
    let userName = event.target.value.trim();
    
    if (userName !== " " && userName !== ""){
        nameOutput.innerHTML = `${userName}`;
    }
    else {
        nameOutput.innerHTML = "Anonymus";
    }
}

nameInput.addEventListener("input", handlInput);
