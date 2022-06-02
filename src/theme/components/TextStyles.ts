const Text = {
  variants: {
    heading: {
      fontSize: '3xl',
      color: 'font.primary',
    },
    heading6: {
      fontSize: '2xl',
      color: 'font.primary',
    },
    title: {
      fontSize: 'lg',
      color: 'font.primary',
    },
    titleBolder: {
      fontSize: 'lg',
      color: 'font.primary',
      fontWeight: 'semibold',
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
    home: {
      fontSize: 'sm',
      fontFamily: 'secondary',
    },
    report: {
      fontSize: 'xs',
    },
    error: {
      fontSize: 'xs',
      fontFamily: 'secondary',
      color: 'pink.500',
    },
    email: {
      fontSize: 'xs',
      color: 'font.link',
      fontFamily: 'secondary',
    },
    bagde: {
      fontSize: '0.625rem',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    date: {
      fontSize: '0.625rem',
      color: 'font.secondary',
      fontFamily: 'secondary',
    },
    dragDrop: {
      fontSize: 'md',
      fontFamily: 'secondary',
      color: 'gray.400',
      fontWeight: 'semibold',
    },
    dragDropLink: {
      fontSize: 'md',
      fontFamily: 'secondary',
      color: 'font.link',
      fontWeight: 'semibold',
    },
  },
  defaultProps: {
    variant: 'body',
  },
}

export default Text
