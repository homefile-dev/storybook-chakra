import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { formatDate } from '../../helpers/Formaters'
import { FolderFileI, MapFileI } from '../../interfaces/homeBoard/FolderDetail.interface'

export const useFolderDetail = () => {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [acceptedFiles, setAcceptedFiles] = useState<FolderFileI[]>([])
  const [totalFiles, setTotalFiles] = useState<FolderFileI[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const fileMenu = [
    {
      label: 'Download',
      handleClick: (form: any) => form,
    },
    {
      label: 'Share',
      handleClick: (form: any) => {},
    },
    {
      label: 'Delete',
      handleClick: (form: any) => {},
    },
  ]

  const handleMapFile = ({ files, isLocal = true }: MapFileI) => {
    const newFiles = files.map((file: any) => {
      return {
        _id: isLocal ? '' : file._id,
        file: isLocal ? file : undefined,
        isNew: isLocal ? true : false,
        isShare: isLocal ? false : true,
        imageUrl: isLocal ? URL.createObjectURL(file) : file.Location,
        name: isLocal ? file.name : '',
        menu: fileMenu,
        type: isLocal ? '' : file.type,
        updatedAt: isLocal ? formatDate(file.lastModified) : file.updatedAt,
        uploaded: isLocal ? false : true,
      }
    })
    return newFiles
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.jpeg', '.jpg', '.pdf', '.txt', '.doc', '.docx'],
    },
    disabled: isUploading,
    maxSize: 5000000,
    onDrop: (uploadedFiles) => {
      const selectedFiles = handleMapFile({ files: uploadedFiles })
      setAcceptedFiles(selectedFiles)
    },
    onDropRejected: (rejectFiles) => {
      setHasError(true)
      setErrorMessage(
        rejectFiles[0].errors[0].code === 'file-too-large'
          ? t('folderSharing.details.errorSize')
          : t('folderSharing.details.errorType')
      )
    },
  })

  const findIndex = (value: string) => {
    return totalFiles.findIndex(
      (file: FolderFileI) => file.name || file._id === value
    )
  }

  const removeFile = (value: string) => {
    totalFiles.splice(findIndex(value), 1)
    setTotalFiles([...totalFiles])
  }

  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        setHasError(false)
        setErrorMessage('')
      }, 5000)
    }
  }, [hasError])

  return {
    acceptedFiles,
    errorMessage,
    getRootProps,
    getInputProps,
    handleMapFile,
    hasError,
    setAcceptedFiles,
    setTotalFiles,
    setIsUploading,
  }
}
