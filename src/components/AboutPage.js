import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
      textAlign: "center"
    }
});

const AboutPage = props => {

    return (
        <div className={props.classes.root}>
            <h1>About</h1>
            <p>This is a demo application which impliments Material UI to create a demo "to-do list" app.</p>
        </div>
    );
};

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles)
)(AboutPage);