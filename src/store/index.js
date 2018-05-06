import Vuex from "vuex"
Vue.use(Vuex)
import Vue from 'vue'

//需要将购物车数据存放到localStorage中
function readCartsFromStorage(){
   var cartsStr = localStorage.getItem("carts-info");
   if( cartsStr==null || cartsStr.trim()=="" ){
       return []
   }else {
       return JSON.parse(cartsStr);
   }
}

function writeCartsToStorage(carts){
    localStorage.setItem("carts-info", JSON.stringify(carts))
}

export default new Vuex.Store({
    state: {
      carts: readCartsFromStorage(),
    },
    getters: {
      totalCount :state=> {
        var result =0;
        state.carts.forEach(v=>{
          result += v.count;
        })
        return result;
      },
      getIds: state=>{
        //将数组carts中的id重新放到新的数组中，并且将这个新的数组用逗号拼接成字符串，也就是将id拼接起来，eg：1,2,3
        return state.carts.map(v=>v.id).join(",");
    },
    getCountById:state=> id => {
        var temp = state.carts.find(v=> v.id ==id);
        return temp.count;
    }
    },
    mutations:{
      addToCarts(state,cart){
        // console.log(cart)
        let temp=state.carts.find(v=>{
          return v.id == cart.id
        })
        if(temp){
          temp.count+=cart.count
  
        }else{
          state.carts.push(cart)
          
        }

        //当购物车信息更新之后，需要重新存入localStorage中
        writeCartsToStorage( state.carts)
      },
      updateCarts(state,cartsList){
          cartsList.forEach(v=>{
              let cart = state.carts.find(e => {
                  return e.id == v.id
              })
              cart.count=v.count
          })
          writeCartsToStorage(state.carts)
      }
      
    }
  })