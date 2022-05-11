import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  ImagesI,
  MapImagesI,
} from '../../interfaces/sendCommunication/AddMedia.interface'
import useWindowDimensions from '../useWindowDimensions'

export const useAddMedia = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<ImagesI[]>([])
  const [totalFiles, setTotalFiles] = useState<ImagesI[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [index, setIndex] = useState(0)
  const { width } = useWindowDimensions()
  const acceptVideo = false
  const isMobile = width < 700

  const handleMapMedia = ({ files, isLocal = true }: MapImagesI) => {
    const newFiles = files.map((file: any) => {
      return {
        description: isLocal ? '' : file.description,
        editing: isLocal ? true : false,
        _id: isLocal ? '' : file.id,
        Location: isLocal ? URL.createObjectURL(file) : file.Location,
        name: isLocal ? file.name : '',
        size: isLocal ? file.size : '',
        type: isLocal ? file.type : '',
        uploaded: isLocal ? false : true,
        file: isLocal ? file : undefined,
      }
    })
    return newFiles
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': acceptVideo
        ? ['.jpeg', '.jpg', '.mp4', '.webm']
        : ['.jpeg', '.jpg'],
    },
    maxSize: 5000000,
    disabled: isUploading,
    onDrop: (uploadedFiles) => {
      const selectedFiles = handleMapMedia({ files: uploadedFiles })
      setAcceptedFiles(selectedFiles)
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

  const findIndex = (value: string) => {
    return totalFiles.findIndex(
      (file: ImagesI) => file.name || file._id === value
    )
  }

  const removeFile = (value: string) => {
    totalFiles.splice(findIndex(value), 1)
    setTotalFiles([...totalFiles])
  }

  const handleDescription = (value: string, description: string) => {
    totalFiles[findIndex(value)].description = description
    setTotalFiles([...totalFiles])
  }

  const handleSaveDescription = (value: string) => {
    totalFiles[findIndex(value)].editing = false
    setTotalFiles([...totalFiles])
  }

  const handleEditDescription = (value: string) => {
    totalFiles[findIndex(value)].editing = true
    setTotalFiles([...totalFiles])
  }

  const handleNext = () => {
    if (index < totalFiles.length - 1) {
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
    acceptedFiles,
    errorMessage,
    getInputProps,
    getRootProps,
    handleDescription,
    handleEditDescription,
    handleMapMedia,
    handleNext,
    handlePrevious,
    handleSaveDescription,
    hasError,
    index,
    isMobile,
    removeFile,
    setAcceptedFiles,
    setIndex,
    setIsUploading,
    setTotalFiles,
    totalFiles,
  }
}
