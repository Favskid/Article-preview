const hideSection = document.getElementById('hide-section');
const showSection = document.getElementById('show-section');
const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', (event) => {
    event.stopPropagation();
  if (window.matchMedia("(max-width: 450px)").matches) {
    // Mobile view
    showSection.style.display = 'none';
    hideSection.style.display = 'block';
  } else if (window.matchMedia("(min-width: 450px)").matches) {
    // Desktop view
    showSection.style.display = 'block';
    hideSection.style.display = 'block';
  }
});


document.addEventListener('click', () => {
    showSection.style.display = 'block';
  hideSection.style.display = 'none';
});