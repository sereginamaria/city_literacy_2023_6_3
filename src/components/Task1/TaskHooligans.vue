<template>
    <!--Задание 7 задание 1-->
    <div class="background backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].id === 34">
        <div class="instruction-block" id="instruction-block">
            <p>Что ответишь Алисе?
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskScienceFestival.listOfAnswersTaskHooligans1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_2}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 7 задание 2-->
    <div class="background backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].id === 39 ||
                mainJSON.taskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].id === 40">
        <div class="instruction-block" id="instruction-block">
            <p>Что ответишь Алисе? Выбери один вариант ответа.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskScienceFestival.listOfAnswersTaskHooligans2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_3}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskHooligans",
        props: {
            screen: {},
            constTaskScienceFestival: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(qID, el){
                if(qID === 1){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_2 = el.id
                }
                if(qID === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_3 = el.id
                }
            },
            nextTask(screen){
                screen.isShow = false
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_2 === 1){
                    this.mainJSON.taskScienceFestival.shownScreenID++
                }
                else {
                    this.mainJSON.taskScienceFestival.shownScreenID+=3
                }
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            checkAnswer(){
                screen.isShow = false

                if (this.mainJSON.taskScienceFestival.shownScreenID === 39){
                    this.mainJSON.taskScienceFestival.shownScreenID+=2
                }
                else{
                    this.mainJSON.taskScienceFestival.shownScreenID++
                }
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_2 === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_2 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_2 = 0
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_3 === 1){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_3 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_3 = 0
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
</style>