import Vue from 'vue'
import Vuex from 'vuex'

import { usersCollection, currentUser } from './fireBaseConfig'
 
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {}
    },
   
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        }
    },

    actions: {
        fetchUserProfile({ commit, state }) {
            usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err)
            })
        }
    }, 

})