
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


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    message();
    });

function message() {
    const form = document.getElementById("contact-form");
    const successDiv = document.getElementById("success-message");
    alert("Your message has been sent successfully!");
    form.reset();
    form.style.display = "none";
    
    successDiv.innerHTML = "Your message has been sent successfully!";
    successDiv.style.display = "block";
    successDiv.style.color = "green";
    successDiv.style.fontSize = "20px";
    successDiv.style.textAlign = "center";
    successDiv.style.marginTop = "20px";
    successDiv.style.padding = "10px 30px";
    successDiv.style.border = "1px solid green";
    successDiv.style.borderRadius = "5px";
    successDiv.style.backgroundColor = "#f0fff0"; // Light green background
    successDiv.style.boxShadow = "0 0 10px rgb(0, 255, 0)"; // Green shadow
    successDiv.style.transition = "all .6s ease-in-out"; // Smooth transition
    successDiv.style.opacity = "1"; // Make it visible
    successDiv.style.transform = "scale(1.5)"; // Slightly enlarge the message
    setTimeout(() => {
        successDiv.style.opacity = "0"; // Fade out
        successDiv.style.transform = "scale(1)"; // Reset scale
    }, 4000); // Wait for 3 seconds before fading out
    setTimeout(() => {
        successDiv.style.display = "none"; // Hide the message after fading out
        form.style.display = "block"; // Show the form again
    }, 6000); // Wait for 4 seconds before hiding the message
    setTimeout(() => {
        successDiv.innerHTML = ""; // Clear the message
    }, 5000); // Wait for 5 seconds before clearing the message
}



// Function to update the footer greeting based on time of day
function updateFooterGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
    greeting = "Good morning! ☀️";
    } else if (hour < 18) {
    greeting = "Good afternoon! 🌤️";
    } else {
    greeting = "Good evening! 🌙";
    }
    
    // Add current year to copyright
    document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Biruk Dejene. All rights reserved.`;
    
    // Update the greeting in the middle section
    const greetingElement = document.querySelector('.footer-section h4');
    if (greetingElement) {
    greetingElement.innerHTML = greeting;
    
      // Add a small animation effect
    greetingElement.style.opacity = 0;
    setTimeout(() => {
        greetingElement.style.transition = 'opacity 0.5s ease';
        greetingElement.style.opacity = 1;
    }, 100);
    }
}

  // Call the function when page loads
document.addEventListener('DOMContentLoaded', updateFooterGreeting);

  // Update greeting every minute in case page stays open
setInterval(updateFooterGreeting, 60000);





  // Function to display daily plan with progress
function showDailyPlan() {
    const plan = [
    { name: "Pray", emoji: "🙏", hours: 2 },
    { name: "Exercise", emoji: "🏋️", hours: 2 },
    { name: "Read", emoji: "📚", hours: 2 },
    { name: "Eat", emoji: "🍎", hours: 2 },
    { name: "Code", emoji: "💻", hours: 7 },
    { name: "Sleep", emoji: "😴", hours: 6 },
    { name: "Enjoy", emoji: "🎉", hours: 4 }
    ];

    const totalHours = plan.reduce((sum, item) => sum + item.hours, 0);
    const now = new Date();
    const currentHour = now.getHours();
    
    // Calculate current activity based on hour
    let currentActivity = "";
    let accumulatedHours = 0;
    
    for (const activity of plan) {
    accumulatedHours += activity.hours;
    if (currentHour < accumulatedHours) {
        currentActivity = activity;
        break;
    }
    }

    // Create HTML for the plan
    let planHTML = `
    <div class="daily-plan">
        <h3>My Daily Rhythm</h3>
        <div class="plan-current">
        Currently: <span class="highlight">${currentActivity.emoji} ${currentActivity.name}</span>
        </div>
        <div class="plan-visual">
    `;

    plan.forEach(activity => {
      const widthPercent = (activity.hours / totalHours) * 100;
    planHTML += `
        <div class="plan-item" style="width:${widthPercent}%" 
            title="${activity.name}: ${activity.hours} hours">
        ${activity.emoji}
        </div>
    `;
    });

    planHTML += `
        </div>
        <div class="plan-legend"> 
        ${plan.map(a => `${a.emoji} ${a.name}`).join(' • ')}
        </div>
    </div>
    `;

    // Insert into footer
    const middleSection = document.querySelector('.footer-section h4').parentElement;
    middleSection.innerHTML = planHTML;
}

  // Call when page loads
document.addEventListener('DOMContentLoaded', showDailyPlan);

document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.querySelector('.back-to-top');
  
  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  // Smooth scroll to top
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});