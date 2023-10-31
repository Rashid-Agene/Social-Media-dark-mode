const buttonDark = document.querySelector(".dark");
const image = document.getElementById("image");
const lightImage = "/asset/switch-button.svg";
const darkImage = "/asset/dark-switch.svg";
const darkModeTags = document.querySelectorAll(
  "body,header, .social, .card, .can"
);

/*buttonDark.addEventListener('click', () => {
    if (image.src.endsWith(darkImage)){
        image.src = lightImage;
    }
    else{
        image.src = darkImage;
    }

    darkModeTags.forEach(element =>{
        element.classList.toggle('light-mode');
    });
    
});
fetch('data.json');*/
// Check local storage for dark mode state and apply it if available
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  image.src = darkImage;
  darkModeTags.forEach((element) => {
    element.classList.add("light-mode");
  });
}

buttonDark.addEventListener("click", () => {
  if (image.src.endsWith(darkImage)) {
    image.src = lightImage;
    darkModeTags.forEach((element) => {
      element.classList.remove("light-mode");
    });
    // Store the state in local storage
    localStorage.setItem("darkMode", "false");
  } else {
    image.src = darkImage;
    darkModeTags.forEach((element) => {
      element.classList.add("light-mode");
    });
    // Store the state in local storage
    localStorage.setItem("darkMode", "true");
  }
});

//Adding the json data to javascript
/*const name1=document.querySelector('nath');
fetch('./data.json')
    .then(res=> res.json())
        .then(data=> {
            data.forEach(post=>{
                name1.insertAdjacentElement('','');
                });
        });*/
// Function to replace card content
function replaceCardContent(cardElement, data) {
  cardElement.querySelector(".name").textContent = data.name;
  cardElement.querySelector(".count").textContent = data.count;
  cardElement.querySelector(".follower").textContent = data.follower;
  cardElement.querySelector(".new").textContent = data.new;
  
}
function replaceCardContent1(cardElement,data){
  cardElement.querySelector(".likes").textContent = data.likes;
  cardElement.querySelector(".views").textContent = data.views;
}
// Fetch and replace card data for container 1
const can1 = document.querySelectorAll(".nath");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const followersCountData = data.followersCount;
    followersCountData.forEach((cardData, index) => {
      replaceCardContent(can1[index], cardData);
    });

    const can2 = document.querySelectorAll(".up .sqs");
    const upOverview = data.upOverview;
    upOverview.forEach((cardData, index) => {
      replaceCardContent1(can2[index], cardData);
    });
    const can3 = document.querySelectorAll(".low .sqs");
    const lowOverview = data.lowOverview;
    lowOverview.forEach((cardData, index) => {
      replaceCardContent1(can3[index], cardData);
    });
  });
