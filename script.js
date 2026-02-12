// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Photo slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000);
}

showSlides();

// No button sliding away
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const celebration = document.getElementById('celebration');
const bgMusic = document.getElementById('bgMusic');

// Auto-play music on page load
bgMusic.play().catch(e => {
    // If autoplay fails, play on first interaction
    document.body.addEventListener('click', () => {
        bgMusic.play().catch(err => console.log('Audio play failed:', err));
    }, { once: true });
});

noBtn.addEventListener('mouseover', (e) => {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = window.innerWidth - btnRect.width - 40;
    const maxY = window.innerHeight - btnRect.height - 40;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

// Mobile touch support
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

yesBtn.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    
    // Typing effect
    const h1 = celebration.querySelector('h1');
    const p = celebration.querySelector('p');
    const h1Text = h1.textContent;
    const pText = p.textContent;
    
    h1.textContent = '';
    p.textContent = '';
    
    let i = 0;
    const typeH1 = setInterval(() => {
        if (i < h1Text.length) {
            h1.textContent += h1Text[i];
            i++;
        } else {
            clearInterval(typeH1);
            let j = 0;
            const typeP = setInterval(() => {
                if (j < pText.length) {
                    p.textContent += pText[j];
                    j++;
                } else {
                    clearInterval(typeP);
                }
            }, 50);
        }
    }, 80);
    
    // Create burst of hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
});
