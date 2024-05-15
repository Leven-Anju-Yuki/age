document.getElementById("ageCalculator").addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var birthDay = parseInt(document.getElementById("birthDay").value);
    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    var birthYear = parseInt(document.getElementById("birthYear").value);
    var today = new Date();
    var currentYear = today.getFullYear();
    var age = currentYear - birthYear;
    var birthdayThisYear = new Date(currentYear, birthMonth - 1, birthDay);
    var birthdayNextYear = new Date(currentYear + 1, birthMonth - 1, birthDay);
    var birthdayThisYearMS = birthdayThisYear.getTime();
    var birthdayNextYearMS = birthdayNextYear.getTime();
    var daysUntilBirthday;

    if (today.getTime() < birthdayThisYearMS) {
        daysUntilBirthday = Math.ceil(
            (birthdayThisYearMS - today.getTime()) / (1000 * 60 * 60 * 24)
        );
    } else {
        daysUntilBirthday = Math.ceil(
            (birthdayNextYearMS - today.getTime()) / (1000 * 60 * 60 * 24)
        );
    }

    var countdownText = "";
    if (daysUntilBirthday === 20) {
        countdownText = "C'est bientôt votre anniversaire ! Plus que 20 jours.";
    } else if (daysUntilBirthday === 1) {
        countdownText = "Demain, c'est votre anniversaire !";
    } else if (daysUntilBirthday === 0) {
        countdownText = "Joyeux anniversaire " + firstName + " !";
    }

    var ageResult = "Bonjour " + firstName + ", vous avez " + age + " ans.";
    var zodiacSigns = [
        "Capricorne",
        "Verseau",
        "Poissons",
        "Bélier",
        "Taureau",
        "Gémeaux",
        "Cancer",
        "Lion",
        "Vierge",
        "Balance",
        "Scorpion",
        "Sagittaire",
    ];
    var zodiacStartMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var zodiacSignIndex =
        birthMonth - (birthDay < zodiacStartMonths[birthMonth - 1] ? 1 : 0);
    if (zodiacSignIndex < 0) {
        zodiacSignIndex = (zodiacSignIndex + 12) % 12;
    }
    var zodiacSign = zodiacSigns[zodiacSignIndex];

    var chineseZodiacSigns = [
        "Rat",
        "Bœuf",
        "Tigre",
        "Lapin",
        "Dragon",
        "Serpent",
        "Cheval",
        "Chèvre",
        "Singe",
        "Coq",
        "Chien",
        "Cochon",
    ];
    var chineseZodiacStartYear = 1900;
    var chineseZodiacSignIndex = (birthYear - chineseZodiacStartYear) % 12;
    if (chineseZodiacSignIndex < 0) {
        chineseZodiacSignIndex = (chineseZodiacSignIndex + 12) % 12;
    }
    var chineseZodiacSign = chineseZodiacSigns[chineseZodiacSignIndex];

    document.getElementById("ageResult").textContent = ageResult;
    document.getElementById("zodiacSign").textContent =
        "Votre signe astrologique est <span>" + zodiacSign + "</span>.";
    document.getElementById("chineseSign").textContent =
        "Votre signe astrologique chinois est le " + chineseZodiacSign + ".";
    document.getElementById("countdown").textContent = countdownText;

    document.getElementById("results").style.display = "block";
});