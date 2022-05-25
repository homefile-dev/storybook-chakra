import { FolderI } from "../../interfaces/homeBoard/FolderSharing.interface";
import { SelectItemI } from "../../interfaces/inputs/Select.interface";

export const FoldersDB: FolderI[] = [
  {
    type: 'General',
    subTypes: ['Misc'],
    isNew: true,
  },
  {
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
    type: 'Drawings',
    subTypes: ['Blueprint', 'Misc'],
    isNew: true,
  },
  {
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