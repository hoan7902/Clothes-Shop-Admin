import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../api";
import { useRouter } from "next/router";

const Login = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);
  const handleChangeVisibility = () => {
    setIsVisibility(!isVisibility);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(JSON.stringify({ email, password }));
      console.log("check response: ", response);
      if (response !== undefined) {
        localStorage.setItem("user", JSON.stringify(response));
        router.push("/");
      } else {
        console.log("not working");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Box className={styles.wrapperPopup}>
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <Typography
            textAlign="center"
            fontSize="2rem"
            textTransform="uppercase"
            color="#ad2526"
            width="100%"
          >
            Tài Khoản Admin
          </Typography>
        </Stack>
        <form className={styles.form} onSubmit={handleLogin}>
          <Stack alignItems="center">
            <Stack
              className={styles.wrapInput}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <input
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
                type="text"
              />
            </Stack>
            <span></span>
          </Stack>
          <Stack alignItems="center">
            <Stack
              className={styles.wrapInput}
              flexDirection="row"
              alignItems="center"
            >
              <input
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                name="password"
                type={isVisibility ? "text" : "password"}
              />
              <Box onClick={handleChangeVisibility}>
                {isVisibility ? (
                  <VisibilityOffIcon sx={{ marginTop: "30px" }} />
                ) : (
                  <VisibilityIcon sx={{ marginTop: "30px" }} />
                )}
              </Box>
            </Stack>
            <span></span>
            <Typography
              sx={{ "&:hover": { cursor: "pointer", opacity: "0.9" } }}
              color="#ad2526"
              p="20px 0"
            >
              Quên mật khẩu
            </Typography>
            <button className={styles.buttonLogin} type="submit">
              Đăng nhập
            </button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default Login;
