import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        key: '1ac00fede8ff179b0d96329166f66c49',
        locationIsAllowed: true,
        userPosition: '',
        modal: '',
        allInfo: '',
        locationName: ''
    },
    mutations: {
        locationNotAllowed(state){
            state.locationIsAllowed = false
        },
        setPosition(state, position){
            this.state.userPosition = position
        },
        setAllInfo(state, allInfo){
            this.state.allInfo = allInfo
        },
        setLocationName(state, locationName){
            this.state.locationName = locationName
        },
        setModal(state, modal){
            state.modal = modal
        },
        closeModal(state){
            state.modal = ''
        },


    },
    actions: {

    },
    getters: {
        KEY(state){
            return state.key
        },
        USER_POSITION(state){
            return state.userPosition
        },
        LOCATION_NAME(state){
            return state.locationName
        },
        ALL_INFO(state){
            return state.allInfo
        },
        LOCATION_IS_ALLOWED(state){
            return state.locationIsAllowed
        },
        MODAL(state){
            return state.modal
        }

    }
})

export default store