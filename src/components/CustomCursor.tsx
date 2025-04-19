// InteractiveCursor.tsx
import { useState, useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface HoverableElement {
  element: HTMLElement;
  entered: boolean;
}

const InteractiveCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorSize, setCursorSize] = useState(20);
  const [trailPositions, setTrailPositions] = useState<CursorPosition[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const hoverElementsRef = useRef<HoverableElement[]>([]);
  
  // Check if the device is desktop/laptop
  useEffect(() => {
    const checkIfDesktop = () => {
      // Simple check for desktop/laptop - assumes tablet and mobile are smaller than 1024px
      const isLaptopOrDesktop = window.innerWidth >= 1024;
      setIsDesktop(isLaptopOrDesktop);
      
      // Reset cursor to default on mobile/tablet devices
      if (!isLaptopOrDesktop) {
        document.body.style.cursor = 'auto';
      } else {
        document.body.style.cursor = 'none';
      }
    };
    
    // Initial check
    checkIfDesktop();
    
    // Re-check on window resize
    window.addEventListener('resize', checkIfDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIfDesktop);
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  // Only initialize cursor if on desktop
  useEffect(() => {
    if (!isDesktop) return;
    
    // Create audio elements for sounds
    clickSoundRef.current = new Audio();
    clickSoundRef.current.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCgUFBQUFBQoKCgoKCg8PDw8PDw8VFRUVFRUaGhoaGhofHx8fHx8fJSUlJSUlKioqKioqLy8vLy8vNDQ0NDQ0NDQ5OTk5OTk8PDw8PDw8PDw//////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYHAAAAAAAAHjMGsgYAAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAAScJAFgaNQEAC8R8ChIcChoKBQkOd/nPg+AgQIEMfB8HwfBAEAQBA5/5z4PnwfB8HwQIECBAgQ+D4Pg+D5DCz4PnwfB8EAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBA+D4Pg+D4IECD4Pg+D4PggCAIAgCBAoQPg+D4Pg+CAIAgCAIAgQIPg+D5//5z4Pg+BAEAQBAECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBB//98QZMEWdygAAAEAAAAAABgJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAggQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA';
    
    hoverSoundRef.current = new Audio();
    hoverSoundRef.current.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAGAAADsAA3Nzc3Nzc3Nzc3Nzc3TU1NTU1NTU1NTU1NTWNjY2NjY2NjY2NjY2N5eXl5eXl5eXl5eXl5j4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+P//////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAMAAAAAAAAAsCMCVJpgAAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARzQXl6LzEGAPMNAoLcRBAUNzchEEBQiCAoIGP//////////+AgICDf//////////8BAQEAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg';
    
    // Register interactive elements
    const interactiveSelectors = 'a, button, input, textarea, select, [role="button"]';
    const hoverElements = Array.from(document.querySelectorAll(interactiveSelectors));
    
    hoverElementsRef.current = hoverElements.map(element => ({
      element: element as HTMLElement,
      entered: false
    }));
            
    // Initialize mouse tracking
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      setTrailPositions(prevPositions => {
        const newPositions = [...prevPositions, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > 5) {
          return newPositions.slice(-5);
        }
        return newPositions;
      });
      
      // Check for hover elements
      const hoveredElement = hoverElementsRef.current.find(item => {
        const rect = item.element.getBoundingClientRect();
        return (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      });
      
      const wasHovering = isHovering;
      setIsHovering(!!hoveredElement);
      
      // Play hover sound when entering an interactive element
      if (!wasHovering && hoveredElement && !hoveredElement.entered) {
        hoveredElement.entered = true;
        if (hoverSoundRef.current) {
          hoverSoundRef.current.volume = 0.2;
          hoverSoundRef.current.currentTime = 0;
          hoverSoundRef.current.play().catch(() => {});
        }
      }
      
      // Reset entered state when not hovering
      if (!hoveredElement) {
        hoverElementsRef.current.forEach(item => {
          item.entered = false;
        });
      }
    };
    
    const handleClick = () => {
      setIsClicked(true);
      setCursorSize(prevSize => prevSize + 10);
      
      // Play click sound
      if (clickSoundRef.current) {
        clickSoundRef.current.volume = 0.3;
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(() => {});
      }
      
      setTimeout(() => {
        setIsClicked(false);
        setCursorSize(20);
      }, 300);
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('click', handleClick);
    };
  }, [isDesktop, isHovering]);
  
  // Don't render anything if not on desktop
  if (!isDesktop) return null;
  
  return (
    <>
      {/* Trail elements */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="pointer-events-none fixed z-40 rounded-full bg-cyan-500 opacity-30"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${8 + index * 2}px`,
            height: `${8 + index * 2}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s',
            opacity: 0.1 + index * 0.1,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-50 flex items-center justify-center"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer ring */}
        <div
          className={`absolute rounded-full transition-all duration-300 ${
            isHovering ? 'bg-cyan-400 opacity-30' : 'bg-cyan-500 opacity-20'
          }`}
          style={{
            width: `${cursorSize + 10}px`,
            height: `${cursorSize + 10}px`,
            transform: isClicked ? 'scale(1.5)' : 'scale(1)',
          }}
        />
        
        {/* Inner dot */}
        <div
          className={`absolute rounded-full transition-all duration-200 ${
            isHovering ? 'bg-cyan-300' : 'bg-cyan-400'
          }`}
          style={{
            width: `${cursorSize / 2}px`,
            height: `${cursorSize / 2}px`,
            transform: isClicked ? 'scale(0.8)' : 'scale(1)',
          }}
        />
        
        {/* Click rays */}
        {isClicked && (
          <>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <div
                key={deg}
                className="absolute bg-cyan-300 rounded-full"
                style={{
                  width: '2px',
                  height: '10px',
                  transform: `rotate(${deg}deg) translateY(-20px)`,
                  opacity: 0.8,
                  animation: 'rayAnimation 0.3s ease-out',
                }}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default InteractiveCursor;