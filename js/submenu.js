const t_btn = document.getElementById('t_btn');
const c_btn = document.querySelector('.fa-times');
const navi = document.getElementById('navi');
const menu = document.querySelectorAll('.gnb > li > a');


t_btn.addEventListener('click', function() {
  navi.style.left = '0px';
});

c_btn.addEventListener('click', function() {
  navi.style.left = '-100%';
});


menu.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const subm = item.nextElementSibling;

    if(menu && subm.classList.contains('submenu')) {
      e.preventDefault();
      subm.classList.toggle('active');

      const icon = item.querySelector('.fa-angle-down');
      if(icon) {
        icon.classList.toggle('rotate');
      }
    }
  });
});