import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"; //Es el encargado de redirigir

const NuevoProducto = () => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const history = useHistory();

    //Función que guarda el producto
    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos", {
            nombre,
            precio,
            descripcion
        })
            .then(res => {
                setNombre("");
                setPrecio("");
                setDescripcion("");
                history.push("/");
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Nuevo Producto</h1>
            <form onSubmit={guardarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" className="form-control" value={precio} onChange={e=>setPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" className="form-control" value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
                </div>
                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
        </div>
    )

}

export default NuevoProducto;