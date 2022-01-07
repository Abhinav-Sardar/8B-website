const nicknames =
  " Bubby - Abhinav |  Shanky - Shashank | Bunny - Aniruddha | Kal Ka Roop - Abhiroop | Donzie - Seema | Sauce Mein Tikka - Swastika | Baba - Sanjay | Kaka - Akash | Vibes - Vibhu | Hydra - Haider | Adi Man - Aditya Manerikar | Aja - Ajay | Amrahs Tihcra - Archit | Guppy - Yuvan | Mr X - Shiv | SS - Swastik | AdiMiss - Aditya Mishra | Thakre - Arya | Avani - Avaneesh | Dukhi - Khushi | Mandy - Mandisha | NASHA - Naisha | hpf1re - Nilaksh";
const nicknamesArr = nicknames.split("|");
const main = document.getElementById("main");
document.addEventListener("DOMContentLoaded", () => {
  nicknamesArr.forEach(
    (name, index) => (main.innerHTML += `<h2>${index + 1})${name}</h2>`)
  );
});
