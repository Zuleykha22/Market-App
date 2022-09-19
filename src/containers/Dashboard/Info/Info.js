import { Button } from '@mui/material'
import React from 'react'
import classes from './Info.module.scss'


function Info(props) {
    const [totalPrice, setTotalPrice] = React.useState(0)


    React.useEffect(() => {
        let result = 0;
        for (let product of props.boughtProducts) {
            result += product.count * Number(product.price)
        }
        setTotalPrice(result);
    }, [props.boughtProducts])


    return (
        <div className={classes.InfoContainer}>
            <div className={classes.CurrentInfo}>
                <div className={classes.CurrentPrice}>Məbləğ: {totalPrice}AZN</div>
                <Button variant="contained">Qəbul Et</Button>
                <Button variant="contained" color="error">Ləğv Et</Button>
            </div>
            <div className={classes.GeneralInfo}>Ümumi qazanc: 100AZN</div>
        </div>
    )
}

export default Info