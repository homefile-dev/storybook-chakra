import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IImages } from '../../interfaces/sendCommunication/AddMedia.interface'
import useWindowDimensions from '../useWindowDimensions'

export const useAddMedia = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<IImages[]>([])
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
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
    maxSize: 5000000,
    onDrop: (uploadedFiles) => {
      const selectedFiles = uploadedFiles.map((file: any) => {
        return {
          description: '',
          editing: true,
          location: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
          type: file.type,
          uploaded: true,
        }
      })
      setAcceptedFiles([...acceptedFiles, ...selectedFiles])
    },
    onDropRejected: (rejectFiles) => {
      setHasError(true)
      setErrorMessage(
        rejectFiles[0].errors[0].code === 'file-too-large'
          ? 'Please select a file less than 5MB'
          : 'File type must be .png, .jpeg or .jpg'
      )
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

  const findIndex = (name: string) => {
    return acceptedFiles.findIndex((file: IImages) => file.name === name)
  }

  const removeFile = (name: string) => {
    acceptedFiles.splice(findIndex(name), 1)
    setAcceptedFiles([...acceptedFiles])
  }

  const handleDescription = (name: string, description: string) => {
    acceptedFiles[findIndex(name)].description = description
    setAcceptedFiles([...acceptedFiles])
  }

  const handleSaveDescription = (name: string) => {
    acceptedFiles[findIndex(name)].editing = false
    setAcceptedFiles([...acceptedFiles])
  }

  const handleEditDescription = (name: string) => {
    acceptedFiles[findIndex(name)].editing = true
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
    if (hasError) {
      setTimeout(() => {
        setHasError(false)
        setErrorMessage('')
      }, 5000)
    }
  }, [hasError])

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
    handleSaveDescription,
    handleEditDescription,
    hasError,
    errorMessage,
  }
}
