//Toggle Email Clipboard
document.getElementById('email').addEventListener('click', function() {
    var emailText = this.innerText;
    var tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Email copied to clipboard: ' + emailText);
});

// Toggle Menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbarToggle');
    const dropdownMenu = document.querySelector('.navbarMenu');
  
    toggleButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });
  });

  window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

//projCar
const items = document.querySelectorAll('.projCar .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let active = 2;

function updateItemStyles(item, index, stt) {
    item.style.transform = `translateX(${index < active ? -120 * stt : 120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${index < active ? 1 : -1}deg)`;
    item.style.zIndex = -stt;
    item.style.filter = 'blur(5px)';
    item.style.opacity = stt > 2 ? 0 : 0.6;
}

function loadShow() {
    items.forEach((item, index) => {
        const stt = Math.abs(index - active);
        if (index === active) {
            item.style.transform = `none`;
            item.style.zIndex = 1;
            item.style.filter = 'none';
            item.style.opacity = 1;
        } else {
            updateItemStyles(item, index, stt);
        }
    });
}

next.addEventListener('click', () => {
    if (active < items.length - 1) active++;
    loadShow();
});

prev.addEventListener('click', () => {
    if (active > 0) active--;
    loadShow();
});

loadShow();

let scrollContainer = document.querySelector(".eCont");
let prevEdu = document.getElementById("prevEdu");
let nextEdu = document.getElementById("nextEdu");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDeafult();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextEdu.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1000;
});

prevEdu.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1000;
});


