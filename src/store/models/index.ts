import { Models } from '@rematch/core'
import { invoiceList } from './invoiceList' 
import { productList } from './productList' 

export interface RootModel extends Models<RootModel> {
    invoiceList: typeof invoiceList;
    productList: typeof productList;
}

export const models: RootModel = { 
    invoiceList,
    productList,
 }