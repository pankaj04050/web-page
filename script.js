function crossfn() {
    const menuButton = document.querySelector('.bar');
    const navLinks = document.querySelector('.nav-links');
  
    menuButton.classList.toggle('cross');
    navLinks.classList.toggle('show');
  }
  
  // Close the mobile menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      const menuButton = document.querySelector('.bar');
  
      navLinks.classList.remove('show');
      menuButton.classList.remove('cross');
    });
  });

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[harf*=' + id +']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}


const textElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('curso');
const roles = ['Student', 'Web Developer', 'Coder'];
let roleIndex = 0;
let charIndex = 0;
function typeText() {
  const currentRole = roles[roleIndex];
  textElement.textContent = currentRole.slice(0, charIndex);
  charIndex++;
  
  if (charIndex > currentRole.length) {
    charIndex = 0;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 1000); // Pause before starting the next role
  } else {
    setTimeout(typeText, 200); // Adjust typing speed here
  }
}

// Start typing animation
typeText();

