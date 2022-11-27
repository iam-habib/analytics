/* rocket animation */

function rocket() {
  const rocket = document.querySelector(".sky-rocket-container");

  let windowHeight = window.innerHeight;
  let rocketTop = rocket.getBoundingClientRect().top;
  let Rocketvisible = 0;
  if (rocketTop < windowHeight - Rocketvisible) {
    rocket.classList.add("active");
  } else {
    rocket.classList.remove("active");
  }
}
window.addEventListener("scroll", rocket);

/* counter animation */
const followCount = document.querySelector(".socialjetski-follow-count");
const likesCount = document.querySelector(".socialjetski-likes-count");
const viewsCount = document.querySelector(".socialjetski-views-count");
const customersCount = document.querySelector(".socialjetski-customers-count");
const countersSocialjetski = document.querySelectorAll(".counter-sj");

const speed = 200;

countersSocialjetski.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.textContent;

    let time = target / speed;

    if (count < target) {
      counter.textContent = Math.floor(count + time);
      setTimeout(updateCount, 1);
    } else {
      counter.textContent = target.toLocaleString();
    }
  };

  /* if in view then run */
  function startAnimation() {
    if (inVW()) {
      updateCount();
    }
  }

  window.addEventListener("scroll", startAnimation);
});

/* if element is in view */
function inVW() {
  const element = document.querySelector(".socialjetski-counter");

  let counterPosition = element.getBoundingClientRect().top;

  if (counterPosition < window.innerHeight) {
    return true;
  } else {
    return false;
  }
}

// function counterAnimation(element, start, end, duration) {
//   let startTS;
//   const step = (timestamp) => {
//     if (!startTS) {
//       startTS = timestamp;
//     }

//     const progress = Math.min((timestamp - startTS) / duration, 1);

//     element.textContent = Math.floor(
//       progress * (end - start) + start
//     ).toLocaleString();

//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };

//   window.requestAnimationFrame(step);
// }
// function startAnimation() {
//   if (inVW()) {
//     counterAnimation(followCount, 0, 5863957, 5000);
//     counterAnimation(likesCount, 0, 32673195, 5000);
//     counterAnimation(viewsCount, 0, 71964164, 5000);
//     counterAnimation(customersCount, 0, 264759, 5000);
//   }
// }

/* mobile nav */
const navOpen = document.querySelector(".mobile-nav-open");
const navClose = document.querySelector(".mobile-nav-close");

const navItems = document.querySelector(".nav-list");

/* open mobile menu*/

navOpen.addEventListener("click", function () {
  navOpen.classList.add("hide");
  navClose.classList.remove("hide");
  navItems.classList.add("visible");
});

/* close mobile menu*/

navClose.addEventListener("click", function () {
  navClose.classList.add("hide");
  navOpen.classList.remove("hide");
  navItems.classList.remove("visible");
});
