let inputBox = document.querySelector(".input-box"),
    textarea = inputBox.querySelector("textarea"),
    signalNum = inputBox.querySelector(".signal-num");

    textarea.addEventListener("keyup", ()=> {
        let va1Length = textarea.value.length; //stored text area value length into va1length
       
        signalNum.innerText = va1Length; // converted signalNum innertext by va1length
       
        (va1Length > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
        (va1Length > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
        
    });