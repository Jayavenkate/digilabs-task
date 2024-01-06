import styles from "./testimonial.module.css";
import Image from "next/image";
export default function Testimonial() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"70px"
      }}
    >
      <Image src="/Company.jpg" alt="Vercel Logo" width={98} height={24} />
      <p className={styles.pelement}>
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It is refreshing to see such innovation in
        the financial industry.
      </p>
      <Image src="/avatar.jpg" alt="Vercel Logo" width={64} height={64} />
      <h4 className={styles.heading}>Nick Babich</h4>
      <p className={styles.heading}>Lead Designer</p>
      <p className={styles.heading}>⭐⭐⭐⭐</p>
    </div>
  );
}
