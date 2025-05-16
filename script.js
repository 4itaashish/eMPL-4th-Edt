// Team data with proper image paths
const teams = [
    { name: "ASAL", logo: "./asal.jpeg", mp: 1, w: 0, d: 0, l: 1, gf: 3, ga: 5, gd: -2, pts: 0 },
    { name: "BIKASH", logo: "./bikash.jpeg", mp: 2, w: 1, d: 0, l: 1, gf: 5, ga: 6, gd: -1, pts: 3 },
    { name: "PARU DAI", logo: "./parudai.jpeg", mp: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1, gd: 4, pts: 3 },
    { name: "AASHISH", logo: "./aashish.jpeg", mp: 1, w: 1, d: 0, l: 0, gf: 5, ga: 2, gd: 3, pts: 3 },
    { name: "ANJAN", logo: "./anjan.jpeg", mp: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, gd: 1, pts: 3 },
    { name: "DEV", logo: "./dev.jpeg", mp: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, gd: 2, pts: 3 },
    { name: "ANISH", logo: "./anish.jpeg", mp: 2, w: 0, d: 0, l: 2, gf: 2, ga: 8, gd: -6, pts: 0 },
    { name: "RAAJ", logo: "./raaj.jpeg", mp: 2, w: 1, d: 0, l: 1, gf: 5, ga: 5, gd: 0, pts: 3 },
    { name: "BINAYA", logo: "./binaya.jpeg", mp: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, gd: -1, pts: 0 }
];

// Function to sort teams by points, GD, then GF
function sortTeams() {
    return [...teams].sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });
}

// Function to update the standings table
function updateStandingsTable() {
    const tbody = document.getElementById('standings-body');
    
    if (!tbody) {
        console.error("Table body not found - check HTML for id='standings-body'");
        return;
    }

    // Clear existing rows
    tbody.innerHTML = '';

    // Add sorted teams
    const sortedTeams = sortTeams();
    sortedTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        
        // Apply position-based styling
        if (index === 0) row.classList.add('champion');
        else if (index < 4) row.classList.add('europe');
        else if (index >= teams.length - 3) row.classList.add('relegation');
        else row.classList.add('mid-table');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-name">
                <img src="${team.logo}" alt="${team.name}" class="team-logo" 
                     onerror="this.onerror=null;this.src='./placeholder.jpg'">
                ${team.name}
            </td>
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

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.toggle('active', 
            currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')
        );
    });
}

// Initialize season selector
function initSeasonSelector() {
    const selector = document.getElementById('points-season');
    if (selector) {
        selector.addEventListener('change', function() {
            alert(`Loading ${this.value} season data...`);
            // In production: fetch new data here
        });
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    initSeasonSelector();
    updateStandingsTable();
    
    // Debugging
    console.log("Standings initialized", teams);
});

// Helper function to update team data (for testing)
function updateTeamData(teamName, newData) {
    const team = teams.find(t => t.name === teamName);
    if (team) Object.assign(team, newData);
    updateStandingsTable();
}

// Example usage:
// updateTeamData("ASAL", { mp: 2, w: 1, pts: 3 });
