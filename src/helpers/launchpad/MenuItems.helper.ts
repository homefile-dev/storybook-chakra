import { t } from "i18next";

export const UserMenuItems = [
  {
    handleClick: () => console.log("Clicked on 'My Profile'"),
    label: t('launchpad.menu.profile'),
  },
  {
    handleClick: () => {},
    label: t('launchpad.menu.logout'),
  },
]

export const MyHomeMenuItems = [
  {
    handleClick: () => {},
    label: t('myHomes.menu.settings'),
  },
  {
    handleClick: () => {},
    label: t('myHomes.menu.help'),
  },
]
