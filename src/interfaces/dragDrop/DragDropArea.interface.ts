import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone"

export interface DragDropAreaI {
  btnText?: string
  errorMessage?: string
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T
  hasError?: boolean
  height?: number | string
  message?: string
}