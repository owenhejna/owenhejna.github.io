document.addEventListener("DOMContentLoaded", () => {
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  const sightingsContainer = document.getElementById("sightings");

  // ---- Sort by date descending ----
  const sightings = Array.from(sightingsContainer.children);
  sightings.sort((a, b) => {
    return new Date(b.dataset.date) - new Date(a.dataset.date);
  });
  sightings.forEach(sighting => sightingsContainer.appendChild(sighting));

  // ---- Set initial view to grid ----
  sightingsContainer.classList.remove("list-view");
  sightingsContainer.classList.add("grid-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");

  // ---- Toggle buttons ----
  gridBtn.addEventListener("click", () => {
    sightingsContainer.classList.add("grid-view");
    sightingsContainer.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    sightingsContainer.classList.add("list-view");
    sightingsContainer.classList.remove("grid-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
});


// Select modal elements
const modal = document.getElementById("sightingModal");
const modalTitle = document.getElementById("modal-title");
const modalScientific = document.getElementById("modal-scientific-name");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Example data for each sighting
const sightingData = {
  "Ferruginous Pygmy Owl": {
    scientific: "Glaucidium brasilianum",
    description: "Found these diurnal cuties while on a morning walk in Tulum, Mexico. Quite the personality on these two!",
    img: "../photos/ferriginouspygmyowl.png"
  },
  "Snowy Owl": {
    scientific: "Bubo scandiacus",
    description: "Caught the famous Montrose snowy owls before work one day! Sorry for the horrendous photo!",
    img: "../photos/snowyowl.png"
  },
  "Greater Roadrunner": {
    scientific: "Geococcyx californianus",
    description: "This guy was running around a canyon in Tuscon, seemingly unbothered by human presence.",
    img: "../photos/roadrunner.png"
  },
  "Moose": {
    scientific: "Alces alces",
    description: "Spotted outside a gas station in Jackson, WY. Holy smokes are they huge...",
    img: "../photos/moose.png"
  },
  "Greater White-fronted Goose": {
    scientific: "Anser albifrons",
    description: "I saw this goose in the parking lot on the way into work at the Lincoln Park Zoo. Didn't have to try too hard for this guy!",
    img: "../photos/greaterwhitefrontedgoose.png"
  },
  "Common Potoo": {
    scientific: "Nyctibius griseus",
    description: "Saw this guy on the side of the road in rural Costa Rica. Hard to not mistake it for just another fence post.",
    img: "../photos/potoo.png"
  },
  "Lesson's Motmot": {
    scientific: "Momotus lessonii",
    description: "Found this magnificent bird in some jungle near where we were staying in Costa Rica. One of my favorite bird sightings of all time.",
    img: "../photos/motmot.png"
  },
    "American Bison": {
    scientific: "Bison bison",
    description: "Found this massive guy just outside the ranger station in Yellowstone National Park. Seems to be wearing some sort of collar?",
    img: "../photos/bison.png"
  },

  "Elk": {
    scientific: "Cervus canadensis",
    description: "Similar to the Bison, this guy was found right outside the visitor's center. Didn't seem to phased by people or cars.",
    img: "../photos/elk.png"
  },

  "American Bittern": {
    scientific: "Botaurus lentiginosus",
    description: "Finally got eyes on this secretive marsh bird while leading a volunteer group at Lincoln Park Zoo's Nature Boardwalk. Shout out to the photographer who showed it to us!",
    img: "../photos/bittern.png"
  },

  "Egyptian Goose": {
    scientific: "Alopochen aegyptiaca",
    description: "Saw these two in Vondelpark while on a European trip with some friends. Also I spotted these guys on my birthday!",
    img: "../photos/egyptiangeese.png"
  },

  "Long-eared Owl": {
    scientific: "Asio otus",
    description: "Found this owl roosting in some bramble at Montrose. Those ears really do a great job of breaking up the body shape. Sorry for the bad picture!",
    img: "../photos/longearedowl.png"
  },

  "Pileated Woodpecker": {
    scientific: "Dryocopus pileatus",
    description: "My first pileated sighting since I was a young boy. Saw this guy drumming away at an fallen tree. Lots of good bugs for sure!",
    img: "../photos/pilleated.png"
  }
};

// Open modal on card click
document.querySelectorAll(".sighting").forEach(card => {
  card.addEventListener("click", () => {
    const speciesName = card.querySelector(".info-text").innerText;
    const data = sightingData[speciesName];

    modalTitle.innerText = speciesName;
    modalScientific.innerHTML = `<em>${data.scientific}</em>`;
    modalImg.src = data.img;
    modalDesc.innerText = data.description;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Zoom image on click
modalImg.addEventListener("click", () => {
  modalImg.classList.toggle("zoomed");
});

