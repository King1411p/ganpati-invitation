/* =========================
   LANGUAGE SELECTION
========================= */

const languagePopup = document.getElementById("languagePopup");
const selectMarathi = document.getElementById("selectMarathi");
const selectEnglish = document.getElementById("selectEnglish");

let selectedLanguage = "mr";

selectMarathi.addEventListener("click", () => {

    selectedLanguage = "mr";

    languagePopup.classList.add("hidden");

});

selectEnglish.addEventListener("click", () => {

    selectedLanguage = "en";

    applyEnglishLanguage();

    languagePopup.classList.add("hidden");

});

/* =========================
   ENGLISH TRANSLATIONS
========================= */

const englishTranslations = {

    opening: {
        shlok: "॥ श्री गणेशाय नमः ॥",
        title: "Ganpati Bappa Morya!",
        message: "We eagerly await your arrival.",
        button: "Open Invitation"
    },

    hero: {
        decoration: "ॐ",
        shlok: "॥ श्री गणेशाय नमः ॥",
        college: "Tilak Maharashtra Vidyapeeth, Kharghar",
        title: "Auspicious Arrival of Lord Ganesha",
        welcome: "Celebrating Ganeshotsav at our college",
        message: "We warmly invite you to join us and grace the auspicious arrival of Lord Ganesha.",
        next: "Swipe →"
    },

    invitation: {
        shlok: "॥ श्री गणेशाय नमः ॥",
        title: "A Cordial Invitation",
        college: "Tilak Maharashtra Vidyapeeth",
        location: "Kharghar",
        message: "On the auspicious occasion of the arrival of Lord Ganesha, we cordially invite you to join us for the Ganeshotsav celebration and grace the festivities with your presence.",
        ending: "Students, teachers and staff are warmly invited to participate enthusiastically in this auspicious celebration."
    },

    details: {
    shlok: "॥ मंगलमूर्ती मोरया ॥",
    title: "Ganeshotsav Programme",
    subtitle: "A variety of auspicious programmes celebrating Lord Ganesha",

    event1: "Ganpati Aagman",
    event2: "Ganesh Sthapana & Aarti",
    event3: "Maha Aarti",
    event4: "Cultural Programme",
    event5: "Ganpati Visarjan",

    event1Date: "Saturday, 12 September 2026",
    event1Time: "1:30 PM",

    event2Date: "Monday, 14 September 2026",
    event2Time: "Ganesh Murti Pranpratishthapana: 10:00 AM – 11:30 AM<br>Evening Aarti: 7:00 PM",

    event3Date: "Tuesday, 15 September 2026",
    event3Time: "Morning Aarti: 10:30 AM<br>Aarti before Visarjan: 1:30 PM",

    event4Date: "Tuesday, 15 September 2026",
    event4Time: "After Morning Aarti",

    event5Date: "Tuesday, 15 September 2026",
    event5Time: "2:00 PM onwards"
},

    location: {
        shlok: "॥ मंगलमूर्ती मोरया ॥",
        title: "Ganeshotsav Venue",
        subtitle: "We warmly welcome you all.",

        college: "Tilak Maharashtra Vidyapeeth",
        mapsButton: "📍 View Location on Google Maps",

        footerMantra: "॥ ॐ गं गणपतये नमः ॥",
        footerTitle: "Ganpati Bappa Morya! 🙏",
        footerCollege: "Tilak Maharashtra Vidyapeeth, Kharghar",
        footerMessage: "May the blessings of Lord Ganesha always be with us all.",
        share: "📤 Share this invitation",
        footerBottom: "🔱 Unity • Culture • Celebration • Ganraya 🔱"
    }

};


/* =========================
   APPLY ENGLISH LANGUAGE
========================= */

