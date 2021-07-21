const nicknames = " Bubby - Abhinav |  Shanky - Shashank | Bunny - Aniruddha | Kal Ka Roop - Abhiroop | Donzie - Seema | Sauce Mein Tikka - Swastika | Baba - Sanjay | Kaka - Akash | Vibes - Vibhu | Hydra - Haider | Adi Man - Aditya Manerikar | Aja - Ajay | Amrahs Tihcra - Archit | Guppy - Yuvan | Japanese Daaku - Shiv | SS - Swastik | AdiMiss - Aditya Mishra | BLEEP - Anahita | BLEEP - Annanya | BLEEP - Arnav | Thakre - Arya | Avani - Avaneesh | BLEEP - Avani | BLEEP - Ramya | Dukhi - Khushi | Mandy - Mandisha | NASA - Naisha | hpf1re - Nilaksh | BLEEP - Parthiv | BLEEP - Renee | BLEEP - Rohit | BLEEP - Saanvi | BLEEP - Sanika | BLEEP - Sanyukta | BLEEP - Shourya " ; 
const nicknamesArr = nicknames.split('|') ;
const main = document.getElementById('main') ; 
document.addEventListener('DOMContentLoaded' , () => {
   nicknamesArr.forEach((name , index) => main.innerHTML += `<h2>${index +1})${name}</h2>`)
})  ; 

