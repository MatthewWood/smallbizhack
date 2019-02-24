import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SaaSPayments from '@paywithbolt/bolt-saas-node';

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
function createData(internalId, address, name, price, pay) {
  id += 1;
  return { id, internalId, address, name, price, pay };
}

const payments = new SaaSPayments({
  shared_key: "1186_90762",
  secret_key: "167203109911fa4f9858c22004147ff8"
});

const options = {
  instance_key: "manflowcont",

  currency: "GBP",
  amount: 150,

  alt_key: "1234",
  description: "Payment for doghouse",
  source: "moto",

  account: {
    alt_key: "yourCustomerId",
    first_name: "We love",
    last_name: "Intuit Developer",
    company: "who let the dogs in",
    email: "james@jinkies.com",
    phone: "0712345678",
    address: {
      line1: "1 High St",
      line4: "London",
      line5: "W10 6RU",
      country: "GB"
    }
  },

  success_url: "https://jinkies.com/receipt"
};

const options1 = {
  instance_key: "manflowcont",
  company_name: "Manufacturing Flow Control",
  company_country: "UK",
  contact_name: "The three M's",
  contact_phone: "+447987654567",
  contact_email: "jim@gmail.com",
};
const setup_url = payments.setupUrl(options);

const payment_url = payments.paymentUrl(options);

const rows = [
  createData('1', "24 Feb 2019", "1 x Premium Doghouse", "$150", <a target='_blank' href={payment_url}>Pay now</a>),
];

function Invoices(props) {
  const { classes } = props;
  return (
    <div>
      <h2>My Invoices</h2>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell align="right">Completion date</TableCell>
              <TableCell align="right">Items</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
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
                <TableCell align="right">{row.pay}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

Invoices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Invoices);
