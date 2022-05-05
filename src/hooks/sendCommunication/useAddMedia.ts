import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IImages } from '../../interfaces/sendCommunication/AddMedia.interface'
import useWindowDimensions from '../useWindowDimensions'

export const useAddMedia = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<IImages[]>([])
  const [index, setIndex] = useState(0)
  const { width } = useWindowDimensions()
  const acceptVideo = false
  const isMobile = width < 700

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': acceptVideo
        ? ['.jpeg', '.jpg', '.mp4', '.webm']
        : ['.jpeg', '.jpg'],
    },
    onDrop: (uploadedFiles) => {
      const selectedFiles = uploadedFiles.map((file: any) => {
        return {
          description: '',
          name: file.name,
          preview: URL.createObjectURL(file),
          size: file.size,
          type: file.type,
          uploaded: true,
        }
      })
      setAcceptedFiles([...acceptedFiles, ...selectedFiles])
    },
  })

  // const handleUpload = () => {
  //   let counter = 0
  //   const myInterval = setInterval(() => {
  //     acceptedFiles[counter].uploaded = true
  //     counter++
  //     if (counter === acceptedFiles.length) {
  //       clearInterval(myInterval)
  //       console.log('done')
  //     }
  //   }, 3000)
  // }

  const removeFile = (name: string) => {
    const fileIndex = acceptedFiles.findIndex(
      (file: IImages) => file.name === name
    )
    acceptedFiles.splice(fileIndex, 1)
    setAcceptedFiles([...acceptedFiles])
  }

  const handleDescription = (name: string, description: string) => {
    const validFileIndex = acceptedFiles.findIndex(
      (file: IImages) => file.name === name
    )
    acceptedFiles[validFileIndex].description = description
    setAcceptedFiles([...acceptedFiles])
  }

  const handleNext = () => {
    if (index < acceptedFiles.length - 1) {
      setIndex(index + 1)
    }
  }
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    return () =>
      acceptedFiles.forEach((file: any) => URL.revokeObjectURL(file.preview))
  }, [])

  return {
    getRootProps,
    getInputProps,
    acceptedFiles,
    index,
    setIndex,
    handleNext,
    handlePrevious,
    removeFile,
    isMobile,
    handleDescription,
  }
}
