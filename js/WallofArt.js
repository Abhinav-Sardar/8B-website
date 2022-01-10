const artwork = [
  // all HAIDER artworks (5)
  {
    author:'Haider' , 
    fileName:'Haider-1.jpeg' , 
  } ,
  {
    author:'Haider' , 
    fileName:'Haider-2.jpeg' , 
  } ,
  {
    author:'Haider' , 
    fileName:'Haider-3.jpeg' , 
  } ,
  {
    author:'Haider' , 
    fileName:'Haider-4.jpeg' , 
  } ,
  {
    author:'Haider' , 
    fileName:'Haider-5.jpeg' , 
  } ,

  // all AKASH artworks (1)
  {
    author:'Akash' , 
    fileName:'Akash-1.jpeg' , 
  } ,

  // all ANAHITA artworks (1)
  {
    author:'Anahita' , 
    fileName:'Anahita-1.jpeg' , 
  } ,

  // all ADITYA MANERIKAR artworks (9)
  {
    author:'AdiMan' , 
    fileName:'AdiMan-1.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-2.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-3.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-4.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-5.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-6.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-7.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-8.jpeg' , 
  } ,
  {
    author:'AdiMan' , 
    fileName:'AdiMan-9.jpeg' , 
  } ,

  // all ANNANYA artworks (6)
  {
    author:'Annanya' , 
    fileName:'Annanya-1.jpeg' , 
  } ,
  {
    author:'Annanya' , 
    fileName:'Annanya-2.jpeg' , 
  } ,
  {
    author:'Annanya' , 
    fileName:'Annanya-3.jpeg' , 
  } ,
  {
    author:'Annanya' , 
    fileName:'Annanya-4.jpeg' , 
  } ,
  {
    author:'Annanya' , 
    fileName:'Annanya-5.jpeg' , 
  } ,
  {
    author:'Annanya' , 
    fileName:'Annanya-6.jpeg' , 
  } ,
  
  
] ; 
function loadImages () {
  const images = document.querySelector('.imgs')
  artwork.forEach(art => {
    const img = document.createElement('img') ; 
    img.src = `../artwork/${art.fileName}` ; 
    const parentDiv = document.createElement('div')
    parentDiv.appendChild(img) ; 
    const span = document.createElement('span') ;; 
    span.innerText = art.author ; 
    parentDiv.appendChild(span) ; 

    images.appendChild(parentDiv) ; 

  })
}


this.addEventListener('load' , loadImages) ;

