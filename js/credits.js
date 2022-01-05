const data = [
  {
    name: "Abhinav Sardar",
    hobbies: "Guitar , Coding , Coding and alot of Coding",
    Birthday: "19th March",
    Tagline: "I like my girls like I like my meat. *Tasty*",
    Role: "Main Coder",
    img: "../images/Nerd.jpg",
  },
  {
    name: "Shashank Chandak",
    hobbies: "Guitar , Coding , a LOT of coding!",
    Birthday: "21st August",
    Tagline: "Where there is a will, there is a way!",
    Role: "Coder",
    img: "../images/Shashank.jpeg",
  },
  {
    name: "Anirudha",
    hobbies: "Art, Coding, and mainly TP :P",
    Birthday: "3rd October",
    Tagline: "You may have won the day, but the year is mine :D",
    Role: "Main idea",
  },
  {
    name: "Abhiroop Sarkar",
    hobbies: "Guitar, Sketching & Gaming!!!!",
    Birthday: "11th March",
    Tagline: "Bishhhhh",
    Role: "Designer",
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
    modal.style.height = "50vh";
    modal.style.width = "50vw";
    backdrop.style.display = "block";
    const user = data[index];
    modal.innerHTML = `


   
    <div class="wrapper">
    <span>Name: ${user.name}</span>
    <span>Role: ${user.Role}</span>
    <span>Hobbies: ${user.hobbies}</span>
    <span>Tagline: ${user.Tagline}</span>
    <span>Birthday: ${user.Birthday}</span>

    </div>
    
    `;
  });
}); // yo
// yoooooo sunnooo pls look at the presentation
// gois look at
