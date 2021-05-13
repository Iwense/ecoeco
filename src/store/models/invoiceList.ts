import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { RootState } from "..";

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
    price: any,
    bonus?: string,
    products: IProduct[],
    location?: string,
}

const initial  = [
    {id: 1, date: Date.now(), time: '18:00', price: '1500', bonus: '15', location: 'Орёл, ул. Полесская',
      products: [
        {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
        {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
      ]
    },
    {id: 2, date: Date.now(), time: '16:00', price: '1450', bonus: '15', location: 'Орёл, ул. Полесская', 
    products: [
      {id: 1, title: 'Ведро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
      {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    ]},
    {id: 3, date: Date.now(), time: '17:00', price: '1650', bonus: '15', location: 'Орёл, ул. Полесская', 
    products: [
      {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
      {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    ]},
    {id: 4, date: Date.now(), time: '19:00', price: '2100', bonus: '15', location: 'Орёл, ул. Полесская', 
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
    append: (state: IState,  payload:any , help: string) => {
      return {
        ...state,
        list: [...state.list, payload]
      }
    },
  },
  effects: (dispatch) => ({
    addNewInvoice(payload, rootState){
      const oldList = rootState.invoiceList.list
      const dateAndTime = payload?.dateTime.split("T");
      let date = '',
          time = ''
        if (dateAndTime && !!dateAndTime.length && dateAndTime.length >= 2) {
            date = dateAndTime[0];
            time = dateAndTime[1];
        }
        // {sum: 1290, name: "Пакет ЛЕНТА средний майка 12кг", price: 645, quantity: 2}
      const newProducts = payload?.items.map((item: any, index:number)=> {

        const newArrayNames = item?.name.split(' ') 
        const newWeight = newArrayNames[newArrayNames.length - 1 || "~"]
        const newItem: IProduct = {
          id: index,
          title: item?.name,
          subtitle: "",
          weight: newWeight,
          amount: item?.quantity,
          price: item?.price,
        }

        return newItem

      })  

      const newInvoice = {
        id: oldList[oldList.length - 1]?.id + 1,
        date: date, 
        time: time,
        price: payload?.totalSum,
        bonus: '5' ,
        location: payload?.retailPlaceAddress,
        products: newProducts,
      }

      dispatch.invoiceList.append(newInvoice, "")
    }
  }),
});