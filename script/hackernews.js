// Hacker News 
document.getElementsByTagName('body')[0].style.background = '#292c2f';
document.getElementById('hnmain').style.background = "#292c2f";

const links = document.getElementsByTagName('a');
const hnuser = document.getElementsByClassName("hnuser");
const btn_hide = document.getElementsByClassName("clicky hider");

/* 
document.getElementsByClassName('titleline').onclick = function(event) {
    /* event.preventDefault();  // Prevent the default link behavior
    document.getElementsByClassName('titleline').style.color = '#00a0ff'; // Change the text color
}; */

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


const comentarytext = document.getElementsByClassName("commtext c00");
const ArrComentartText = Array.from(comentarytext);

for(let com of ArrComentartText){
    com.style.color = "#b6b8ba";
}