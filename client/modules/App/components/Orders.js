import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProgressBar from './ProgressionBar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
});

let id = 0;
function createData(internalId, address, name, price, progress) {
  id += 1;
  return { id, internalId, address, name, price, progress };
}

const rows = [
  createData('#1', "10 South Place, London", "Alex", "$150", <ProgressBar p={54} />),
  createData('#2', "10 South Place, London", "Mary", "$50", <ProgressBar p={25} />),
  createData('#3', "10 South Place, London", "Natali", "$120", <ProgressBar p={15} />),
  createData('#4', "10 South Place, London", "Dave", "$90", <ProgressBar p={9} />),
  createData('#5', "10 South Place, London", "Matt", "$209", <ProgressBar p={4} />),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>
      <h2>My Orders</h2>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell align="right">Delivery address</TableCell>
              <TableCell align="right">Contact person</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.internalId}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
