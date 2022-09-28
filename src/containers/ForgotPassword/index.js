import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputController from '~/components/InputController';
import { FORM_LABELS, FORM_NAMES } from '~/constants/common-values';
import Button from '~/components/Button';

const ForgotPassword = () => {
  const schema = yup.object({});

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      [FORM_NAMES.email]: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <p className="text-green bg-green/20 rounded-lg p-4 text-center mb-5">
        Enter your Email and instructions will be sent to you!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex items-center gap-x-5"
      >
        <div className="w-full">
          <InputController
            control={control}
            name={FORM_NAMES.email}
            placeholder="Please enter your email!"
            className="w-full"
            formInput
          />
        </div>
        <Button
          className="w-fit px-8 items-center justify-center h-input-form bg-green-1 rounded-[10px] hover:shadow-btn-hover"
          contentClassName="text-white-2 text-lg"
          content="Send"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
