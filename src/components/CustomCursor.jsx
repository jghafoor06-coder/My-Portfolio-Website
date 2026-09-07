import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const followerX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const followerY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  const [label, setLabel] = useState('');
  const [cursorSize, setCursorSize] = useState(10);
  const [followerSize, setFollowerSize] = useState(40);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.remove('touch-device');

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        const type = el.getAttribute('data-cursor');
        if (type === 'view') {
          setLabel('VIEW');
          setCursorSize(70);
          setFollowerSize(0);
        } else if (type === 'button') {
          setCursorSize(50);
          setFollowerSize(0);
          setLabel('');
        } else {
          setLabel('');
          setCursorSize(10);
          setFollowerSize(40);
        }
      } else {
        setLabel('');
        setCursorSize(10);
        setFollowerSize(40);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: springX,
          y: springY,
          width: cursorSize,
          height: cursorSize,
          background: label ? 'var(--accent)' : 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{ width: cursorSize, height: cursorSize }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label && (
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#000',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        )}
      </motion.div>
      {followerSize > 0 && (
        <motion.div
          className="custom-cursor-follower"
          style={{
            x: followerX,
            y: followerY,
            width: followerSize,
            height: followerSize,
          }}
          animate={{ width: followerSize, height: followerSize, opacity: followerSize > 0 ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      )}
    </>
  );
}
