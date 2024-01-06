import styles from "./title.module.css";
export default function Announcement() {
  return (
    <div className={styles.divcon}>
      <button className={styles.button}>Announcement</button>

      <p className={styles.pelement}>
        We are happy to announce that we raise $2 Million in Seed Funding
      </p>
    </div>
  );
}
