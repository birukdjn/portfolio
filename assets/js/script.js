
document.addEventListener('DOMContentLoaded', () => {
  const humbergermenu = document.getElementById('bars');
  const closemenu = document.getElementById('close');
  const mobilenav = document.querySelector('.navbars');

  // Open menu
  humbergermenu.addEventListener('click', () => {
      mobilenav.classList.add('active');
      humbergermenu.classList.add('active'); // Correctly hide the hamburger menu
      closemenu.classList.add('active');   // Correctly show the close icon
  });

  // Close menu
  closemenu.addEventListener('click', () => {
      mobilenav.classList.remove('active');
      humbergermenu.style.display = 'block'; // Correctly show the hamburger menu
      closemenu.style.display = 'none';      // Correctly hide the close icon
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const barsIcon = document.getElementById("bars");
  const closeIcon = document.getElementById("close");
  
  if (window.innerWidth <= 768) {
      navbar.classList.add("collapsed");
      closeIcon.style.display = "none";
  }

  barsIcon.addEventListener("click", () => {
      navbar.classList.remove("collapsed");
      barsIcon.style.display = "none";
      closeIcon.style.display = "block";
  });
  
  closeIcon.addEventListener("click", () => {
      navbar.classList.add("collapsed");
      closeIcon.style.display = "none";
      barsIcon.style.display = "block";
  });
 });







