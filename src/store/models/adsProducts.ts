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


const products = [
        {id: 1, title: 'Сникерс', subtitle: 'Мороженное для всех', weight: "150г", amount: 4, price: 48,oldPrice: 96, image : Snikers},
        {id: 2, title: 'Картошка', subtitle: 'Цена ниже, чем обычно', weight:"2кг", amount: 2, price: 249, oldPrice: 512,image : Potato},
        {id: 3, title: 'Сыр с ветчиной', subtitle: 'Плавленный сыр', weight: "200г", amount: 1, price: 134,oldPrice: 275, image : Sir},
        {id: 4, title: 'Сливки', subtitle: 'Домик в деревне', weight: "471мл", amount: 2, price: 136, oldPrice: 280, image : Slivki},
        {id: 5, title: 'Pepsi', subtitle: 'Напиток для каждого', weight: "2л", amount: 1, price: 149,oldPrice: 345, image : Pepsi},
        {id: 6, title: 'Помидоры', subtitle: 'Свежие', weight: "200г", amount: 2, price: 26,oldPrice: 67, image : Tomat},
        {id: 7, title: 'Творожое ', subtitle: '"Чудо" для тебя', weight: "200мл", amount: 5, price: 27, oldPrice: 59,image : Tvorozhok},
        {id: 8, title: 'Вода "Пилигрим"', subtitle: '', weight: "1.5л", amount: 1, price: 31,oldPrice: 75, image : Voda},
        {id: 9, title: 'Петрушка и укроп', subtitle: '', weight: "100г", amount: 1, price: 122,oldPrice: 266, image : Zelen}
]


export const adsProducts = createModel<RootModel>()({
  state: {
    error: null,
    list: products,
  },
  reducers: {
    
  },
  effects: (dispatch) => ({

  
  }),
});