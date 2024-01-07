import { Button } from "@mui/material";
import styles from "./herosection.module.css";
export default function HeroSection() {
  return (
    <div className={styles.divcon}>
      <p className={styles.pelement}>Seamless experience</p>
      <h1 className={styles.heading}>
        Unleashing the Next Generation of Card Solutions
      </h1>
      <p className={styles.pelement}>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </p>
      <button className={styles.button}>
        Unlock your Card
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66666 7.00008H13.3333M13.3333 7.00008L7.49999 1.16675M13.3333 7.00008L7.49999 12.8334"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <p style={{ color: "#5A6475", fontSize: "14px", fontWeight: 500 }}>
        *No credit card required
      </p>
    </div>
  );
}
