import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const formData = new FormData();

formData.append("name", "Quan Tay Cua Nguoi Tay :vv");
formData.append("description", "This is a description");
formData.append("categories", JSON.stringify([1, 2, 3]));
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

formData.append(
    "images[]",
    fs.createReadStream("./Images/2c75712e2ec8763bdc6c2b9d06ee6d70.jpg")
);
formData.append(
    "images[]",
    fs.createReadStream("./Images/3f3a7f88733592dc363e8a07381e8b20.jpg")
);

axios
    .post("http://localhost/LTW/BTL/Shop/api/product/add", formData, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjgzNjUyNzcwLCJpYXQiOjE2ODEwNjA3NzB9.8tdy-fYpGSphH92To921lseJjnDLPPw7tBXUXM-w1Tw",
            "Content-Type": "multipart/form-data",
        },
    })
    .then((data) => {
        console.log(data.data);
    });