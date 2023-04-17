import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const formData = new FormData();

formData.append("productId", 4);
formData.append("name", "Đây là một cái quần 4");
// formData.append("description", "This is a description");
formData.append("categories[]", 1);
formData.append("categories[]", 2);
formData.append("categories[]", 3);
let sizes = [
  {
    sizeName: "S",
    quantity: 12,
    price: 333333,
  },
  {
    sizeName: "M",
    quantity: 13,
    price: 230202,
  },
  {
    sizeName: "L",
    quantity: 6,
    price: 555555,
  },
];
formData.append("sizes", JSON.stringify(sizes));

// formData.append(
//     "images[]",
//     fs.createReadStream("./Images/2c75712e2ec8763bdc6c2b9d06ee6d70.jpg")
// );
// formData.append(
//     "images[]",
//     fs.createReadStream("./Images/3f3a7f88733592dc363e8a07381e8b20.jpg")
// );

axios
  .post("http://localhost/LTW/BTL/Shop/api/product/update", formData, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjgzNjUyNzcwLCJpYXQiOjE2ODEwNjA3NzB9.8tdy-fYpGSphH92To921lseJjnDLPPw7tBXUXM-w1Tw",
      "Content-Type": "multipart/form-data",
    },
  })
  .then((data) => {
    console.log(data.data);
  });
