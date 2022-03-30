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
          bg: 'input.border',
          _placeholder: {
            color: 'white',
          },
        },
        _invalid: {
          borderColor: 'pink.500',
        }
      },
    },

    yourVariant: {
      field: {
        border: '3px solid',
        borderColor: '#130080',
        _focus: {
          borderColor: '#9280ff',
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