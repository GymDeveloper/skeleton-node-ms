/**
 * Routes for products
 */

export const getProducts = (req, res) => {
  res.status(200).json({
    ok: true,
    body: "Hello World works test CI/CD",
  });
};
