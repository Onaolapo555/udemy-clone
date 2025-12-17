//  Nav bar for mobile burger button 

        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('menu-overlay');

        // Toggle Menu
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close Menu when clicking the dark overlay
        overlay.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
 
 
 
 // Select all accordion buttons
        const accordions = document.querySelectorAll('.accordion-btn');

        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                // 1. Toggle the icon rotation
                const icon = this.querySelector('i');
                icon.classList.toggle('rotate-180');
                
                // 2. Change text color to blue when active (optional aesthetic choice)
                const text = this.querySelector('span');
                // text.classList.toggle('text-blue-600');

                // 3. Handle the contentf panel
                const contentf = this.nextElementSibling;
                
                if (contentf.style.maxHeight) {
                    // If it is open, close it
                    contentf.style.maxHeight = null;
                    contentf.classList.remove('open');
                } else {
                    // If it is closed, open it to its specific scrollHeight
                    contentf.style.maxHeight = contentf.scrollHeight + "px";
                    contentf.classList.add('open');
                }
            });
        });










        // comments sliders
        const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // Scroll amount: Width of card + gap (approx 384px + 24px)
        const scrollAmount = 400; 

        nextBtn.addEventListener('click', () => {
            slider.scrollLeft += scrollAmount;
            checkButtons();
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollLeft -= scrollAmount;
            checkButtons();
        });

        // Optional: Hide/Show buttons based on scroll position
        const checkButtons = () => {
            // Small timeout to allow scroll to complete
            setTimeout(() => {
                if (slider.scrollLeft <= 0) {
                    prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            }, 500);
        };

        // Initial check
        checkButtons();



   
        
        // FOOTER ACCORDION 
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-btn1");
  const breakpoint = 1024;

  const closeAll = () => {
    document.querySelectorAll(".accordion-contents").forEach(c => {
      c.style.maxHeight = c.style.opacity = "0";
      c.style.visibility = "hidden";
      c.previousElementSibling.querySelector("i")?.classList.remove("rotate-180");
    });
  };

  const toggle = (e) => {
    const btn = e.currentTarget;
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector("i");
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    closeAll(); // close others first

    if (isOpen) {
      content.style.maxHeight = content.style.opacity = "0";
      content.style.visibility = "hidden";
      arrow.classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      arrow.classList.add("rotate-180");
    }
  };

  const update = () => {
    const isDesktop = window.innerWidth >= breakpoint;

    document.querySelectorAll(".border-b").forEach(item => {
      item.classList.toggle("lg:col-span-1", isDesktop);
    });

    document.querySelectorAll(".accordion-contents").forEach(content => {
      if (isDesktop) {
        content.style.maxHeight = "1000px";
        content.style.opacity = "1";
        content.style.visibility = "visible";
      } else if (!content.style.maxHeight || content.style.maxHeight === "1000px") {
        content.style.maxHeight = content.style.opacity = "0";
        content.style.visibility = "hidden";
      }
    });

    buttons.forEach(btn => {
      btn.classList.toggle("cursor-default", isDesktop);
      btn.classList.toggle("pointer-events-none", isDesktop);
      btn.querySelector("i")?.classList.toggle("hidden", isDesktop);
      btn.onclick = isDesktop ? null : toggle;
    });
  };

  // Initial + resize (debounced)
  update();
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(update, 100);
  });
});


///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('[id^= "section"]');
console.log(allSections);

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.20,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

