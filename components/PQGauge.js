import React, { useEffect } from 'react';

export default function PQGauge({ score }) {
  useEffect(() => {
    const totalDots = 30;
    const filledCount = Math.round((score / 100) * totalDots);
    const svg = document.getElementById("dotGauge");
    if (!svg) return;

    svg.innerHTML = ""; // Clear previous

    const radius = 120;
    const centerX = 150;
    const centerY = 140;
    const dots = [];

    for (let i = totalDots - 1; i >= 0; i--) {
      const angle = Math.PI * (i / (totalDots - 1));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY - radius * Math.sin(angle);

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", 6);

      if (i >= totalDots * 0.66) {
        circle.setAttribute("class", "dot low");
      } else if (i >= totalDots * 0.33) {
        circle.setAttribute("class", "dot mid");
      } else {
        circle.setAttribute("class", "dot high");
      }

      svg.appendChild(circle);
      dots.push(circle);
    }

    let current = 0;
    const interval = setInterval(() => {
      if (current < filledCount) {
        dots[current].classList.add('filled');
        current++;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }, [score]);

  return (
    <div>
      <svg width="300" height="150" id="dotGauge"></svg>
      <style jsx>{`
        .dot {
          fill: white;
          stroke: #ccc;
          stroke-width: 1;
          transition: fill 0.3s ease;
        }
        .dot.low.filled {
          fill: #e63946;
          stroke: #e63946;
        }
        .dot.mid.filled {
          fill: #f4a261;
          stroke: #f4a261;
        }
        .dot.high.filled {
          fill: #2a9d8f;
          stroke: #2a9d8f;
        }
      `}</style>
    </div>
  );
}
