// import './style.css';
//  import background from './raw-garganelli-pasta-with-halved-tomatoes-basil-corner-black-textured-backdrop.jpg';
 import pizza from './pizza.png';
// console.log("hello lifeforms")

function component(){

    const content = document.createElement('div');
    content.id = "home"; //change from content to home
    content.setAttribute("class","tabcontent")
    // content.innerHTML = "hello i exist";

    const navbar = document.createElement('div');

    // navbar.id= "navbar";
    // content.appendChild(navbar);

    // const home = document.createElement('a');
    // home.id="homebutton"; //added
    // home.setAttribute("class","tablinks"); //added
    // // home.setAttribute("href",)
    // home.innerHTML = "Home";
    // navbar.appendChild(home);

    
    // const menu = document.createElement('a');
    // menu.id="menubutton"; //added
    // menu.setAttribute("class","tablinks"); //added
    // // home.setAttribute("href",)
    // menu.innerHTML = "Menu";
    // navbar.appendChild(menu);


    // const contact = document.createElement('a');
    // // home.setAttribute("href",)
    // contact.innerHTML = "Contact";
    // navbar.appendChild(contact);



    const title = document.createElement("h1");
    title.id="title";
    title.innerHTML ="Welcome to Pisano's Pizza"

    content.appendChild(title);  //apend to content instead of document.body


    const historycontainer = document.createElement("div");
    historycontainer.id= "history";

    content.appendChild(historycontainer); //apend to content 



        
    const imagecont = document.createElement("div");

    const img = new Image();
    img.src = pizza;
    img.style.height = "400px";
        
    imagecont.appendChild(img);



    const history = document.createElement("p");

    history.innerHTML= "Pisano's Pizza has the best pizza in town. Recipe straight from Italy, this New York style pizza is made with a robust sauce cooked specially with a family secret ingredient."
    history.id = "historytext";

    historycontainer.appendChild(history);
    historycontainer.appendChild(imagecont);



    const orderbutton = document.createElement("h3");

    orderbutton.id = "order";


    orderbutton.innerHTML = "Order Now";

    history.appendChild(orderbutton);


    const location = document.createElement("div");

    location.id = "location";

    location.innerHTML= " 1234 Pizza Drive, Sauceville, Cheeseton &nbsp;&nbsp;| &nbsp;&nbsp;   (123)111-2222";

    content.appendChild(location); //document append change to content append


    return content;
}

export default component();
// import function to index.js using multitab ES6 module stuff
// document.body.appendChild(component());

// const title = document.createElement("h1");
// title.id="title";
// title.innerHTML ="Welcome to Pisano's Pizza"
// document.body.appendChild(title);


// const historycontainer = document.createElement("div");
// historycontainer.id= "history";

// document.body.appendChild(historycontainer);



    
// const imagecont = document.createElement("div");

// const img = new Image();
// img.src = pizza;
// img.style.height = "400px";
    
// imagecont.appendChild(img);



// const history = document.createElement("p");

// history.innerHTML= "Pisano's Pizza has the best pizza in town. Recipe straight from Italy this New York style pizza is made with a robust sauce cooked specially with a family secret ingredient."
// history.id = "historytext";

// historycontainer.appendChild(history);
// historycontainer.appendChild(imagecont);



// const orderbutton = document.createElement("h3");

// orderbutton.id = "order";


// orderbutton.innerHTML = "Order Now";

// history.appendChild(orderbutton);


// const location = document.createElement("div");

// location.id = "location";

// location.innerHTML= " 1234 Pizza Drive, Sauceville, Cheeseton &nbsp;&nbsp;| &nbsp;&nbsp;   (123)111-2222";

// document.body.appendChild(location);

// historycontainer.appendChild(heading());