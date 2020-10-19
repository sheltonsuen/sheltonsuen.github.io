window.addEventListener("load", () => {
  const demoClases = [
    "swa-flight_css-transiton-flying",
    "swa-flight_css-animation-flying",
    "swa-flight_web-animation-api-flying",
    "swa-flight_request-animation-frame-flying"
  ];
  const swaFlightImgs = [...document.getElementsByClassName("swa-flight")];

  const flyingUsingWebAnimationAPI = swaFlight => {
    const animation = swaFlight.animate(
      [
        { marginLeft: "0vw", marginBottom: "0vw" },
        { marginBottom: "0vw", offset: 0.5 },
        { marginLeft: "65vw", marginBottom: "25vh" }
      ],
      {
        duration: 8000,
        iterations: Infinity,
        easing: "cubic-bezier(0.51, 0.18, 0.79, 0.53)"
      }
    );

    animation.play();
  };

  const flyingUsingRequestAnimationFrame = swaFlight => {
    let start = 0;

    let speed = 0;
    let speedForHeight = 0;
    let journey = 0;
    let journeyForHeight = 0;
    const accelerator = 0.001;

    const step = timestamp => {
      if (start === 0) start = timestamp;

      speed += accelerator;
      journey += speed;
      swaFlight.style.marginLeft = `${journey}vw`;

      if (journey > 25) {
        speedForHeight += accelerator * 2;
        journeyForHeight += speedForHeight;
        swaFlight.style.marginBottom = `${journeyForHeight}vh`;
      }

      if (journey < 65) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  swaFlightImgs.forEach((swaFlight, index) => {
    swaFlight.addEventListener("click", () => {
      const demoClass = demoClases[index];
      demoClass && swaFlight.classList.add(demoClass);

      if (index === 2) flyingUsingWebAnimationAPI(swaFlight);
      if (index === 3) flyingUsingRequestAnimationFrame(swaFlight);
    });
  });
});
