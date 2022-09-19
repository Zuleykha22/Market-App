import classes from "./ProductModal.module.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { getUUID } from '../../../shared/uuid'
import React from "react";




function ProductModal(props) {
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('');
    const [barcode, setBarcode] = React.useState('');
    const [lastDate, setLastDate] = React.useState('');


    const handleClose = () => {
        props.setOpenModal(false);
        setName('');
        setPrice('');
        setBarcode('');
        setLastDate('');
    };

    const addProduct = () => {
        const newProduct = {
            id: getUUID(),
            name: name,
            barcode: barcode,
            lastDate: lastDate,
            price: price,
        }

        props.setProducts(prevState => {
            return [...prevState, newProduct]
        })
        handleClose();
    }


    return (
        <Dialog open={props.openModal} onClose={handleClose}>
            <DialogTitle>Məhsul Əlavə Et</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Məhsul Adı"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Qiymət"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Barkod"
                    value={barcode}
                    onChange={e => setBarcode(e.target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Son İstifadə Tarixi"
                    value={lastDate}
                    onChange={e => setLastDate(e.target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={addProduct}>Əlavə Et</Button>
                <Button onClick={handleClose}>Çıx</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProductModal;
