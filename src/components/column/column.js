import Image from "next/image";
import styles from "./column.module.css";
export default function Column() {
  const data = [
    {
      id: 1,
      icon: "/Icons1.jpg",
      heading: "Globally Accepted",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      id: 2,
      icon: "/key.jpg",
      heading: "Biometric Integrated",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      id: 3,
      icon: "/lock.jpg",
      heading: "Fully Secured",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
  ];
  return (
    <div className={styles.divcon}>
      {data.map((item, index) => (
        <div key={index}>
          <Image src={item.icon} alt="Vercel Logo" width={20} height={20} />
          <h3 className={styles.header}>{item.heading}</h3>
          <p className={styles.subheader}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
