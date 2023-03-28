import React, { useState } from "react";
import Image from "next/image";
import { Stack, Typography, Drawer, Menu, Icon } from "@mui/material";
import styles from "./styles.module.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SidebarDrawer from '../Home/SidebarDrawer'
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, IconButton } from "@mui/material";
import Link from "next/link";
import Popup from "../Home/Popup";

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
      {isMobile ? <IconButton onClick={() => setOpenMobile((pre) => !pre)}>
        <MenuIcon/>
      </IconButton> : <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      > 
        <Link className={styles.headerLeft__link__item} href="/new-arrival">
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={styles.headerLeft__item}>New Arrival</Typography>
        </Link>
        <Link className={styles.headerLeft__link__item} href="/best-seller">
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={styles.headerLeft__item}>Best Seller</Typography>
        </Link>
        <Link className={styles.headerLeft__link__item} href="/hot-deal">
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={styles.headerLeft__item}>Khuyến mại</Typography>
        </Link>
        <div className={`${styles.headerLeft__link__item} ${styles.headerLeft__link__item__production}`}>
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={`${styles.headerLeft__item}`}>
            Sản phẩm
          </Typography>
            <div className={styles.headerLeft__link__item__production__list}>
              <Link style={{ textDecoration: 'none'}} href="/production/pants">
                <div className={styles.headerLeft__link__item__production__child}><span>Quần</span></div>
              </Link>
              <Link style={{ textDecoration: 'none'}} href="/production/dresses">
                <div className={styles.headerLeft__link__item__production__child}><span>Đầm</span></div>
              </Link>
              <Link style={{ textDecoration: 'none'}} href="/production/shirts">
                <div className={styles.headerLeft__link__item__production__child}><span>Áo</span></div>
              </Link>
              
            </div>
        </div>
        <Link className={styles.headerLeft__link__item} href="/collection">
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={styles.headerLeft__item}>Bộ sưu tập</Typography>
        </Link>
        <Link className={styles.headerLeft__link__item} href="/introduction">
          <Typography sx={{ fontSize: { sm: '0.7rem', md: '1rem'}}} className={styles.headerLeft__item}>Giới thiệu</Typography>
        </Link>
      </Stack>}
      {!isMobile && 
      <Link href="/">
        <div className={styles.headerCenter}>
          <img
            src="https://lep.vn/icons/page-logo.svg"
            alt="Lep logo"
            width={48}
            height={72}
          />
        </div>
      </Link>}
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className={styles.headerRight}
      >
          <IconButton className={styles.headerRight__item}>
            <SearchIcon/>
          </IconButton>
          {/* <IconButton className={styles.headerRight__item}> */}
            <Popup/> 
          {/* </IconButton> */}
          <IconButton className={styles.headerRight__item}>
            <ShoppingCartIcon/>
          </IconButton>
      </Stack>
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
