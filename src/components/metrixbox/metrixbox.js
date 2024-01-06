import styles from "./metrixbox.module.css";
export default function MetrixBox() {
  const data = [
    {
      id: 1,
      number: "2 Million",
      title: "Customers",
      paratext:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 2,
      number: "1K",
      title: "Downloads",
      paratext:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      number: "$73 Million",
      title: "Transaction",
      paratext:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 4,
      number: "2.0",
      title: "Latest Version",
      paratext:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];
  return (
    <div className={styles.container}
     
    >
      {data.map((content, index) => (
        <div key={index} className={styles.divcon}>
          <h1 className={styles.number}>{content.number}</h1>
          <h3 className={styles.title}>{content.title}</h3>
          <p className={styles.paratext}>{content.paratext}</p>
        </div>
      ))}
    </div>
  );
}
