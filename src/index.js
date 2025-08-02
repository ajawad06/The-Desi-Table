import './style.css';
import {homePage} from "./home";
import {menuPage} from "./menu";
import {aboutPage} from "./about";

console.log("helo");

homePage();
//Buttons
const homeBtn=document.querySelector("#homeBtn");
homeBtn.addEventListener("click",()=>homePage())
const menuBtn=document.querySelector("#menuBtn");
menuBtn.addEventListener("click",()=>menuPage())
const aboutBtn=document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click",()=>aboutPage());