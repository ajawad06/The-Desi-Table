import menuImg from "./Menu.jpg";
import biryaniImg from "./biryani.jpg";
import nihariImg from "./nihari.jpeg";
import kebabImg from "./kebab.jpeg";
import karahiImg from "./karahi.jpeg";
import haleemImg from "./haleem.jpeg";
import pulaoImg from "./pulao.jpeg";
import botiImg from "./boti.jpeg";
import handiImg from "./handi.jpeg";
import rotiImg from "./roti.jpeg";
import naanImg from "./naan.jpeg";

const menuPage=function(){
    const body=document.querySelector("body");
    body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${menuImg})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    const content=document.querySelector("#content");

    content.innerHTML="";
    const menu=document.createElement("div");
    menu.id="menu";

    const heading=document.createElement("h2");
    heading.textContent="Our Menu";
    heading.style.textAlign="center";
    heading.style.fontWeight="800";
    heading.style.fontSize="48px";
    heading.style.color=" #ff6f61";
    
    const itemGrid=document.createElement("div");
    itemGrid.classList.add("item-grid");

    const items=[
        {name:"Biryani" , price: "Rs. 300" , img:biryaniImg},
        {name:"Nihari" , price:"Rs. 250", img:nihariImg},
        {name:"Karahi" , price:"Rs. 280", img:karahiImg},
        {name:"Haleem" , price:"Rs. 210", img:haleemImg},
        {name:"Seekh Kebab" , price:"Rs. 150", img:kebabImg},
        {name:"Pulao" , price:"Rs. 280", img:pulaoImg},
        {name:"Malai Boti" , price:"Rs. 160", img:botiImg},
        {name:"Handi" , price:"Rs. 250", img:handiImg},
        {name:"Naan" , price:"Rs. 30", img:naanImg},
        {name:"Roti" , price:"Rs. 20", img:rotiImg},
    ]
    
    items.forEach((item)=>{
        const itemDiv=document.createElement("div");
        itemDiv.classList.add("item");

        const img=document.createElement("img");
        img.src=item.img;
        img.alt=item.name;

        const name=document.createElement("h3");
        name.textContent=item.name;

        const price=document.createElement("p");
        price.textContent=item.price;
        
        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(price);

        itemGrid.appendChild(itemDiv);
    })

    const comment=document.createElement("div");
    comment.classList.add("comment");
    comment.textContent="🖤!نیک اور عزیز، دونوں کے لیے ہے یہ طعامِ خاص";
    comment.style.fontWeight="700";

    menu.appendChild(heading);
    menu.appendChild(itemGrid);
    menu.appendChild(comment);
    content.appendChild(menu);
}

export {menuPage};