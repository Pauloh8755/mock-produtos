const getAll = (res) => {
  res.json({ teste: "teste" }).status(200);
};

const productController = {
  getAll,
};

export { productController };
