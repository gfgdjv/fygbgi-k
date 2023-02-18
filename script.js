let btn = document.querySelector('.btn');
let inv  = document.querySelector('.invisible');
let vis = document.querySelector('.visible')

btn.addEventListener('click', function() { 
    vis.style.display = 'none';
    inv.style.display = 'flex';
})