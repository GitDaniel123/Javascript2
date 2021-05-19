export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => state.cart,
        count: state => {
            let count = 0
            if(state.cart.length > 0) {
                state.cart.forEach(item => {
                    count += item.product.price * item.quantity
                })
            }
            return count
        },
        cartItemCount: state => {
            let counter = 0
            state.cart.forEach(item => {
                counter+= item.quantity
            })
            return counter
        }

    },
    mutations: {
        ADD_TO_CART: (state,{ product, quantity }) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += 1
                return
            }

            state.cart.push({ product, quantity })


        },
        REMOVE_FROM_CART: (state, product ) =>{
            let exists = state.cart.find(item => item.product._id === product.product._id)
                if(exists.quantity > 1){
                   exists.quantity -= 1
                    return
                }else {
                    state.cart.splice((state.cart.find(item => item.product._id === product.product._id)), 1) 
                }

            
        },
        CLEAN_CART: state => {
            state.cart = []
        }
    },
    actions:{
        addProductToCart: ({commit}, {product, quantity}) =>{
            commit('ADD_TO_CART', { product, quantity })
        },
        removeProductFromCart: ({commit}, {product, quantity}) =>{
            commit('REMOVE_FROM_CART', { product, quantity })
        },
        cleanCartList: ({ commit }) => {

            commit('CLEAN_CART')

        }
    }
}