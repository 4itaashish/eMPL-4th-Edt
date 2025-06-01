// Set active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll(".nav-links a")

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })

  // Season selector functionality
  const seasonSelectors = document.querySelectorAll(".season-selector select")
  seasonSelectors.forEach((selector) => {
    selector.addEventListener("change", function () {
      const selectedSeason = this.value
      const section = this.closest("section").id

      if (section === "fixtures") {
        loadFixtures(selectedSeason)
      } else if (section === "points-table") {
        loadPointsTable(selectedSeason)
      } else if (section === "winners") {
        loadWinners(selectedSeason)
      }
    })
  })

  // Initialize with current season data
  loadFixtures("2025")
  loadPointsTable("2025")
})

// Season 2 team data for reference
const season2Teams = [
  { name: "ASAL", mp: 16, w: 8, d: 1, l: 7, gf: 40, ga: 37, gd: 3, pts: 25 },
  { name: "BIKASH", mp: 16, w: 4, d: 0, l: 12, gf: 26, ga: 47, gd: -21, pts: 12 },
  { name: "PARU DAI", mp: 16, w: 9, d: 1, l: 6, gf: 40, ga: 30, gd: 10, pts: 28 },
  { name: "AASHISH", mp: 16, w: 11, d: 1, l: 4, gf: 52, ga: 26, gd: 26, pts: 34 },
  { name: "ANJAN", mp: 16, w: 11, d: 1, l: 4, gf: 55, ga: 32, gd: 23, pts: 34 },
  { name: "DEV", mp: 16, w: 11, d: 2, l: 3, gf: 45, ga: 24, gd: 21, pts: 35 },
  { name: "ANISH", mp: 16, w: 8, d: 0, l: 8, gf: 40, ga: 49, gd: -9, pts: 24 },
  { name: "RAAJ", mp: 16, w: 2, d: 0, l: 14, gf: 25, ga: 68, gd: -43, pts: 6 },
  { name: "BINAYA", mp: 16, w: 5, d: 0, l: 11, gf: 36, ga: 45, gd: -9, pts: 15 },
]

// Season 3 group data (initialized with 0 stats)
const season3GroupA = [
  { name: "ANJAN", mp: 2, w: 1, d: 0, l: 1, gf: 4, ga: 3, gd: 1, pts: 3 },
  { name: "PARU DAI", mp: 2, w: 2, d: 0, l: 0, gf: 7, ga: 2, gd: 5, pts: 6 },
  { name: "ANISH", mp: 3, w: 1, d: 0, l: 2, gf: 8, ga: 7, gd: 1, pts: 3 },
  { name: "BIKASH", mp: 2, w: 0, d: 0, l: 2, gf: 2, ga: 14, gd: -12, pts: 0 },
  { name: "ASAL", mp: 3, w: 2, d: 0, l: 1, gf: 10, ga: 5, gd: 5, pts: 6 },
]

