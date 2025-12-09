// Button elements
const listBtn = document.getElementById("listViewBtn");
const gridBtn = document.getElementById("gridViewBtn");

// The sightings container
const sightings = document.getElementById("sightings");

// Switch to list view
listBtn.addEventListener("click", () => {
  sightings.classList.remove("grid-view");
  sightings.classList.add("list-view");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

// Switch to grid view
gridBtn.addEventListener("click", () => {
  sightings.classList.remove("list-view");
  sightings.classList.add("grid-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});
