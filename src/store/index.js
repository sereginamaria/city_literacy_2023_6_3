import Vuex from 'vuex'
import axios from "axios";

import date from "./date"
import constTaskLibraryNight from "./constTaskLibraryNight"
import constTaskChatWinterHolidays from "@/store/constTaskChatWinterHolidays";
import constTaskCleaningDay from "@/store/constTaskCleaningDay";
import constForm from "@/store/constForm";


export default new Vuex.Store({
    state: {
        mainJSON: {},
        constTaskLibraryNight: {},
        constTaskChatWinterHolidays: {},
        constTaskCleaningDay: {},
        constForm: {},
        loginResponse: {}
    },
    actions: {
        get_mainJSON({commit}){
            if (!localStorage.login && !localStorage.hash) {
                commit('first_set_mainJSON', date.date)
                commit('set_constTaskLibraryNight', constTaskLibraryNight.constTaskLibraryNight)
                commit('set_constTaskChatWinterHolidays', constTaskChatWinterHolidays.constTaskChatWinterHolidays)
                commit('set_constTaskCleaningDay', constTaskCleaningDay.constTaskCleaningDay)
                commit('set_constForm', constForm.constForm)
            }
            else {
                axios.post( "/city_literacy/2023_6_3/server_request/auth_city.php", {
                    login: localStorage.login,
                    hash: localStorage.hash
                })
                    .then(function (response) {
                        if (response.data.status === "ok") {
                            commit('set_mainJSON', JSON.parse(response.data.json))
                            commit('set_constTaskLibraryNight', constTaskLibraryNight.constTaskLibraryNight)
                            commit('set_constTaskChatWinterHolidays', constTaskChatWinterHolidays.constTaskChatWinterHolidays)
                            commit('set_constTaskCleaningDay', constTaskCleaningDay.constTaskCleaningDay)
                            commit('set_constForm', constForm.constForm)
                        }
                        if (response.data.status === "error") {
                            localStorage.clear()
                            window.location.reload();
                            commit('set_mainJSON', date.date)
                            commit('set_constTaskLibraryNight', constTaskLibraryNight.constTaskLibraryNight)
                            commit('set_constTaskChatWinterHolidays', constTaskChatWinterHolidays.constTaskChatWinterHolidays)
                            commit('set_constTaskCleaningDay', constTaskCleaningDay.constTaskCleaningDay)
                            commit('set_constForm', constForm.constForm)
                        }
                    })
                    .catch(function () {
                    })
            }
        }
    },
    mutations: {
        first_set_mainJSON: (state, el) => {
            state.mainJSON = el

            let randomElement = state.mainJSON.listOfTasks[Math.floor(Math.random()*state.mainJSON.listOfTasks.length)]
            state.mainJSON[randomElement.name].isShow = true
        },
        set_mainJSON: (state, el) => {
            state.mainJSON = el
        },
        set_constTaskLibraryNight: (state, el) => {
            state.constTaskLibraryNight = el
        },
        set_constTaskChatWinterHolidays: (state, el) => {
            state.constTaskChatWinterHolidays = el
        },
        set_constTaskCleaningDay: (state, el) => {
            state.constTaskCleaningDay = el
        },
        set_constForm: (state, el) => {
            state.constForm = el
        },
        push_login: (state, auth) => {
            axios.post("/city_literacy/2023_6_3/server_request/auth_city.php", {  // todo разница между авторизацией и аутентификацией
                loginJSON: {
                    login: auth.login,
                    password: auth.password
                }
            })
                .then(function (response) {
                    state.loginResponse = response.data

                    if( response.data.status === "ok") {
                        if(response.data.message === "re_login_success") {
                            state.mainJSON =  JSON.parse(response.data.json)
                            state.mainJSON.hash = response.data.hash
                        }
                        else {
                            state.mainJSON.login = state.mainJSON.results.login = response.data.login
                            state.mainJSON.hash = response.data.hash
                            state.mainJSON.loginShow = false
                            state.mainJSON.instructionShow = true
                            let t = new Date()
                            state.mainJSON.results.dataTimeStart =
                                [
                                    t.getFullYear(),
                                    ('0' + (t.getMonth() + 1)).slice(-2),
                                    ('0' + t.getDate()).slice(-2)
                                ].join('-') + ' ' + [
                                    ('0' + (t.getHours())).slice(-2),
                                    ('0' + (t.getMinutes())).slice(-2),
                                    ('0' + t.getSeconds()).slice(-2)
                                ].join(':');
                        }

                        localStorage.hash = response.data.hash
                        localStorage.login = response.data.login

                        axios.post( "/city_literacy/2023_6_3/server_request/receiver.php", {
                            mainJSON: state.mainJSON
                        })
                    }
                    if (response.data.status === "error") {  // todo constants to enums
                        state.loginResponse = response.data
                    }
                })
                .catch(function () {
                })
        },
        push_mainJSON: (state, push) => {
            if (localStorage.login && localStorage.hash){
                axios.post( "/city_literacy/2023_6_3/server_request/receiver.php", {
                    mainJSON: push.push
                })
                    .then(function () {
                     // todo ?????????????????????????????
                     /*   Vue.set(state, "responsePushJSON", response.data)*/

                    })
                    .catch(function () {
     /*                   Vue.set(state, "responsePushJSON", "noInternet")*/
                        // todo ?????????????????????????????
                    })
            }
            else {

                window.location.reload();   // todo проверить случайбесконечных перезагрузок
            }
        },
    },
    getters: {
        mainJSON(state){
            return state.mainJSON;
        },
        constTaskLibraryNight(state){
            return state.constTaskLibraryNight;
        },
        constTaskChatWinterHolidays(state){
            return state.constTaskChatWinterHolidays;
        },
        constTaskCleaningDay(state){
            return state.constTaskCleaningDay;
        },
        constForm(state) {
            return state.constForm;
        },
        loginResponse(state){
            return state.loginResponse;
        }
    },
})

