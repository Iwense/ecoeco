import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface IInvoiceList {
    date: Date,
    time: string,
    price: string,
    bonus: string,
}

const initial = [
    {id: 1, date: Date.now(), time: '18:00', price: '1500', bonus: '15' },
    {id: 2, date: Date.now(), time: '18:00', price: '1500', bonus: '15' },
    {id: 3, date: Date.now(), time: '18:00', price: '1500', bonus: '15' },
    {id: 4, date: Date.now(), time: '18:00', price: '1500', bonus: '15' },
]


export const invoiceList = createModel<RootModel>()({
  state: {
    error: null,
    list: initial,
  },
  reducers: {
    // SET_MODAL: (state, payload: boolean) => {
    //   return {
    //     ...state,
    //     loginModal: payload
    //   }
    // },
  },
  effects: (dispatch) => ({
  
  }),
});