function applyEnglishLanguage() {

    // Opening screen
    document.querySelector(".opening-shlok").textContent =
        englishTranslations.opening.shlok;

    document.querySelector(".opening-title").textContent =
        englishTranslations.opening.title;

    document.querySelector(".opening-message").textContent =
        englishTranslations.opening.message;

    document.querySelector("#openInvitation").textContent =
        englishTranslations.opening.button;


    // Hero page
    document.querySelector(".hero-decoration").textContent =
        englishTranslations.hero.decoration;

    document.querySelector(".hero .shlok").textContent =
        englishTranslations.hero.shlok;

    document.querySelector(".hero-small-text").textContent =
        englishTranslations.hero.college;

    document.querySelector(".hero h1").textContent =
        englishTranslations.hero.title;

    document.querySelector(".hero-welcome").textContent =
        englishTranslations.hero.welcome;

    document.querySelector(".hero-family").textContent =
        englishTranslations.hero.message;

    document.querySelector(".next-page-hint").textContent =
        englishTranslations.hero.next;


    // Invitation page
    document.querySelector(".card-shlok").textContent =
        englishTranslations.invitation.shlok;

    document.querySelector(".invitation h2").textContent =
        englishTranslations.invitation.title;

    document.querySelector(".college-name").innerHTML =
        englishTranslations.invitation.college +
        "<br>" +
        englishTranslations.invitation.location;

    document.querySelector(".invitation-message").textContent =
        englishTranslations.invitation.message;

    document.querySelector(".invitation-ending").textContent =
        englishTranslations.invitation.ending;


    // Programme page
    document.querySelector(".details .section-shlok").textContent =
        englishTranslations.details.shlok;

    document.querySelector(".details h2").textContent =
        englishTranslations.details.title;

    document.querySelector(".details-heading > p:not(.section-shlok)").textContent =
    englishTranslations.details.subtitle;

    const eventCards = document.querySelectorAll(".details .event-card");

if (eventCards.length >= 5) {
    eventCards[0].querySelector("h3").textContent = englishTranslations.details.event1;
    eventCards[1].querySelector("h3").textContent = englishTranslations.details.event2;
    eventCards[2].querySelector("h3").textContent = englishTranslations.details.event3;
    eventCards[3].querySelector("h3").textContent = englishTranslations.details.event4;
    eventCards[4].querySelector("h3").textContent = englishTranslations.details.event5;
}

document.querySelector("#eventDate1").textContent = englishTranslations.details.event1Date;
document.querySelector("#eventTime1").innerHTML = englishTranslations.details.event1Time;

document.querySelector("#eventDate2").textContent = englishTranslations.details.event2Date;
document.querySelector("#eventTime2").innerHTML = englishTranslations.details.event2Time;

document.querySelector("#eventDate3").textContent = englishTranslations.details.event3Date;
document.querySelector("#eventTime3").innerHTML = englishTranslations.details.event3Time;

document.querySelector("#eventDate4").textContent = englishTranslations.details.event4Date;
document.querySelector("#eventTime4").innerHTML = englishTranslations.details.event4Time;

document.querySelector("#eventDate5").textContent = englishTranslations.details.event5Date;
document.querySelector("#eventTime5").innerHTML = englishTranslations.details.event5Time;


    


    // Location + Footer
    document.querySelector(".location .section-shlok").textContent =
        englishTranslations.location.shlok;

    document.querySelector(".location-heading h2").textContent =
        englishTranslations.location.title;

    document.querySelector(".location-heading > p:last-child").textContent =
        englishTranslations.location.subtitle;

    document.querySelector(".location-card h3").textContent =
        englishTranslations.location.college;

    document.querySelector(".maps-button").textContent =
        englishTranslations.location.mapsButton;

    document.querySelector(".footer-decoration").textContent =
        englishTranslations.location.footerMantra;

    document.querySelector(".footer h2").textContent =
        englishTranslations.location.footerTitle;

    document.querySelector(".footer > p").textContent =
        englishTranslations.location.footerCollege;

    document.querySelector(".footer-message").textContent =
        englishTranslations.location.footerMessage;

    document.querySelector("#shareButton").textContent =
        englishTranslations.location.share;

    document.querySelector(".footer-decoration:last-child").textContent =
        englishTranslations.location.footerBottom;
}




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
    ".invitation, .details, .location, .footer"
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
        date: "शनिवार, १२ सप्टेंबर २०२६",
        time: "दुपारी १:३० वाजता"
    },
    event2: {
    date: "सोमवार, १४ सप्टेंबर २०२६",
    time: "गणेश मूर्ती प्राणप्रतिष्ठापना व पूजा: १०:०० – ११:३०<br>सायंकाळची आरती: ७:०० वाजता"
},
    event3: {
        date: "मंगळवार, १५ सप्टेंबर २०२६",
        time: "सकाळची आरती: १०:३० वाजता<br> विसर्जनापूर्वी आरती: दुपारी १:३० वाजता"
    },
    event4: {
        date: "मंगळवार, १५ सप्टेंबर २०२६",
        time: "सकाळच्या आरतीनंतर"
    },
    event5: {
        date: "मंगळवार, १५ सप्टेंबर २०२६",
        time: "दुपारी २:०० वाजल्यापासून"
    }
};

