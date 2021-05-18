import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { RootState } from "..";

import  Apple from '../../assets/products/apple.jpg'
import  Chocolate from '../../assets/products/chocolate.jpg'
import  Coffee from '../../assets/products/coffee.jpg'
import  Grusha from '../../assets/products/grusha.jpg'
import  Juice from '../../assets/products/juice.jpg'
import  Kabachok from '../../assets/products/kabachok.jpg'
import  Lamber from '../../assets/products/lamber.jpg'
import  Milk from '../../assets/products/milk.jpg'
import  Ogurec from '../../assets/products/ogurec.jpg'
import  Pampers from '../../assets/products/pampers.jpg'
import  Pepsi from '../../assets/products/pepsi.jpg'
import  Potato from '../../assets/products/potato.jpg'
import  Sir from '../../assets/products/sir.jpg'
import  Slivki from '../../assets/products/slivki.jpg'
import  Snikers from '../../assets/products/snikers.jpg'
import  Tomat from '../../assets/products/tomat.jpg'
import  Tvorozhok from '../../assets/products/tvorozhok.jpg'
import  Voda from '../../assets/products/voda.jpg'
import  Zelen from '../../assets/products/zelen.jpg'

export interface IProduct {
  id: number;
  title: string;
  subtitle: string;
  weight: string;
  amount: number;
  price: number;
  image?: string;
}

export interface IInvoiceList {
    id: number,
    date: Date | string,
    time: string,
    price: any,
    bonus?: string,
    products: IProduct[],
    location?: string,
}

const initial  = [
    {id: 14456, date: Date.now(), time: '11:23', price: '922', bonus: '36', location: 'Москва, ул. Братиславская 31к1',
      products: [
        {id: 1, title: 'Pepsi', subtitle: '', weight: "2л", amount: 1, price: 149, image : Pepsi},
        {id: 2, title: 'Картошка', subtitle: '', weight:"2кг", amount: 2, price: 249, image : Potato},
        {id: 3, title: 'Сыр с ветчиной', subtitle: '', weight: "200г", amount: 1, price: 134, image : Sir},
        {id: 4, title: 'Сливки, домик в деревне', subtitle: '', weight: "471мл", amount: 2, price: 136, image : Slivki},
        {id: 5, title: 'Сникерс', subtitle: '', weight: "150г", amount: 4, price: 48, image : Snikers},
        {id: 6, title: 'Помидоры свежие', subtitle: '', weight: "200г", amount: 2, price: 26, image : Tomat},
        {id: 7, title: 'Творожое "Чудо"', subtitle: '', weight: "200мл", amount: 5, price: 27, image : Tvorozhok},
        {id: 8, title: 'Вода "Пилигрим"', subtitle: '', weight: "1.5л", amount: 1, price: 31, image : Voda},
        {id: 9, title: 'Петрушка и укроп', subtitle: '', weight: "100г", amount: 1, price: 122, image : Zelen},
      ]
    },
    // {id: 2, date: Date.now(), time: '16:00', price: '1450', bonus: '15', location: 'Орёл, ул. Полесская', 
    // products: [
    //   {id: 1, title: 'Ведро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
    //   {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    // ]},
    // {id: 3, date: Date.now(), time: '17:00', price: '1650', bonus: '15', location: 'Орёл, ул. Полесская', 
    // products: [
    //   {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
    //   {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    // ]},
    // {id: 4, date: Date.now(), time: '19:00', price: '2100', bonus: '15', location: 'Орёл, ул. Полесская', 
    // products: [
    //   {id: 1, title: 'Бедро цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 12, amount: 5, price: 300},
    //   {id: 2, title: 'Курица цыпленка-бройлера', subtitle: 'Белая птица охложденная', weight: 14, amount: 3, price: 500},
    // ]},
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
    append: (state: IState,  payload:IInvoiceList ) => {
      return {
        ...state,
        list: [payload,...state.list]
      }
    },
  },
  effects: (dispatch) => ({
    addQrCode ( payload , rootState){
      const addQr = {id: 14457, date: new Date('May 17, 2021'), time: '18:23', price: '1105', bonus: '25', location: 'Москва, ул. Братиславская 24', 
            products: [
              {id: 1, title: 'Яблоки', subtitle: '', weight: "1кг", amount: 2, price: 64, image : Apple},
              {id: 2, title: 'Шоколад "Алёнка"', subtitle: '', weight: "150г", amount: 1, price: 49, image : Chocolate},
              {id: 3, title: 'Кофе "Жардин"', subtitle: '', weight: "300г", amount: 1, price: 212, image : Coffee},
              {id: 4, title: 'Груши', subtitle: '', weight: "400г", amount: 4, price: 87, image : Grusha},
              {id: 5, title: 'Сок "Добрый"', subtitle: '', weight: "1л", amount: 1, price: 94, image : Juice},
              {id: 6, title: 'Кабачки', subtitle: '', weight: "700г", amount: 1, price: 43, image : Kabachok},
              {id: 7, title: 'Сыр Ламбер', subtitle: '', weight: "500г", amount: 1, price: 455, image : Lamber},
              {id: 8, title: 'Молоко "Домик в деревне"', subtitle: '', weight: "1л", amount: 1, price: 67, image : Milk},
              {id: 9, title: 'Огурцы', subtitle: '', weight: "300г", amount: 2, price: 34, image : Ogurec},
            ]
      } 
      dispatch.invoiceList.append(addQr)
    },
    addNewInvoice(payload, rootState){
      const oldList = rootState.invoiceList.list
      const dateAndTime = payload?.dateTime.split("T");
      let date = '',
          time = ''
        if (dateAndTime && !!dateAndTime.length && dateAndTime.length >= 2) {
            date = dateAndTime[0];
            time = dateAndTime[1];
        }
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

      dispatch.invoiceList.append(newInvoice)
    }
  }),
});