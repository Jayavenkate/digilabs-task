import { Card } from "@mui/material";
import Image from "next/image";
import styles from "./frame.module.css";
export default function Frame() {
  return (
    <div className={styles.divcon}>
      <Card>
        <Image
          src="/Image1.jpg"
          alt="Vercel Logo"
          width={380}
          height={300}
          className={styles.image}
        />
      </Card>
      <Card
        sx={{ width: "380px", height: "300px", backgroundColor: "#FAF9FF" }}
      >
        <Card
          sx={{
            width: "300px",
            height: "180px",
            backgroundColor: "#FFFFFF",
            margin: "50px auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            {/* <div> */}
            <h3>Spending</h3>
            {/* <p>9349 visa card</p> */}
            {/* </div> */}
            <Image src="/Frame2.jpg" alt="Vercel Logo" width={20} height={20} />
          </div>
          {/* <div style={{ display: "flex", alignItems: "center", gap: "5px",border:"1px solid"}}>
            <Image src="/Frame.jpg" alt="Vercel Logo" width={20} height={20} /> */}
          {/* <p>9349 visa card</p> */}
          {/* </div> */}
          <p
            style={{
              fontWeight: 500,
              fontSize: "20px",
              fontStyle: "Manrope",
              margin: "0px",
              padding: "0px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            127.14
            <span
              style={{
                fontWeight: 500,
                fontSize: "12px",
                fontStyle: "Inter",
                margin: "0px",
                padding: "opx",
              }}
            >
              USD
            </span>
          </p>
          <div
            style={{
              margin: "0px",
              padding: "0px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            <p>vs last week</p>
            <p>Last Purchased ( Feb 24 19:59 UTC-5 )</p>
          </div>
          <div
            style={{
              margin: "0px",
              padding: "0px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "5px",
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            <p>400 USD</p>
            <p>1000 USD</p>
            <p>5000 USD</p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "5px",
              padding: "0px 10px",
              marginTop: "0",
            }}
          >
            <div
              style={{
                border: "1px solid #582066",
                height: "5px",
                width: "63px",
                borderRadius: "5px 0px 0px 5px",
                backgroundColor: "#582066",
              }}
            ></div>
            <div
              style={{
                border: "1px solid #582066",
                height: "5px",
                width: "63px",

                backgroundColor: "#582066",
              }}
            ></div>
            <div
              style={{
                border: "1px solid #EFE4F2",
                height: "5px",
                width: "63px",
                backgroundColor: "#EFE4F2",
              }}
            ></div>
            <div
              style={{
                border: "1px solid #EFE4F2",
                height: "5px",
                width: "63px",
                borderRadius: "0px 5px 5px 0px",
                backgroundColor: "#EFE4F2",
              }}
            ></div>
          </div>
        </Card>
      </Card>
    </div>
  );
}
