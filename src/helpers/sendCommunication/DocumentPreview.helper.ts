import { LogoCompany as logoUrl } from '../../assets/images'

const images = [
  {
    description: 'construction1',
    _id: '1',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction2',
    _id: '2',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction3',
    _id: '3',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction4',
    _id: '4',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction5',
    _id: '5',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction6',
    _id: '6',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction7',
    _id: '7',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction8',
    _id: '8',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction9',
    _id: '9',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction10',
    _id: '10',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction11',
    _id: '11',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
  {
    description: 'construction12',
    _id: '12',
    bucketName: 'homefile-images',
    extension: 'jpeg',
    fileName: 'test-consult.jpeg-db224d',
  },
]

const form = [
  {
    name: 'Weekly Update',
    description: '',
    comments: '',
    value:
      'Pellentesque porta semper lacus, ac ullamcorper risus gravida nec. Quisque cursus non nisl at fringilla. Mauris ac sodales neque, id tristique turpis.',
    type: 'string',
  },
  {
    name: 'Two week look ahead',
    description: '',
    comments: '',
    value:
      'Nulla tempus augue a congue faucibus. Maecenas auctor tempor dui a auctor.',
    type: 'string',
  },
  {
    name: 'Items outstanding/owner clarifications',
    description: '',
    comments: '',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus dolor eu porttitor accumsan.',
    type: 'string',
  },
  {
    name: 'Milestone goals-per construction schedule',
    description: '',
    comments: '',
    value:
      'Sed porttitor, augue non consectetur tincidunt, justo arcu tempor turpis, non porttitor lorem quam id enim. Nulla tempus augue a congue faucibus.',
    type: 'string',
  },
  {
    name: 'Supply updates',
    description: '',
    comments: 'Can be used as placeholder or something else',
    value:
      'Donec aliquam pulvinar ipsum, sed varius lorem malesuada vitae. Pellentesque porta semper lacus, ac ullamcorper risus gravida nec. ',
    type: 'string',
  },
  {
    name: 'Project manager comments',
    description: '',
    comments: '',
    value:
      'Aenean sollicitudin nulla enim, non tempor risus euismod at. Integer lobortis pretium leo id rhoncus. Praesent vestibulum nisi dolor, et aliquam ipsum posuere sit amet.',
    type: 'string',
  },
]

const companyInfo = {
  address: '55432 South First Avenue Austin TX 78732.',
  facebook: 'https://facebook.com/arlucus',
  logoUrl,
  name: 'AR Lucus Construction, Inc.',
  phone: '555 555 1212',
  website: 'www.arlucuas.com',
}

const userInfo = {
  email: 'adam@arlucusconstruction.com',
  name: 'Adam Lucus',
  phone: '512 801 7721',
}

export const documentDB = {
  companyInfo,
  date: 'December 31-Jan 7',
  document: 'Progress Report',
  form,
  home: 'The Edmunds',
  images,
  userInfo,
}
