//import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: {
            name: 'User Mock',
            email: 'somebody@somewhere.com'
        }
    },

    mutations: {
        toggleMenu(state, isVisible) {
           /*  if(!state.user) {
                state.isMenuVisible = false
                return
            } */

            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        }
    }

})