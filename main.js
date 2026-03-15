/* console.log("ciao ciaoz"); */
const toggleElement =document.getElementById('toggle');
const lightbulb=document.getElementById("bulb");

console.log(toggleElement);
console.log(lightbulb);

/* lightbulb.src="./assets/img/yellow_lamp.png"; */
/* console.log(lightbulb.src); */





//gestiamo l'evento click su toggleElement
toggleElement.addEventListener("click",
    function () {
        //controllo il testo del bottone (toggleElement)
        //se il bottone al momento del click ha il testo "accendi"
       if (toggleElement.innerHTML.toLowerCase()==="accendi"){
            //metto immagine lampadina accesa
            lightbulb.src="./assets/img/yellow_lamp.png";
            //cambio il testo del bottone in "spegni"
            toggleElement.innerHTML="spegni";
        //se il bottone al momento del click ha il testo "spegni"  
        } else if (toggleElement.innerHTML.toLowerCase()==="spegni"){
            //metto immagine lampadina spenta
            lightbulb.src="./assets/img/white_lamp.png";
            //cambio testo del bottone in "accendi"
            toggleElement.innerHTML="accendi";
        }      
        
    }
); 