const Container = {
  baseStyle: {
    borderRadius: 'sm',
    padding: 0,
  },
  sizes: {
    small: {
      w: 'container.sm',
    },
    medium: {
      w: 'container.md',
    },
    large: {
      w: 'container.lg',
    },
    full: {
      w: 'container.full',
    },
    onboarding: {
      w: ['container.full', 'container.sm', 'container.md'],
    },
  },
  variants: {
    primary: {
      backgroundColor: 'white',
      boxShadow: 'base',
    },
    secondary: {
      backgroundColor: 'container.secondary',
    },
    ghost: {
      backgroundColor: 'transparent',
    },
  },
  defaultProps: {
    size: 'full',
    variant: 'primary',
  },
}

export default Container
