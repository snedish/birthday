function showBirthdayPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
    
    // Start cracker animations immediately
    setTimeout(() => {
        createCrackers();
    }, 300);
    
    // Continue creating crackers periodically
    setInterval(() => {
        createCrackers();
    }, 2500);
}

function shakeCard() {
    const card = document.querySelector('#page1 .card');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
}

function createCrackers() {
    const colors = ['#FFD700', '#FF69B4', '#FF1493', '#FF6347', '#9370DB', '#32CD32', '#00CED1', '#FFA500'];
    const numberOfCrackers = 60;

    for (let i = 0; i < numberOfCrackers; i++) {
        setTimeout(() => {
            const cracker = document.createElement('div');
            cracker.className = 'cracker';
            
            // Random starting position
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            
            cracker.style.left = startX + 'px';
            cracker.style.top = startY + 'px';
            cracker.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Random trajectory
            const tx = (Math.random() - 0.5) * 600;
            const ty = (Math.random() - 0.5) * 600;
            cracker.style.setProperty('--tx', tx + 'px');
            cracker.style.setProperty('--ty', ty + 'px');
            
            cracker.style.animation = 'explode 1.2s ease-out forwards';
            
            document.body.appendChild(cracker);
            
            // Remove after animation
            setTimeout(() => {
                cracker.remove();
            }, 1200);
        }, i * 15);
    }
}
