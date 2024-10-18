const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');

envelope.addEventListener('click', () => {
    envelope.classList.add('hidden'); 
    letterContent.classList.remove('hidden'); 
    letterContent.classList.add('visible');  
});

const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

const yesBtn = document.getElementById('yesBtn');
const confettiContainer = document.getElementById('confetti-container');
const floatingText = document.getElementById('floatingText');

yesBtn.addEventListener('click', () => {
    letterContent.classList.add('hidden');  

    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    
    setTimeout(() => {
        floatingText.classList.remove('hidden');
    }, 500);
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    const colors = ['#ff6666', '#ffcc66', '#66ff66', '#66ccff', '#ff66cc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = randomColor;
    
    const randomX = Math.random() * 100; 
    confetti.style.left = `${randomX}vw`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
