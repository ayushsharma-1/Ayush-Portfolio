document.addEventListener("DOMContentLoaded", function() {
    const codeforcesUsername = "ayush018";
    
    // Base URLs for Codeforces API
    const codeforcesUserInfoUrl = `https://codeforces.com/api/user.info?handles=${codeforcesUsername}`;
    const codeforcesUserRatingUrl = `https://codeforces.com/api/user.rating?handle=${codeforcesUsername}`;

    // Fetch Codeforces user info
    fetch(codeforcesUserInfoUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                const user = data.result[0];
                const rating = user.rating ? user.rating : "Unrated";
                const rank = user.rank ? user.rank : "Unranked";

                const codeforcesProfile = document.createElement("div");
                codeforcesProfile.classList.add("profile-item");
                codeforcesProfile.innerHTML = `
                    <h5>Codeforces</h5>
                    <p>Username: ${user.handle}</p>
                    <p>Current Rating: ${rating}</p>
                    <p>Current Rank: ${rank}</p>
                `;
                document.getElementById("coding-profiles").appendChild(codeforcesProfile);
            } else {
                console.error("Codeforces API returned an error:", data);
            }
        })
        .catch(error => console.error("Error fetching Codeforces user info:", error));

    // LeetCode Badge display
    const leetCodeBadges = [
        { name: "Guardian", img: "./assets/images/coding/Guardian.gif" },
    ];

    const leetCodeContainer = document.createElement("div");
    leetCodeContainer.classList.add("profile-item");
    leetCodeBadges.forEach(badge => {
        leetCodeContainer.innerHTML = `
            <h5>LeetCode Badge: ${badge.name}</h5>
            <img src="${badge.img}" alt="${badge.name} Badge" class="badge-image" />
            <p>Highest Rating: 2161</p>
            <p>Highest Rank: 221</p>
        `;
    });
    document.getElementById("coding-profiles").appendChild(leetCodeContainer);
});

document.addEventListener("DOMContentLoaded", function () {
    const codechefUsername = "ayush_980";
    const codechefApiUrl = `https://codechef-api.vercel.app/handle/${codechefUsername}`;
    const leetCodeUsername = "ayush-018";
    const codingProfilesContainer = document.getElementById("coding-profiles");

    // Fetch CodeChef Profile Data
    fetch(codechefApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const { name, currentRating, highestRating, stars, heatMap, countryFlag, countryName } = data;

                const heatmapHTML = heatMap.map(day => `
                    <div 
                        style="width: 20px; height: 20px; background-color: rgba(0, 0, 255, ${day.value / 50}); margin: 1px;" 
                        title="${day.date}: ${day.value}">
                    </div>
                `).join('');

                const codechefProfile = `
                    <div class="profile-item">
                        <h5>CodeChef</h5>
                        <p>Username: ${name}</p>
                        <p>Current Rating: ${currentRating}</p>
                        <p>Highest Rating: ${highestRating}</p>
                        <p>Stars: ${stars}</p>
                        <p>
                            <img src="${countryFlag}" alt="${countryName} Flag" style="width: 24px; height: 16px;" />
                            ${countryName}
                        </p>
                        <div class="heatmap" style="display: flex; flex-wrap: wrap; width: 280px; justify-content: center; margin: 0 auto;">
                            ${heatmapHTML}
                        </div>
                    </div>
                `;
                codingProfilesContainer.innerHTML += codechefProfile;
            } else {
                console.error("CodeChef API returned an error:", data);
            }
        })
        .catch(error => console.error("Error fetching CodeChef data:", error));

    // Fetch LeetCode Heatmap
    const leetCodeHeatmapHTML = `
        <div class="profile-item">
            <h5>LeetCode</h5>
            <p align="center">
                <img align="top" src="https://leetcard.jacoblin.cool/${leetCodeUsername}?theme=light&font=Nunito&ext=heatmap" alt="LeetCode Heatmap" style="width: 100%; max-width: 400px;" />
            </p>
        </div>
    `;
    codingProfilesContainer.innerHTML += leetCodeHeatmapHTML;
});
