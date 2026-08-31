const openButton = document.getElementById("openInvitation");

const ganpatiMusic = document.getElementById("ganpatiMusic");
const musicToggle = document.getElementById("musicToggle");

const openingScreen = document.getElementById("openingScreen");

const mainInvitation = document.getElementById("mainInvitation");


openButton.addEventListener("click", () => {

ganpatiMusic.play().catch(() => {
    console.log("Music could not start.");
});

musicToggle.style.display = "block";

    openingScreen.classList.add("closing");

    setTimeout(() => {

        openingScreen.style.display = "none";

        mainInvitation.classList.remove("hidden");

        mainInvitation.classList.add("page-opening");

    }, 900);

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".invitation, .details, .college-events, .location, .footer"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// GANPATI EVENT DETAILS
// =========================

const eventDetails = {

    event1: {
        date: "दिनांक लवकरच जाहीर",
        time: "वेळ लवकरच जाहीर करण्यात येईल"
    },

    event2: {
        date: "दिनांक लवकरच जाहीर",
        time: "वेळ लवकरच जाहीर करण्यात येईल"
    },

    event3: {
        date: "दिनांक लवकरच जाहीर",
        time: "वेळ लवकरच जाहीर करण्यात येईल"
    },


    event5: {
        date: "दिनांक लवकरच जाहीर",
        time: "वेळ लवकरच जाहीर करण्यात येईल"
    }

};


// Put the information onto the page

document.getElementById("eventDate1").textContent =
    eventDetails.event1.date;

document.getElementById("eventTime1").textContent =
    eventDetails.event1.time;


document.getElementById("eventDate2").textContent =
    eventDetails.event2.date;

document.getElementById("eventTime2").textContent =
    eventDetails.event2.time;


document.getElementById("eventDate3").textContent =
    eventDetails.event3.date;

document.getElementById("eventTime3").textContent =
    eventDetails.event3.time;

document.getElementById("eventDate5").textContent =
    eventDetails.event5.date;

document.getElementById("eventTime5").textContent =
    eventDetails.event5.time;


    // =========================
// SHARE INVITATION
// =========================

const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {

    const shareData = {
        title: "गणपती बाप्पा मोरया!",
        text: "Tilak Maharashtra Vidyapeeth, Kharghar येथील गणेशोत्सवाचे सस्नेह निमंत्रण 🙏",
        url: window.location.href
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(window.location.href);

            alert("निमंत्रणाची लिंक कॉपी झाली! 🙏");

        }

    } catch (error) {

        console.log("Share cancelled.");

    }

});

// =========================
// MUSIC TOGGLE
// =========================

musicToggle.addEventListener("click", () => {

    if (ganpatiMusic.paused) {

        ganpatiMusic.play();

        musicToggle.textContent = "♪";

    } else {

        ganpatiMusic.pause();

        musicToggle.textContent = "🔇";

    }

});