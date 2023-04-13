import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
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
import axios from "axios";
import fs from "fs";

interface Props {
  isUpdate?: boolean;
  setIsUpdate?: Dispatch<SetStateAction<boolean>>;
}

const ProductPopup: React.FC<Props> = ({ isUpdate, setIsUpdate }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState("");
  const [images, setImages] = useState<File>();
  const [categories, setCategories] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("check file: ", file);
    if (file) {
      setImages(file);
    }
  };

  const handleAddProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    let sizes = [
      {
        sizeName: "S",
        quantity: 12,
        price: 333333,
      },
      {
        sizeName: "M",
        quantity: 13,
        price: 444444,
      },
      {
        sizeName: "L",
        quantity: 6,
        price: 555555,
      },
    ];
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("categories", JSON.stringify([1, 2, 3]));
    if (images) formData.append("images[]", images);

    console.log("check file: ", images)

    axios
    .post("http://localhost/PHP_DB_SHOP/api/product/add", formData, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjgzODg5NjIyLCJpYXQiOjE2ODEyOTc2MjJ9.hXCRoIRfdMk-lcw-bsHKkywueWVEixBFa-ySs4vSlIA",
            "Content-Type": "multipart/form-data",
        },
    })
    .then((data) => {
        console.log(data.data);
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>
        {isUpdate ? "Cập nhật sản phẩm" : "+ Thêm mới sản phẩm"}
      </button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className={styles.wrapForm}>
          {isUpdate ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}
        </DialogTitle>
        <DialogContent>
          <form>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
            />
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              name="description"
            />
            <input
              type="text"
              value={sizes}
              onChange={(event) => setSizes(event.target.value)}
              name="sizes"
            />
            <input type="file" onChange={handleFileChange} name="images[]" />
            <input
              type="text"
              value={categories}
              onChange={(event) => setCategories(event.target.value)}
              name="categories"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddProduct} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductPopup;
