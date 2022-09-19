import React from "react";
import classes from "./Dashboard.module.scss";
import Info from "./Info/Info";
import ProductModal from "./ProductModal/ProductModal";
import Products from "./Products/Products";
import TableInfo from "./TableInfo/TableInfo";

function Dashboard(props) {
    const [products, setProducts] = React.useState([]);
    const [boughtProducts, setBoughtProducts] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);


    return (
        <div className={classes.Dashboard}>
            <ProductModal
                setProducts={setProducts}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <TableInfo
                boughtProducts={boughtProducts}
                setBoughtProducts={setBoughtProducts}
            />
            <Products
                products={products}
                setProducts={setProducts}
                setOpenModal={setOpenModal}
                setBoughtProducts={setBoughtProducts}
            />
            <Info
                boughtProducts={boughtProducts}
                setBoughtProducts={setBoughtProducts}
            />
        </div>
    );
}

export default Dashboard;
