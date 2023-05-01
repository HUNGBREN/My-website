
function handle_mobile_nav() {
    let btn = document.querySelector('#nav-trigger'),
        nav = document.querySelector('#header nav'),
        overlay= document.createElement('div');

    overlay.classList.add('overlay');
    btn.addEventListener('click', function() {
        nav.classList.add('show');
        document.body.appendChild(overlay);
    });
    overlay.addEventListener('click', function(e) {
        e.target.remove();
        nav.classList.remove('show');
    });
    nav.querySelectorAll('li').forEach(function(li) {
        li.addEventListener('click', function() {
            //check xem thẻ li có menu con bên trong hay ko
            
        });
    });
}
handle_mobile_nav();