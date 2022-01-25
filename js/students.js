function sortStudents(param) {
  let ss = [...param];
  let s = [];
  param.forEach((p) => {
    const randomIndex = Math.floor(Math.random() * ss.length);
    s.push(ss[randomIndex]);
    ss.splice(randomIndex, 1);
  });
  return s;
}
const students = [
  {
    name: "Aditya Manerikar",
    tagline: "I am Adi Manav of the class",
    bday: "14th February, 2008",
    rollNo: 3,
    hobbies: "Playing Cricket, Cycling, Drawing, Playing Badminton",
    url: "AdiMan.jpg",
    // 5/10
    // 5/10
  },
  {
    name: "Annanya Khurrana",
    tagline: "Be whomever you want to be, until you like it, it's correct.",
    bday: "20th January, 2008",
    rollNo: 9,
    hobbies: "Dancing, Playing with my Dog, Art, Cooking",

    url: "Annanya.jpg",
    //  4/10
    // 3/10
  },

  {
    name: "Anahita Kedawat",
    tagline:
      "Everyday may not be good, but there is something good in everyday.",
    bday: "29th March, 2009",
    rollNo: 7,
    hobbies: "Listening to Music/Songs, Photography and Reading",
    url: "Anahita.jpg",
    // 6.5/10
    // 6.9 / 10
  },
  {
    name: "Mandisa Pathak",
    tagline: "",
    bday: "30th August, 2008",
    rollNo: 18,
    hobbies: "Reading Books, Playing Piano, Playing Badminton, Watching Anime",
    url: "Mandisa.jpg",
    // 10/10
    // 6.9
  },
  {
    name: "Haider Tinwala",
    tagline: "Why am i so pro",
    bday: "13th March, 2008",
    rollNo: 16,
    hobbies: "Playing Football, Swimming, Drawing and Gaming",
    url: "Haider.jpg",
    // 1/10
    // 1 / 10
  },
  {
    name: "Avaneesh Tiwari",
    tagline: "Hehehe Boi.",
    bday: "14th August, 2008",
    rollNo: 13,
    hobbies: "Playing PC Games, Watching Anime, Drawing",
    // 6/10
    // 8/10
  },
  {
    name: "Sanika Maheshwari",
    tagline: "I wanted to add a Harry Potter tagline but I needed to be sirius",
    bday: "16th August, 2008",
    rollNo: 24,
    hobbies: "Playing keyboard, Reading books, listening to music",
    url: "Sanika.jpg",
    // 6/10
    // 8/10
  },

  {
    name: "Arya Thakare",
    tagline: "",
    bday: "24th January, 2009",
    rollNo: 12,
    hobbies: "Gaming, Playing Badminton, Playing Basketball",
    // 6.9/10
    // 6.9
  },
  {
    name: "Shiv Gupte",
    tagline: "Kayde me rahoge to fayede me rahoge.",
    bday: "23rd February, 2009",
    rollNo: 30,
    url: "Shiv.jpg",
    hobbies:
      "Playing Chess, Playing Cricket, Playing Badminton, PLaying Athletics",
    // 10/10
    // 10/10
  },
  {
    name: "Seema Nayak",
    tagline: "You dont have to be crazy to be my friends, I'll train you.",
    bday: "18th June, 2008",
    rollNo: 27,
    hobbies: "Reading Books",
    url: "Seema.jpg",
    // 6/10
    // 8/10
  },
  {
    name: "Yuvan Gupta",
    tagline: "Current master of pav bhaji.",
    bday: "19th June, 2008",
    rollNo: 36,
    hobbies: "Painting",
    // 8.5/10
    // god level 9.5/10
  },
  {
    name: "Saatwik Mokashi",
    tagline: "Newbie of the class",
    bday: "3rd April, 2008",
    rollNo: 39,
    hobbies: "",
    // -69/10
    // -100 / 10
  },
  {
    name: "B. Ramya Prakruthi",
    tagline: "Shine, Dream, Smile ",
    bday: "23rd April, 2009",
    rollNo: 15,
    hobbies: "Singing and Reading.",
    // 5/10
    // 4/10
  },
  {
    name: "Vaishnav",
    hobbies: "Editting",
    bday: "7th April, 2008",
    rollNo: 34,
    tagline: "Putting my grades up for adoption cuz I cant raise them",
    // 10/10
    // 6.9 and 10/10 and 42.0
  },
  {
    name: "Aditya Mishra",
    hobbies: "Playing Guitar, Playing Badminton, Playing Genshin",
    bday: "31st January, 2008",
    rollNo: 4,
    tagline: "Busy playing Genshin",

    // 6/10
    // 5/10
  },
  {
    name: "Swastik Shetty",
    hobbies:
      "Watching Anime, Playing Cricket, Drawing, Watching Netflix, Watching Videos ",
    bday: "15th May, 2008",
    rollNo: 31,
    tagline: "Everything bores me except anime ",

    // 3/10
    // 2/10
  },
  {
    name: "Swastika Rath",
    hobbies: "Listening to Music, Reading Books",
    bday: "4th January, 2008",
    rollNo: 32,
    tagline: "I Broke Ranvijay🥲",
    // 69/10
    // 6.9
  },
  {
    name: "Akash Kumar ",
    hobbies: "Playing Guitar",
    bday: "31 July, 2008",
    tagline: "Cash hai toh ash hai ",
    rollNo: 6,
    //  69/10
    // 6/10
  },
  {
    name: "Vibhu Pandey",
    hobbies: "Make Music",
    bday: "31st January, 2008",
    tagline: "the office season 7 episode 19 minute 14.45",
    rollNo: 35,
    url: "Vibhu.jpg",
    // 1/10
    // 0.1/10
  },
  {
    name: "Aniruddha Iyer",
    hobbies: "Painting, Playing Sports",
    bday: "3rd Ocotober 2008 ",
    tagline: "Idk put whatever u want",
    rollNo: 8,
    url: "AnniRudh.jpg",
    // 690000/10
    // 10/10
  },
  {
    name: "Abhinav Sardar",
    hobbies: "Playing Guitar and Coding",
    bday: "19th September, 2008",
    tagline: "Jaane meri jaaneman bachpan ka pyaar mera bhool nahi jaana re.",
    rollNo: 1,
    url: "Abhinav.jpg",
    // 8/10
    // 6969696969
  },
  {
    name: "Naisha Nair",
    hobbies: "🎶Music🎶",
    bday: "8th January, 2008",
    tagline: "I'll forgive but I won't forget",
    rollNo: 19,
    url: "Naisha.jpg",
    // 5/10

    // creepy 4/10
  },
  {
    name: "Abhiroop Sarkar",
    hobbies: "Playing Guitar, Playing Tennis, Reading Books, Gaming, Timepass",
    bday: "11th March, 2008",
    tagline: "themusic_everywhere42 (insta) (Shameless selfpromo)",
    rollNo: 2,
    // -0.69/10
    // -100 / 10
  },
  {
    name: "Saanvi Shukla",
    hobbies:
      "Singing, Dancing, Drawing, Painting, Organizing things if that considers 😂",
    bday: "30th October, 2008",
    tagline: "The deeper the night, the brighter the starlight.",
    rollNo: 23,
    // 5/10
    // 3/10
  },
  {
    name: "Shashank Chandak",
    hobbies: "Guitar, Customizing Keebs, Coding",
    bday: "21st August",
    tagline: "Work Hard, Party Hard!",
    rollNo: 28,
    url: "Shashank.jpeg",
    // 2/10 cringe asf
    // dude cringe 2/10
  },
  {
    name: "Ajay Krishna",
    hobbies: "Gaming(not gr8)",
    bday: "9th February",
    tagline: `A good death is it's own reward (watch man of steel it's a OP tagine idk why I like it)`,
    rollNo: 5,
    url: "Ajay.jpg",
    // 5/1`0

    // bhag yaha se 1/10
  },
];
const studentsContainer = document.querySelector(".students");

