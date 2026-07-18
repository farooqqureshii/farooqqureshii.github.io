(function() {
  function initMagnetButtons() {
    const widgets = document.querySelectorAll(".magnet-widget");
    
    widgets.forEach((widget) => {
      if (widget.__initialized) return;
      widget.__initialized = true;

      const stage = widget.querySelector(".button-stage");
      const buttons = widget.querySelectorAll(".magnet-btn");
      
      let stiffness = 120;
      let damping = 12;
      let range = 120;

      const stiffnessSlider = widget.querySelector(".stiffness-slider");
      const dampingSlider = widget.querySelector(".damping-slider");
      const rangeSlider = widget.querySelector(".range-slider");
      const shapeSelector = widget.querySelector(".shape-selector");
      
      const stiffnessVal = widget.querySelector(".stiffness-val");
      const dampingVal = widget.querySelector(".damping-val");
      const rangeVal = widget.querySelector(".range-val");

      if (stiffnessSlider) {
        stiffnessSlider.addEventListener("input", () => {
          stiffness = parseFloat(stiffnessSlider.value);
          stiffnessVal.textContent = stiffnessSlider.value;
        });
      }
      if (dampingSlider) {
        dampingSlider.addEventListener("input", () => {
          damping = parseFloat(dampingSlider.value);
          dampingVal.textContent = dampingSlider.value;
        });
      }
      if (rangeSlider) {
        rangeSlider.addEventListener("input", () => {
          range = parseFloat(rangeSlider.value);
          rangeVal.textContent = rangeSlider.value + "px";
        });
      }
      if (shapeSelector) {
        shapeSelector.addEventListener("change", () => {
          const shape = shapeSelector.value;
          buttons.forEach((btn) => {
            btn.classList.remove("rounded-full", "rounded-lg", "rounded-none");
            if (shape === "pill") {
              btn.classList.add("rounded-full");
            } else if (shape === "square") {
              btn.classList.add("rounded-none");
            } else if (shape === "circle") {
              btn.classList.add("rounded-full");
            }
          });
        });
      }
      
      const springs = new Map();
      
      buttons.forEach((btn) => {
        springs.set(btn, {
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          targetX: 0,
          targetY: 0
        });
      });

      let mouseX = 0;
      let mouseY = 0;
      let isInside = false;

      widget.addEventListener("mousemove", (e) => {
        const rect = widget.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        isInside = true;
      });

      widget.addEventListener("mouseleave", () => {
        isInside = false;
        buttons.forEach((btn) => {
          const spring = springs.get(btn);
          if (spring) {
            spring.targetX = 0;
            spring.targetY = 0;
          }
        });
      });

      let lastTime = performance.now();
      let raf = 0;

      function loop(now) {
        let dt = (now - lastTime) / 1000;
        if (dt > 0.1) dt = 0.1;
        lastTime = now;

        buttons.forEach((btn) => {
          const spring = springs.get(btn);
          if (!spring) return;

          if (isInside) {
            const btnRect = btn.getBoundingClientRect();
            const widgetRect = widget.getBoundingClientRect();
            
            const btnX = btnRect.left - widgetRect.left + btnRect.width / 2 - spring.x;
            const btnY = btnRect.top - widgetRect.top + btnRect.height / 2 - spring.y;

            const dx = mouseX - btnX;
            const dy = mouseY - btnY;
            const dist = Math.hypot(dx, dy);

            if (range > dist) {
              const pull = parseFloat(btn.dataset.strength || "0.55");
              const strength = (1 - dist / range);
              
              spring.targetX = dx * pull * strength;
              spring.targetY = dy * pull * strength;
            } else {
              spring.targetX = 0;
              spring.targetY = 0;
            }
          }

          const ax = -stiffness * (spring.x - spring.targetX) - damping * spring.vx;
          const ay = -stiffness * (spring.y - spring.targetY) - damping * spring.vy;

          spring.vx += ax * dt;
          spring.vy += ay * dt;
          
          spring.x += spring.vx * dt;
          spring.y += spring.vy * dt;

          btn.style.transform = "translate3d(" + spring.x.toFixed(2) + "px, " + spring.y.toFixed(2) + "px, 0)";
        });

        raf = requestAnimationFrame(loop);
      }

      raf = requestAnimationFrame(loop);

      widget.__destroy = () => {
        cancelAnimationFrame(raf);
      };
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMagnetButtons);
  } else {
    initMagnetButtons();
  }
  document.addEventListener("astro:after-swap", initMagnetButtons);
})();
