import VueCookies from 'vue-cookies'
const state = {
    slideMenu:VueCookies.get('slideMenu') == 'true' ? true : false,
}

const mutations = {
    toggleSlideMenu(state) {
        state.slideMenu = !state.slideMenu;
        if(state.slideMenu == true){
            VueCookies.set('slideMenu',true,0)
        }else{
            VueCookies.set('slideMenu',false,0)
        }
    }
}

const actions = {
    toggleSlideMenu({commit}) {
        commit('toggleSlideMenu');
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}