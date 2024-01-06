import piza from "./pizza.png";
import placeholder from "./pizzamenuimgs/placeholder.jpg"
function menu(){
   
    
    const content = document.createElement('div');
    content.id = "menu"; //change from content to home
    content.setAttribute("class","tabcontent")

    const title = document.createElement("h1");
    title.id="title";
    title.innerHTML ="Welcome to Our Homemade Menu"

    content.appendChild(title);  //apend to content instead of document.body

    //title for card
    const pizzamenu = document.createElement("div");
    pizzamenu.id = "pizzamenu";
    pizzamenu.innerHTML ="Choose Your Pizza Style";

    content.appendChild(pizzamenu);

    //card pizza style
    const menublock = document.createElement("div");
    menublock.id = "menublock";
    // menublock.innerHTML ="testing";

    content.appendChild(menublock);


    //item 1 in card new york style

    const menuitem1 = document.createElement("div");
    menuitem1.id = "menuitem";
    menublock.appendChild(menuitem1);

    const img1cont = document.createElement("div");
    img1cont.id ="img1";
    menuitem1.appendChild(img1cont);

    const img1 = new Image();
    img1.src = placeholder;
    img1.style.height = "200px";
    img1.style.width = "250px";
        
    img1cont.appendChild(img1);

    const img1text = document.createElement("h3");
    img1text.id = "img1text";
    img1text.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    menuitem1.appendChild(img1text);

    const img1name = document.createElement("h2");
    img1name.id = "img1name";
    img1name.innerHTML= "New York Style";
    img1text.appendChild(img1name);

    //menu item2

    const menuitem2 = document.createElement("div");
    menuitem2.id = "menuitem";
    menublock.appendChild(menuitem2);

    const img2cont = document.createElement("div");
    img2cont.id ="img1";
    menuitem2.appendChild(img2cont);

    const img2 = new Image();
    img2.src = placeholder;
    img2.style.height = "200px";
    img2.style.width = "250px";
        
    img2cont.appendChild(img2);

    const img2text = document.createElement("h3");
    img2text.id = "img1text";
    img2text.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    menuitem2.appendChild(img2text);

    const img2name = document.createElement("h2");
    img2name.id = "img1name";
    img2name.innerHTML= "Hand Tossed";
    img2text.appendChild(img2name);


    //menu item3
    
    const menuitem3 = document.createElement("div");
    menuitem3.id = "menuitem";
    menublock.appendChild(menuitem3);

    const img3cont = document.createElement("div");
    img3cont.id ="img1";
    menuitem3.appendChild(img3cont);

    const img3 = new Image();
    img3.src = placeholder;
    img3.style.height = "200px";
    img3.style.width = "250px";
        
    img3cont.appendChild(img3);

    const img3text = document.createElement("h3");
    img3text.id = "img1text";
    img3text.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    menuitem3.appendChild(img3text);

    const img3name = document.createElement("h2");
    img3name.id = "img1name";
    img3name.innerHTML= "Chicago Style";
    img3text.appendChild(img3name);

    



    //topping menu
    const toppingmenu = document.createElement("div");
    toppingmenu.id = "toppingmenu";
    toppingmenu.innerHTML ="Choose Your Toppings";

    content.appendChild(toppingmenu);

    const menublock2 = document.createElement("div");
    menublock2.id = "menublock2";
    // menublock.innerHTML ="testing";

    content.appendChild(menublock2);

    const toppingitem1 = document.createElement("div");
    toppingitem1.id = "toppingitem";
    menublock2.appendChild(toppingitem1);

    const toppingimg1 = document.createElement("div");
    toppingimg1.id ="img1";
    toppingitem1.appendChild(toppingimg1);

    const img4 = new Image();
    img4.src = placeholder;
    img4.style.height = "200px";
    img4.style.width = "250px";
        
    toppingimg1.appendChild(img4);

    const toppingtext1 = document.createElement("h3");
    toppingtext1.id = "img1text";
    toppingtext1.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    toppingitem1.appendChild(toppingtext1);

    const toppingname1 = document.createElement("h2");
    toppingname1.id = "img1name";
    toppingname1.innerHTML= "Sausage";
    toppingtext1.appendChild(toppingname1);

    //topping2
    const toppingitem2 = document.createElement("div");
    toppingitem2.id = "toppingitem";
    menublock2.appendChild(toppingitem2);

    const toppingimg2 = document.createElement("div");
    toppingimg2.id ="img1";
    toppingitem2.appendChild(toppingimg2);

    const img5 = new Image();
    img5.src = placeholder;
    img5.style.height = "200px";
    img5.style.width = "250px";
        
    toppingimg2.appendChild(img5);

    const toppingtext2 = document.createElement("h3");
    toppingtext2.id = "img1text";
    toppingtext2.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    toppingitem2.appendChild(toppingtext2);

    const toppingname2 = document.createElement("h2");
    toppingname2.id = "img1name";
    toppingname2.innerHTML= "Pepperoni";
    toppingtext2.appendChild(toppingname2);
    //topping3
    const toppingitem3 = document.createElement("div");
    toppingitem3.id = "toppingitem";
    menublock2.appendChild(toppingitem3);

    const toppingimg3 = document.createElement("div");
    toppingimg3.id ="img1";
    toppingitem3.appendChild(toppingimg3);

    const img6 = new Image();
    img6.src = placeholder;
    img6.style.height = "200px";
    img6.style.width = "250px";
        
    toppingimg3.appendChild(img6);

    const toppingtext3 = document.createElement("h3");
    toppingtext3.id = "img1text";
    toppingtext3.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    toppingitem3.appendChild(toppingtext3);

    const toppingname3 = document.createElement("h2");
    toppingname3.id = "img1name";
    toppingname3.innerHTML= "Mushrooms";
    toppingtext3.appendChild(toppingname3);




    //sides menu
    const sidemenu = document.createElement("div");
    sidemenu.id = "sidemenu";
    sidemenu.innerHTML ="Add a Side";

    content.appendChild(sidemenu);

    const menublock3 = document.createElement("div");
    menublock3.id = "menublock3";
    // menublock.innerHTML ="testing";

    content.appendChild(menublock3);


    //side1
    const side1 = document.createElement("div");
    side1.id = "sideitem";
    menublock3.appendChild(side1);

    const sideimg1 = document.createElement("div");
    sideimg1.id ="img1";
    side1.appendChild(sideimg1);

    const img7 = new Image();
    img7.src = placeholder;
    img7.style.height = "200px";
    img7.style.width = "250px";
        
    sideimg1.appendChild(img7);

    const sidetext1 = document.createElement("h3");
    sidetext1.id = "img1text";
    sidetext1.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    side1.appendChild(sidetext1);

    const sidename1 = document.createElement("h2");
    sidename1.id = "img1name";
    sidename1.innerHTML= "Mozzerella Sticks";
    sidetext1.appendChild(sidename1);

    //side2
    const side2 = document.createElement("div");
    side2.id = "sideitem";
    menublock3.appendChild(side2);

    const sideimg2 = document.createElement("div");
    sideimg2.id ="img1";
    side2.appendChild(sideimg2);

    const img8 = new Image();
    img8.src = placeholder;
    img8.style.height = "200px";
    img8.style.width = "250px";
        
    sideimg2.appendChild(img8);

    const sidetext2 = document.createElement("h3");
    sidetext2.id = "img1text";
    sidetext2.innerHTML ="This new York Style Pizza has a classic taste to the origin of great pizza";
    side2.appendChild(sidetext2);

    const sidename2 = document.createElement("h2");
    sidename2.id = "img1name";
    sidename2.innerHTML= "Garlic Notts";
    sidetext2.appendChild(sidename2);

    
    


    return content;
}

export default menu();