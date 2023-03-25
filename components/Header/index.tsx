// type AppProps = {
//     message: string;
// };

// const Header = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// export default Header
import React from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header: React.FC = () => {
  return (
    <Stack
      className={styles.headerContainer}
      height="90px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography className={styles.headerLeft__item}>New Arrival</Typography>
        <Typography className={styles.headerLeft__item}>Best Seller</Typography>
        <Typography className={styles.headerLeft__item}>Khuyến Mại</Typography>
        <Typography className={styles.headerLeft__item}>Sản phẩm</Typography>
        <Typography className={styles.headerLeft__item}>Collection</Typography>
        <Typography className={styles.headerLeft__item}>Giới thiệu</Typography>
      </Stack>
      <div>
        <Image
          src="https://lep.vn/icons/page-logo.svg"
          alt="Lep logo"
          width={48}
          height={72}
        />
      </div>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className={styles.headerRight}
      >
          <div className={styles.headerRight__item}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: 20 }}
            />
          </div>
          <div className={styles.headerRight__item}>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
          </div>
          <div className={styles.headerRight__item}>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 20 }} />
          </div>

      </Stack>
    </Stack>
  );
};

export default Header;
