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
    list: [],
  }as IState,
  reducers: {
    append: (state: IState,  payload:IProductList ) => {
      return {
        ...state,
        list: [...state.list, payload]
      }
    },
    delete: (state:IState, id:number ) => {
      return{
        ...state,
        list: state.list.filter((item:IProductList) =>  item?.id !== id)
      }
    }
  },
  effects: (dispatch) => ({
    addNewProductList(payload,  rootState){
      const {name, products} = payload
      const now = new Date(Date.now());
      const minutes = now.getMinutes();
      const hour = `${now.getHours()}:${minutes<10? `0${minutes}`: minutes }`
      const newItem = {
        id: Date.now(),
        name: name,
        date: now,
        time: hour,
        products: products,
      }

      dispatch.productList.append(newItem)
    }
  }),
});