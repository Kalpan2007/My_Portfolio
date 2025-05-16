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
    damping: 30, // Reduced damping for faster response
    stiffness: 600, // Increased stiffness for snappier movement
    mass: 0.5, // Reduced mass for quicker acceleration
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
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
    damping: 40, // Slightly reduced for smoother rotation
    stiffness: 400, // Balanced for responsive rotation
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 800, // Increased for faster scale transitions
    damping: 25, // Reduced for snappier scale
  });

  useEffect(() => {
    const checkDevice = () => {
      const isMobileOrTablet =
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
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
      const deltaTime = (currentTime - lastUpdateTime.current) / 1000; // Convert to seconds

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2
      );

      if (speed > 50) { // Adjusted threshold for rotation sensitivity
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        accumulatedRotation.current += angleDiff * 1.2; // Increased sensitivity for more rotation
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        if (!isMoving) {
          scale.set(0.92); // Slightly more pronounced scale effect
          setIsMoving(true);
        }
      } else if (isMoving) {
        scale.set(1);
        setIsMoving(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(0.75); // More noticeable click effect
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          smoothMouseMove(e);
          rafId.current = undefined;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [shouldRender, cursorX, cursorY, rotation, scale, isMoving]);

  if (!shouldRender) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        transform: `translate(-50%, -50%)`,
        rotate: rotation,
        scale,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "left, top, transform",
        opacity: isClicking ? 0.7 : 1, // Enhanced click opacity effect
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
      }}
    >
      {cursor}
    </motion.div>
  );
}