import { Button } from "@mui/material";
import styles from "./title.module.css";
export default function Announcement() {
  return (
    <div className={styles.divcon}>
      <Button className={styles.button}>Announcement</Button>
      <p className={styles.pelement}>
        We are happy to announce that we raise $2 Million in Seed Funding
      </p>
    </div>
  );
}
