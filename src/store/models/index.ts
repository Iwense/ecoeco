import { Models } from '@rematch/core'
import { invoiceList } from './invoiceList' 

export interface RootModel extends Models<RootModel> {
    invoiceList: typeof invoiceList;
}

export const models: RootModel = { 
    invoiceList,
 }