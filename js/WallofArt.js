const artwork = [
  // all HAIDER artworks (5)
  {
    author: "Haider",
    fileName: "Haider-1.jpeg",
  },
  {
    author: "Haider",
    fileName: "Haider-2.jpeg",
  },
  {
    author: "Haider",
    fileName: "Haider-3.jpeg",
  },
  {
    author: "Haider",
    fileName: "Haider-4.jpeg",
  },
  {
    author: "Haider",
    fileName: "Haider-5.jpeg",
  },

  // all AKASH artworks (1)
  {
    author: "Akash",
    fileName: "Akash-1.jpeg",
  },

  // all ANAHITA artworks (1)
  {
    author: "Anahita",
    fileName: "Anahita-1.jpeg",
  },

  // all ADITYA MANERIKAR artworks (9)
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-1.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-2.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-3.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-4.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-5.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-6.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-7.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-8.jpeg",
  },
  {
    author: "Aditya Manerikar",
    fileName: "AdiMan-9.jpeg",
  },

  // all ANNANYA artworks (6)
  {
    author: "Annanya",
    fileName: "Annanya-1.jpeg",
  },
  {
    author: "Annanya",
    fileName: "Annanya-2.jpeg",
  },
  {
    author: "Annanya",
    fileName: "Annanya-3.jpeg",
  },
  {
    author: "Annanya",
    fileName: "Annanya-4.jpeg",
  },
  {
    author: "Annanya",
    fileName: "Annanya-5.jpeg",
  },
  {
    author: "Annanya",
    fileName: "Annanya-6.jpeg",
  },
  // all SAANVI artworks
  {
    author: "Saanvi",
    fileName: "Saanvi-1.jpg",
  },
  {
    author: "Saanvi",
    fileName: "Saanvi-2.jpg",
  },
  {
    author: "Saanvi",
    fileName: "Saanvi-3.jpg",
  },
  // all ABHIROOP artworks
  {
    author: "Abhiroop",
    fileName: "Poop-1.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-2.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-3.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-4.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-5.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-6.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-7.jpg",
  },
  {
    author: "Abhiroop",
    fileName: "Poop-8.jpg",
  },
  // all SHASHANK artwork
  {
    author: "Shashank",
    fileName: "Shashank-1.jpg",
  },
  {
    author: "Abhinav",
    fileName: "Abhinav-1.jpg",
  },
  {
    author: "Abhinav",
    fileName: "Abhinav-2.jpg",
  },
];
function sort() {
  let newArray = [];

  const existing = [...artwork];
  for (let i = 0; i < artwork.length; i++) {
    const randomIndex = Math.floor(Math.random() * existing.length);

    const item = existing[randomIndex];
    newArray.push(item);
    existing.splice(randomIndex, 1);
  }
  return newArray;
}
const modal = document.querySelector("img.modal");
const backdrop = document.querySelector(".backdrop");
function loadImages() {
  const images = document.querySelector(".imgs");
  sort().forEach((art) => {
    const img = document.createElement("img");
    img.src = `../artwork/${art.fileName}`;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("img");
    parentDiv.appendChild(img);
    const span = document.createElement("span");
    span.innerText = art.author;
    parentDiv.appendChild(span);

    images.appendChild(parentDiv);
    const dimensions = {
      landscape: {
        height: "400px",
        width: "650px",
      },
      potrait: {
        height: "600px",
        width: "400px",
      },
    };
    parentDiv.onclick = () => {
      backdrop.style.display = "block";
      modal.src = `../artwork/${art.fileName}`;
      const { naturalHeight, naturalWidth } = modal;
      const orientation =
        naturalHeight > naturalWidth ? "potrait" : "landscape";
      modal.style.height = dimensions[orientation].height;
      modal.style.width = dimensions[orientation].width;

      backdrop.onclick = () => {
        backdrop.style.display = "none";
        modal.style.height = 0;
        modal.style.width = 0;
      };
    };
  });
}
this.addEventListener("load", loadImages);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (e.key === "Escape") {
      modal.style.height = "0";
      modal.style.width = "0";
      backdrop.style.display = "none";
      modal.innerHTML = "";
    }
  }
});
