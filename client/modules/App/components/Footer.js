import React from 'react';
import bg from '../header-bk.png';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundSize: 'cover',
    background: `#FFF url(${bg}) center`,
  },
  footer_p: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#FFF',
  },
  footer_a: {
    color: '#FFF',
    textDecoration: 'none',
    fontWeight: '700',
  },
});

export function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <p>Made with love by the three M's</p>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
