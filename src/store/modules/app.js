import VueCookies from 'vue-cookies'
const state = {
    slideMenu:VueCookies.get('slideMenu') == 'true' ? true : false,
    refresh:true
}

const mutations = {
    toggleSlideMenu(state) {
        state.slideMenu = !state.slideMenu;
        if(state.slideMenu == true){
            VueCookies.set('slideMenu',true,0)
        }else{
            VueCookies.set('slideMenu',false,0)
        }
    },
    toggleRefresh(state){
        state.refresh = !state.refresh;
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