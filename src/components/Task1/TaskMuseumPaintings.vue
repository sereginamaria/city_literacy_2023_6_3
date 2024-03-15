<template>
    <!--Задание 5 пункт 1-->
    <div class="backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].id === 18">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери, какие правила дорожного движения нарушаются на этой фотографии.
            </p>
        </div>
        <div class="option-answers-background" style="bottom: 10%; left: 35%">
            <div v-for="el in constTaskScienceFestival.listOfAnswersTaskMuseumPaintings1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_2}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text justify-content-end">
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 2-->
    <div class="backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].id === 19">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери, какие правила дорожного движения нарушаются на этой фотографии.
            </p>
        </div>
        <div class="option-answers-background" style="bottom: 10%; left: 35%">
            <div v-for="el in constTaskScienceFestival.listOfAnswersTaskMuseumPaintings2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_3}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text justify-content-end" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskMuseumPaintings",
        props: {
            screen: {},
            constTaskScienceFestival: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            nextTask(screen){
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            chooseAnswer(id, el){
                id++
                this.mainJSON.taskScienceFestival.results["ULSCLL3_Log_SCK2_" + id] = el.id
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_2 === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_2 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_2 = 0
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK2_3 === 4){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_3 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_3 = 0
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