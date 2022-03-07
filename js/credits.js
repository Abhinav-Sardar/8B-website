const data = [
  {
    name: "Abhinav Sardar",
    hobbies: "Guitar , Coding , Coding and alot of Coding",
    Birthday: "19th March",
    Tagline: "Mard Ko Dard Kabhi Nahi Hota ( Hota Hai 😢 )",
    Role: "Main Coder",
    img: "../profile/Abhinav.jpg",
  },
  {
    name: "Shashank Chandak",
    hobbies: "Guitar, Customizing Keebs, Coding",
    Birthday: "21st August",
    Tagline: "Work Hard, Party Hard!",
    Role: "Coder",
    img: "../images/Shashank.jpeg",
  },
  {
    name: "Aniruddha Iyer",
    hobbies: "Art, Coding, and mainly TP :P",
    Birthday: "3rd October",
    Tagline: "You may have won the day, but the year is mine :D",
    Role: "Main idea",
    img: "../images/AnniRudh.jpg",
  },
  {
    name: "Abhiroop Sarkar",
    hobbies: "Guitar, Sketching & Gaming!!!!",
    Birthday: "11th March",
    Tagline: "Dimitri Rascalov",
    Role: "Designer",
    img: "../images/Abhiroop.jpg",
  },
];
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const persons = document.querySelectorAll(".person");
backdrop.addEventListener("click", () => {
  modal.style.height = "0";
  modal.style.width = "0";
  backdrop.style.display = "none";
  modal.innerHTML = "";
});
persons.forEach((p, index) => {
  p.addEventListener("click", async () => {
    modal.style.height = "70vh";
    modal.style.width = "60vw";
    backdrop.style.display = "block";
    const user = data[index];
    modal.innerHTML = `


   
    <div class="wrapper">
    <img src='${user.img}'/>
    <span>Name: ${user.name}</span>
    <span>Role: ${user.Role}</span>
    <span>Hobbies: ${user.hobbies}</span>
    <span>Tagline: ${user.Tagline}</span>
    <span>Birthday: ${user.Birthday}</span>

    </div>
    
    `;
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.height = "0";
    modal.style.width = "0";
    backdrop.style.display = "none";
    modal.innerHTML = "";
  }
});
