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
    { name: "ASAL", logo: "./asal.jpeg", mp: 15, w: 7, d: 1, l: 7, gf: 37, ga: 37, gd: 0, pts: 22 },
    { name: "BIKASH", logo: "bikash.jpeg", mp: 14, w: 4, d: 0, l: 10, gf: 26, ga: 41, gd: -15, pts: 12 },
    { name: "PARU DAI", logo: "parudai.jpeg", mp: 13, w: 7, d: 1, l: 5, gf: 33, ga: 25, gd: 8, pts: 22 },
    { name: "AASHISH", logo: "aashish.jpeg", mp: 15, w: 11, d: 1, l: 3, gf: 47, ga: 20, gd: 27, pts: 34 },
    { name: "ANJAN", logo: "anjan.jpeg", mp: 16, w: 11, d: 1, l: 4, gf: 55, ga: 32, gd: 23 pts: 34 },
    { name: "DEV", logo: "dev.jpeg", mp: 13, w: 8, d: 2, l: 3, gf: 31, ga: 18, gd: 13, pts: 26 },
    { name: "ANISH", logo: "anish.jpeg", mp: 16, w: 8, d: 0, l: 8, gf: 40, ga: 49, gd: -9, pts: 24 },
    { name: "RAAJ", logo: "raaj.jpeg", mp: 16, w: 2, d: 0, l: 14, gf: 25, ga: 68, gd: -43, pts: 6 },
    { name: "BINAYA", logo: "binaya.jpeg", mp: 14, w: 5, d: 0, l: 9, gf: 36, ga: 39, gd: -3, pts: 15 }
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


