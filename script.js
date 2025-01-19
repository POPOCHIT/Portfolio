// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  if (anchor) { // Null check to ensure anchor exists
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const styleLabelMenu = (selector, styles) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      Object.assign(element.style, styles); // Apply styles dynamically
    });
  };

  // Style for About Me section
  styleLabelMenu("#about .label-menu", {
    backgroundColor: "#103959",
    height: "50px",
    lineHeight: "50px",
    color: "#eadcca",
    textAlign: "center",
    margin: "0px",
  });

  // Style for Skills section
  styleLabelMenu("#skills .label-menu", {
    backgroundColor: "#103959",
    height: "50px",
    lineHeight: "50px",
    color: "#eadcca",
    textAlign: "center",
    margin: "0px",
  });

  // Style for experience section
  styleLabelMenu("#experience .label-menu", {
    backgroundColor: "#103959",
    height: "50px",
    lineHeight: "50px",
    color: "#eadcca",
    textAlign: "center",
    margin: "0px",
  });

  // Style for contact section
  styleLabelMenu("#contact .label-menu", {
    backgroundColor: "#103959",
    height: "50px",
    lineHeight: "50px",
    color: "#eadcca",
    textAlign: "center",
    margin: "0px",
  });

});

// document.addEventListener("DOMContentLoaded", () => {
//   const labelMenu = document.querySelector(".label-menu");
//   if (labelMenu) {
//     labelMenu.style.backgroundColor = "#103959";
//     labelMenu.style.height = "50px";
//     labelMenu.style.lineHeight = "50px";
//     labelMenu.style.color = "#eadcca";
//     labelMenu.style.textAlign = "center";
//     labelMenu.style.margin = "0px";
//   }
// });

// JavaScript for toggle functionality
function toggleEducation() {
    var educationSection = document.getElementById("education-details");
    var button = document.getElementById("toggle-education");

    if (educationSection.style.display === "none") {
        educationSection.style.display = "block";
        button.textContent = "学歴を隠す"; // Change button text to "Hide Education"
    } else {
        educationSection.style.display = "none";
        button.textContent = "学歴を表示"; // Change button text to "Show Education"
    }
}


const textElement = document.getElementById("typewriter-text");
const text = textElement ? textElement.dataset.text : "PO PO CHIT";
const typingSpeed = 100; // Typing speed in milliseconds
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

typeWriter();

// const themeSwitcher = document.getElementById("theme-switcher");
// themeSwitcher.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");
//   document.body.classList.toggle("light-theme");
// });

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// Disconnect the observer when no longer needed
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    observer.disconnect();
  }
});

// const buttons = document.querySelectorAll("[data-filter]");
// const projects = document.querySelectorAll(".project");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const filter = button.getAttribute("data-filter");
//     projects.forEach((project) => {
//       if (filter === "all" || project.classList.contains(filter)) {
//         project.classList.add("visible");
//         project.classList.remove("hidden");
//       } else {
//         project.classList.add("hidden");
//         project.classList.remove("visible");
//       }
//     });
//   });
// });


function showDetails(id) {
  var detailSection = document.getElementById(id);

  // Toggle visibility of the job details
  if (detailSection.style.display === "none" || detailSection.style.display === "") {
    detailSection.style.display = "block";  // Show the details
  } else {
    detailSection.style.display = "none";   // Hide the details
  }
}