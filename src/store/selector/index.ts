import { RootState } from './../index';
import {IInvoiceList} from '../models/invoiceList'
import {IProductList} from '../models/productList'

export const getListInvoice = (state: RootState):IInvoiceList[] => state.invoiceList.list
export const getProductList = (state: RootState):IProductList[] => state.productList.list
export const getAdsProducts = (state: RootState)=> state.adsProducts.list