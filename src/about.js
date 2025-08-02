import aboutImg from "./about.jpg";
const aboutPage=function(){
    const body=document.querySelector("body");
    body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${aboutImg})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";

    const content=document.querySelector("#content");
    content.innerHTML="";

    const about = document.createElement("div");
    about.id="about";
    const heading1=document.createElement("h2");
    heading1.textContent="About Our Restaurant";
    heading1.style.textAlign="center";
    heading1.style.fontWeight="800";
    heading1.style.fontSize="48px";
    heading1.style.color=" #ff6f61";
    
    const para1=document.createElement("p");
    para1.textContent="Welcome to The Desi Table - where tradition meets flavor. We specialize in serving authentic Pakistani dishes made with love and heritage."+
                    "Founded with a passion for sharing culture through cuisine, our mission is to bring the warmth of Pakistani hospitality to your table."
    para1.style.fontSize="20px";

    const comment=document.createElement("div");
    comment.classList.add("comment");
    comment.textContent="🤍!ذائقہ جو یاد رہ جائے، مہمان نوازی جو دل جیت لے";
    comment.style.fontWeight="700";

    const heading2=document.createElement("h2");
    heading2.textContent="Contact Us";
    heading2.style.textAlign="center";
    heading2.style.fontWeight="800";
    heading2.style.fontSize="48px";
    heading2.style.color=" #ff6f61";

    const contact=document.createElement("div");
    const email=document.createElement("p");
    email.innerHTML=`<span style="color:#ff6f61; font-size:20px; font-weight:700">Email:</span> abdullah@gmail.com` ;
     
    const github=document.createElement("p");
    github.innerHTML=`<span style="color:#ff6f61; font-size:20px; font-weight:700">Github:</span> ajawad06` ;
    
    contact.appendChild(email);
    contact.appendChild(github);
    contact.style.margin="auto";
    

    about.appendChild(heading1);
    about.appendChild(para1);
    about.appendChild(comment);
    about.appendChild(heading2);
    about.appendChild(contact);
    content.appendChild(about);
}

export {aboutPage};