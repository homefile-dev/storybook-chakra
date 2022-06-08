import { proxy } from 'valtio'
import { RecipientI } from '../interfaces/sendCommunication/AddRecipient.interface'

interface ShareWithI {
  recipients?: RecipientI[]
}

export const fileRecipientProxy = proxy<ShareWithI>({
  recipients: [],
})