import { proxy } from 'valtio'
import { PanelHeaderI } from '../interfaces/headers/PanelHeader.interface'


export const folderHeaderProxy = proxy<PanelHeaderI>({
  handleCloseButton: () => {},
  icon: '',
  title: '',
})