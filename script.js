const innerEl = document.querySelector(".marquee__inner");
const innerWidth = innerEl.offsetWidth;
console.log(innerWidth);
function animateMarquee(duration) {
  const cloneEl = innerEl.cloneNode(true);
  console.log(cloneEl);
  // el.appendChild(innerEl.nodeValue);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
      return;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    // cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}

const marquee1 = document.querySelector("#marquee1");

const btn = document.querySelector(".ticker-start");

btn.addEventListener("click", (e) => {
  const speed = document.querySelector(".ticker-speed").value * 1000;
  const text = document.querySelector(".textarea").value;
  innerEl.innerHTML = text;
  innerEl.style.transform = "none";
  setTimeout(() => {
    animateMarquee(speed);
  }, 3000);
});
