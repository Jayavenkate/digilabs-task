import { Button } from "@mui/material";
import styles from "./feature.module.css";
export default function Feature() {
  return (
    <div style={{ marginTop: "60px" }}>
      <h1 className={styles.header}>
        Elevating Card Programs with Cutting-Edge Technology
      </h1>
      <p className={styles.paragraph}>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
      <Button
        sx={{
          textTransform: "none",
          color: "#582066",
          display: "flex",
          margin: "0 auto",
          gap: "5px",
          fontSize:"15px"
        }}
      >
        Compare all Pro features
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66666 6.99996H13.3333M13.3333 6.99996L7.49999 1.16663M13.3333 6.99996L7.49999 12.8333"
            stroke="#582066"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
