import React, { useState } from "react";
import { Stack, Typography, Drawer, Menu, Icon } from "@mui/material";
import styles from "./styles.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SidebarDrawer from "../Home/SidebarDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, IconButton } from "@mui/material";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';

const Header: React.FC = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Stack
      className={styles.headerContainer}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {isMobile ? (
        <IconButton onClick={() => setOpenMobile((pre) => !pre)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          width="50%"
        >
          <Link className={styles.headerLeft__link__item} href="/order">
            <Typography
              sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
              className={styles.headerLeft__item}
            >
              Đơn hàng
            </Typography>
          </Link>
          <Link className={styles.headerLeft__link__item} href="/category">
            <Typography
              sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
              className={styles.headerLeft__item}
            >
              Danh mục
            </Typography>
          </Link>
          <Link className={styles.headerLeft__link__item} href="/product">
            <Typography
              sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
              className={styles.headerLeft__item}
            >
              Sản phẩm
            </Typography>
          </Link>
          <Link className={styles.headerLeft__link__item} href="/collection">
            <Typography
              sx={{ fontSize: { sm: "0.7rem", md: "1rem" } }}
              className={styles.headerLeft__item}
            >
              Bộ sưu tập
            </Typography>
          </Link>
        </Stack>
      )}

      <PersonIcon/>
    
      <Drawer
        variant="temporary"
        anchor="left"
        open={openMobile}
        onClose={() => setOpenMobile((pre) => !pre)}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarDrawer openMobile={openMobile} setOpenMobile={setOpenMobile} />
      </Drawer>
    </Stack>
  );
};

export default Header;
