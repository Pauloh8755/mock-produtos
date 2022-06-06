import { faker } from "@faker-js/faker";
import fs from "fs";

const generateRandomProducts = (totalUsers) => {
  const productList = [];
  for (let i = 0; i < totalUsers; i++) {
    const product = {
      id: i + 1,
      name: faker.commerce.product(),
      color: faker.color.human(),
      image: faker.datatype.uuid() + ".png",
      price: faker.commerce.price(),
    };
    productList.push(product);
  }
  return productList;
};

const writeDatabaseFile = (fileName, data, callback) => {
  fs.writeFileSync(fileName, JSON.stringify(data), callback);
};

const data = {};
data.products = generateRandomProducts(10);

writeDatabaseFile("./database/db.json", data, (err) => {
  if (err) throw err;
  console.log("finish");
});
