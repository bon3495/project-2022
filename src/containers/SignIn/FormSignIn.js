import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputController from '~/components/InputController';
import { FORM_NAMES } from '~/constants/common-values';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const FormSignIn = () => {
  const schema = yup.object({});

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      [FORM_NAMES.email]: '',
      [FORM_NAMES.password]: '',
      [FORM_NAMES.checkbox]: false,
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="">
        <InputController
          control={control}
          name={FORM_NAMES.email}
          label="Email"
          placeholder="email"
          className="mb-5"
          formInput
        />
        <InputController
          control={control}
          name={FORM_NAMES.password}
          label="Password"
          placeholder="password"
          type="password"
          formInput
        />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <InputController
          control={control}
          name={FORM_NAMES.checkbox}
          label="Remember me"
          typeInput={FORM_NAMES.checkbox}
          labelClassName="order-2 cursor-pointer"
          inputElementClassName="order-1"
          formInput
        />
        <Link
          to="/forgot-password"
          className="text-green-1 text-sm sm:text-base font-normal hover:underline hover:underline-offset-2 text-right"
        >
          Forgot your password?
        </Link>
      </div>
      <div className="mt-5">
        <Button
          className="w-full items-center justify-center h-input-form bg-green-1 rounded-[10px] hover:shadow-btn-hover"
          contentClassName="text-white-2 text-lg"
          content="Sign In"
        />
      </div>
    </form>
  );
};

export default FormSignIn;
