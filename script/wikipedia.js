document.getElementById('skin-client-pref-skin-theme-value-night').checked = true;

document.getElementsByTagName('body')[0].style.setProperty('--background-color-base', '#292c2f');
document.getElementsByTagName('body')[0].style.background = '#292c2f';
document.getElementsByTagName('body')[0].style.color = '#F1F3F5';
document.getElementsByTagName('body')[0].style.setProperty('--background-color-neutral-subtle', '#292c2f');
document.getElementsByTagName('body')[0].style.setProperty('--background-color-interactive-subtle', '#292c2f');
document.getElementsByTagName('body')[0].style.setProperty('--color-progressive', '#f17ea1');
document.getElementsByTagName('body')[0].style.setProperty('--color-emphasized', '#F1F3F5');


// Hacker News - Not Finished Yet 
document.getElementById('hnmain').style.background = "#292c2f";

const links = document.getElementsByTagName('a');

for(let link of links) {
    link.style.color = "#F1F3F5";
}