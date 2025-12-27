import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="Home" className={styles.heroContainer}>
      <div className={styles.heroInner}>
        {/* LEFT: TEXT */}
        <div className={styles.heroLeft}>
          {/* MOBILE INTRO — mobile only via CSS */}
          <span className={styles.mobileIntro}>
            Hi, I am <strong>Sathya Sai</strong>
          </span>

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

          {/* 🔒 ORIGINAL PARAGRAPH — UNCHANGED */}
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

          {/* MOBILE ACTION BUTTONS — mobile only via CSS */}
          <div className={styles.mobileActions}>
            <a
              href="https://www.linkedin.com/in/sathyasaikumar/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileBtn}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SATHYA-SAI-R"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileBtnOutline}
            >
              GitHub
            </a>
          </div>

          {/* SCROLL DOWN INDICATOR — mobile only */}
          <div className={styles.scrollIndicator}>↓</div>
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
    </section>
  );
};

export default Hero;
