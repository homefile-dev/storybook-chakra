const Input = {
  sizes: {
    sm: {
      field: {
        height: 'input.sm',
      },
    },

    md: {
      field: {
        height: 'input.md',
      },
    },

    lg: {
      field: {
        height: 'input.lg',
      },
    },
  },

  variants: {
    primary: {
      field: {
        fontFamily: 'secondary',
        w: '100%',
        border: '1px solid',
        borderColor: 'input.border',
        borderRadius: 'sm',
        _placeholder: {
          color: 'font.primary',
        },
        _hover: {
          borderColor: 'input.borderHover',
        },
        _focus: {
          borderColor: 'input.borderFocus',
        },
        _autofill: {
          boxShadow: '0 0 0px 1000px #F4F7F8 inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        _disabled: {
          bg: 'container.tertiary',
          _hover: {
            borderColor: 'input.border',
          },
        },
        _invalid: {
          borderColor: 'pink.500',
        },
      },
    },
    date: {
      field: {
        fontFamily: 'primary',
        padding: 0,
        margin: 0,
        border: 'none',
        bg: 'transparent',
        color: 'font.link',
        fontSize: 'sm',
        cursor: 'pointer',
        _placeholder: {
          color: 'font.link',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}

export default Input
