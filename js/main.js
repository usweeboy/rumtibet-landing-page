// Анимация скрытия меню
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-burger');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  })
}

// Плавный скролл до блоков
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})