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
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
}

const CategoryPopup: React.FC<Props> = ({
  isUpdate,
  setIsUpdate,
  reload,
  setReload,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCategory = async () => {
    setName(name => "");
    setDesc(desc => "");
    setOpen(false);
    if (name === "") {
      return;
    }
    if (!isUpdate) {
      console.log("check desc: ", desc);
      const respone = await addCategory({ name, description: desc });
      setReload(!reload);
    }
  };
  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>
        {isUpdate ? "Cập nhật danh mục" : "+ Thêm mới danh mục"}
      </button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className={styles.wrapForm}>
          {isUpdate ? "Cập nhật danh mục" : "Thêm mới danh mục"}
        </DialogTitle>
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
                  value={name}
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
                  value={desc}
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
