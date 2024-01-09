<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Что делать в этой ситуации? Выбери один вариант ответа.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="option-answers-background">
                <div v-for="el in constTaskCleaningDay.listOfAnswersMariamFeelsBad" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskCleaningDay.results.ULSE3_Log_SES5_1}"
                     class="option-answers-border"
                >
                    <div @click="chooseAnswer(el)">
                        {{el.value}}
                    </div>
                </div>
            </div>
        </div>

        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].name}}</span>
                    {{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.results.ULSE3_Log_SES5_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskMariamFeelsBad",
        props: {
            screen: {},
            constTaskCleaningDay: {}
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
            chooseAnswer(el){
                this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES5_1 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskCleaningDay.shownScreenID++
                this.mainJSON.taskCleaningDay.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                        el.isShow = true
                    }
                })
                if (this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES5_1 === 1){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES5_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES5_1 = 0
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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>

</style>