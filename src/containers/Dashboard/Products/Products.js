import classes from "./Products.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";
import React from "react";

function Products(props) {
    const [searchInput, setSearchInput] = React.useState("");

    return (
        <div className={classes.ProductsContainer}>
            <div className={classes.Search}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
            </div>

            <div className={classes.ProductList}>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {props.products.filter(p => p.barcode.startsWith(searchInput)).map((value) => (
                        <ListItem
                            key={value.id}
                            disableGutters
                            onClick={() => {
                                props.setBoughtProducts(prevState => {
                                    const boughtProductIndex = prevState.findIndex(p => value.id === p.id)
                                    if (boughtProductIndex > -1) {
                                        const olderBoughtProduct = prevState[boughtProductIndex]
                                        const newBoughtProduct = {...olderBoughtProduct, count: olderBoughtProduct.count + 1}
                                        const newState = [...prevState]
                                        newState[boughtProductIndex] = newBoughtProduct
                                        return newState
                                    } else {
                                        const newBoughtProduct = {...value, count: 1}
                                        return [...prevState, newBoughtProduct]
                                    }

                                })
                            }}
                            secondaryAction={
                                <IconButton
                                    aria-label="comment"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        props.setProducts((prevState) => {
                                            return prevState.filter(
                                                (product) =>
                                                    product.id !== value.id
                                            );
                                        });
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={value.name} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div className={classes.AddWrapper}>
                <Button
                    variant="contained"
                    onClick={() => {
                        props.setOpenModal(true);
                    }}
                >
                    Contained
                </Button>
            </div>
        </div>
    );
}

export default Products;
