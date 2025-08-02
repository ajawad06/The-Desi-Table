import restaurantImg from "./restaurant.jpg";
const homePage=function(){
    const body=document.querySelector("body");
    body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${restaurantImg})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    const content=document.querySelector("#content");

    content.innerHTML="";
    const home=document.createElement("div");
    home.id="home";
    
    const heading=document.createElement("h1");
    heading.textContent="Welcome to The Desi Table";
    heading.style.color=" #ff6f61";
    heading.style.fontSize="48px";
    heading.style.fontWeight="800";

    const para1=document.createElement("p"); 
    para1.textContent="Experience the authentic flavors of Pakistan with our traditional dishes like Biryani, Karahi, Nihari."
    para1.style.fontSize="25px";

    const para2=document.createElement("p"); 
    para2.textContent="ہمارے روایتی کھانوں جیسے بریانی، کڑاہی، نہاری کے ساتھ پاکستان کے اصلی ذائقوں کا لطف اٹھائیں۔"
    para2.style.fontSize="25px";
    
    home.appendChild(heading);
    home.appendChild(para1);
    home.appendChild(para2);
    content.appendChild(home);
}

export {homePage};