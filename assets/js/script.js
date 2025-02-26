async function getGitHubStars() {
    const repo = "Grazex24/useful-site-dev"; // Remplace par ton nom d'utilisateur et ton repo
    const url = `https://api.github.com/repos/${repo}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("github-stars").textContent = data.stargazers_count;
    } catch (error) {
        console.error("Erreur lors de la récupération du nombre d'étoiles :", error);
    }
}

document.addEventListener("DOMContentLoaded", getGitHubStars);

