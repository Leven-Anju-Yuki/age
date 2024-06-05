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

    // Calculer l'âge en tenant compte de l'année, du mois et du jour de naissance
    var today = new Date();
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Mois indexé à partir de 0
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Calculer les jours restants jusqu'à l'anniversaire
    var nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    var daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    // Déterminer le texte du compte à rebours jusqu'à l'anniversaire
    var countdownText = "";
    if (
        today.getDate() === nextBirthday.getDate() &&
        today.getMonth() === nextBirthday.getMonth()
    ) {
        countdownText = "Joyeux anniversaire" + firstName + " !";
    } else if (daysUntilBirthday === 1) {
        countdownText = "Demain, c'est votre anniversaire !";
    } else if (daysUntilBirthday <= 10) {
        countdownText =
            "C'est bientôt votre anniversaire ! Plus que " + daysUntilBirthday + " jours.";
    } else {
        countdownText = "Il reste " + daysUntilBirthday + " jours avant votre anniversaire.";
    }

    // Texte de résultat pour l'âge
    var ageResult = "Bonjour " + firstName + ", vous avez " + age + " ans.";

    // Définir les signes astrologiques avec leurs images correspondantes et dates de début
    var zodiacSigns = [
        {
            name: "Capricorne",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/capricorne.png",
            startDate: new Date(today.getFullYear(), 11, 23),
        },
        {
            name: "Verseau",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/verseau.png",
            startDate: new Date(today.getFullYear(), 0, 21),
        },
        {
            name: "Poissons",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/poissons.png",
            startDate: new Date(today.getFullYear(), 1, 20),
        },
        {
            name: "Bélier",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/belier.png",
            startDate: new Date(today.getFullYear(), 2, 21),
        },
        {
            name: "Taureau",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/taureau.png",
            startDate: new Date(today.getFullYear(), 3, 20),
        },
        {
            name: "Gémeaux",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/gemeau.png",
            startDate: new Date(today.getFullYear(), 4, 21),
        },
        {
            name: "Cancer",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/cancer.png",
            startDate: new Date(today.getFullYear(), 5, 22),
        },
        {
            name: "Lion",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/lion.png",
            startDate: new Date(today.getFullYear(), 6, 23),
        },
        {
            name: "Vierge",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/vierge.png",
            startDate: new Date(today.getFullYear(), 7, 23),
        },
        {
            name: "Balance",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/balance.png",
            startDate: new Date(today.getFullYear(), 8, 23),
        },
        {
            name: "Scorpion",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/scorpion.png",
            startDate: new Date(today.getFullYear(), 9, 24),
        },
        {
            name: "Sagittaire",
            image: "https://res.cloudinary.com/dgrszi9wf/image/upload/v1717509324/age/astro/sagittaire.png",
            startDate: new Date(today.getFullYear(), 10, 23),
        },
    ];

    // Calculer le signe astrologique
    var birthDateThisYear = new Date(today.getFullYear(), birthMonth - 1, birthDay);
    var zodiacSign;
    for (var i = 0; i < zodiacSigns.length; i++) {
        var nextIndex = (i + 1) % zodiacSigns.length;
        if (
            birthDateThisYear >= zodiacSigns[i].startDate &&
            birthDateThisYear < zodiacSigns[nextIndex].startDate
        ) {
            zodiacSign = zodiacSigns[i];
            break;
        }
    }

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
