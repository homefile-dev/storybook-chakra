import { IIconMenu } from "../launchpad/IconMenu.interface"
import { ISectionHeader } from "./SectionHeader.inteface";

export interface IContainerHeader extends IIconMenu, ISectionHeader {
  isThin?: boolean
}