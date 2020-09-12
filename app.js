const fubuki = document.querySelectorAll('.hide')
const names = document.querySelectorAll('#fubuki-text path:not(.inner-box)')

fubuki.forEach((part) => {
    part.style.opacity = 0
})

names.forEach((name) => {
    name.setAttribute('stroke', '#000000')
    name.setAttribute('stroke-width', 1)
})

document.querySelectorAll('svg').forEach((svg) => {
	svg.style.display = 'block';
});

anime.timeline({
    // direction: 'alternate',
    // loop: true,

}).add({
    targets: fubuki,
    opacity: 1,
    delay: anime.stagger(5, {
        from: 'center'
    }),
    complete: function() {
        console.log('Show Fubuki')
    }
}).add({
    targets: names,
    strokeDashoffset: [anime.setDashoffset, 0],
    fill: '#000',
    duration: 2000,
    easing: 'easeInOutSine',
    delay: anime.stagger(100),
    complete: function() {
        console.log('Show Text')
    }
})