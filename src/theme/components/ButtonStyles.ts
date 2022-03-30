const Button = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    small: {
      w: 'button.sm',
    },
    medium: {
      w: 'button.md',
    },
    large: {
      w: 'button.lg',
    },
    full: {
      w: 'button.full',
    },
  },
  variants: {
    primary: {
      fontSize: 'md',
      textTransform: 'uppercase',
      h: 'button.xs',
      fontWeight: 'regular',
      borderRadius: 'none',
      boxShadow: 'base',
      color: 'white',
      backgroundColor: 'button.primary',
      transition: 'all 0.2s ease-in-out',
      _disabled: {
        filter: 'grayscale(100%)',
        pointerEvents: 'none',
      },
      _active: {
        backgroundColor: 'button.primaryHover',
        borderRadius: 'lg',
        fontWeight: 'medium',
        boxShadow: 'none',
      },
      _hover: {
        boxShadow: 'xl',
      },
    },
    secondary: {
      fontSize: 'md',
      textTransform: 'uppercase',
      h: 'button.xs',
      fontWeight: 'regular',
      borderRadius: 'none',
      boxShadow: 'base',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: 'transparent',
      border: '1px',
      borderColor: 'button.primary',
      color: 'button.primary',
      _active: {
        backgroundColor: 'button.secondaryHover',
        borderRadius: 'lg',
        fontWeight: 'medium',
        boxShadow: 'none',
      },
      _hover: {
        boxShadow: 'lg',
      },
    },
    icon: {
      color: 'button.icon',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      _hover: {
        backgroundColor: 'transparent',
        color: 'button.primary',
      },
      _focus: {
        backgroundColor: 'transparent',
      },
    },
    text: {
      w: 'button.max',
      fontFamily: 'secondary',
      fontSize: 'md',
      letterSpacing: 'wide',
      color: 'font.link',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      _hover: {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
        color: 'font.linkHover',
      },
      _focus: {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultProps: {
    size: 'full',
    variant: 'primary',
  },
}

export default Button