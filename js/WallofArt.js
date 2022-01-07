const images = [];

function displayData(data) {
  const image__container = document.getElementById("images");
  let string = "";
  data.forEach((element) => {
    string += `
        <div class = "image">
        <br>
        <h2>${element.name}</h2>
        <br>
        <img src = ${element.url}>
        </div>
        `;
  });
  image__container.innerHTML = string;
}
