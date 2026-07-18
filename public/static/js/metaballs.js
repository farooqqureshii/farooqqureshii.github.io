(function() {
  function initMetaballs() {
    const widgets = document.querySelectorAll(".metaballs-widget");
    
    widgets.forEach((widget) => {
      if (widget.__initialized) return;
      widget.__initialized = true;

      const canvas = widget.querySelector(".metaballs-canvas");
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      let w = canvas.width = canvas.parentElement.clientWidth;
      let h = canvas.height = canvas.parentElement.clientHeight;

      let viscosity = 10;
      let attraction = 0.12;
      let stiffness = 0.12;
      let text = "CRAFT";

      const wordInput = widget.querySelector(".word-input");
      const viscositySlider = widget.querySelector(".viscosity-slider");
      const attractionSlider = widget.querySelector(".attraction-slider");
      const stiffnessSlider = widget.querySelector(".stiffness-slider");
      const viscosityVal = widget.querySelector(".viscosity-val");
      const attractionVal = widget.querySelector(".attraction-val");
      const stiffnessVal = widget.querySelector(".stiffness-val");
      const resetBtn = widget.querySelector(".reset-btn");

      if (viscositySlider) {
        viscositySlider.addEventListener("input", () => {
          viscosity = parseFloat(viscositySlider.value);
          viscosityVal.textContent = viscositySlider.value + "px";
          canvas.style.setProperty("--blur-px", viscosity + "px");
        });
      }
      if (attractionSlider) {
        attractionSlider.addEventListener("input", () => {
          attraction = parseFloat(attractionSlider.value);
          attractionVal.textContent = attractionSlider.value;
        });
      }
      if (stiffnessSlider) {
        stiffnessSlider.addEventListener("input", () => {
          stiffness = parseFloat(stiffnessSlider.value);
          stiffnessVal.textContent = stiffnessSlider.value;
          particles.forEach(p => p.stiffness = stiffness + (Math.random() - 0.5) * 0.04);
        });
      }
      if (wordInput) {
        wordInput.addEventListener("input", () => {
          text = wordInput.value.toUpperCase() || "CRAFT";
          initParticles();
        });
      }
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          initParticles();
        });
      }

      const resize = () => {
        w = canvas.width = canvas.parentElement.clientWidth;
        h = canvas.height = canvas.parentElement.clientHeight;
        initParticles();
      };
      
      const ro = new ResizeObserver(resize);
      ro.observe(canvas.parentElement);

      let particles = [];
      
      function initParticles() {
        particles = [];
        ctx.font = "900 " + Math.min(w * 0.16, 96) + "px system-ui, -apple-system, sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        
        ctx.fillStyle = "#fff";
        ctx.clearRect(0, 0, w, h);
        ctx.fillText(text, w / 2, h / 2);
        
        const imgData = ctx.getImageData(0, 0, w, h);
        const step = Math.max(2, Math.floor(w / 380));
        
        const points = [];
        for (let y = 0; h > y; y += step) {
          for (let x = 0; w > x; x += step) {
            const alpha = imgData.data[(y * w + x) * 4 + 3];
            if (alpha > 120) {
              points.push({ x, y });
            }
          }
        }
        
        const maxParticles = Math.min(points.length, 360);
        const stepSize = Math.max(1, Math.floor(points.length / maxParticles));
        
        for (let i = 0; points.length > i; i += stepSize) {
          const pt = points[i];
          if (!pt) continue;
          particles.push({
            x: pt.x + (Math.random() - 0.5) * 40,
            y: pt.y + (Math.random() - 0.5) * 40,
            homeX: pt.x,
            homeY: pt.y,
            vx: 0,
            vy: 0,
            r: 7 + Math.random() * 12,
            stiffness: stiffness + (Math.random() - 0.5) * 0.04,
            damping: 0.82 + Math.random() * 0.05
          });
        }
        
        ctx.clearRect(0, 0, w, h);
      }

      initParticles();

      let mouse = { x: -9999, y: -9999, active: false, dragging: false };
      
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
        mouse.dragging = false;
      });

      canvas.addEventListener("mousedown", (e) => {
        getMouseCoords(e);
        mouse.dragging = true;
      });

      canvas.addEventListener("mouseup", () => {
        mouse.dragging = false;
      });

      canvas.addEventListener("touchmove", (e) => {
        if (e.touches[0]) {
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.touches[0].clientX - rect.left;
          mouse.y = e.touches[0].clientY - rect.top;
          mouse.active = true;
        }
      });
      canvas.addEventListener("touchstart", (e) => {
        if (e.touches[0]) {
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.touches[0].clientX - rect.left;
          mouse.y = e.touches[0].clientY - rect.top;
          mouse.active = true;
          mouse.dragging = true;
        }
      });
      canvas.addEventListener("touchend", () => {
        mouse.active = false;
        mouse.dragging = false;
      });

      let raf = 0;
      
      function update() {
        ctx.fillStyle = "#09090b";
        ctx.fillRect(0, 0, w, h);

        for (let i = 0; particles.length > i; i++) {
          const p = particles[i];
          
          let ax = (p.homeX - p.x) * p.stiffness;
          let ay = (p.homeY - p.y) * p.stiffness;

          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            
            const pullRadius = mouse.dragging ? 160 : 75;
            if (pullRadius > dist) {
              const strength = mouse.dragging ? 0.38 : attraction;
              const force = (1 - dist / pullRadius) * strength;
              ax += dx * force;
              ay += dy * force;
            }
          }

          p.vx = (p.vx + ax) * p.damping;
          p.vy = (p.vy + ay) * p.damping;
          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = "#c084fc";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

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
    document.addEventListener("DOMContentLoaded", initMetaballs);
  } else {
    initMetaballs();
  }
  document.addEventListener("astro:after-swap", initMetaballs);
})();
