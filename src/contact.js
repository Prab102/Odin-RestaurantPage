import placeholder from "./pizzamenuimgs/placeholder.jpg"

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

    //card for contacts
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

    const owner = new Image();
    owner.src = placeholder;
    owner.style.height = "200px";
    owner.style.width = "250px";
        
    img1cont.appendChild(owner);



    //jobtitle
    const job = document.createElement("p");
    job.setAttribute("class","jobtitle");
    job.innerHTML ="Restaurant Owner";
    contact1.appendChild(job);

    //name
    const name = document.createElement("p");
    name.setAttribute("class","name");
    name.innerHTML = "John Hammond";
    job.appendChild(name);

    //phone# 
    const phone = document.createElement("p");
    phone.setAttribute("class","phone");
    phone.innerHTML =" Phone: 123-123-1234";

    name.appendChild(phone);

    // const img1name = document.createElement("h1");
    // img1name.id = "img1name";
    // img1name.innerHTML= "TITLEM 1";
    // img1text.appendChild(img1name);
    


    return content;
}

export default menu();