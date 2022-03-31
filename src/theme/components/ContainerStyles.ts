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
    validation: {
      w: ['container.full', 'container.md', 'container.lg'],
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
    tertiary: {
      backgroundColor: 'container.tertiary',
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
