/**
 * Routes for products
 */

export const getProducts = (req, res) => {
  res.status(200).json({
    ok: true,
    status: 200,
    body: "Hello World products🤖",
  });
};
