

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
  
    // Build the navigation menu
    function buildNavigation() {
      sections.forEach(section => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.textContent = section.getAttribute('data-nav');
        listItem.appendChild(link);
        navList.appendChild(listItem);
  
        // Add click event listener to each navigation link
        link.addEventListener('click', function (event) {
          event.preventDefault();
          scrollToSection(section.id);
          setActiveLink(link);
        });
      });
    }
  
    // Scroll to the specified section
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Add active class to the clicked link and remove it from others
    function setActiveLink(clickedLink) {
      const links = document.querySelectorAll('#navbar__list a');
      links.forEach(link => {
        if (link === clickedLink) {
          link.classList.add('active-link');
        } else {
          link.classList.remove('active-link');
        }
      });
    }
  
    // Add active class to the section in view
    function setActiveSection() {
      const scrollPosition = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          section.classList.add('your-active-class');
          setActiveLink(document.querySelector(`#navbar__list a[href="#${section.id}"]`));
        } else {
          section.classList.remove('your-active-class');
        }
      });
    }
  
    // Update the active state on scroll
    window.addEventListener('scroll', setActiveSection);
  
    // Build the navigation menu when the DOM is fully loaded
    buildNavigation();
  });
  
  
  

  