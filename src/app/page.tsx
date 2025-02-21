"use client";

// React and Imports
import Image from "next/image";
// import image_box from "../../public/image_box_1.png";
import image_box_2 from "../../public/output54.png";

// Mui,Style
// import { HomeImageBox } from "./page.styled";
import { Typography, Box, Stack, Button, Tooltip, Chip } from "@mui/material";
import styles from "./page.module.scss";

import { icons } from "./utils/iconPack";
// import { ST } from "next/dist/shared/lib/utils";
// import { ReactElement } from "react";
import { JSX } from "react";
// import theme from "./styles/theme";

interface PageHomeLinkInterface {
  name: string | JSX.Element;
  path: string;
  enable: boolean;
  new?: boolean;
}

export default function Home() {
  const pageHomeLinksList: PageHomeLinkInterface[] = [
    {
      name: <span>About</span>,
      path: "path",
      enable: true,
    },
    {
      name: "Contact",
      path: "path",
      enable: true,
    },
    {
      name: "Crumbles",
      path: "path",
      enable: true,
    },
    {
      name: "Woodblocks",
      path: "path",
      enable: true,
    },
    {
      name: `Josh's Gallery`,
      path: "path",
      enable: true,
    },
    {
      name: `Beatrice's Snack Club`,
      path: "path",
      enable: true,
    },
  ];

  return (
    <>
      <Box component={"main"} className={`${styles.page_home_main}`}>
        <Stack className={`${styles.page_home_main_stack}`}>
          <Typography
            variant="h4"
            component={`h1`}
            className={`${styles.page_home_box_title}`}
          >
            Experience Gate: 21.15.3
            <span
              className={styles.home_logo}
              dangerouslySetInnerHTML={{ __html: icons.logo2 }}
            />
          </Typography>
          <Box className={`${styles.page_home_box_grid}`} sx={{mt:2}}>
            <Box className={`${styles.page_home_box_grid_box_1}`}>
              <Typography>
                Welcome to collection 21.15.3 of pages, you may not find
                everything you need here but I hope {`${"you'll"}`} find something you
                enjoy. As for the image ... well, I like it.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <ul className={`${styles.page_home_list}`}>
                  {pageHomeLinksList.map((item, i) => (
                    <li
                      key={`home_links_${i}`}
                      className={`${styles.page_home_list_item}`}
                    >
                      <Chip
                        icon={
                          <span
                            className={`${styles.page_home_list_icon}`}
                          ></span>
                        }
                        label={item.name}
                        variant="outlined"
                      />
                    </li>
                  ))}
                </ul>
              </Box>
              <Tooltip
                title={
                  "Unsure where to go? Just click here and it will take you somewhere"
                }
              >
                <Button
                  id={'home_anywhere_button'}
                  sx={{ mt: 2 }}
                  variant="contained"
                  size="large"
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  Take Me Anywhere
                </Button>
              </Tooltip>
            </Box>
            <Box className={`${styles.page_home_box_grid_box_2}`}>
              <Image
                style={{ width: "100%", height: "auto" }}
                src={image_box_2}
                alt="image_box"
                priority
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box id="home_powered_by" className={`${styles.page_home_powered_by_tag}`}><Typography>Powered By Me</Typography></Box>
    </>
  );
}
