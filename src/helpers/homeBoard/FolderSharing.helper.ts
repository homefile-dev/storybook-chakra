import { FolderFileI } from '../../interfaces/homeBoard/FolderDetail.interface'
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

export const fileDB: FolderFileI[] = [
  {
    description: 'Construction pdf',
    _id: '1',
    isNew: true,
    isShared: true,
    imageUrl: '',
    title: 'V28',
    type: 'pdf',
    updatedAt: '2022-06-03T18:55:56.793Z',
  },
]
