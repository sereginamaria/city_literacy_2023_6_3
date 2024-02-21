<template>
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери ВСЕ подходящие сайты, которыми можно воспользоваться, чтобы узнать сразу обо всех интересных событиях в городе.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in mainJSON.taskScienceFestival.listOfAnswersTaskSites" :key="el.id" :class="{choosenAnswer: el.choose}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    <p>{{el.name}}</p>
                    <p style="color: #1F5EFF">{{el.link}}</p>
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK5 !== 'NA' && mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK5 !== ''">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskSites",
        props: {
            screen: {},
            constScienceFestival: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el) {
                let k = 0
                this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.splice(this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.push(el.id)
                    el.choose = true
                }
                this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK5 = this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.join()
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.forEach(el => {
                    if(el === 1 || el === 3){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.length === 2 && maxScore === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_LLK5 = 2
                }
                else if(this.mainJSON.taskScienceFestival.listOfChoosenAnswersTaskSites.length === 1 && maxScore === 1){
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_LLK5 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_LLK5 = 0
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

</style>