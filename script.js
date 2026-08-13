document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.header-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      const opened = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(opened));
      const label = toggle.querySelector('b');
      if (label) label.textContent = opened ? 'Закрыть' : 'Меню';
    });
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        const label = toggle.querySelector('b');
        if (label) label.textContent = 'Меню';
      });
    });
  }
  document.querySelectorAll('.signup-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = form.querySelector('button');
      if (button) button.textContent = 'Заявка принята ✓';
      let status = form.querySelector('.success');
      if (!status) {
        status = document.createElement('p');
        status.className = 'success';
        status.setAttribute('role', 'status');
        form.appendChild(status);
      }
      status.textContent = 'Спасибо! Подключите эту форму к сервису приёма заявок в настройках Tilda.';
    });
  });
});
