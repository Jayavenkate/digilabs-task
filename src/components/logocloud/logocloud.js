import Image from "next/image";
import styles from "./logo.module.css";
export default function LogoCloud() {
  const img = [
    "/Logo1.jpg",
    "/Logo2.jpg",
    "/Logo3.jpg",
    "/Logo4.jpg",
    "/Logo5.jpg",
    "/Logo6.jpg",
    "/Logo7.jpg",
    "/Logo8.jpg",
  ];
  return (
    <div className={styles.divcon}>
      {img.map((logo, index) => (
        <div key={index} >
          <Image src={logo} alt="Vercel Logo" width={100} height={40} className={styles.image}/>
        </div>
      ))}
    </div>
  );
}
