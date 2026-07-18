(function() {
  function initHalftone() {
    const widgets = document.querySelectorAll(".halftone-widget");
    
    widgets.forEach((widget) => {
      if (widget.__initialized) return;
      widget.__initialized = true;

      const canvas = widget.querySelector(".halftone-canvas");
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      let w = canvas.width = canvas.parentElement.clientWidth;
      let h = canvas.height = canvas.parentElement.clientHeight;

      let spacing = 16;
      let lensRadius = 120;
      let forceFactor = -0.35;
      let renderStyle = "dot";

      const spacingSlider = widget.querySelector(".spacing-slider");
      const radiusSlider = widget.querySelector(".radius-slider");
      const forceSlider = widget.querySelector(".force-slider");
      const styleSelector = widget.querySelector(".style-selector");

      const spacingVal = widget.querySelector(".spacing-val");
      const radiusVal = widget.querySelector(".radius-val");
      const forceVal = widget.querySelector(".force-val");

      if (spacingSlider) {
        spacingSlider.addEventListener("input", () => {
          spacing = parseInt(spacingSlider.value);
          spacingVal.textContent = spacingSlider.value + "px";
          setupGrid();
        });
      }
      if (radiusSlider) {
        radiusSlider.addEventListener("input", () => {
          lensRadius = parseFloat(radiusSlider.value);
          radiusVal.textContent = radiusSlider.value + "px";
        });
      }
      if (forceSlider) {
        forceSlider.addEventListener("input", () => {
          forceFactor = parseFloat(forceSlider.value);
          const type = forceFactor < 0 ? "Push" : "Pull";
          forceVal.textContent = forceFactor.toFixed(2) + " (" + type + ")";
        });
      }
      if (styleSelector) {
        styleSelector.addEventListener("change", () => {
          renderStyle = styleSelector.value;
        });
      }

      const resize = () => {
        w = canvas.width = canvas.parentElement.clientWidth;
        h = canvas.height = canvas.parentElement.clientHeight;
        setupGrid();
      };
      
      const ro = new ResizeObserver(resize);
      ro.observe(canvas.parentElement);

      let nodes = [];
      
      function setupGrid() {
        nodes = [];
        for (let y = spacing / 2; h > y; y += spacing) {
          for (let x = spacing / 2; w > x; x += spacing) {
            nodes.push({
              x,
              y,
              homeX: x,
              homeY: y,
              vx: 0,
              vy: 0,
              size: 0
            });
          }
        }
      }

      setupGrid();

      let mouse = { x: -9999, y: -9999, active: false };

      const getMouseCoords = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      canvas.addEventListener("mousemove", (e) => {
        getMouseCoords(e);
        mouse.active = true;
      });

      canvas.addEventListener("mouseleave", () => {
        mouse.active = false;
      });

      canvas.addEventListener("touchmove", (e) => {
        if (e.touches[0]) {
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.touches[0].clientX - rect.left;
          mouse.y = e.touches[0].clientY - rect.top;
          mouse.active = true;
        }
      });
      canvas.addEventListener("touchend", () => {
        mouse.active = false;
      });

      let raf = 0;
      const stiffness = 0.08;
      const damping = 0.85;

      const asciiChars = ["#", "W", "M", "$", "O", "X", "+", ":", ".", " "];

      function update() {
        ctx.fillStyle = "#09090b";
        ctx.fillRect(0, 0, w, h);

        nodes.forEach((node) => {
          let ax = (node.homeX - node.x) * stiffness;
          let ay = (node.homeY - node.y) * stiffness;

          let targetSize = 2;

          if (mouse.active) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.hypot(dx, dy);

            if (lensRadius > dist) {
              const strength = 1 - dist / lensRadius;
              
              ax += dx * forceFactor * strength;
              ay += dy * forceFactor * strength;
              
              targetSize = 2 + strength * (spacing * 0.72);
            }
          }

          node.vx = (node.vx + ax) * damping;
          node.vy = (node.vy + ay) * damping;
          node.x += node.vx;
          node.y += node.vy;
          
          node.size += (targetSize - node.size) * 0.1;

          ctx.fillStyle = "#10b981";

          if (renderStyle === "dot") {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (renderStyle === "square") {
            ctx.fillRect(
              node.x - node.size / 2,
              node.y - node.size / 2,
              node.size,
              node.size
            );
          } else if (renderStyle === "ascii") {
            const density = Math.min(
              Math.floor((node.size / (spacing * 0.75)) * asciiChars.length),
              asciiChars.length - 1
            );
            const char = asciiChars[asciiChars.length - 1 - density];

            ctx.font = "bold " + Math.max(10, node.size) + "px monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(char, node.x, node.y);
          }
        });

        raf = requestAnimationFrame(update);
      }

      update();

      widget.__destroy = () => {
        ro.disconnect();
        cancelAnimationFrame(raf);
      };
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHalftone);
  } else {
    initHalftone();
  }
  document.addEventListener("astro:after-swap", initHalftone);
})();