const input = document.querySelector("input");
const select = document.querySelector("select");
input.oninput = () => {
  onInput(input.value);
};
let currentField = "All";
function renderStudents(param) {
  let html = "";
  sortStudents(param).forEach((student, index) => {
    const { name, tagline, rollNo, hobbies, bday, url } = student;

    html += `
 <section class="student">

 <img src='${
   url
     ? `../profile/${url}`
     : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YwBkVu5AEcpjBoyZvb7owgHaHa%26pid%3DApi&f=1"
 }'/>
 <span>Name: ${name}</span>
 <span>Tagline: <i>${tagline || "None"}</i></span>
 <span>Roll No: ${rollNo}</span>
 <span>Hobbies: ${hobbies}</span>
 <span>Birthday 🎂: ${bday}</span>
 </section> 
    
    `;
  });
  studentsContainer.innerHTML = html || "<span>No results found</span>";
}

document.addEventListener("DOMContentLoaded", () => {
  renderStudents(students);
});
function checkify(first, second) {
  return String(first)
    .toLocaleLowerCase()
    .trim()
    .includes(String(second).toLocaleLowerCase().trim());
}
function onInput(char) {
  if (currentField === "All") {
    const filteredStudents = students.filter(
      (student) =>
        checkify(student.name, char) ||
        checkify(student.tagline, char) ||
        checkify(student.bday, char) ||
        checkify(student.hobbies, char)
    );
    renderStudents(filteredStudents);
  } else {
    const filteredStudents = students.filter((student) =>
      checkify(student[currentField], char)
    );
    renderStudents(filteredStudents);
  }
}

select.addEventListener("change", (e) => {
  const { value } = e.target;
  if (value === "Tagline" || value === "Name" || value === "Hobbies") {
    currentField = String(value).toLocaleLowerCase();
  } else if (value === "Roll No.") {
    currentField = "rollNo";
  } else if (value === "Birthday") {
    currentField = "bday";
  } else {
    currentField = "All";
  }
  onInput(input.value);
});
