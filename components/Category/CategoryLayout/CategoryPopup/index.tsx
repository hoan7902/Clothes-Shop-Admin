import React, { Dispatch, SetStateAction, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
import { addCategory } from "@/pages/api";
import axios from "axios";

interface Props {
  isUpdate?: boolean;
  setIsUpdate?: Dispatch<SetStateAction<boolean>>;
}

const CategoryPopup: React.FC<Props> = ({ isUpdate, setIsUpdate }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAddCategory = async () => {
    setOpen(false);
    if (name === "" && desc === "") {
      return;
    }
    if (!isUpdate) {
      // const respone = await addCategory(JSON.stringify({ name, desc }));
      // console.log("check category: ", respone);
      axios({
        method: "post",
        url: "http://localhost/PHP_DB_SHOP/api/category",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjgzODg5NjIyLCJpYXQiOjE2ODEyOTc2MjJ9.hXCRoIRfdMk-lcw-bsHKkywueWVEixBFa-ySs4vSlIA",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          name: "Áo thun 3",
          description: "Đây là danh mục áo thun",
        }),
      })
        .then((response) => {
          // handle success
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error.response.data);
        });
    }
  };
  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>
        {isUpdate ? "Cập Nhật" : "+ Thêm mới danh mục"}
      </button>

      <Dialog open={open}>
        <DialogTitle className={styles.wrapForm}>Add New Category</DialogTitle>
        <DialogContent>
          <form className={styles.form}>
            <Stack alignItems="center">
              <Stack
                className={styles.wrapInput}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <input
                  className={styles.input}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  name="name"
                  type="text"
                />
              </Stack>
            </Stack>
            <Stack alignItems="center">
              <Stack
                className={styles.wrapInput}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <input
                  className={styles.input}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Description"
                  name="description"
                  type="text"
                />
              </Stack>
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCategory} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryPopup;
