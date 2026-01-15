import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="Home" className={styles.heroContainer}>
      <div className={styles.heroInner}>
        {/* LEFT: TEXT */}
        <div className={styles.heroLeft}>
          {/* MOBILE INTRO */}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
              delay: 0.6,
            }}
            className={styles.mobileIntro}
          >
            Hi, I am <strong>Sathya Sai</strong>
          </motion.span>

          {/* MAIN TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className={styles.heroTitle}
          >
            Building Fast <br /> Reliable&nbsp;Results
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className={styles.heroDesc}
          >
            I deliver robust, production-ready websites and web apps with speed
            and precision. Every project is backed by clean code, clear
            communication, and a commitment to excellence.
          </motion.p>

          {/* ACTION BUTTONS — SAME CONTAINER, SAME ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
              delay: 2.2,
            }}
            className={styles.mobileActions}
          >
            <a href="#work" className={styles.primaryPill}>
              My Projects
            </a>

            <a
              href="./public/assets/sathyasai_resume.pdf"
              download
              className={styles.outlinePill}
            >
              Download CV
            </a>
          </motion.div>

          
        </div>

        {/* RIGHT: SPLINE */}
        <div className={styles.heroRight}>
          <div className={styles.splineWrapper}>
            <Spline
              className={styles.splineCanvas}
              scene="https://prod.spline.design/CBbDjqlSBuD9OZ0v/scene.splinecode"
            />
          </div>
        </div>
      </div>
      {/* SCROLL DOWN INDICATOR */}
      <div className={styles.scrollExactWrapper}>
        {/* Rotating text */}
        <svg
          className={styles.scrollTextSvg}
          width="110"
          height="110"
          viewBox="0 0 140 140"
        >
          <defs>
            <path
              id="scrollCirclePath"
              d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
            />
          </defs>

          <text className={styles.scrollExactText}>
            <textPath href="#scrollCirclePath">
              SCROLL DOWN • EXPLORE • MORE CONTENT •
            </textPath>
          </text>
        </svg>

        {/* STATIC ARROW */}
        <svg
          className={styles.scrollArrowSvg}
          width="24"
          height="36"
          viewBox="0 0 24 36"
        >
          <line x1="12" y1="4" x2="12" y2="28" />
          <polyline points="6,22 12,28 18,22" />
        </svg>
      </div>
      {/* MOBILE SCROLL ARROW */}
      <div className={styles.mobileScrollArrow}>
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L11 12L20 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
