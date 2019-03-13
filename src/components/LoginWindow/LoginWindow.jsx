import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import useForm from '../../helpers/useForm';
import { withFirebase } from '../../Auth/Firebase';

import './LoginWindow.scss';
import validate from './LoginFormValidationRules';

const propTypes = {
  firebase: PropTypes.object.isRequired,
  label: PropTypes.string,
  redirectLink: PropTypes.string,
  history: PropTypes.object.isRequired,
};
const defaultProps = {
  label: 'Log In',
  redirectLink: '/topics',
};

function LoginWindow(props) {
  // eslint-disable-next-line
  const { errors, values, handleChange, handleSubmit } = useForm(signin, validate);
  const { firebase, history, label, redirectLink } = props;

  async function signin() {
    const { email, password } = values;
    firebase
      .doSignIn(email, password)
      .then(() => {
        notify.show('You have been logged in successfully!', 'success');
        history.replace(redirectLink);
      })
      .catch(error => {
        if (
          error.message ===
            'There is no user record corresponding to this identifier. The user may have been deleted.' ||
          error.message === 'The password is invalid or the user does not have a password.'
        ) {
          notify.show('Your login credentials are invalid', 'error');
        } else {
          notify.show(error.message, 'error');
        }
      });
  }

  return (
    <div className="box form-card">
      <p className="label has-text-centered has-text-weight-semibold is-size-4">{label}</p>
      <br />
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <p className="label">Email Address</p>
          <div className="control">
            <input
              aria-label="email"
              className={`input ${errors.email && 'is-danger'}`}
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ''}
              required
            />
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>
        </div>
        <div className="field">
          <p className="label">Password</p>
          <div className="control">
            <input
              aria-label="password"
              className={`input ${errors.password && 'is-danger'}`}
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password || ''}
              required
            />
            {errors.password && <p className="help is-danger">{errors.password}</p>}
          </div>
        </div>
        <br />
        <button type="submit" className="button is-block is-info is-fullwidth">
          Login
        </button>
        <br />
      </form>
      <button
        onClick={() => {
          props.history.push('/signup');
        }}
        className="button is-block is-info is-fullwidth is-outlined"
      >
        Not Signed Up?
      </button>
      <br />
      <button
        onClick={() => {
          props.history.push('/forgot');
        }}
        className="act-like-link is-size-7"
      >
        Trouble Logging In?
      </button>
    </div>
  );
}

LoginWindow.propTypes = propTypes;
LoginWindow.defaultProps = defaultProps;

export default withFirebase(withRouter(LoginWindow));
