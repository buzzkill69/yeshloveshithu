function showYesPage() {
    document.querySelector('.container').innerHTML = `
        <section id="yes-page">
            <h1>Thank You, Hithu!</h1>
            <p>You've made me the happiest person in the world! I promise to always stand by your side, to cherish you every day, and to keep our love alive and exciting. Together, we'll create countless beautiful memories, just like the first time we met in that game.</p>
            <p>Here's to our future together, filled with love, laughter, and endless adventures.</p>
            <p>❤️ Yeshwanth</p>
        </section>
    `;
}

function showNoPage() {
    document.querySelector('.container').innerHTML = `
        <section id="no-page">
            <h1>I'll Keep Waiting, Hithu...</h1>
            <p>Until you change your mind, I'll be here, loving you from afar and hoping for the day when you say "Yes."</p>
            <p>You are worth the wait, and I'll always be here for you.</p>
            <p>❤️ Yeshwanth</p>
        </section>
    `;
}

// Add background music control
window.onload = function() {
    const music = document.getElementById("backgroundMusic");
    music.volume = 0.2; // Set lower volume
};
