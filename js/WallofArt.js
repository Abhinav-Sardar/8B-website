async function getData() {
    let response = await fetch('https://nameless-spire-07917.herokuapp.com/data') ; 
    let data = await response.json() ; 
    console.log(data) ; 
    displayData(data) ; 
} ; 
getData()  

function displayData(data){
    const image__container = document.getElementById('images') ;
    let string = '' ; 
    data.forEach(element => {
        string+= `
        <div class = "image">
        <br>
        <h2>${element.name}</h2>
        <br>
        <img src = ${element.url}>
        </div>
        `
    });
    image__container.innerHTML = string ; 

}