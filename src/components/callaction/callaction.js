import { Button } from "@mui/material";
import styles from "./callaction.module.css";
import Image from "next/image";
export default function CallAction() {
  return (
    <div>
      <h2 className={styles.heading}>
        Unlock Limitless Possibilities with Our New Card Solutions
      </h2>
      <div className={styles.divbutton}>
        <Button className={styles.button} variant="contained">
          Unlock your card
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1788_1166)">
              <path
                d="M3.4028 7.3293C3.4028 6.68362 3.6593 6.06439 4.11586 5.60783C4.57242 5.15127 5.19165 4.89478 5.83733 4.89478H15.5754C16.2211 4.89478 16.8403 5.15127 17.2969 5.60783C17.7535 6.06439 18.0099 6.68362 18.0099 7.3293V13.8214C18.0099 14.467 17.7535 15.0863 17.2969 15.5428C16.8403 15.9994 16.2211 16.2559 15.5754 16.2559H5.83733C5.19165 16.2559 4.57242 15.9994 4.11586 15.5428C3.6593 15.0863 3.4028 14.467 3.4028 13.8214V7.3293Z"
                stroke="#5A6475"
                stroke-width="1.21726"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.4028 8.95227H18.0099"
                stroke="#5A6475"
                stroke-width="1.21726"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.64883 13.0098H6.65768"
                stroke="#5A6475"
                stroke-width="1.21726"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.89487 13.0098H11.5179"
                stroke="#5A6475"
                stroke-width="1.21726"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1788_1166">
                <rect
                  width="19.4762"
                  height="19.4762"
                  fill="white"
                  transform="translate(0.968262 0.83728)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <Button className={styles.button2}>
          Customer support
          <Image
            src="/headphone.jpg"
            alt="Vercel Logo"
            width={13}
            height={13}
          />
        </Button>
      </div>
    </div>
  );
}
