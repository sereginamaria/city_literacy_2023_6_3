<template>
    <!--Задание 11 задание-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери из списка фестиваль, который проходит в Москве.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constScienceFestival.listOfAnswersTaskFestival" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK4}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK4 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskFestival",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            screen: {},
            constScienceFestival: {}
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK4 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_LLK4 === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_LLK4 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_LLK4 = 0
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