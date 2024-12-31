document.getElementById('submitNameButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    const greetingElement = document.getElementById('greeting');
    const nameDisplay = document.getElementById('nameDisplay');
    const changeMessageButton = document.getElementById('changeMessageButton');
    const mainImage = document.querySelector('.main-image');
    const nameImageContainer = document.querySelector('.name-image-container');
    const messageElement = document.getElementById('message');
    const shareText = document.getElementById('shareText');
    const shareButtons = document.getElementById('shareButtons');
    const clickAgainText = document.getElementById('clickAgainText');
    const inviteFriendButton = document.getElementById('inviteFriendButton')

    if (name) {
        greetingElement.textContent = `Bonne Année 2025, ${name} !`;
        nameDisplay.textContent = `Bonne Année, ${name} !`;
        greetingElement.style.display = 'block';
        messageElement.style.display = 'block';
        mainImage.style.display = 'block';
        nameImageContainer.style.display = 'block';
        changeMessageButton.style.display = 'inline-block';
        shareText.style.display = 'block';
        shareButtons.style.display = 'block';
        clickAgainText.style.display = 'block';
        createFlowers();
        launchConfetti();
        inviteFriendButton.style.display = 'block';
        const audio = new Audio('Images/fireworks.mp3');
        audio.play();

    } else {
        alert('Veuillez entrer votre nom.');
    }
});

document.getElementById('changeMessageButton').addEventListener('click', function () {
    const messages = [
        "💦Meilleurs vœux pour une année pleine de succès.💦",
        "💦Bonne année ! Que la santé et le bonheur soient avec vous.💦",
        "💦Que cette année soit remplie de moments de bonheur et de réussite.💦",
        "💦Puisse cette nouvelle année vous apporter tout ce que vous désirez.💦",
        "💦Que la paix et la joie vous accompagnent tout au long de l'année.💦",
        "💦Bonne année ! Que chaque jour soit une nouvelle aventure.💦",
        "💦Que cette année soit marquée par la réussite et la prospérité.💦",
        "💦Que cette année soit remplie de moments inoubliables.💦",
        "💦Puisse cette nouvelle année vous apporter tout ce que vous désirez.💦",
        "💦Meilleurs vœux pour une année exceptionnelle.💦",
        "💦Que cette nouvelle année soit synonyme de bonheur et de santé.💦",
        "💦Bonne année mon ami ! Que cette année soit remplie de rires et de bonheur.💦",
        "💦Bonne année mon amie ! Que cette année soit remplie de rires et de bonheur.💦",
        "💦À ma chère amie, je te souhaite une année pleine de joie et de réussite.💦",
        "💦À mon cher ami, je te souhaite une année pleine de joie et de réussite.💦",
        "💦Bonne année à toi, ma camarade ! Que cette année soit exceptionnelle.💦",
        "💦Bonne année à toi, mon camarade ! Que cette année soit exceptionnelle.💦",
        "💦Que cette nouvelle année soit aussi merveilleuse que notre amitié.💦",
        "💦Bonne année à toi mon amour💖 ! Que cette année soit remplie de moments inoubliables ensemble.💦",
        "💦À toi mon mignon, je te souhaite une année pleine d'amour et de bonheur.💦",
        "💦À toi ma mignonne, je te souhaite une année pleine d'amour et de bonheur.💦",
        "💦Bonne année à toi, ma chérie😘! Que cette année soit la meilleure de toutes.💦",
        "💦Bonne année à toi, mon chéri😘! Que cette année soit la meilleure de toutes.💦",
        "💦Que cette nouvelle année soit remplie de tendresse et de moments magiques avec toi.💦",
        "💦Bonne année à ma meilleure amie😊 ! Que cette année soit remplie de succès et de bonheur.💦",
        "💦Bonne année à mon meilleur ami😊 ! Que cette année soit remplie de succès et de bonheur.💦",
        "💦À toi ma confidente💕, je te souhaite une année pleine de surprises et de joie.💦",
        "💦À toi mon confident💕, je te souhaite une année pleine de surprises et de joie.💦",
        "💦Bonne année à toi, ma partenaire de vie ! Que cette année soit remplie d'amour et de prospérité.💦",
        "💦Bonne année à toi, mon partenaire de vie ! Que cette année soit remplie d'amour et de prospérité.💦",
        "💦Que cette nouvelle année soit remplie de moments précieux avec toi, ma chère amie.💦",
        "💦Que cette nouvelle année soit remplie de moments précieux avec toi, mon cher ami.💦",
        "💦Bonne année à toi, mon complice ! Que cette année soit remplie de rires et de bonheur.💦",
        "💦Bonne année à vous, chers dévelopeurs<⁄> 🚀 ! Que cette année soit remplie de nouvelles opportunités et de succès.💦",
        "💦Bonne année à toi, ma complice ! Que cette année soit remplie de rires et de bonheur.💦",
        "💦À mon meilleur ami, je te souhaite une année pleine de succès et de moments inoubliables.💦",
        "💦À ma meilleure amie, je te souhaite une année pleine de succès et de moments inoubliables.💦",
        "💦Que cette nouvelle année soit remplie de moments magiques avec toi, mon cher ami.💦",
        "💦Que cette nouvelle année soit remplie de moments magiques avec toi, ma chère amie.💦",
        "💦Que tous vos projets se réalisent cette année.💦",
        "💦Bonne année ! Que l'amour et la joie remplissent votre cœur.💦",
        "💦Que cette année soit douce et pleine de belles surprises.💦",
        "💦Puisse cette nouvelle année vous apporter sérénité et succès.💦",
        "💦Que cette année soit remplie de nouvelles opportunités et de succès.💦",
        "💦Bonne année à toutes les femmes programmeuses<⁄> 🚀 ! Que cette année soit remplie de nouvelles opportunités et de succès.💦",
        "💦Bonne année à mes collègues et camarades.💦",
        "💦Que chaque jour de cette nouvelle année soit rempli de bonheur.💦",
        "💦Que cette année soit une année de paix et de prospérité.💦",
        "💦Que cette nouvelle année vous apporte santé et bonheur.💦",
        "💦Que cette année soit marquée par la réussite et la joie.💦",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById('message');

    messageElement.style.opacity = 0;

    setTimeout(() => {
        messageElement.textContent = messages[randomIndex];
        messageElement.style.opacity = 2;
    }, 500);
});

let usedMessages = [];

document.getElementById('changeMessageButton').addEventListener('click', function () {
    if (usedMessages.length === messages.length) {
        usedMessages = [];
    }

    let newMessage;
    do {
        newMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (usedMessages.includes(newMessage));

    usedMessages.push(newMessage);
    messageElement.textContent = newMessage;
});

document.getElementById('shareWhatsApp').addEventListener('click', function () {
    const message = document.getElementById('message').textContent;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

document.getElementById('shareTwitter').addEventListener('click', function () {
    const message = document.getElementById('message').textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

document.getElementById('inviteFriendButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value;
    const message = `${name} vous souhaite une merveilleuse année 2025, vérifiez vous-même : ${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

function createFlowers() {
    const flowerContainer = document.getElementById('flowerContainer');
    flowerContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 2 + 's';
        flowerContainer.appendChild(flower);
    }
}

function launchConfetti() {
    confetti({
        particleCount: 500,
        spread: 90,
        origin: { y: 0.6 }
    });
}
