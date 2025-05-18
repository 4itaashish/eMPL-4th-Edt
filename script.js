// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Season selector functionality
    const seasonSelectors = document.querySelectorAll('.season-selector select');
    seasonSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            const section = this.closest('section').id;
            alert(`${section.charAt(0).toUpperCase() + section.slice(1)} for ${this.value} season will be loaded`);
            // In a real app, you would fetch data for the selected season here
        });
    });
});



// Team data - replace with your actual data
const teams = [
    { name: "ASAL", logo: "./asal.jpeg", mp: 6, w: 2, d: 0, l: 4, gf: 14, ga: 18, gd: -4, pts: 6 },
    { name: "BIKASH", logo: "bikash.jpeg", mp: 4, w: 2, d: 0, l: 2, gf: 15, ga: 14, gd: 1, pts: 6 },
    { name: "PARU DAI", logo: "parudai.jpeg", mp: 5, w: 3, d: 0, l: 2, gf: 15, ga: 12, gd: 3, pts: 9 },
    { name: "AASHISH", logo: "aashish.jpeg", mp: 4, w: 2, d: 0, l: 2, gf: 13, ga: 9, gd: 4, pts: 6 },
    { name: "ANJAN", logo: "anjan.jpeg", mp: 5, w: 2, d: 0, l: 3, gf: 11, ga: 13, gd: -2, pts: 6 },
    { name: "DEV", logo: "dev.jpeg", mp: 5, w: 5, d: 0, l: 0, gf: 13, ga: 5, gd: 8, pts: 15 },
    { name: "ANISH", logo: "anish.jpeg", mp: 7, w: 2, d: 0, l: 5, gf: 15, ga: 26, gd: -11, pts: 6 },
    { name: "RAAJ", logo: "raaj.jpeg", mp: 4, w: 2, d: 0, l: 2, gf: 11, ga: 12, gd: -1, pts: 6 },
    { name: "BINAYA", logo: "binaya.jpeg", mp: 4, w: 2, d: 0, l: 2, gf: 11, ga: 9, gd: 2, pts: 6 }
];

// Function to sort and rank teams
function sortAndRankTeams() {
    // Sort teams by points, then GD, then GF
    return teams.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });
}

// Function to update the standings table
function updateStandingsTable() {
    const sortedTeams = sortAndRankTeams();
    const tbody = document.getElementById('standings-body');
    tbody.innerHTML = '';

    sortedTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        
        // Apply highlighting classes based on position
        if (index === 0) {
            row.classList.add('champion');
        } else if (index < 4) {
            row.classList.add('europe');
        } else if (index > 5) {
            row.classList.add('relegation');
        } else {
            row.classList.add('mid-table');
        }

        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-name"><img src="${team.logo}" alt="${team.name}" class="team-logo">${team.name}</td>
            <td>${team.mp}</td>
            <td>${team.w}</td>
            <td>${team.d}</td>
            <td>${team.l}</td>
            <td>${team.gf}</td>
            <td>${team.ga}</td>
            <td>${team.gd}</td>
            <td><strong>${team.pts}</strong></td>
        `;
        
        tbody.appendChild(row);
    });
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Season selector functionality
function setupSeasonSelector() {
    const seasonSelector = document.getElementById('points-season');
    if (seasonSelector) {
        seasonSelector.addEventListener('change', function() {
            alert(`Points table for ${this.value} season will be loaded`);
            // In a real app, you would fetch data for the selected season here
        });
    }
}

// Initialize the page
// Remove the duplicate DOMContentLoaded listener and keep only this one:
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupSeasonSelector();
    updateStandingsTable();
    
    // For demo purposes - remove the setTimeout or reduce the delay
    setTimeout(() => {
        // Update team stats (keep your existing updates)
        updateStandingsTable();
    }, 1000); // Reduced from 1000000000 to 1000ms
});



document.addEventListener("DOMContentLoaded", () => {
  // Create and animate leaves
  createLeaves()

  // Menu toggle for mobile
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav ul")

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show")
  })

  // Button animation
  const ctaButton = document.querySelector(".cta-button")
  ctaButton.addEventListener("click", function () {
    this.innerHTML = "Welcome Sajina!"
    this.style.width = "180px"

    // Create confetti effect
    createConfetti()
  })

  // Add viewport height fix for mobile browsers
  fixMobileViewportHeight()
  window.addEventListener("resize", fixMobileViewportHeight)
})

// Fix for mobile viewport height issues
function fixMobileViewportHeight() {
  // First we get the viewport height and multiply it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`)

  // Use the new custom property for elements that need full height
  document.querySelector(".container").style.minHeight = "calc(var(--vh, 1vh) * 100)"
}

function createLeaves() {
  // Existing createLeaves function...
  const leavesBg = document.querySelector(".leaves-bg")
  const leafColors = [
    "#d434fe", // Pink
    "#4ecdc4", // Teal
    "#7b2cbf", // Purple
    "#9d4edd", // Light purple
    "#c77dff", // Lavender
  ]

  const leafShapes = [
    "M0,0 C30,10 60,0 80,20 C100,40 90,70 100,100 C70,90 40,100 20,80 C0,60 10,30 0,0 Z", // Rounded leaf
    "M0,50 C0,25 25,0 50,0 C75,0 100,25 100,50 C100,75 75,100 50,100 C25,100 0,75 0,50 Z", // Circle
    "M10,0 L90,0 L100,50 L90,100 L10,100 L0,50 Z", // Hexagon
    "M0,0 L100,0 L80,100 L20,100 Z", // Trapezoid
    "M50,0 L100,50 L50,100 L0,50 Z", // Diamond
  ]

  // Adjust number of leaves based on screen size
  const isMobile = window.innerWidth <= 768
  const leafCount = isMobile ? 8 : 15

  // Create leaves with random properties
  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div")
    leaf.classList.add("leaf")

    // Random size between 30px and 120px (smaller on mobile)
    const size = isMobile ? Math.floor(Math.random() * 60) + 20 : Math.floor(Math.random() * 90) + 30

    // Random position
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)

    // Random color and shape
    const color = leafColors[Math.floor(Math.random() * leafColors.length)]
    const shape = leafShapes[Math.floor(Math.random() * leafShapes.length)]

    // Set leaf styles
    leaf.style.width = `${size}px`
    leaf.style.height = `${size}px`
    leaf.style.left = `${left}%`
    leaf.style.top = `${top}%`
    leaf.style.backgroundColor = color

    // Create SVG for custom shape
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.setAttribute("viewBox", "0 0 100 100")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", shape)
    path.setAttribute("fill", color)

    svg.appendChild(path)
    leaf.appendChild(svg)

    // Add to the background
    leavesBg.appendChild(leaf)

    // Animate with delay
    setTimeout(() => {
      leaf.style.opacity = "1"
      leaf.style.transform = "scale(1)"
      leaf.style.transition = "all 0.8s ease-out"

      // Add floating animation
      setTimeout(() => {
        leaf.style.animation = `floatLeaf ${Math.floor(Math.random() * 5) + 5}s ease-in-out infinite`
      }, 800)
    }, i * 150)
  }
}

function createConfetti() {
  // Existing createConfetti function...
}
