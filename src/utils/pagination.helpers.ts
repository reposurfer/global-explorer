export function scrollToTopAnimated(duration: number): void {
    const start: number = window.scrollY;
    const startTime: number = performance.now();
  
    function scrollStep(timestamp: number): void {
      const currentTime: number = timestamp || performance.now();
      const elapsedTime: number = currentTime - startTime;
  
      window.scrollTo(0, easeInOutCubic(elapsedTime, start, -start, duration));
  
      if (elapsedTime < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    }
  
    // Easing function for smoother animation (you can adjust this if needed)
    function easeInOutCubic(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  
    window.requestAnimationFrame(scrollStep);
  }