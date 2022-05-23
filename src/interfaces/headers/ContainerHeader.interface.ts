import { IconMenuI } from '../launchpad/IconMenu.interface'
import { SectionHeaderI } from './SectionHeader.inteface'

export interface ContainerHeaderI extends IconMenuI, SectionHeaderI {
  isThin?: boolean
}