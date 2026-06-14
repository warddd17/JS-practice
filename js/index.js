

const home = document.querySelector("#btn-home");
const about = document.querySelector("#btn-about");
const projects = document.querySelector("#btn-projects");
const ascci = document.querySelector("#btn-ascci");
const sections = document.querySelector(".tab-container");
const accept = document.querySelector("#btn-accept");
const decline = document.querySelector("#btn-decline");
const cookieMessage = document.querySelector('.cookie-message');
const textArea = document.querySelector("#text-area");
const counter = document.querySelector("#count");
home.addEventListener("click",() =>changeTab(1));
about.addEventListener("click",() => changeTab(2));
projects.addEventListener("click",() => changeTab(3));
ascci.addEventListener("click",() => changeTab(4));
function changeTab (index){
    var u = 0;
    for( const section of sections.children){
        if(u > 0 && u != index){
            section.setAttribute('class','hide-section');
        }else if (u == index){
            section.removeAttribute('class','hide-section');
        }
        u++;
    }
}
document.querySelector('#date-picker').value = '';
const picker = datepicker('#date-picker',{
    dateSelected: null,
    formatter: (input,date,instance) => {
        const value = date.toLocaleDateString();
        input.value = value;
        console.log(value);
    }
});

//Cookies
accept.addEventListener("click", () => {
    cookieMessage.setAttribute('class','hide-section');
});
decline.addEventListener("click", () => {
    cookieMessage.setAttribute('class','hide-section');
});

document.querySelector("#text-area").value = '';
textArea.addEventListener("input", update);
function update( event ){
    var input = event.target.value;
    var value = input.length;
    const limit = 300; 
    counter.textContent = `${value}/${limit}`;
}