document.getElementById("ageCalculator").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    // Récupérer les valeurs du formulaire
    var firstName = document.getElementById("firstName").value;
    var birthDay = parseInt(document.getElementById("birthDay").value);

    // Récupérer le mois sélectionné (doit être unique)
    var birthMonthCheckboxes = document.querySelectorAll('input[name="birthMonth"]:checked');
    if (birthMonthCheckboxes.length === 0) {
        alert("Veuillez sélectionner un mois de naissance."); // Alerter si aucun mois n'est sélectionné
        return;
    }
    if (birthMonthCheckboxes.length > 1) {
        alert("Veuillez sélectionner un seul mois de naissance."); // Alerter si plus d'un mois est sélectionné
        return;
    }
    var birthMonth = parseInt(birthMonthCheckboxes[0].value);

    // Récupérer l'année de naissance
    var birthYear = parseInt(document.getElementById("birthYear").value);

    // Calculer l'âge
    var today = new Date();
    var currentYear = today.getFullYear();
    var age = currentYear - birthYear;

    // Calculer les jours restants jusqu'à l'anniversaire
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

    // Déterminer le texte du compte à rebours jusqu'à l'anniversaire
    var countdownText = "";
    if (daysUntilBirthday === 20) {
        countdownText = "C'est bientôt votre anniversaire ! Plus que 20 jours.";
    } else if (daysUntilBirthday === 1) {
        countdownText = "Demain, c'est votre anniversaire !";
    } else if (daysUntilBirthday === 0) {
        countdownText = "Joyeux anniversaire " + firstName + " !";
    }

    // Texte de résultat pour l'âge
    var ageResult = "Bonjour " + firstName + ", vous avez " + age + " ans.";

    // Signes astrologiques avec leurs images correspondantes
    var zodiacSigns = [
        {
            name: "Capricorne",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/capricorne.png",
        },
        {
            name: "Verseau",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/verseau.png",
        },
        {
            name: "Poissons",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/poissons.png",
        },
        {
            name: "Bélier",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/belier.png",
        },
        {
            name: "Taureau",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/taureau.png",
        },
        {
            name: "Gémeaux",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/gemeau.png",
        },
        {
            name: "Cancer",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/cancer.png",
        },
        {
            name: "Lion",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/lion.png",
        },
        {
            name: "Vierge",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/vierge.png",
        },
        {
            name: "Balance",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/balance.png",
        },
        {
            name: "Scorpion",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/scorpion.png",
        },
        {
            name: "Sagittaire",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/sagittaire.png",
        },
    ];

    // Calculer le signe astrologique
    var zodiacStartMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var zodiacSignIndex = birthMonth - (birthDay < zodiacStartMonths[birthMonth - 1] ? 1 : 0);
    if (zodiacSignIndex < 0) {
        zodiacSignIndex = (zodiacSignIndex + 12) % 12;
    }
    var zodiacSign = zodiacSigns[zodiacSignIndex];

    // Signes astrologiques chinois avec leurs images correspondantes
    var chineseZodiacSigns = [
        {
            name: "Rat",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/rat.png",
        },
        {
            name: "Bœuf",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/boeuf.png",
        },
        {
            name: "Tigre",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/tigre.png",
        },
        {
            name: "Lapin",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/lapin.png",
        },
        {
            name: "Dragon",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/dragon.png",
        },
        {
            name: "Serpent",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/serpent.png",
        },
        {
            name: "Cheval",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/cheval.png",
        },
        {
            name: "Chèvre",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/chevre.png",
        },
        {
            name: "Singe",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/singe.png",
        },
        {
            name: "Coq",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/coq.png",
        },
        {
            name: "Chien",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/chien.png",
        },
        {
            name: "Cochon",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509336/age/zodiaque/sanglier.png",
        },
    ];

    // Calculer le signe astrologique chinois
    var chineseZodiacStartYear = 1900;
    var chineseZodiacSignIndex = (birthYear - chineseZodiacStartYear) % 12;
    if (chineseZodiacSignIndex < 0) {
        chineseZodiacSignIndex = (chineseZodiacSignIndex + 12) % 12;
    }
    var chineseZodiacSign = chineseZodiacSigns[chineseZodiacSignIndex];

    // Afficher les résultats
    document.getElementById("ageResult").textContent = ageResult;
    document.getElementById("zodiacSign").textContent =
        "Votre signe astrologique est " + zodiacSign.name + ".";
    document.getElementById("chineseSign").textContent =
        "Votre signe chinois est " + chineseZodiacSign.name + ".";
    document.getElementById("countdown").textContent = countdownText;

    // Ajouter l'image du signe astrologique
    var zodiacImage = document.createElement("img");
    zodiacImage.src = zodiacSign.image;
    zodiacImage.alt = zodiacSign.name;
    document.getElementById("zodiacSign").appendChild(zodiacImage);

    // Ajouter l'image du signe astrologique chinois
    var chineseZodiacImage = document.createElement("img");
    chineseZodiacImage.src = chineseZodiacSign.image;
    chineseZodiacImage.alt = chineseZodiacSign.name;
    document.getElementById("chineseSign").appendChild(chineseZodiacImage);

    // Afficher le bloc de résultats
    document.getElementById("results").style.display = "block";
});

// Gérer la sélection unique des cases à cocher pour les mois
document.querySelectorAll('input[name="birthMonth"]').forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            document.querySelectorAll('input[name="birthMonth"]').forEach(function (cb) {
                if (cb !== checkbox) cb.checked = false; // Décocher toutes les autres cases
            });
        }
    });
});
