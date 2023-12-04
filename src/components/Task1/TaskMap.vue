<template>
    <!--Задание 9 задание-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Проверь эту карту. Выбери ДВА объекта, которых на самом деле НЕТ в Москве. Ты можешь вернуть объект на карту, кликнув на него еще раз.
            </p>
        </div>
        <div>
            <div v-for="el in mainJSON.taskLibraryNight.listOfElementsTask9" :key="el.id">
                <img :src=" require('../../assets/' + el.src) " :class="{choose: el.choose}" @click="addAnswer(el)"
                     alt="Avatar" :style="el.style"/>
            </div>
        </div>

        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK3_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskMap",
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: ''
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal() {
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            addAnswer(el){
                if (el.choose !== null) {
                    el.choose = !el.choose
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK3_1 = this.mainJSON.taskLibraryNight.listOfAnswersTask9.join()
                }

            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.taskLibraryNight.listOfElementsTask9.forEach( el => {
                        if(el.choose === true){
                            this.mainJSON.taskLibraryNight.listOfAnswersTask9.push(el.name)
                        }
                    })
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK3_1 = this.mainJSON.taskLibraryNight.listOfAnswersTask9.join()

                    screen.isShow = false
                    this.mainJSON.taskLibraryNight.shownScreenID++
                    this.mainJSON.taskLibraryNight.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }

                let maxScore = 0
                this.mainJSON.taskLibraryNight.listOfAnswersTask9.forEach( el => {
                    if(el === "Река Дон" || el === "Парк 'Приокский'"){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskLibraryNight.listOfAnswersTask9.length === 2 && maxScore === 2){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK3_1 = 2
                }
                else if(this.mainJSON.taskLibraryNight.listOfAnswersTask9.length === 2 && maxScore === 1){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK3_1 = 1
                }
                else{
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK3_1 = 0
                }
                let t = new Date()
                this.mainJSON.results.dataTimeLastUpdate =
                    [
                        t.getFullYear(),
                        ('0' + (t.getMonth() + 1)).slice(-2),
                        ('0' + t.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (t.getHours())).slice(-2),
                        ('0' + (t.getMinutes())).slice(-2),
                        ('0' + t.getSeconds()).slice(-2)
                    ].join(':');

                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .choose {
        opacity: 0.5;
    }
</style>