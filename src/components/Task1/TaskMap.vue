<template>
    <!--Задание 9 задание-->
    <div class="background backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Проверь эту карту. Выбери ДВА объекта, которых на самом деле НЕТ в Москве. Ты можешь вернуть объект на карту, кликнув на него еще раз.
            </p>
        </div>
        <div>
            <div v-for="el in mainJSON.taskScienceFestival.listOfElementsTask9" :key="el.id">
                <img :src=" require('../../assets/' + el.src) " :class="{choose: el.choose}" @click="addAnswer(el)"
                     alt="Avatar" :style="el.style"/>
            </div>
        </div>

        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_LLK3_1 !== 'NA'">Готово</MyButton>
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
            constTaskScienceFestival: {}
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
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_LLK3_1 = this.mainJSON.taskScienceFestival.listOfAnswersTask9.join()
                }

            },
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.taskScienceFestival.listOfElementsTask9.forEach( el => {
                        if(el.choose === true){
                            this.mainJSON.taskScienceFestival.listOfAnswersTask9.push(el.name)
                        }
                    })
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_LLK3_1 = this.mainJSON.taskScienceFestival.listOfAnswersTask9.join()

                    screen.isShow = false
                    this.mainJSON.taskScienceFestival.shownScreenID++
                    this.mainJSON.taskScienceFestival.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }

                let maxScore = 0
                this.mainJSON.taskScienceFestival.listOfAnswersTask9.forEach( el => {
                    if(el === "Парк Рускеала" || el === "Река Волга"){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskScienceFestival.listOfAnswersTask9.length === 2 && maxScore === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK3_1 = 2
                }
                else if(this.mainJSON.taskScienceFestival.listOfAnswersTask9.length === 2 && maxScore === 1){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK3_1 = 1
                }
                else{
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK3_1 = 0
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
.background {
    background-position: bottom 20% right!important;
}
    .choose {
        opacity: 0.5;
    }
</style>