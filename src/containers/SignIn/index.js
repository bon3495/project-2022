import React from 'react';
import { Link } from 'react-router-dom';
import FormSignIn from './FormSignIn';

const SignInContainer = () => {
  return (
    <>
      <FormSignIn />
      <p className="mt-4 text-dark-4 text-sm sm:text-base font-normal text-right">
        Don't have an account?{' '}
        <Link
          to="/signup"
          className="text-green-1 hover:underline hover:underline-offset-2"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignInContainer;
