// Hacker News 
document.getElementsByTagName('body')[0].style.background = '#292c2f';
document.getElementById('hnmain').style.background = "#292c2f";

const links = document.getElementsByTagName('a');
const hnuser = document.getElementsByClassName("hnuser");
const btn_hide = document.getElementsByClassName("clicky hider")


// Making it an array
const hnuserArray = Array.from(hnuser);
const BtnHideArray = Array.from(btn_hide);


for(let link of links) {
    if(hnuserArray.includes(link)){
        link.style.color = "#f17ea1";
    }else if(BtnHideArray.includes(link)){
        link.style.color = "#7ddef5"
    }
    else{
        link.style.color = "#F1F3F5";
    }
}
