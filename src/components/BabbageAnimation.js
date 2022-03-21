import { TimelineLite } from "gsap";

function BabbageAnimation() {
  window.onload = function () {
    var tl = new TimelineLite({ delay: 1 }),
      firstBg = document.querySelectorAll(".text__first-bg"),
      secBg = document.querySelectorAll(".text__second-bg"),
      word = document.querySelectorAll(".text__word");

    tl.to(firstBg, 0.2, { scaleX: 1 })
      .to(secBg, 0.2, { scaleX: 1 })
      .to(word, 0.1, { opacity: 1 }, "-=0.1")
      .to(firstBg, 0.2, { scaleX: 0 })
      .to(secBg, 0.2, { scaleX: 0 });

    document.querySelector(".restart").onclick = function () {
      tl.restart();
    };
  };
  return (
    <div>
      <p className="text">
        {" "}
        <span className="text__first">
          <span className="text__word">Hello</span>
          <span className="text__first-bg"></span>
        </span>
        <br />
        <span className="text__second">
          <span className="text__word">World</span>
          <span className="text__second-bg"></span>
        </span>
      </p>
      <button className="restart">repeat</button>
    </div>
  );
}

export default BabbageAnimation;
