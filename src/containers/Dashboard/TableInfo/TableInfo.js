import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './TableInfo.module.scss'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


function TableInfo(props) {


    return (
        <div className={classes.TableContainer}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Məhsul Adı</TableCell>
            <TableCell align="right">Məhsul Kodu</TableCell>
            <TableCell align="right">Qiyməti</TableCell>
            <TableCell align="right">Son İstifadə Tarixi</TableCell>
            <TableCell align="right">Sayı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.boughtProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.barcode}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.lastDate}</TableCell>
              <TableCell align="right">{product.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default TableInfo