const Text = {
  variants: {
    heading: {
      fontSize: '3xl',
      color: 'font.primary',
    },
    title: {
      fontSize: 'lg',
      color: 'font.primary',
    },
    body: {
      fontSize: 'md',
      color: 'font.primary',
    },
    caption: {
      fontSize: 'sm',
      color: 'font.secondary',
    },
    info: {
      fontSize: 'md',
      fontFamily: 'secondary',
    },
    label: {
      fontSize: 'xs',
      fontFamily: 'secondary',
      color: 'font.secondary',
    },
    error: {
      fontSize: 'xs',
      fontFamily: 'secondary',
      color: 'pink.500',
    },
  },
  defaultProps: {
    variant: 'body',
  },
}

export default Text
