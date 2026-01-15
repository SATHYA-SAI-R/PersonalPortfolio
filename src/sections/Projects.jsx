import { useState, useEffect, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

const Projects = () => {
  /* ─────────────────────────────
     Cursor motion values
     ───────────────────────────── */
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  /* Critically damped springs (no bounce) */
  const springX = useSpring(cursorX, {
    stiffness: 600,
    damping: 60,
    mass: 0.8,
  });

  const springY = useSpring(cursorY, {
    stiffness: 600,
    damping: 60,
    mass: 0.8,
  });

  /* ─────────────────────────────
     Preview state
     ───────────────────────────── */
  const [preview, setPreview] = useState(null);

  /* ─────────────────────────────
     Scroll guard (important)
     ───────────────────────────── */
  const isScrolling = useRef(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      isScrolling.current = true;
      setPreview(null); // hide preview immediately on scroll

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  /* ─────────────────────────────
     Mouse tracking (guarded)
     ───────────────────────────── */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isScrolling.current) return;

      cursorX.set(e.clientX + 20);
      cursorY.set(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <section
      id="work"
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
        />
      ))}

      {preview && (
        <motion.img
          key={preview}
          className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
