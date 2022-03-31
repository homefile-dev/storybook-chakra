import BeatLoader from 'react-spinners/BeatLoader'

interface IButtonLoader {
  isOutlined?: boolean
}

export const ButtonLoader = ({ isOutlined }: IButtonLoader) => (
  <BeatLoader color={isOutlined ? 'gray' : 'white'} size={8} />
)

export default ButtonLoader
