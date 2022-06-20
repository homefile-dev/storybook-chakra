import { ReportsI } from '../../interfaces/homeBoard/FolderDetail.interface'
import { FolderI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { SelectItemI } from '../../interfaces/inputs/Select.interface'

export const FoldersDB: FolderI[] = [
  {
    isNew: true,
    isShared: true,
    subTypes: ['Misc'],
    type: 'General',
  },
  {
    isNew: false,
    isShared: true,
    type: 'Construction',
    subTypes: [
      'Progress Report',
      'Change Order',
      'Proposal',
      'Contract Approval',
      'Delay Notice',
    ],
  },
  {
    isNew: false,
    isShared: true,
    type: 'Appliances',
    subTypes: [
      'Refrigeration',
      'Cooking',
      'Washing  & Drying',
      'Heating & Cooling',
      'Misc',
    ],
  },
  {
    isNew: false,
    isShared: false,
    type: 'Private',
    subTypes: ['Blueprint', 'Misc'],
  },
  {
    isNew: true,
    isShared: false,
    type: 'Drawings',
    subTypes: ['Blueprint', 'Misc'],
  },
  {
    isNew: false,
    isShared: false,
    type: 'Files',
    subTypes: ['PDF', 'Text', 'Misc'],
  },
]

export const selectOptions: SelectItemI[] = [
  {
    name: 'Shared',
    _id: '1',
  },
  {
    name: 'Unshared',
    _id: '2',
  },
  {
    name: 'New',
    _id: '3',
  },
]

export const fileDB: ReportsI[] = [
  {
    _id: '62aa4c6db225dd3957d09b26',
    user: '62388ab2a1a4a98e69942bb5',
    home: '62a20af1cc6d1000ef17c7d0',
    title: 'test-plans.jpeg',
    report: [],
    type: 'File',
    subType: 'image',
    needsReview: false,
    reviewed: false,
    images: [],
    status: 'completed',
    deleted: false,
    createdAt: '2022-06-15T21:17:33.246Z',
    updatedAt: '2022-06-15T21:17:33.246Z',
    __v: 0,
    file: {
      _id: '62aa4c6db225dd3957d09b24',
      fileName: 'test-plans.jpeg-37f8c3',
      extension: 'jpeg',
      originalName: 'test-plans.jpeg',
      bucketName: 'homefile-images',
      description: '',
      collectionName: 'homes',
      docId: '62a20af1cc6d1000ef17c7d0',
      createdAt: '2022-06-15T21:17:33.166Z',
      updatedAt: '2022-06-15T21:17:33.166Z',
      __v: 0,
    },
  },
]
