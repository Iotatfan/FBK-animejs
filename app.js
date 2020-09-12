const allPaths = document.querySelectorAll('path');
const fubuki = document.querySelectorAll('.st1')
const fubukiPatth = document.querySelector('#fubuki path')
const blurs = document.querySelectorAll('.blur');

fubuki.forEach((part) => {
    part.style.opacity = 0
    part.setAttribute('stroke', '#8FCCC9')
    part.setAttribute('stroke-width', 0.1)
    part.setAttribute('fill', '#FFFFFF')
})

// fubuki.style.bottom = '-100%'

document.querySelectorAll('svg').forEach((svg) => {
	svg.style.display = 'block';
});

anime.timeline({
    // direction: 'alternate',
    // loop: true,

}).add({
    targets: fubuki,
    opacity: 1,
    fill: '#8FCCC9',
    // duration: 1200,
    delay: anime.stagger(50, {
        // easing: 'easeInBounce',
        from: 'center'
    }),
    // easing: 'easeInSine',
    complete: function() {
        console.log('FBK Show')
    }
}).add({
    targets: fubuki,
    duration: 1000,
    // translateX: 500,
    complete: function() {
        console.log('FBK Translate')
    }
})