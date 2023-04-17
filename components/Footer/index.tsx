import React, { useState } from "react";
import { Stack } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import styles from './styles.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

  return (
    <Stack sx={{
        flexDirection: { xs: "column", sm: "row" }, backgroundColor: "#e8e8e8"}}
        justifyContent="space-around"
    >
        <Stack flexDirection="column">
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.title} m="20px 0" textTransform="uppercase">Liên hệ</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Mua hàng online:0393 644 116</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Liên hệ hợp tác: marketing@lep.vn</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Chăm sóc khách hàng:0833 55 77 55</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Thời gian làm việc: Thứ 2 đến thứ 7 từ 8h30 đến hết 17h30</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Địa chỉ: 11 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy</Typography>
            <div>
                <img width="160px" height="60px" src="https://lep.vn/images/bo-cong-thuong.png"/>
            </div>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>© Bản quyền thuộc Công ty cổ phần thời trang Song Bình</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Mã số thuế: 0108175559</Typography>
        </Stack>

        <Stack flexDirection="column">
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.title} m="20px 0" textTransform="uppercase">Thành Viên</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Quyền lợi thành viên</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Thông tin thành viên</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Theo dõi đơn hàng</Typography>
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.text}>Hướng dẫn mua hàng</Typography>
        </Stack>

        <Stack flexDirection="column">
            <Typography sx={{ textAlign: {xs: "center", sm: "start"}}} className={styles.title} m="20px 0" textTransform="uppercase">Kết nối</Typography>
            <Stack flexDirection="row" justifyContent="center">
                <IconButton sx={{ paddingLeft: 0}}>
                    <FacebookIcon/>
                </IconButton>
                <IconButton>
                    <InstagramIcon/>
                </IconButton>
                <IconButton>
                    <EmailIcon/>
                </IconButton>
            </Stack>
        </Stack>
    </Stack>
  );
};

export default Footer;
