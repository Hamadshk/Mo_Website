import { useEffect, useRef, useState } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dropsRef = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Simple matrix characters
    const matrixChars = '01アカサタナハマヤラワ';
    const fontSize = 16;

    // Only 5-8 columns of rain
    const columnCount = 6;
    const columnSpacing = 100; // Wide spacing between columns

    let drops = [];

    const initDrops = () => {
      drops = Array(columnCount).fill(0).map((_, i) => ({
        x: (i * columnSpacing) + Math.random() * 50, // Random positioning
        y: Math.random() * -200, // Start above screen
        speed: Math.random() * 2 + 1,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        opacity: Math.random() * 0.3 + 0.1 // Very subtle
      }));
      dropsRef.current = drops;
    };

    let lastTime = 0;
    const targetFPS = 30; // Lower FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      // Throttle to 30fps for better performance
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Single bright gold color
      ctx.fillStyle = 'rgba(255, 215, 0, 0.15)'; // Very subtle bright gold
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      dropsRef.current.forEach((drop) => {
        // Draw character
        ctx.fillText(drop.char, drop.x, drop.y);

        // Update position
        drop.y += drop.speed;

        // Reset when off screen (only reset within hero area)
        if (drop.y > window.innerHeight || drop.y > 600) { // Limit to hero height
          drop.y = Math.random() * -100;
          drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }

        // Occasionally change character (less frequent)
        if (Math.random() < 0.001) {
          drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Set canvas size to hero area only
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight, 600); // Limit height to hero area
      initDrops();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '600px', // Only cover hero area
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.4, // Subtle opacity
      }}
    />
  );
};

export default MatrixRain;