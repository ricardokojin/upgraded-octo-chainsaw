"use client";

// React and Imports
import Image from "next/image";
import image_box from "../../public/image_box_1.jpg";

// Mui,Style
import { HomeImageBox } from "./page.styled";
import { Typography, Box } from "@mui/material";
import styles from "./page.module.css";

// Componenents
// import MainMenuComponent from "./components/mainMenu/mainMenuComponent";
import MainMenuComponent from "@/app/components/mainMenu/mainMenuComponent";

export default function PageContentThatTheUserSees() {
  return (
    <>
      <p className={`${styles.home_full} container_xl`}>p</p>
      <h1>1</h1>
      <MainMenuComponent />
    </>
  );
}
