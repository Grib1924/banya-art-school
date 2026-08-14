document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.header-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      const open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      const label = toggle.querySelector('b');
      if (label) label.textContent = open ? 'Закрыть' : 'Меню';
    });
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { panel.classList.remove('is-open'); });
    });
  }
  document.querySelectorAll('.signup-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = form.querySelector('button');
      if (button) button.textContent = 'Заявка принята ✓';
      let status = form.querySelector('.success');
      if (!status) { status = document.createElement('p'); status.className = 'success'; form.appendChild(status); }
      status.textContent = 'Спасибо! Перед публикацией подключите форму к Tilda Forms или CRM.';
    });
  });
});