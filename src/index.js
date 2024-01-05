import './style.css';
// import background from './raw-garganelli-pasta-with-halved-tomatoes-basil-corner-black-textured-backdrop.jpg';
// import pizza from './pizza.png';
import  component from'./home.js';
import menupage from './menu.js';
import contactpage from './contact.js';


// document.body.appendChild(component);

    //navbar is the only thing that doesnt need to change and
    const navbar = document.createElement('div');

    navbar.id= "navbar";
    document.body.appendChild(navbar);

    const home = document.createElement('a');
    home.id="homebutton"; //added
    home.setAttribute("class","tablinks"); //added
    home.addEventListener("click",()=>openTab("home"));
    // home.setAttribute("href",)
    home.innerHTML = "Home";
    navbar.appendChild(home);

    
    const menu = document.createElement('a');
    menu.id="menubutton"; //added
    menu.setAttribute("class","tablinks"); //added
    menu.addEventListener("click", ()=>openTab("menu") )
    // home.setAttribute("href",)
    menu.innerHTML = "Menu";
    navbar.appendChild(menu);


    const contact = document.createElement('a');
    contact.id = "contactbutton"
    contact.setAttribute("class","tablinks"); //added
    contact.addEventListener("click", ()=>openTab("contact") )
    // home.setAttribute("href",)
    contact.innerHTML = "Contact";
    navbar.appendChild(contact);



//appends all of content into body

function openTab(tabName){ //remove tabname
    console.log("makes it here");
    //gets page specific element sets display to none for all gets rif of everything previously displayed
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
        console.log(tabcontent[i].id +" this is tabcontent display variable");
    }
    //gets tab links elements and sets class name to nothing from active
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    //sets display
    //  console.log(evt.id);
     console.log(tabName + "this is tabname");
     //this is where the id of the selected button gets displayed
     const test = document.getElementById(tabName).style.display = "flex";
      console.log(test);
    //  event.currentTarget.className += " active";

}
//testing
function printl(){
    console.log("LLLLLLL");
}
 document.body.appendChild(menupage); 
 document.body.appendChild(component);
 document.body.appendChild(contactpage);
// document.body.appendChild(menu); //needs to be hidden

//  const homebutton = document.getElementById("homebutton");
//  homebutton.addEventListener("click",() => { openTab("home") });
 

//  const menubutton = document.getElementById("menubutton");
//  menubutton.addEventListener("click",() => openTab("menu"));
//doesnt work with menu.js only home.js
//  menubutton.addEventListener("click",printl);


// document.body.appendChild(component);