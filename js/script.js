const leaderboardTableElement = document.getElementById("leaderboard-table");

// static data for leaderboard, will be replaced dynamic data from backend
const leaderboardData = [
  {
    username: "Bruce Wayne",
    points: 100,
    prsMerged: 5,
    issueCreated: 2,
  },
  {
    username: "Jason Todd",
    points: 90,
    prsMerged: 4,
    issueCreated: 2,
  },
  {
    username: "Barbara Gordon",
    points: 60,
    prsMerged: 4,
    issueCreated: 0,
  },
];

// adding data to leaderboard table
leaderboardData.forEach((data) => {
  const row = leaderboardTableElement.insertRow();
  row.insertCell().innerHTML = data.username;
  row.insertCell().innerHTML = data.points;
  row.insertCell().innerHTML = data.prsMerged;
  row.insertCell().innerHTML = data.issueCreated;
});
