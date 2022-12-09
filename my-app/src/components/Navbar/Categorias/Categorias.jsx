import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/1"}>Remeras</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/2"}>Buzos</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/4"} >Accesorios</Link></a>
            </li>
      </ul>
    );
}

export default Categorias;