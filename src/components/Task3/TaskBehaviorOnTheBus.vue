<template>
    <div class="backgroundTaskNewGirl" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block">
            <p>Что ответишь однокласснице? Выбери один или несколько ответов.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in mainJSON.taskNewGirl.listOfAnswersBehaviorOnTheBus" :key="el.id" :class="{choosenAnswer: el.choose}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    <p>{{el.name}}</p>
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].name}}</span>
                    {{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNewGirl.results.ULSE2_Log_SEK3_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskBehaviorOnTheBus",
        props: {
            screen: {},
            constTaskNewGirl: {}
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el) {
                let k = 0
                this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.forEach(elMass => {
                    if(elMass === el.id){
                        this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.splice(this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.indexOf(elMass), 1)
                        el.choose = false
                        k++
                    }
                })
                if(k === 0){
                    this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.push(el.id)
                    el.choose = true
                }
                this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK3_3 = this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.join()
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNewGirl.shownScreenID++
                this.mainJSON.taskNewGirl.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
                        el.isShow = true
                    }
                })
                let maxScore = 0
                this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.forEach(el => {
                    if(el === 1 || el === 3){
                        maxScore++
                    }
                })
                if(this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.length === 2 && maxScore === 2){
                    this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK3_3 = 2
                }
                else if(this.mainJSON.taskNewGirl.listOfChoosenAnswersBehaviorOnTheBus.length === 1 && maxScore === 1){
                    this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK3_3 = 1
                }
                else {
                    this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK3_3 = 0
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