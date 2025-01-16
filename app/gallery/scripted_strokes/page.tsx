"use client";

import "./styles.scss";

const ScriptedStrokes = () => {
  const artworks = [
    {
      title: "Polka Dot Infinity",
      description:
        "A dense pattern of non-overlapping black dots on a yellow background.",
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Fill background
        ctx.fillStyle = "#ffcc00"; // Yellow background
        ctx.fillRect(0, 0, width, height);

        // Define the type for dots
        const dots: { x: number; y: number; radius: number }[] = [];

        // Helper function to check overlap
        const isOverlapping = (x: number, y: number, radius: number): boolean =>
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
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Define a color palette
        const colors = ["#FFD700", "#FF2400", "#1E90FF", "#00CED1", "#6A5ACD"];
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
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Background color
        const backgroundColor = "#FFF8DC"; // Light beige background
        // const backgroundColor = "#FDF5E6"; // Light beige background

        // Yayoi Kusama-inspired colors for the dots
        // const colors = ["#FFD700", "#FF2400", "#1E90FF", "#000000", "#FFFFFF"];
        const colors = ["#FFD700", "#FF6347", "#FF8C00", "#FF4500"];
        const numDots = 80; // Total number of dots
        const dotMinRadius = 5; // Smaller minimum dot size
        const dotMaxRadius = 35; // Larger maximum dot size

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
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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

    // {
    //   title: "Obliteration Room",
    //   description: "Interactive artwork where clicking adds a dot.",
    //   draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    //     // Initial canvas background
    //     ctx.fillStyle = "white";
    //     ctx.fillRect(0, 0, width, height);

    //     // Add an event listener to capture clicks
    //     const canvas = ctx.canvas;
    //     const colors = ["red", "blue", "yellow", "green", "black"]; // Dot colors

    //     canvas.addEventListener("click", (event) => {
    //       // Get the click position relative to the canvas
    //       const rect = canvas.getBoundingClientRect();
    //       const x = event.clientX - rect.left;
    //       const y = event.clientY - rect.top;

    //       // Randomize dot size and color
    //       const radius = Math.random() * 20 + 5;
    //       const color = colors[Math.floor(Math.random() * colors.length)];

    //       // Draw the dot at the click position
    //       ctx.beginPath();
    //       ctx.arc(x, y, radius, 0, Math.PI * 2);
    //       ctx.fillStyle = color;
    //       ctx.fill();
    //     });
    //   },
    // },

    {
      title: "Mirror Room",
      description: "Dots mirrored across the canvas to simulate reflection.",
      draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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
    // {
    //   title: "Refined Polka Dots",
    //   description: "Non-overlapping polka dots densely filling the canvas.",
    //   draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    //     ctx.fillStyle = "#ffcc00";
    //     ctx.fillRect(0, 0, width, height);
    //     const dots = [];
    //     const isOverlapping = (x: number, y: number, radius: number) =>
    //       dots.some(
    //         (dot) =>
    //           Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2) <
    //           radius + dot.radius + 2
    //       );
    //     while (dots.length < 150) {
    //       const radius = Math.random() * 30 + 10;
    //       const x = Math.random() * width;
    //       const y = Math.random() * height;
    //       if (!isOverlapping(x, y, radius)) {
    //         dots.push({ x, y, radius });
    //         ctx.beginPath();
    //         ctx.arc(x, y, radius, 0, Math.PI * 2);
    //         ctx.fillStyle = "black";
    //         ctx.fill();
    //       }
    //     }
    //   },
    // },
  ];

  return (
    <div>
      <section className="pb-10">
        {/* Section Title */}
        {/* <h2 className="section-title">{section.author}</h2> */}
        <h1 className="section-title">Scripted Strokes</h1>
        <p>
          This is a collection of code made art pieces inspired from some
          talented and maybe lonely artist that I admire. Enjoy!
        </p>
      </section>
      <h2 className="author">Yayoi Kusama</h2>
      <div className="kusama-grid">
        {artworks.map((artwork, index) => (
          <div className="kusama-cell" key={index}>
            <h3>{artwork.title}</h3>
            <canvas
              ref={(canvas) => {
                if (canvas) {
                  const ctx = canvas.getContext("2d");

                  // Check if the parent element exists and use its dimensions, with fallbacks
                  const parentWidth = canvas.parentElement?.clientWidth || 200;
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
  );
};

export default ScriptedStrokes;
