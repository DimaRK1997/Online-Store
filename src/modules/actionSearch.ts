const btn: HTMLElement = document.querySelector('.search-icon');
const input: HTMLElement = document.querySelector('.search-input');

btn.addEventListener('click', () => {
  input.classList.toggle('active');
});
