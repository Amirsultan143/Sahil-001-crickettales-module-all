document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get("id");

  const container = document.getElementById("story-detail");
  container.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(`/.netlify/functions/stories?id=${storyId}`);
    const data = await res.json();

    if (!data || !data.id) throw new Error("Invalid story response");

    container.innerHTML = `
      <div class="card">
        <h2>${data.title}</h2>
        <div><strong>By:</strong> ${data.author} | ${data.date}</div>
        <p>${data.content}</p>
        <div class="vote-widget">
          <strong>⭐ ${data.votes} votes</strong>
          <button onclick="voteForStory('${data.id}')">Vote for This Tale</button>
        </div>
        <div class="boost-section">
          <button onclick="boostStory('${data.id}')">Boost This Tale - $2</button>
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = "<p class='alert-error'>Failed to load story.</p>";
    console.error("Story Load Error:", err);
  }
});
