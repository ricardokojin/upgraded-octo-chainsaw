"use client";

// React and Imports
import Image from "next/image";
import image_box from "../../public/image_box_1.jpg";

// Mui,Style
import { HomeImageBox } from "./page.styled";
import { Typography, Box } from "@mui/material";
import styles from "./page.module.css";

import {icons} from './utils/iconPack';

// Componenents
import MainMenuComponent from "./components/mainMenu/mainMenuComponent";

export default function Home() {
  return (
    <>
      <MainMenuComponent />
      <div className={styles.home_full}>
        <div className="container_xl container_center">
          <Typography
            variant="h4"
            sx={{display:'flex'}}
            // sx={{ color: (theme) => theme.palette.primary.main }}
          >
            Experiment [uoc]
            <div className={styles.home_logo} dangerouslySetInnerHTML={{ __html: icons.logo }} />
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            A few examples to start a conversation
          </Typography>
          <div className={styles.home_image_box_container}>
            <HomeImageBox>
              <Image
                className={styles.home_image_box}
                src={image_box}
                alt="image_box"
                priority
              />
              <div className={styles.home_image_box_overlayer}></div>
            </HomeImageBox>
          </div>
          <Box
            sx={{
              mt: 2,
              textAlign: "right",
              ml: "auto",
              maxWidth: "90%",
              width: "400px",
            }}
          >
            About {`  `} | {`  `} Contact {`  `} | {`  `} Sample 1 {`  `} |{" "}
            {`  `} Sample 2 {`  `} | {`  `} Sample 3 {`  `} | {`  `} Sample 4{" "}
            {`  `} | {`  `} Sample 5 {`  `} | {`  `} Sample 6 {`  `} | {`  `}{" "}
            Sample 7 {`  `} | {`  `} Sample 8 {`  `} | {`  `} Sample 9 {`  `} |{" "}
            {`  `} Sample 10
          </Box>
        </div>
      </div>
    </>
  );
}
