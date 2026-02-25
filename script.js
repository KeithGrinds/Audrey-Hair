document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mousemove', e=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const center = rect.width / 2;
const rotateY = (x - center) / 20;
card.style.transform = `rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener('mouseleave', ()=>{
card.style.transform = `rotateY(0) scale(1)`;
});
});
