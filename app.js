const fubuki = document.querySelectorAll('#fubuki path')
const names = document.querySelectorAll('#fubuki-text path:not(.inner-box)')
const innerBox = document.querySelectorAll('.inner-box')

fubuki.forEach((part) => {
    part.style.opacity = 0
})

names.forEach((name) => {
    name.setAttribute('stroke', '#477786')
    name.setAttribute('stroke-width', 2)
})

innerBox.forEach((line) => {
    line.setAttribute('stroke', '#477786')
    line.setAttribute('stroke-width', 2)
})

document.querySelectorAll('svg').forEach((svg) => {
	svg.style.display = 'block';
});

var fubukiTl = anime.timeline()

fubukiTl.add({
    targets: fubuki,
    opacity: 1,
    delay: anime.stagger(1, {
        from: 'center'
    }),
    complete: function() {
        console.log('Show Fubuki')
    }
}).add({
    targets: innerBox,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    complete: function() {
        console.log('Show Text')
    }
}).add({
    targets: names,
    strokeDashoffset: [anime.setDashoffset, 0],
    fill: '#D6F3EA',
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true,
    complete: function() {
        console.log('Show Text')
    }
})