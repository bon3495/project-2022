import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import InputController from '~/components/InputController';
import { FORM_LABELS, FORM_NAMES } from '~/constants/common-values';
import Button from '~/components/Button';

const FormRegister = () => {
  const schema = yup.object({});

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      [FORM_NAMES.email]: '',
      [FORM_NAMES.password]: '',
      [FORM_NAMES.firstName]: '',
      [FORM_NAMES.lastName]: '',
      [FORM_NAMES.acceptPolicy]: false,
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
          name={FORM_NAMES.firstName}
          label={FORM_LABELS.firstName}
          placeholder={FORM_LABELS.firstName}
          className="mb-5"
          formInput
        />
        <InputController
          control={control}
          name={FORM_NAMES.lastName}
          label={FORM_LABELS.lastName}
          placeholder={FORM_LABELS.lastName}
          className="mb-5"
          formInput
        />
        <InputController
          control={control}
          name={FORM_NAMES.email}
          label={FORM_LABELS.email}
          placeholder={FORM_LABELS.email}
          className="mb-5"
          formInput
        />
        <InputController
          control={control}
          name={FORM_NAMES.password}
          label={FORM_LABELS.password}
          placeholder={FORM_LABELS.password}
          type="password"
          formInput
        />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <InputController
          control={control}
          name={FORM_NAMES.acceptPolicy}
          label={
            <span>
              I accept{' '}
              <span className="link-green-1-underline">Privacy Policy</span> and{' '}
              <span className="link-green-1-underline">Term</span>
            </span>
          }
          typeInput={FORM_NAMES.checkbox}
          labelClassName="order-2 cursor-pointer"
          inputElementClassName="order-1"
          formInput
        />
      </div>
      <div className="mt-5">
        <Button
          className="w-full items-center justify-center h-input-form bg-green-1 rounded-[10px] hover:shadow-btn-hover"
          contentClassName="text-white-2 text-lg"
          content="Register"
        />
      </div>
    </form>
  );
};

export default FormRegister;
