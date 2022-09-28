module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans, sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'dark-1': '#242731',
      'dark-6': '#A4A5A6',
      'dark-5': '#808191',
      'dark-4': '#7C7C8D',
      'dark-3': '#72767C',
      'dark-2': '#5F6165',
      'white-1': '#E0E4E7',
      'white-2': '#FFFAF7',
      'white-fff': '#FFFFFF',
      black: '#000',
      purple: '#A162F7',
      blue: '#2884FF',
      'blue-fb': '#4776D0',
      yellow: '#F6CC0D',
      red: '#FF6370',
      green: '#70CF97',
      orange: '#FF764C',
      test: '#03C9D7',
      'dark-black': '#1F2128',
      'light-bg': '#F5F5F5',
      'input-bg': '#F5F4F6',
      'button-bg': 'rgba(0,0,0,0.08)',
      'button-bg-dark': 'rgba(255,255,255,0.1)',
      'gray-type-1': '#F3F5F8',
      'black-type-1': '#292E3D',
      'overlay-bg': 'rgba(0,0,0,0.4)',
      'gray-1': '#E6E8EC',
      'gray-2': '#777E91',
      'gray-3': '#B1B5C4',
      'form-border': '#f4f5f6',
      'form-input-border': '#B1B5C3',
      'green-1': '#00365a',
    },
    screens: {
      ssm: '400px',
      sm: '480px',
      md: '640px',
      '2md': '768px',
      lg: '1024px',
      '2lg': '1220px',
      xl: '1366px',
      '2xl': '1620px',
    },
    extend: {
      spacing: {
        30: '30px',
        50: '50px',
        sidebar: '248px',
        'height-header': '78px',
        'input-height': '46px',
        'size-48': '48px',
        'input-form': '56px',
      },
      zIndex: {
        1000: '1000',
      },
      boxShadow: {
        hoverSearch: '0 1px 6px rgba(32,33,36,.28)',
        'btn-hover':
          'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
        form: '0px 10px 110px 1px rgba(59, 59, 59, 0.08)',
      },
      keyframes: {
        bannerkey1: {
          '0%': {
            transform: 'rotate3d(0, 1, 0, 0deg)',
          },

          '30%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '60%': {
            transform: 'rotate3d(1, 0, 0, 0deg)',
          },

          '80%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '100%': {
            transform: 'rotate3d(0, 1, 0, 0deg)',
          },
        },
        bannerkey2: {
          '0%': {
            transform: 'translateY(0px) translateX(0) rotate(0)',
          },

          '30%': {
            transform: 'translateY(30px) translateX(30px) rotate(15deg)',
            'transform-origin': 'center center',
          },

          '50%': {
            transform: 'translateY(50px) translateX(50px) rotate(45deg)',
            'transform-origin': 'right bottom',
          },

          '80%': {
            transform: 'translateY(30px) translateX(30px) rotate(15deg)',
            'transform-origin': 'left top',
          },

          '100%': {
            transform: 'translateY(0px) translateX(0) rotate(0)',
            'transform-origin': 'center center',
          },
        },
        bannerkey3: {
          '100%': {
            transform:
              'perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0)',
          },

          '50%': {
            transform:
              'perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px)',
          },
        },
      },
      animation: {
        bannerAnim1: 'bannerkey1 5s ease-out infinite',
        bannerAnim2: 'bannerkey2 8s linear infinite',
        bannerAnim3: 'bannerkey3 9s linear infinite',
      },
    },
  },
  plugins: [],
};
