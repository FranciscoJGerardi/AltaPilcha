import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import consultarBBD from "../../assets/funciones"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      consultarBBD('../json/productos.json').then(productos => {
        const prod = productos.find(product => product.id === parseInt(id))
        setProducto(prod)
      })
        
    }, []);

    return (
        <div className="card mb-3 itemDetail">
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
