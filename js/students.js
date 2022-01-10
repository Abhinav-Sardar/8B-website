const students = [
  {
    name: "Aditya Manerikar",
    tagline: "I am Adi Manav of the class",
    bday: "14th February, 2008",
    rollNo: 3,
    hobbies: "",
  },
  {
    name: "Annanya Khurrana",
    tagline: "Be whomever you want to be, until you like it, it's correct.",
    bday: "20th Jan, 2008",
    rollNo: 9,
    hobbies: "Dancing, playing with my dog, art, cooking, etc..",
  },
  {
    name: "Akash Kumar",
    tagline: "I am awesome",
    bday: "31st July, 2008",
    rollNo: 6,
    hobbies: "Playing downstairs.",
  },
  {
    name: "Anahita Kedawat",
    tagline:
      "Everyday may not be good, but there is something good in everyday.",
    bday: "29th March, 2009",
    rollNo: 7,
    hobbies: "Listening to Music/Songs, Clicking Photos and Reading.",
  },
  {
    name: "Mandisa Pathak",
    tagline: "",
    bday: "30th August, 2008",
    rollNo: 18,
    hobbies: "Reading books, Playing piano, playing badminton, watching anime.",
  },
  {
    name: "Haider Tinwala",
    tagline: "Why am i so pro",
    bday: "13th March, 2008",
    rollNo: 16,
    hobbies: "Football, swimming, drawing and also gaming.",
  },
  {
    name: "Avaneesh Tiwari",
    tagline: "Hehehe Boi.",
    bday: "14th August, 2008",
    rollNo: 13,
    hobbies: "Playing PC Games, Watching Anime, Drawing.",
  },

  {
    name: "Arya Thakare",
    tagline: "",
    bday: "24th Jan, 2009",
    rollNo: 12,
    hobbies: "Gaming, badminton, basketball.",
  },
  {
    name: "Shiv Gupte",
    tagline: "Kayde me rahoge to fayede me rahoge.",
    bday: "23rd Feb, 2009",
    rollNo: 30,
    hobbies: "Chess, Cricket, Badminton, Athletics",
  },
  {
    name: "Seema Nayak",
    tagline: "You dont have to be crazy to be my friends, I'll train you.",
    bday: "18th June, 2008",
    rollNo: 27,
    hobbies: "Reading books.",
  },
  {
    name: "Yuvan Gupta",
    tagline: "Current master of pav bhaji.",
    bday: "19th June, 2008",
    rollNo: 36,
    hobbies: "Painting.",
  },
  {
    name: "Saatwik Mokashi",
    tagline: "Newbie of the class",
    bday: "3rd April,2008",
    rollNo: 39,
    hobbies: "",
  },
  {
    name: "B. Ramya Prakruthi",
    tagline: "Shine, Dream, Smile ",
    bday: "23rd April, 2009",
    rollNo: 15,
    hobbies: "Singing & Reading.",
  },
  {
    name: "Vaishnav",
    hobbies: "Editing",
    bday: "7th april",
    rollNo: 34,
    tagline: "Putting my grades up for adoption cuz I cant raise them",
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
  param.forEach((student, index) => {
    const { name, tagline, rollNo, hobbies, bday } = student;

    html += `
 <section class="student">
 <span>Name: ${name}</span>
 <span>Tagline: ${tagline}</span>
 <span>Roll No: ${rollNo}</span>
 <span>Hobbies: ${hobbies}</span>
 <span>Birthday 🎂: ${bday}</span>
 </section>
    
    `;
  });
  console.log(html);
  studentsContainer.innerHTML = html || "<span>No results found</span>";
}
renderStudents(students);

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
  // const { name, tagline, rollNo, hobbies, bday } = student;
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
