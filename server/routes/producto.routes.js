const ProductoController = require("../controllers/producto.controller");

module.exports = (app) => {
    app.get("/api/productos", ProductoController.get_all);
    app.get("/api/productos/:id", ProductoController.get_product);
    app.post("/api/productos", ProductoController.create_product);
}