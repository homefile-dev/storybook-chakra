import { ReactElement } from "react";

interface Tab {
  label: string;
  component: ReactElement;
}
export interface ITabsHeader {
  tabList: Tab[];
}
