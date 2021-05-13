import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { RootState } from "..";

export interface IProduct {
  id: number;
  title: string;
  amount: number;
}

export interface IProductList {
    id: number;
    name: string;
    date: Date;
    time: string;
    products: IProduct[]
}

const initial  = [
    {id: 1, name: "Список", date: Date.now(), time: '18:00', products:[
        {id: 1, title: 'Молоко', amount: 1},
        {id: 2, title: 'Мороженное', amount: 2},
        {id: 3, title: 'Кока-кола', amount: 1},
    ] }
]

interface IState {
  error: string | null;
  list : IProductList[] | [];
}

export const productList = createModel<RootModel>()({
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
    addNewProductList(payload, rootState){
    //   const oldList = rootState.invoiceList.list
    //   const dateAndTime = payload?.dateTime.split("T");
    //   let date = '',
    //       time = ''
    //     if (dateAndTime && !!dateAndTime.length && dateAndTime.length >= 2) {
    //         date = dateAndTime[0];
    //         time = dateAndTime[1];
    //     }
    //     // {sum: 1290, name: "Пакет ЛЕНТА средний майка 12кг", price: 645, quantity: 2}
    //   const newProducts = payload?.items.map((item: any, index:number)=> {

    //     const newArrayNames = item?.name.split(' ') 
    //     const newWeight = newArrayNames[newArrayNames.length - 1 || "~"]
    //     const newItem: IProduct = {
    //       id: index,
    //       title: item?.name,
    //       amount: item?.quantity,
    //     }

    //     return newItem

    //   })  

    //   const newInvoice = {
    //     id: oldList[oldList.length - 1]?.id + 1,
    //     date: date, 
    //     time: time,
    //     price: payload?.totalSum,
    //     bonus: '5' ,
    //     location: payload?.retailPlaceAddress,
    //     products: newProducts,
    //   }

    //   dispatch.invoiceList.append(newInvoice, "")
    }
  }),
});