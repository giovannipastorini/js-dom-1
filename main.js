//TRACCIA:
//1. Preparation (select the dom nodes)
//-select the img with id...
//-select the button with id...

//2. Elaboration:
//-attach an event listener to the button 
//-read the image node and update the src value




const toggleElement =document.getElementById('toggle');
const lightbulb=document.getElementById("bulb");

console.log(toggleElement);
console.log(lightbulb);

//la proprietà classlist restituisce un array
const classiToggle= toggleElement.classList;
console.log(classiToggle);
console.log(classiToggle[0]);
classiToggle.add("text-primary-emphasis");

console.log(classiToggle);
classiToggle.remove("text-primary-emphasis");
console.log(classiToggle);

classiToggle.replace("btn-secondary","btn-primary");
console.log(classiToggle);

//La proprietà className
console.log(toggleElement.className);

toggleElement.className="btn btn-secondary";
console.log(toggleElement.className);
toggleElement.className +=" text-primary-emphasis";
console.log(toggleElement.className);

//gestiamo l'evento click su toggleElement
toggleElement.addEventListener("click",
    function () {
        //controllo il testo del bottone (toggleElement)
        //se il bottone al momento del click ha il testo "accendi"
       if (toggleElement.innerHTML.toLowerCase()==="accendi" && lightbulb.src.includes("white_lamp.png")){    
            //metto immagine lampadina accesa
            lightbulb.src="./assets/img/yellow_lamp.png";

            //string.includes(searchvalue);
            console.log(lightbulb.src.includes("white_lamp.png"));
            console.log(lightbulb.src.includes("yellow_lamp.png"));

            //cambio il testo del bottone in "spegni"
            toggleElement.innerHTML="spegni";
        //se il bottone al momento del click ha il testo "spegni"  
        } else if (toggleElement.innerHTML.toLowerCase()==="spegni" && lightbulb.src.includes("yellow_lamp.png")){
            //metto immagine lampadina spenta
            lightbulb.src="./assets/img/white_lamp.png";

            console.log(lightbulb.src.includes("white_lamp.png"));
            console.log(lightbulb.src.includes("yellow_lamp.png"));

            //cambio testo del bottone in "accendi"
            toggleElement.innerHTML="accendi";
        }      
        
    }
); 