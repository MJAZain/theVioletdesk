document.addEventListener('DOMContentLoaded', () => {

const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbarMenu"); 
let lastScrollTop = 0;

function closeMenuOnScrollUp() {
    if (window.innerWidth <= 1024 && navbarMenu.classList.contains("show")) {
        navbarMenu.classList.remove("show");
    }
}

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
        closeMenuOnScrollUp();
    }

    lastScrollTop = scrollTop;
});

    

  const toggleButton = document.querySelector('.navbarToggle');
  const dropdownMenu = document.querySelector('.navbarMenu');

  toggleButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
  });

  dropdownMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
          dropdownMenu.classList.remove('show');
      }
  });

    const taskTitle = document.getElementById("taskTitle");
    const priceDesc = document.getElementById("priceDesc");
    const priceContainer = document.getElementById("priceContainer");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    const categories = [
        {
            title: "Virtual Office Admin Assistant",
            description:"Effortless Organization, Seamless Support – Your Virtual Office Admin Assistant for a Stress-Free Workflow!",
            price: [
                { 
                    headline: "Essential Support", 
                    list: ["Email Management", "Calendar Management", "Data Entry", "File Organization", "Task Management"],
                    tag: "400 USD/month",
                    time: "On-Demand VA (5–15 hours/week)" 
                },
                { 
                    headline: "Growing Business Support", 
                    list: ["Everything in 'Essential Support', PLUS:", "Project Tracking & Coordination", "Exspense Tracking & Invoicing", "Customer Support"],
                    tag: "600 USD/month",
                    time: "Full-Time VA (30–40 hours/week)"
                },
                { 
                    headline: "Full-service Admin Support", 
                    list: ["Everything in 'Growing Business Support', PLUS:", "SOP Creation & Workflow Optimization", "Hands-on Client Communication","HR & Recruitment Support", "Priority Acess & Flexibilty"],
                    tag: "1000 USD/month",
                    time: "Full-Time VA (30–40 hours/week)" 
                },
            ],
        },
        {
            title: "Website Development & Maintenance    ",
            description:"Vortual Office is great",
            price: [
                { 
                    headline: "Basic Landing Page", 
                    caption: "Caption",
                    list: ["Task Management", "Calendar Management"],
                    tag: "8 IDR/month",
                    time: "" 
                },
            ],
        },
        
    ];
 
    let currentIndex = 0;

    function updateTaskView() {
        taskTitle.innerHTML = `<u>${categories[currentIndex].title}</u>`;
        priceDesc.innerHTML = `<p>${categories[currentIndex].description}</p>`;

        priceContainer.innerHTML = "";
        
        categories[currentIndex].price.forEach(price => {
            const priceElement = document.createElement("div");
            priceElement.classList.add("price");
            const listItems = price.list.map(item => `<li>${item}</li>`).join("");
    
            priceElement.innerHTML = `
                <h3>${price.headline}</h3>
                <div class="list">
                    <span>Services Includes:</span>
                    <ul>${listItems}</ul>
                    <span>${price.time}</span>
                </div>
                <h4>${price.tag}</h4>
            `;
    
            priceContainer.appendChild(priceElement);
        });
    }

    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
        updateTaskView();
    });

    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % categories.length;
        updateTaskView();
    });

    updateTaskView();

   
});


