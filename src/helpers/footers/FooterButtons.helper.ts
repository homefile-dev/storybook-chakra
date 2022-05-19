import { t } from "i18next";

export const ButtonsFooter = {
  button1: {
    buttonStyle: 'primaryFooter',
    label: t('createDocument.buttons.send'),
    onClick: () => 'Button 1 clicked',
  },
  button2: {
    buttonStyle: 'secondaryFooter',
    label: t('createDocument.buttons.saveDraft'),
    onClick: () => 'Button 2 clicked',
  },
  button3: {
    buttonStyle: 'secondaryFooter',
    label: t('createDocument.buttons.preview'),
    onClick: () => 'Button 3 clicked',
  },
  button4: {
    buttonStyle: 'secondaryFooter',
    label: t('createDocument.buttons.cancel'),
    onClick: () => 'Button 4 clicked',
  },
}
