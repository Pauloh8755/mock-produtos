import axios from "axios";

const getAll = async (req, res) => {
  const { page, limit, filter = "" } = req.query;

  const { data } = await axios.get(
    `http://localhost:3000/products?_page=${page}&_limit=${limit}}&name_like=${filter}`
  );
  res.json(data).status(200);
};

const productController = {
  getAll,
};

export { productController };
