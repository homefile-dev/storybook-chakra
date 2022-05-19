import { LogoCompany as logoUrl } from '../../assets/images'

const images = [
  {
    description: 'construction1',
    _id: '1',
    Location:
      'https://images.pexels.com/photos/2323080/pexels-photo-2323080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction2',
    _id: '2',
    Location:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction3',
    _id: '3',
    Location:
      'https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction4',
    _id: '4',
    Location:
      'https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction5',
    _id: '5',
    Location:
      'https://images.pexels.com/photos/6774022/pexels-photo-6774022.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction6',
    _id: '6',
    Location:
      'https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction7',
    _id: '7',
    Location:
      'https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction8',
    _id: '8',
    Location:
      'https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction9',
    _id: '9',
    Location:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction10',
    _id: '10',
    Location:
      'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction11',
    _id: '11',
    Location:
      'https://images.pexels.com/photos/12081659/pexels-photo-12081659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    description: 'construction12',
    _id: '12',
    Location:
      'https://images.pexels.com/photos/4134179/pexels-photo-4134179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
