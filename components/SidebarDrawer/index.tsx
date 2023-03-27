import React from "react";
import { Typography, Stack, Box, IconButton } from "@mui/material";
import styles from "./styles.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface SidebarDrawerProps {
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
}

const SidebarDrawer = ({ openMobile, setOpenMobile }: SidebarDrawerProps): JSX.Element => {
  return (
    <Box>
      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="200px"
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box pl="20px" py="10px">
            <img
              src="https://lep.vn/icons/page-logo.svg"
              alt="Lep logo"
              width={38}
              height={52}
            />
          </Box>
          <IconButton onClick={() => setOpenMobile(!openMobile)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          New Arrival
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          Best Seller
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          Khuyến Mại
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          Sản phẩm
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          Collection
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
          className={styles.headerLeft__item}
        >
          Giới thiệu
        </Typography>
      </Stack>
    </Box>
  );
};

export default SidebarDrawer;
