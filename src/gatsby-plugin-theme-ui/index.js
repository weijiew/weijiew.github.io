import codeTheme from '@theme-ui/prism/presets/shades-of-purple.json'
import baseTheme from '@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: '#000000',
    muted: '#a696c8',
    primary: '#2f89fc',
    secondary: '#d86f9b',
    error: '#ff4343',
    success: '#7c73e6',
    background: '#dfebed',
    surface: '#e4f6f6',
    highlight: '#ff5959',
    placeholder: '#dee1ec',
  },

  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles.root,
      '.mdx-embed': {
        '.twitter-tweet-mdx-embed': {
          minHeight: 500,
        },
      },
    },
    p: {
      ...baseTheme.styles.p,
      a: {
        ...baseTheme.styles.p.a,
        color: 'secondary',
        wordBreak: 'break-word',
      },
      code: {
        ...baseTheme.styles.p.code,
        color: 'inherit',
        fontSize: '14px',
        wordBreak: 'break-word',
        backgroundColor: 'surface',
      },
      mark: {
        color: 'background',
        backgroundColor: 'highlight',
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
    a: {
      ...baseTheme.styles.a,
      color: 'secondary',
      button: {
        cursor: 'pointer',
      },
    },
  },

  buttons: {
    ...baseTheme.buttons,
    success: {
      ...baseTheme.buttons.success,
    },
    primary: {
      ...baseTheme.buttons.primary,
      ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'surface',
      },
    },
    ghost: {
      ...baseTheme.buttons.primary,
      color: 'muted',
      backgroundColor: 'background',
      transition: '.2s linear background-color',
      ':hover': {
        backgroundColor: 'surface',
      },
    },
  },

  forms: {
    ...baseTheme.forms,
    label: {
      ...baseTheme.forms.label,
      color: 'primary',
    },
    input: {
      ...baseTheme.forms.input,
      '::placeholder': {
        color: 'placeholder',
      },
    },
  },

  cards: {
    primary: {
      ...baseTheme.cards.primary,
      transition: '.2s linear box-shadow, .2s ease-in-out transform',
      ':hover': {
        transform: 'translateY(-0.25rem)',
        boxShadow: 2,
      },
    },
  },
}
