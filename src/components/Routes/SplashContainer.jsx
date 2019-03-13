import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SignupWindow from '../SignupWindow/SignupWindow';
import LoginWindow from '../LoginWindow/LoginWindow';
import ForgotWindow from '../ForgotWindow/ForgotWindow';
import ChangePasswordWindow from '../ChangePasswordWindow/ChangePasswordWindow';

const propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  buttonStyle: PropTypes.string,
};
const defaultProps = {
  label: '',
  buttonStyle: 'info',
};

function SplashContainer(props) {
  const { type, label, buttonStyle } = props;
  return (
    <div className="full-height-bg card-container primary-grad">
      {
        {
          signup: (
            <SignupWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Signup'}
            />
          ),
          login: (
            <LoginWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Log In'}
            />
          ),
          forgot: (
            <ForgotWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Please Enter Your Email'}
            />
          ),
          reset: (
            <ChangePasswordWindow
              buttonStyle={buttonStyle !== '' && buttonStyle}
              label={label !== '' ? label : 'Please Update Your Password'}
            />
          ),
          default: null,
        }[type]
      }
    </div>
  );
}

SplashContainer.propTypes = propTypes;
SplashContainer.defaultProps = defaultProps;

export default withRouter(SplashContainer);
