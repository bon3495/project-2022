import React from 'react';
import { Link } from 'react-router-dom';
import FormRegister from './FormRegister';

const RegisterContainer = () => {
  return (
    <>
      <FormRegister />
      <p className="mt-4 text-dark-4 text-sm sm:text-base font-normal text-right">
        Already have an account?{' '}
        <Link
          to="/signin"
          className="text-green-1 hover:underline hover:underline-offset-2"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default RegisterContainer;
