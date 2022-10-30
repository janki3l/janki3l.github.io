import { CountUp } from "https://github.com/janki3l/janki3l.github.io/tree/main/node_modules/countup.js/dist/countUp.js";
// make navbar smaller
AOS.init();

// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

if (document.querySelector("body").classList.contains("main-page")) {
  // delay
  let throttlePause;
  const throttle = (callback, time) => {
    if (throttlePause) return;

    throttlePause = true;
    setTimeout(() => {
      callback();
      throttlePause = false;
    }, time);
  };

  // scroll
  const onscroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementsByClassName("navibar")[0].classList.add("scrolled");
    } else {
      document
        .getElementsByClassName("navibar")[0]
        .classList.remove("scrolled");
    }

    let current = "";
    let height = menu.offsetHeight;
    secs.forEach((sec) => {
      const secTop = sec.offsetTop - 2 * height;
      const secH = sec.clientHeight;
      if (scrollY >= secTop) {
        current = sec.getAttribute("id");
      }
    });
    navClass.forEach((a) => {
      a.classList.remove("active");
      const href = a.href.split("#").pop();
      if (current == href) {
        a.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", () => {
    throttle(onscroll, 300);
  });

  // smooth scroll
  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        top: -140,
        behavior: "smooth",
      });
    });
  });

  // active section
  const secs = document.querySelectorAll(
    "div#mp, div#news, div#about-me, div#seym, div#contact"
  );
  const navClass = document.querySelectorAll(
    ".navi-menu .navi-item .navi-link"
  );
  let menu = document.querySelector(".navibar");

  document.querySelectorAll(".navi-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

let buttons = document.querySelectorAll(".show-more");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let content = e.target.closest(".bt").querySelector(".more-text");
    let closeme = content.classList.contains("open");
    content.classList.toggle("open");
    let changeValue = button.getAttribute("data-change");
    if (changeValue != "false") {
      e.currentTarget.querySelector("span").innerText = closeme
        ? "POKAŻ WIĘCEJ"
        : "POKAŻ MNIEJ";
    }
    let att = closeme
      ? ["0 2 13 10", "M 1 5 L 1 5 L 5 9 L 9 5 L 5 9"]
      : ["0 -2 13 10", "M 1 5 L 1 5 L 5 1 L 9 5 L 5 1"];
    e.currentTarget.querySelector(".icon").setAttribute("viewBox", att[0]);
    e.currentTarget.querySelector(".icon path").setAttribute("d", att[1]);
  })
);

const numbers = [
  {
    id: "speeches",
    suffix: "",
  },
  {
    id: "par-ip",
    suffix: "",
  },
  {
    id: "attd",
    suffix: "%",
  },
];
numbers.forEach((element) => {
  try {
    new CountUp(element.id, document.getElementById(element.id).innerHTML, {
      enableScrollSpy: true,
      useEasing: true,
      duration: 5,
      scrollSpyOnce: true,
      suffix: element.suffix,
    });
  } catch (error) {
    console.error("Nastąpił problem z ładowaniem cyfr.");
  }
});
