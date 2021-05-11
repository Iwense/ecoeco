import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface IProduct {
  id: number;
  title: string;
  subtitle: string;
  weight: number;
  amount: number;
  price: number;
  image?: string;
}

export interface IInvoiceList {
    id: number,
    date: Date,
    time: string,
    price: string,
    bonus?: string,
    products: IProduct[]
}

const initial = [
    {id: 1, date: Date.now(), time: '18:00', price: '1500', bonus: '15' ,
      products: [
        {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
        {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
      ]
    },
    {id: 2, date: Date.now(), time: '16:00', price: '1450', bonus: '15' ,
    products: [
      {id: 1, title: 'Ведро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
      {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    ]},
    {id: 3, date: Date.now(), time: '17:00', price: '1650', bonus: '15' ,
    products: [
      {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
      {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    ]},
    {id: 4, date: Date.now(), time: '19:00', price: '2100', bonus: '15' ,
    products: [
      {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
      {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    ]},
]

interface IState {
  error: string | null;
  list : IInvoiceList[] | [];
}

export const invoiceList = createModel<RootModel>()({
  state: {
    error: null,
    list: initial,
  }as IState,
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