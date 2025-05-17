import { motion, useSpring } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: JSX.Element;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={40}
      viewBox="0 0 50 54"
      fill="cyan"
      style={{ scale: 0.4 }}
    >
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="cyan"
      />
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 35, // Reduced damping for faster response
    stiffness: 500, // Increased stiffness for snappier movement
    mass: 0.6, // Reduced mass for faster acceleration
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  // Initialize all hooks at the top
  const [shouldRender, setShouldRender] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const rafId = useRef<number>();

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 40,
    stiffness: 400,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 600,
    damping: 30,
  });

  useEffect(() => {
    const checkDevice = () => {
      const isMobileOrTablet =
        /iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      setShouldRender(!isMobileOrTablet);
      document.body.style.cursor = isMobileOrTablet ? "auto" : "none";
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now();
      const deltaTime = Math.min(currentTime - lastUpdateTime.current, 30); // Cap deltaTime

      if (deltaTime > 0) {
        // Increased velocity multiplier for faster response
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) * 3,
          y: (currentPos.y - lastMousePos.current.y) * 3,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      // Instant position update for snappier feel
      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      );

      if (speed > 0.1) {
        // Enhanced angle calculation for better shooting feel
        const currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
        let angleDiff = currentAngle - previousAngle.current;
        
        // Normalize angle with enhanced rotation
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        // Increased rotation multiplier for faster spinning
        accumulatedRotation.current += angleDiff * 4;
        
        // Dynamic base rotation based on speed
        const baseRotation = -45 - (speed * 0.2);
        rotation.set(accumulatedRotation.current + baseRotation);
        previousAngle.current = currentAngle;

        // Faster scale response
        scale.set(0.85);
        setIsMoving(true);

        // Quicker reset
        setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 50); // Reduced timeout for faster recovery
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          smoothMouseMove(e);
          rafId.current = undefined;
        });
      }
    };

    // Enhanced click effect
    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(0.75); // More pronounced click effect
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(1);
    };

    // Add passive flag for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [shouldRender, cursorX, cursorY, rotation, scale]);

  if (!shouldRender) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        scale,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isClicking ? 0.7 : 1,
        transformOrigin: "center",
        mixBlendMode: "exclusion", // Added for better visibility
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
    >
      {cursor}
    </motion.div>
  );
}