/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    animations: { // defaults to {}; the following are examples
      'translate-lr' : {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0%)',
        },
      },
      'translate-rl' : {
        '0%': {
          transform: 'translateX(0%)',
        },
        '100%': {
          transform: 'translateX(-100%)',
        },
      },
      'translate-to-up' : {
        '0%': {
          transform: 'translateY(100%)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(0%)',
          opacity: 1,
        },
      },
      'translate-to-bottom' : {
        '0%': {
          transform: 'translateY(0%)',
        },
        '100%': {
          transform: 'translateY(100%)',
        },
      },
      'fade-in' : {
        'from': {
          opacity: 0,
        },
        'to': {
          opacity: 1,
        },
      },
      'fade-out' : {
        'from': {
          opacity: 1,
        },
        'to': {
          opacity: 0,
        },
      },
      'spin': {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      'jump': {
        '0%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0%)',
        },
      },
    },
    animationDuration: { // defaults to these values
      'default': '1s',
      '0s': '0s',
      '025s': '0.25s',
      '05s': '0.5s',
      '075s': '0.75s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    animationDelay: { // defaults to these values
      'default': '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationIterationCount: { // defaults to these values
      'default': 'infinite',
      'once': '1',
      'infinite': 'infinite',
    },
    animationDirection: { // defaults to these values
      'default': 'normal',
      'normal': 'normal',
      'reverse': 'reverse',
      'alternate': 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationFillMode: { // defaults to these values
      'default': 'none',
      'none': 'none',
      'forwards': 'forwards',
      'backwards': 'backwards',
      'both': 'both',
    },
    animationPlayState: { // defaults to these values
      'running': 'running',
      'paused': 'paused',
    },
  },
  variants: {
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  plugins: [
    // require('tailwindcss-animations')(),
  ]
}
