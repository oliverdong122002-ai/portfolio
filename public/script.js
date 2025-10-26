const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
  card.addEventListener('click', () => {
    const dropdown = card.querySelector('.hobby-dropdown');

    if(dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
      card.classList.remove('open');
    } else {
      // Close other open dropdowns
      hobbyCards.forEach(c => {
        c.querySelector('.hobby-dropdown').style.display = 'none';
        c.classList.remove('open');
      });
      dropdown.style.display = 'block';
      card.classList.add('open');
    }
  });
});
