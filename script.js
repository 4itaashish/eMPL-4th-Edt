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
    { name: "ASAL", logo: "img/asal.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "BIKASH", logo: "img/bikash.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "PARU DAI", logo: "img/parudai.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "AASHISH", logo: "img/aashish.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "ANJAN", logo: "img/anjan.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "DEV", logo: "img/dev.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "ANISH", logo: "img/anish.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "RAAJ", logo: "img/raaj.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { name: "BINAYA", logo: "img/binaya.jpeg", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
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
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    setupSeasonSelector();
    updateStandingsTable();
    
    // For demo purposes - you would normally get this data from a server
    // Simulate some data updates
    setTimeout(() => {
        // Update some team stats for demonstration
        //ASAL
        teams[0].mp = 0; teams[0].w = 0; teams[0].d = 0; teams[0].l = 0;
        teams[0].gf = 0; teams[0].ga = 0; teams[0].gd = 0; teams[0].pts = 0;
        
        //BIKASH
        teams[1].mp = 0; teams[1].w = 0; teams[1].d = 0; teams[1].l = 0;
        teams[1].gf = 0; teams[1].ga = 0; teams[1].gd = 0; teams[1].pts = 0;
        
        //PARU DAI
        teams[2].mp = 0; teams[2].w = 0; teams[2].d = 0; teams[2].l = 0;
        teams[2].gf = 0; teams[2].ga = 0; teams[2].gd = 0; teams[2].pts = 0;

        //AASHISH
        teams[3].mp = 0; teams[3].w = 0; teams[3].d = 0; teams[3].l = 0;
        teams[3].gf = 0; teams[3].ga = 0; teams[3].gd = 0; teams[3].pts = 0;

        //ANJAN
        teams[4].mp = 0; teams[4].w = 0; teams[4].d = 0; teams[4].l = 0;
        teams[4].gf = 0; teams[4].ga = 0; teams[4].gd = 0; teams[4].pts = 0;

        //DEV
        teams[5].mp = 0; teams[5].w = 0; teams[5].d = 0; teams[5].l = 0;
        teams[5].gf = 0; teams[5].ga = 0; teams[5].gd = 0; teams[5].pts = 0;

        //ANISH
        teams[6].mp = 0; teams[6].w = 0; teams[6].d = 0; teams[6].l = 0;
        teams[6].gf = 0; teams[6].ga = 0; teams[6].gd = 0; teams[6].pts = 0;

        //RAAJ
        teams[7].mp = 0; teams[7].w = 0; teams[7].d = 0; teams[7].l = 0;
        teams[7].gf = 0; teams[7].ga = 0; teams[7].gd = 0; teams[7].pts = 0;

        //BINAYA
        teams[8].mp = 0; teams[8].w = 0; teams[8].d = 0; teams[8].l = 0;
        teams[8].gf = 0; teams[8].ga = 0; teams[8].gd = 0; teams[8].pts = 0;
        
        updateStandingsTable();
    }, 10000000000);
});