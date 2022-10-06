import {
  Cart,
  ForgotPassword,
  Home,
  Messages,
  Services,
  Settings,
  SignIn,
  SignUp,
  ResetPassword,
} from '~/pages';

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  CART: '/cart',
  MESSAGES: '/messages',
  SETTINGS: '/settings',

  SIGNUP: '/signup',
  SIGNIN: '/signin',
  FORGOTPASSWORD: '/forgot-password',
  RESETPASSWORD: '/reset-password',
};

const publicRoutes = [
  {
    path: ROUTES.SIGNUP,
    component: SignUp,
    defaultLayout: false,
  },
  {
    path: ROUTES.SIGNIN,
    component: SignIn,
    defaultLayout: false,
  },
  {
    path: ROUTES.FORGOTPASSWORD,
    component: ForgotPassword,
    defaultLayout: false,
  },
  {
    path: ROUTES.RESETPASSWORD,
    component: ResetPassword,
    defaultLayout: false,
  },
  {
    path: ROUTES.HOME,
    component: Home,
    defaultLayout: true,
  },
  {
    path: ROUTES.SERVICES,
    component: Services,
    defaultLayout: true,
  },
  {
    path: ROUTES.CART,
    component: Cart,
    defaultLayout: true,
  },
  {
    path: ROUTES.MESSAGES,
    component: Messages,
    defaultLayout: true,
  },
  {
    path: ROUTES.SETTINGS,
    component: Settings,
    defaultLayout: true,
  },
];

// const privateRoutes = [
//   {
//     path: '/messages',
//     component: Messages,
//     defaultLayout: true,
//   },
//   {
//     path: '/settings',
//     component: Settings,
//     defaultLayout: true,
//   },
// ];

// export { publicRoutes, privateRoutes };
export { publicRoutes };
