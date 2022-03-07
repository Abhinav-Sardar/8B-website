// create an array which has a few parting messages to a friend
const messages = [
  "Damn!, It has been so many years, We have been together",
  "Made so many memories together",
  "Survived a pandemic!",
  "Unfortunately we have reached the dead end",
  "Classes are most probably going to shuffle and we will be seperated. <span>😭😢</span>",
  "So before we part ways, I would like to thank all the teachers and the students of 8b",
  "For making this journey memorable!",
  "<span>💘</span>",
  "Love you all!",
  "- By Abhinav , Abhiroop, Aniruddha, Shashank",
  "Enjoy The Website!",
];
const content = `

<ul class="nav">
			<li class="left nav-items">8B Website</li>
			<!-- <li class="left">8B Website</li> -->
		<div class="links">
			<a href="./html/students.html" target="" class="nav-item">Students</a>

			<a href = ./html/WallOfArt.html target="" class="nav-item">Wall of art</a>
			<a href = ./html/nicknames.html target="" class="nav-item">Nicknames</a>
			<a href="./html/credits.html" target="" class="nav-item">Credits </a>
		</div>
		</ul> 
		<main class="main">
			<img src="./images/LOGO2.png" alt="" />
			<main class="content">	
					<h3 class="content">Hello and welcome to the official website of 8B. This is a website made by 4 students that shows the main things of our class. Here's what you'll see:-
					</h3 >
<h3 class="content">
	1) The students of our class (Students Page).

</h3>
<h3 class="content">
	2) The students who made this website (Credits Page).

</h3>
<h3 class="content">
	3) All the (so called) cool nicknames of our class (Nicknames Page).

</h3>
<h3 class="content">
	4) The awesome Art Wall of 8B (Wall of Art Page).

</h3>
			</main> 
		</main>

`;
window.onload = () => {
  if (sessionStorage.getItem("seen")) {
    document.body.innerHTML = content;
  } else {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
    messages.map((m, i) => {
      const h3 = document.createElement("h3");
      setTimeout(() => {
        h3.innerHTML = m;
        h3.style.animation = "1s appear ease-in-out";
        wrapper.appendChild(h3);
        if (i === messages.length - 1) {
          setTimeout(() => {
            wrapper.remove();
            document.body.innerHTML = content;
            sessionStorage.setItem("seen", true);
          }, 2000);
        }
      }, (i + 1) * 3000);
    });
  }
};
