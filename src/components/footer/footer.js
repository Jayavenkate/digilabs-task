import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  const company = ["About us", "Pricing", "Contact us", "Features"];
  const product = [
    "Figma design system",
    " Ios kit",
    "  Android kit",
    " Wireframe",
  ];
  const resorse = [
    "Templates",
    "Landing pages",
    "Documentation",
    "Comp library",
  ];
  const legal = [
    "Privacy policy",
    "Terms & Conditions",
    "Disclaimer",
    "Affiliate programme",
  ];
  const Support = ["Help centre", "Raise ticket", "Report", "Refund"];
  const icons = [
    {
      id: 1,
      img: "/github.jpg",
    },
    {
      id: 2,
      img: "/linedin.jpg",
    },
    {
      id: 3,
      img: "/game.jpg",
    },
  ];
  return (
    <div>
      <div style={{ textAlign: "center", margin: "60px 0px 20px 0px" }}>
        <Image src="/Vectorlogo.jpg" alt="Vercel Logo" width={84} height={16} />
        <p className={styles.pelemnet}>
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>
      <hr style={{ width: "90%" }} />
      <div className={styles.divcon}>
        <div className={styles.innerdiv}>
          <h3 className={styles.header}>Company</h3>
          <p>
            {company.map((data, index) => (
              <div key={index}>
                <p className={styles.footer}>{data}</p>
              </div>
            ))}
          </p>
        </div>
        <div  className={styles.innerdiv}>
          <h3>Product</h3>
          <p>
            {product.map((data, index) => (
              <div key={index}>
                <p>{data}</p>
              </div>
            ))}
          </p>
        </div>
        <div className={styles.innerdiv}>
          <h3>Resources</h3>
          <p>
            {resorse.map((data, index) => (
              <div key={index}>
                <p>{data}</p>
              </div>
            ))}
          </p>
        </div>
        <div className={styles.innerdiv}>
          <h3>Legal</h3>
          <p>
            {legal.map((data, index) => (
              <div key={index}>
                <p>{data}</p>
              </div>
            ))}
          </p>
        </div>
        <div className={styles.innerdiv}>
          <h3>Support</h3>
          <p>
            {Support.map((data, index) => (
              <div key={index}>
                <p>{data}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {icons.map((data, index) => (
          <div key={index}>
            <Image src={data.img} alt="Vercel Logo" width={15} height={15} />
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>
        © 2023 Mode UI Inc. All Rights Reserved.
      </p>
    </div>
  );
}
