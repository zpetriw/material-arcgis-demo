import React from 'react';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import { keyframes } from 'styled-components';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { headerHeight } from '../constants/style';

const appLogoKeyframes = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const styles = theme => ({
    appLogo: {
        animation: `${appLogoKeyframes} infinite 20s linear`,
        height: headerHeight,
    }
  });

const Logo = props => {
    return (
        <img src={logo} className={props.classes.appLogo} alt="logo" />
    );
};


Logo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(Logo);