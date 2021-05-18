import { Models } from '@rematch/core'
import { invoiceList } from './invoiceList' 
import { productList } from './productList' 
import { adsProducts } from './adsProducts' 

export interface RootModel extends Models<RootModel> {
    invoiceList: typeof invoiceList;
    productList: typeof productList;
    adsProducts: typeof adsProducts;
}

export const models: RootModel = { 
    invoiceList,
    productList,
    adsProducts,
 }