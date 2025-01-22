"use client";

import "./styles.scss";

const ScriptedStrokes = () => {
  const sections = [
    {
      author: "Sol LeWitt",
      artworks: [
        {
          title: "Sol LeWitt Wall Drawing #65",
          description:
            "An abstract composition of intersecting wavy lines in bold colors, inspired by Sol LeWitt's Wall Drawing #65.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Define colors
            const colors = ["red", "blue", "green", "yellow"];

            // Function to generate a random number between min and max
            function getRandom(min: number, max: number): number {
              return Math.random() * (max - min) + min;
            }

            // Function to draw a random wavy line
            function drawWavyLine() {
              const color = colors[Math.floor(Math.random() * colors.length)];
              ctx.strokeStyle = color;
              ctx.lineWidth = 2;

              // Start point
              let x = getRandom(0, width);
              let y = getRandom(0, height);

              ctx.beginPath();
              ctx.moveTo(x, y);

              // Draw a series of connected quadratic curves
              for (let i = 0; i < 10; i++) {
                x += getRandom(-50, 50);
                y += getRandom(-50, 50);
                const cp1x = x + getRandom(-20, 20);
                const cp1y = y + getRandom(-20, 20);
                ctx.quadraticCurveTo(cp1x, cp1y, x, y);
              }

              ctx.stroke();
            }

            // Draw multiple wavy lines to cover the canvas
            const numberOfLines = 200;
            for (let i = 0; i < numberOfLines; i++) {
              drawWavyLine();
            }
          },
        },
        {
          title: "Sol LeWitt Wall Drawing with Points",
          description:
            "A geometric composition of randomly placed points, with every point connected to every other point.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Number of points
            const numPoints = 50;

            // Generate random points
            const points = [];
            for (let i = 0; i < numPoints; i++) {
              points.push({
                x: Math.random() * width,
                y: Math.random() * height,
              });
            }

            // Draw points
            points.forEach((point) => {
              ctx.beginPath();
              ctx.arc(point.x, point.y, 3, 0, Math.PI * 2); // Small circle for each point
              ctx.fillStyle = "black";
              ctx.fill();
            });

            // Connect every point to every other point
            for (let i = 0; i < points.length; i++) {
              for (let j = i + 1; j < points.length; j++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"; // Semi-transparent lines
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          },
        },
        {
          title: "Sol LeWitt Wall Drawing #11",
          description:
            "A grid-based composition with intersecting lines in four quadrants, inspired by Sol LeWitt's Wall Drawing #11.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Set the number of lines and spacing
            const numLines = 20;
            const spacing = Math.min(width, height) / (numLines + 1);

            // Define the type for quadrants
            type Quadrant = {
              x: number;
              y: number;
            };

            // Define the quadrants
            const quadrants: Quadrant[] = [
              { x: 0, y: 0 },
              { x: width / 2, y: 0 },
              { x: 0, y: height / 2 },
              { x: width / 2, y: height / 2 },
            ];

            // Define the line types
            type LineType =
              | "vertical"
              | "horizontal"
              | "diagonalTLBR"
              | "diagonalTRBL";
            // const lineTypes: LineType[] = [
            //   "vertical",
            //   "horizontal",
            //   "diagonalTLBR",
            //   "diagonalTRBL",
            // ];

            // Function to draw lines in a quadrant
            function drawLines(quadrant: Quadrant, types: LineType[]) {
              ctx.save();
              ctx.translate(quadrant.x, quadrant.y);

              types.forEach((type) => {
                ctx.beginPath();
                switch (type) {
                  case "vertical":
                    for (let i = 1; i <= numLines; i++) {
                      const x = i * spacing;
                      ctx.moveTo(x, 0);
                      ctx.lineTo(x, height / 2);
                    }
                    break;
                  case "horizontal":
                    for (let i = 1; i <= numLines; i++) {
                      const y = i * spacing;
                      ctx.moveTo(0, y);
                      ctx.lineTo(width / 2, y);
                    }
                    break;
                  case "diagonalTLBR":
                    for (let i = -numLines; i <= numLines; i++) {
                      ctx.moveTo(i * spacing, 0);
                      ctx.lineTo(i * spacing + width / 2, height / 2);
                    }
                    break;
                  case "diagonalTRBL":
                    for (let i = 0; i <= 2 * numLines; i++) {
                      ctx.moveTo(i * spacing, 0);
                      ctx.lineTo(i * spacing - width / 2, height / 2);
                    }
                    break;
                }
                ctx.strokeStyle = "black";
                ctx.lineWidth = 1;
                ctx.stroke();
              });

              ctx.restore();
            }

            // Draw lines in each quadrant with three of the four line types
            drawLines(quadrants[0], ["vertical", "horizontal", "diagonalTLBR"]);
            drawLines(quadrants[1], ["vertical", "horizontal", "diagonalTRBL"]);
            drawLines(quadrants[2], [
              "vertical",
              "diagonalTLBR",
              "diagonalTRBL",
            ]);
            drawLines(quadrants[3], [
              "horizontal",
              "diagonalTLBR",
              "diagonalTRBL",
            ]);
          },
        },
        {
          title: "Wall Drawing #118",
          description:
            "A systematic grid filled with alternating horizontal, vertical, and diagonal lines.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const numCells = 10;
            const cellSize = Math.min(width, height) / numCells;

            for (let row = 0; row < numCells; row++) {
              for (let col = 0; col < numCells; col++) {
                const x = col * cellSize;
                const y = row * cellSize;
                ctx.save();
                ctx.translate(x, y);

                const lineType = (row + col) % 3;
                ctx.beginPath();
                if (lineType === 0) {
                  ctx.moveTo(0, 0);
                  ctx.lineTo(cellSize, cellSize);
                } else if (lineType === 1) {
                  ctx.moveTo(0, cellSize);
                  ctx.lineTo(cellSize, 0);
                } else {
                  ctx.moveTo(0, 0);
                  ctx.lineTo(cellSize, 0);
                  ctx.lineTo(0, cellSize);
                }
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.restore();
              }
            }
          },
        },
        {
          title: "Wall Drawing #797",
          description:
            "A grid of isometric cubes, forming a repeating 3D tessellation.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const size = Math.min(width, height) / 10;
            const colors = ["black", "gray", "white"];

            function drawCube(x: number, y: number) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + size / 2, y - size / 2);
              ctx.lineTo(x + size, y);
              ctx.lineTo(x + size / 2, y + size / 2);
              ctx.closePath();
              ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
              ctx.fill();
              ctx.strokeStyle = "black";
              ctx.stroke();
            }

            for (let y = 0; y < height + size; y += size / 2) {
              for (let x = 0; x < width + size; x += size) {
                drawCube(x, y);
              }
            }
          },
        },
        {
          title: "Wall Drawing #273",
          description: "A composition of concentric squares radiating outward.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const centerX = width / 2;
            const centerY = height / 2;
            const numSquares = 20;
            const step = Math.min(width, height) / (2 * numSquares);

            for (let i = 0; i < numSquares; i++) {
              ctx.strokeStyle = "black";
              ctx.strokeRect(
                centerX - step * i,
                centerY - step * i,
                step * 2 * i,
                step * 2 * i
              );
            }
          },
        },
        {
          title: "Wall Drawing #289",
          description: "A diagonal grid forming a repeating diamond pattern.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const spacing = Math.min(width, height) / 20;

            for (let x = -width; x < width * 2; x += spacing) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x - height, height);
              ctx.strokeStyle = "black";
              ctx.stroke();
            }

            for (let x = 0; x < width * 2; x += spacing) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x + height, height);
              ctx.strokeStyle = "black";
              ctx.stroke();
            }
          },
        },
        {
          title: "Wall Drawing #50",
          description: "A regular grid of evenly spaced circles.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const numCircles = 10;
            const spacing = Math.min(width, height) / numCircles;

            for (let y = spacing / 2; y < height; y += spacing) {
              for (let x = spacing / 2; x < width; x += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, spacing / 4, 0, Math.PI * 2);
                ctx.strokeStyle = "black";
                ctx.stroke();
              }
            }
          },
        },
        {
          title: "Wall Drawing #123",
          description:
            "A grid of squares, each containing an arc in a randomly selected corner.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const numCells = 10; // Number of cells per row/column
            const cellSize = Math.min(width, height) / numCells; // Size of each cell

            // Helper function to draw an arc in a specific corner
            function drawArc(x: number, y: number, corner: string) {
              ctx.beginPath();
              switch (corner) {
                case "top-left":
                  ctx.arc(x, y, cellSize / 2, Math.PI, Math.PI * 1.5);
                  break;
                case "top-right":
                  ctx.arc(x + cellSize, y, cellSize / 2, Math.PI * 1.5, 0);
                  break;
                case "bottom-left":
                  ctx.arc(
                    x,
                    y + cellSize,
                    cellSize / 2,
                    Math.PI * 0.5,
                    Math.PI
                  );
                  break;
                case "bottom-right":
                  ctx.arc(
                    x + cellSize,
                    y + cellSize,
                    cellSize / 2,
                    0,
                    Math.PI * 0.5
                  );
                  break;
              }
              ctx.strokeStyle = "black";
              ctx.stroke();
            }

            // Grid generation
            for (let row = 0; row < numCells; row++) {
              for (let col = 0; col < numCells; col++) {
                const x = col * cellSize;
                const y = row * cellSize;

                // Randomly select a corner
                const corners = [
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right",
                ];
                const randomCorner =
                  corners[Math.floor(Math.random() * corners.length)];

                drawArc(x, y, randomCorner);
              }
            }
          },
        },

        {
          title: "Wall Drawing #999",
          description:
            "A grid of squares, each containing randomly placed intersecting lines.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const numCells = 8;
            const cellSize = Math.min(width, height) / numCells;

            for (let row = 0; row < numCells; row++) {
              for (let col = 0; col < numCells; col++) {
                const x = col * cellSize;
                const y = row * cellSize;
                for (let i = 0; i < 5; i++) {
                  ctx.beginPath();
                  ctx.moveTo(
                    x + Math.random() * cellSize,
                    y + Math.random() * cellSize
                  );
                  ctx.lineTo(
                    x + Math.random() * cellSize,
                    y + Math.random() * cellSize
                  );
                  ctx.strokeStyle = "black";
                  ctx.stroke();
                }
              }
            }
          },
        },
      ],
    },
    {
      author: "Yayoi Kusama",
      artworks: [
        {
          title: "Polka Dot Infinity",
          description:
            "A dense pattern of non-overlapping black dots on a yellow background.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Fill background
            ctx.fillStyle = "#ffcc00"; // Yellow background
            ctx.fillRect(0, 0, width, height);

            // Define the type for dots
            const dots: { x: number; y: number; radius: number }[] = [];

            // Helper function to check overlap
            const isOverlapping = (
              x: number,
              y: number,
              radius: number
            ): boolean =>
              dots.some(
                (dot) =>
                  Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2) <
                  radius + dot.radius + 2
              );

            let attempts = 0; // Track the number of attempts to prevent infinite loops
            const maxAttempts = 5000; // Maximum allowed attempts to place dots

            // Place non-overlapping dots
            while (dots.length < 150 && attempts < maxAttempts) {
              const radius = Math.random() * 30 + 10; // Random size between 10 and 40
              const x = Math.random() * width;
              const y = Math.random() * height;

              if (!isOverlapping(x, y, radius)) {
                dots.push({ x, y, radius });
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = "black"; // Black dots
                ctx.fill();
              }

              attempts++;
            }

            // If attempts exceed maxAttempts, log a warning
            if (attempts >= maxAttempts) {
              console.warn(
                "Maximum attempts reached. Some dots may not have been placed."
              );
            }
          },
        },
        {
          title: "Spiral Infinity Dots with Colors",
          description:
            "A vibrant spiral of dots with colors inspired by Yayoi Kusama's bold palette.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Define a color palette
            const colors = [
              "#FFD700",
              "#FF2400",
              "#1E90FF",
              "#00CED1",
              "#6A5ACD",
            ];
            const numDots = 500; // Total number of dots
            const angleIncrement = 0.2; // Controls how tightly the spiral winds
            const distanceIncrement = 1.5; // Controls the spacing between consecutive dots

            const centerX = width / 2;
            const centerY = height / 2;

            let currentAngle = 0;
            let currentRadius = 0;

            // Draw the spiral
            for (let i = 0; i < numDots; i++) {
              const x = centerX + currentRadius * Math.cos(currentAngle);
              const y = centerY + currentRadius * Math.sin(currentAngle);

              // Stop drawing if the dot is outside the canvas bounds
              if (x < 0 || x > width || y < 0 || y > height) break;

              // Pick a color based on the dot's index
              const color = colors[i % colors.length];

              // Draw the dot
              ctx.beginPath();
              ctx.arc(x, y, 5, 0, Math.PI * 2); // Fixed dot size
              ctx.fillStyle = color;
              ctx.fill();

              // Update the radius and angle
              currentRadius += distanceIncrement;
              currentAngle += angleIncrement;
            }
          },
        },
        {
          title: "Spiral Infinity Dots",
          description:
            "A spiraling arrangement of dots radiating outward from the center.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            const centerX = width / 2; // Center of the canvas
            const centerY = height / 2; // Center of the canvas
            const numDots = 500; // Total number of dots in the spiral
            const angleIncrement = 0.2; // Controls how tightly the spiral winds
            const distanceIncrement = 1; // Controls the spacing between consecutive dots

            let currentAngle = 0;
            let currentRadius = 0;

            for (let i = 0; i < numDots; i++) {
              // Calculate the position of the dot
              const x = centerX + currentRadius * Math.cos(currentAngle);
              const y = centerY + currentRadius * Math.sin(currentAngle);

              // Ensure the dot stays within the canvas bounds
              if (x < 0 || x > width || y < 0 || y > height) {
                break; // Stop drawing if the dot is outside the canvas
              }

              // Draw the dot
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2); // Adjusted dot size for small canvas
              ctx.fillStyle = "black";
              ctx.fill();

              // Update the radius and angle
              currentRadius += distanceIncrement;
              currentAngle += angleIncrement;
            }
          },
        },
        {
          title: "Polka Dots with Background",
          description:
            "Polka dots with bold colors inspired by Yayoi Kusama's palette, arranged on a vibrant background.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Background color
            const backgroundColor = "#FFF8DC"; // Light beige background

            // Yayoi Kusama-inspired colors for the dots
            // const colors = ["#FFD700", "#FF2400", "#1E90FF", "#000000", "#FFFFFF"];
            const colors = ["#FFD700", "#FF6347", "#FF8C00", "#FF4500"];
            const numDots = 75; // Total number of dots
            const dotMinRadius = 5; // Smaller minimum dot size
            const dotMaxRadius = 25; // Larger maximum dot size

            // Fill the background
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            // Draw dots
            for (let i = 0; i < numDots; i++) {
              // Random position
              const x = Math.random() * width;
              const y = Math.random() * height;

              // Determine dot size
              const radius =
                Math.random() * (dotMaxRadius - dotMinRadius) + dotMinRadius;

              // Determine dot color based on vertical position
              const colorIndex = Math.floor((y / height) * colors.length);
              const color = colors[colorIndex];

              // Draw the dot
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = color;
              ctx.fill();
            }
          },
        },
        {
          title: "Infinity Nets",
          description: "Wavy lines creating an infinity-like grid pattern.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, width, height);
            const spacing = 30;
            for (let y = 0; y <= height; y += spacing) {
              for (let x = 0; x <= width; x += spacing) {
                const offset = Math.sin((x / width) * Math.PI * 2) * 10;
                ctx.beginPath();
                ctx.arc(x, y + offset, 5, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
              }
            }
          },
        },
        {
          title: "Obliteration Room",
          description: "Interactive artwork where clicking adds a dot.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            // Initial canvas background
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, width, height);

            // Add an event listener to capture clicks
            const canvas = ctx.canvas;
            const colors = ["red", "blue", "yellow", "green", "black"]; // Dot colors

            canvas.addEventListener("click", (event) => {
              // Get the click position relative to the canvas
              const rect = canvas.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;

              // Randomize dot size and color
              const radius = Math.random() * 20 + 5;
              const color = colors[Math.floor(Math.random() * colors.length)];

              // Draw the dot at the click position
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = color;
              ctx.fill();
            });
          },
        },
        {
          title: "Mirror Room",
          description:
            "Dots mirrored across the canvas to simulate reflection.",
          draw: (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
          ) => {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);
            const gridSize = 50;
            for (let y = 0; y < height; y += gridSize) {
              for (let x = 0; x < width; x += gridSize) {
                const radius = Math.random() * 15 + 5;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(width - x, height - y, radius, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
              }
            }
          },
        },
      ],
    },
  ];

  return (
    <div>
      <section className="pb-10">
        {/* Section Title */}
        {/* <h2 className="section-title">{section.author}</h2> */}
        <h1 className="section-title">Inspired By</h1>
        <p>
          This is a curated collection of code-turned-art, brought to life with
          the assistance of AI. It is inspired by the creativity and brilliance
          of talented—and perhaps solitary—artists I deeply admire. Enjoy the
          journey!
        </p>
      </section>

      {/* <h2 className="author">Yayoi Kusama</h2> */}

      <section>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="section-title">{section.author}</h2>
            <div className="kusama-grid">
              {section.artworks.map((artwork, index) => (
                <div className="kusama-cell" key={index}>
                  <h3>{artwork.title}</h3>
                  <canvas
                    ref={(canvas) => {
                      if (canvas) {
                        const ctx = canvas.getContext("2d");

                        // Check if the parent element exists and use its dimensions, with fallbacks
                        const parentWidth =
                          canvas.parentElement?.clientWidth || 200;
                        const parentHeight =
                          canvas.parentElement?.clientHeight || 500;

                        // Dynamically set canvas dimensions
                        canvas.width = parentWidth;
                        canvas.height = parentHeight * 0.8; // Use 80% of the parent height

                        if (ctx) {
                          artwork.draw(ctx, canvas.width, canvas.height);
                        }
                      }
                    }}
                    style={{
                      width: "100%", // Let the CSS control width
                      height: "80%", // Let the CSS control height (matches max-height in CSS)
                    }}
                    // width={200}
                    // height={200}
                    // ref={(canvas) => {
                    //   if (canvas) {
                    //     const ctx = canvas.getContext("2d");
                    //     if (ctx) {
                    //       artwork.draw(ctx, canvas.width, canvas.height);
                    //     }
                    //   }
                    // }}
                  ></canvas>
                  <p>{artwork.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ScriptedStrokes;
