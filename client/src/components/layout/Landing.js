import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Albanian Developer Connector</h1>
          <p className='lead'>
            Ne kete platforme ftojme te gjithe Zhvilluesit shqiptar por, jo vetem, te antaresohen dhe te kontribuojne ne krijimin e nje rrjeti te gjere zhvilluesish.
            Kjo platforme synon tu ofroje mundesi zhvilluesve te ndihmojne njeri-tjetrin apo te shkembejne ide.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
