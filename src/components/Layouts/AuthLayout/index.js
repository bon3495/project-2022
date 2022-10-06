import React from 'react';
import ButtonSignIn from '~/components/Button/ButtonSignIn';
import {
  authBanner1,
  authBanner2,
  authBanner3,
  authBanner4,
  authBanner5,
  authBanner6,
  authBanner7,
  facebookIcon,
  googleIcon,
} from '~/styles/icons/icons';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';

const AuthLayout = ({ children }) => {
  const location = useLocation();

  console.log(location?.pathname);

  return (
    <main className="w-screen h-screen flex items-center justify-center relative bg-white-2">
      <div className="fixed top-0 left-0 bottom-0 right-0">
        <span className="absolute top-[10%] left-[10%] animate-bannerAnim2">
          {authBanner1}
        </span>
        <span className="absolute top-[10%] right-[10%] animate-bannerAnim2">
          {authBanner2}
        </span>
        <span className="absolute bottom-[40px] -right-[-120px] animate-bannerAnim1">
          {authBanner3}
        </span>
        <span className="absolute top-[40%] left-[12%] animate-bannerAnim1">
          {authBanner4}
        </span>
        <span className="absolute top-[25%] left-[25%]">{authBanner5}</span>
        <span className="absolute -bottom-[30px] left-[0] animate-bannerAnim3">
          {authBanner6}
        </span>
        <span className="absolute right-[24%] top-[5%]">{authBanner7}</span>
      </div>

      <div className="relative w-full mx-4 max-w-[500px] md:max-w-[600px] p-8 md:p-[50px] bg-white-fff/30 rounded-[10px] shadow-form backdrop-blur-2xl">
        {location?.pathname !== ROUTES.RESETPASSWORD &&
          location?.pathname !== ROUTES.FORGOTPASSWORD && (
            <>
              <div className="flex items-center gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0 w-full flex-col md:flex-row">
                <ButtonSignIn
                  icon={googleIcon}
                  text="Sign in with Google"
                  className="bg-white-fff/30 border-[1px] border-solid border-gray-1 text-dark-1"
                />
                <ButtonSignIn
                  icon={facebookIcon}
                  text="Sign in with Facebook"
                  className="bg-blue-fb text-white-fff"
                />
              </div>
              <SeparateLine>or</SeparateLine>
            </>
          )}
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;

export const SeparateLine = ({ children }) => {
  return (
    <p className="block font-normal text-gray-2 relative text-lg my-5 text-center before:content-[''] before:h-[1px] before:w-[45%] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-gray-1 after:content-[''] after:h-[1px] after:w-[45%] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-gray-1">
      <span>{children}</span>
    </p>
  );
};
