import { Button } from "@mui/material";
import styles from "./title.module.css";
export default function Announcement() {
  return (
    <div className={styles.divcon}>
      <Button
        sx={{
          background: "rgb(228, 227, 227)",
          textTransform: "none",
          color: "black",
          minWidth: "98px",
          height: "16px",

          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        Announcement
      </Button>
      {/* <Button className={styles.button}>Announcement</Button> */}
      <p className={styles.pelement}>
        We are happy to announce that we raise $2 Million in Seed Funding
      </p>
    </div>
  );
}
