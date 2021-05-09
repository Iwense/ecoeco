import { RootState } from './../index';
import {IInvoiceList} from '../models/invoiceList'

export const getListInvoice = (state: RootState):IInvoiceList[] => state.invoiceList.list