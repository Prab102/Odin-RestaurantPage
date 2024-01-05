
function menu(){
   
    
    const content = document.createElement('div');
    content.id = "contact"; //change from content to home
    content.setAttribute("class","tabcontent")

    const title = document.createElement("h1");
    title.id="title";
    title.innerHTML =" Contact Us ";

    content.appendChild(title);  //apend to content instead of document.body


    //phone number of owner and email of owner with stock images 

    //phone number of manager and email witch stock images

    //help request contact information 
    const contact = document.createElement("div");
    contact.id = "contact";
    contact.innerHTML ="Choose Your Pizza Style";

    content.appendChild(contact);

    //card pizza style
    const  block= document.createElement("div");
    block.id = "contactblock";
    // menublock.innerHTML ="testing";

    content.appendChild(block);


    //item 1 in card new york style

    const contact1 = document.createElement("div");
    contact1.id = "contactitem";
    block.appendChild(contact1);

    const img1cont = document.createElement("div");
    img1cont.id ="img1";
    contact1.appendChild(img1cont);

    // const img1text = document.createElement("h2");
    // img1text.id = "img1text";
    // img1text.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    // menuitem1.appendChild(img1text);

    // const img1name = document.createElement("h1");
    // img1name.id = "img1name";
    // img1name.innerHTML= "TITLEM 1";
    // img1text.appendChild(img1name);
    


    return content;
}

export default menu();