// Put the information onto the page

document.getElementById("eventDate1").textContent =
    eventDetails.event1.date;

document.getElementById("eventTime1").textContent =
    eventDetails.event1.time;


document.getElementById("eventDate2").textContent =
    eventDetails.event2.date;

document.getElementById("eventTime2").innerHTML =
    eventDetails.event2.time;


document.getElementById("eventDate3").textContent=
    eventDetails.event3.date;

document.getElementById("eventTime3").innerHTML =
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

/* =========================
   SWIPE NAVIGATION
========================= */

const swipeContainer = document.querySelector(".swipe-container");
const swipePages = document.querySelectorAll(".swipe-container > section");
const swipeDots = document.querySelectorAll(".swipe-dots span");

let currentPage = 0;
let startX = 0;
let startY = 0;
let isDragging = false;


/* =========================
   DOTS
========================= */

function updateDots() {

    swipeDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentPage
        );

    });

}


/* =========================
   GO TO PAGE
========================= */

function goToPage(pageIndex) {

    if (!swipeContainer) return;

    if (pageIndex < 0 || pageIndex >= swipePages.length) {
        return;
    }

    currentPage = pageIndex;

    swipeContainer.scrollTo({
        left: currentPage * swipeContainer.clientWidth,
        behavior: "smooth"
    });

    updateDots();

}


/* =========================
   MOUSE SWIPE
========================= */

mainInvitation?.addEventListener("mousedown", (event) => {

    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;

});


mainInvitation?.addEventListener("mouseup", (event) => {

    if (!isDragging) return;

    const endX = event.clientX;
    const endY = event.clientY;

    const distanceX = endX - startX;
    const distanceY = endY - startY;

    isDragging = false;

    /* Ignore vertical movement */
    if (Math.abs(distanceX) <= Math.abs(distanceY)) {
        return;
    }

    /* SWIPE LEFT → PREVIOUS PAGE */
    if (distanceX < -60) {
        goToPage(currentPage - 1);
    }

    /* SWIPE RIGHT → NEXT PAGE */
    if (distanceX > 60) {
        goToPage(currentPage + 1);
    }

});


mainInvitation?.addEventListener("mouseleave", () => {

    isDragging = false;

});


/* =========================
   TOUCH SWIPE
========================= */

mainInvitation?.addEventListener("touchstart", (event) => {

    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;

}, { passive: true });


mainInvitation?.addEventListener("touchend", (event) => {

    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const distanceX = endX - startX;
    const distanceY = endY - startY;

    /* Ignore vertical movement */
    if (Math.abs(distanceX) <= Math.abs(distanceY)) {
        return;
    }

    /* SWIPE LEFT → PREVIOUS PAGE */
    if (distanceX > -60) {
        goToPage(currentPage - 1);
    }

    /* SWIPE RIGHT → NEXT PAGE */
    if (distanceX < 60) {
        goToPage(currentPage + 1);
    }

});


/* =========================
   INITIAL DOT STATE
========================= */

updateDots();