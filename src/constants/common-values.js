import {
  cartIcon,
  dashboardIcon,
  messageIcon,
  servicesIcon,
} from '~/styles/icons/icons';

export const API_URL = process.env.PUBLIC_API_PROJECT_URL;
// const CookieKeyPrefix = '@DS';
export const CookieKey = {
  AccessToken: 'accessToken',
  UserInfo: 'userInfo',
};

export const CONTEXT_TYPE = {
  DARK_MODE: 'Dark',
  LIGHT_MODE: 'Light',
};

export const COMMON_NAME = {
  searchName: 'searchName',
  placeholderSearch: 'Search or type',
  logoName: 'Marvelous',
  Home: 'Home',
  Cart: 'Cart',
  Services: 'Services',
  Message: 'Message',
  Settings: 'Settings',
  Logout: 'Logout',
  shopNow: 'Shop Now',
};

export const SIDEBAR_LIST = [
  {
    path: '/',
    title: COMMON_NAME.Home,
    icon: dashboardIcon,
  },
  {
    path: '/cart',
    title: COMMON_NAME.Cart,
    icon: cartIcon,
  },
  {
    path: '/services',
    title: COMMON_NAME.Services,
    icon: servicesIcon,
  },
  {
    path: '/messages',
    title: COMMON_NAME.Message,
    icon: messageIcon,
  },
];

export const HOME_SLIDERS = [
  {
    title: 'A Seafaring Classic Returns',
    subTitle: 'THE FISHERMAN SWEATER',
    imgMobile: (size = 600) =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/homepage_mens_workshop_FishermansSweater-Camel_01_1500_${size}x.progressive.jpg?v=9179993913551701307`,
    img: size =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/homepage_mens_workshop_FishermansSweater-Camel_01_2880${
        size ? `_${size}x` : ''
      }.progressive.jpg?v=8957627700515403988`,
  },
  {
    title: 'The Lodge is Back',
    subTitle: '100% BABY YAK WOOL',
    imgMobile: (size = 600) =>
      `cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_LodgeSweaters_mobile_${size}x.progressive.jpg?v=15353989540971000304`,
    img: size =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_LodgeSweaters_desktop${
        size ? `_${size}x` : ''
      }.progressive.jpg?v=4293216219850822612`,
  },
  {
    title: 'Cotton Hemp Forever',
    subTitle: 'THE COTTON HEMP LONG SLEEVE TEE',
    imgMobile: (size = 600) =>
      `cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_CottonHempTee_mobile_${size}x.progressive.jpg?v=4578282653567554582`,
    img: (size = '') =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_CottonHempTee_desktop${
        size ? `_${size}x` : ''
      }.progressive.jpg?v=1379259072762605091`,
  },
  {
    title: 'Born For The Wilds',
    subTitle: 'THE YOSEMITE SHIRT',
    imgMobile: (size = 600) =>
      `cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_Yosemite_mobile_${size}x.progressive.jpg?v=12340027069891144826`,
    img: (size = '') =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_Yosemite_desktop${
        size ? `_${size}x` : ''
      }.progressive.jpg?v=8593789866205326952`,
  },
  {
    title: 'Classic Corduroy',
    subTitle: 'THE JACK IN CORD',
    imgMobile: (size = 600) =>
      `cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_JackCords_mobile_${size}x.progressive.jpg?v=10697675928997862844`,
    img: (size = '') =>
      `https://cdn.shopify.com/s/files/1/0070/1922/files/Q322_homepage_JackCords_desktop${
        size ? `_${size}x` : ''
      }.progressive.jpg?v=6781142500545232379`,
  },
];

export const FORM_NAMES = {
  email: 'email',
  password: 'password',
  checkbox: 'checkbox',
  firstName: 'firstName',
  lastName: 'lastName',
  acceptPolicy: 'acceptPolicy',
};

export const FORM_LABELS = {
  email: 'Email',
  password: 'Passwork',
  rememberMe: 'Remember Me',
  firstName: 'First Name',
  lastName: 'Last Name',
};

export const API_PROJECT_URL = process.env.PUBLIC_API_PROJECT_URL;
