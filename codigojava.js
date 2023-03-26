

let hideText_btn = document.getElementById('hideText_btn');

let hide = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {

    hideText.classList.toggle('show');

    if (hide.classList.contains('show')) {
        hideText_btn.innerHTML = 'Ver menos';
    } 
    
    else {
        
        hideText_btn.innerHTML = 'Ver mas';
    }
}