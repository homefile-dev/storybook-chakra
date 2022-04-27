import { t } from 'i18next'
import { Document, Proposal, ProgressReport } from '../../assets/images'

export const documents = [
  {
    label: t('createDocument.menuItems.proposal'),
    icon: Proposal,
    active: false,
    onClick: () => {},
  },
  {
    label: t('createDocument.menuItems.progressReport'),
    icon: ProgressReport,
    active: false,
    onClick: () => {},
  },
  {
    label: t('createDocument.menuItems.publicTemplate'),
    icon: Document,
    onClick: () => {},
  },
]