const season3GroupB = [
  { name: "AASHISH", mp: 2, w: 1, d: 1, l: 0, gf: 11, ga: 3, gd: 8, pts: 4 },
  { name: "KUSHAL", mp: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, gd: 0, pts: 1 },
  { name: "SAJINA", mp: 2, w: 0, d: 0, l: 2, gf: 2, ga: 14, gd: -12, pts: 0 },
  { name: "DEV", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
  { name: "BINAYA", mp: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1, gd: 4, pts: 3 },
]

function loadFixtures(season) {
  const fixturesBody = document.getElementById("fixtures-body")
  if (!fixturesBody) return

  if (season === "2025") {
    // Season 3 fixtures are already in the HTML
    return
  } else if (season === "2022") {
    // Load Season 2 fixtures (your existing data)
    fixturesBody.innerHTML = `
            <tr><td>2025-05-15</td><td>AASHISH <br>5-2<br> RAAJ</td><td>AASHISH</td></tr>
            <tr><td></td><td>ASAL <br>3-5<br> BIKASH</td><td>BIKASH</td></tr>
            <!-- Add more Season 2 fixtures here -->
        `
  } else {
    fixturesBody.innerHTML = '<tr><td colspan="3">No fixtures available for this season</td></tr>'
  }
}

function loadPointsTable(season) {
  if (season === "2025") {
    // Season 3 - groups are already displayed
    updateGroupStandings()
  } else if (season === "2022") {
    // Show Season 2 single table
    showSeason2Table()
  } else {
    // Show placeholder for Season 1
    showPlaceholderTable()
  }
}

function updateGroupStandings() {
  const groupABody = document.getElementById("group-a-standings")
  const groupBBody = document.getElementById("group-b-standings")

  if (groupABody) {
    updateGroupTable(groupABody, season3GroupA)
  }

  if (groupBBody) {
    updateGroupTable(groupBBody, season3GroupB)
  }
}

function updateGroupTable(tbody, teams) {
  const sortedTeams = teams.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts
    if (b.gd !== a.gd) return b.gd - a.gd
    return b.gf - a.gf
  })

  tbody.innerHTML = ""
  sortedTeams.forEach((team, index) => {
    const row = document.createElement("tr")

    if (index === 0) {
      row.classList.add("champion")
    } else if (index === 1) {
      row.classList.add("europe")
    } else {
      row.classList.add("mid-table")
    }

    row.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-name">${team.name}</td>
            <td>${team.mp}</td>
            <td>${team.w}</td>
            <td>${team.d}</td>
            <td>${team.l}</td>
            <td>${team.gf}</td>
            <td>${team.ga}</td>
            <td>${team.gd}</td>
            <td><strong>${team.pts}</strong></td>
        `

    tbody.appendChild(row)
  })
}

function showSeason2Table() {
  const groupsContainer = document.querySelector(".groups-container")
  if (groupsContainer) {
    groupsContainer.innerHTML = `
            <div class="table-container">
                <table class="points-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>MP</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody id="season2-standings"></tbody>
                </table>
            </div>
        `

    const tbody = document.getElementById("season2-standings")
    const sortedTeams = season2Teams.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts
      if (b.gd !== a.gd) return b.gd - a.gd
      return b.gf - a.gf
    })

    sortedTeams.forEach((team, index) => {
      const row = document.createElement("tr")

      if (index === 0) {
        row.classList.add("champion")
      } else if (index < 4) {
        row.classList.add("europe")
      } else if (index > 5) {
        row.classList.add("relegation")
      } else {
        row.classList.add("mid-table")
      }

      row.innerHTML = `
                <td>${index + 1}</td>
                <td class="team-name">${team.name}</td>
                <td>${team.mp}</td>
                <td>${team.w}</td>
                <td>${team.d}</td>
                <td>${team.l}</td>
                <td>${team.gf}</td>
                <td>${team.ga}</td>
                <td>${team.gd}</td>
                <td><strong>${team.pts}</strong></td>
            `

      tbody.appendChild(row)
    })
  }
}

function showPlaceholderTable() {
  const groupsContainer = document.querySelector(".groups-container")
  if (groupsContainer) {
    groupsContainer.innerHTML = '<p style="text-align: center; padding: 20px;">Season 1 data not available</p>'
  }
}

function loadWinners(season) {
  const winnersGrid = document.querySelector(".winners-grid")
  if (!winnersGrid) return

  if (season === "all") {
    // Show all winners (already in HTML)
    return
  } else if (season === "2023") {
    winnersGrid.innerHTML = `
            <div class="winner-card">
                <img src="/placeholder.svg?height=200&width=300" alt="AASHISH Season 1" class="winner-image">
                <div class="winner-info">
                    <h3>AASHISH</h3>
                    <p>Season: 1</p>
                    <p>Format: OGP</p>
                    <p class="prize-pool">Prize Pool: $550</p>
                </div>
            </div>
        `
  } else if (season === "2022") {
    winnersGrid.innerHTML = `
            <div class="winner-card">
                <img src="/placeholder.svg?height=200&width=300" alt="DEV Season 2" class="winner-image">
                <div class="winner-info">
                    <h3>DEV</h3>
                    <p>Season: 2</p>
                    <p>Format: League</p>
                    <p class="prize-pool">Prize Pool: $750</p>
                </div>
            </div>
        `
  } else if (season === "2025") {
    winnersGrid.innerHTML = `
            <div class="winner-card upcoming">
                <img src="/placeholder.svg?height=200&width=300" alt="Season 3 TBD" class="winner-image">
                <div class="winner-info">
                    <h3>TBD</h3>
                    <p>Season: 3</p>
                    <p>Format: Group Stage</p>
                    <p class="prize-pool">Prize Pool: $1000</p>
                    <p class="status">Tournament in Progress</p>
                </div>
            </div>
        `
  }
}
