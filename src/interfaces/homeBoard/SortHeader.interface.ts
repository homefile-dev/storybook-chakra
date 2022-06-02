import { SelectItemI } from "../inputs/Select.interface";
import { MenuItemI } from "../launchpad/IconMenu.interface";

export interface SortHeaderI {
  initialSelectValue?: string;
  selectItems?: SelectItemI[]
}