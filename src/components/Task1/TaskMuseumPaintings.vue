<template>
    <!--Задание 5 пункт 1-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].id === 22">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери, какие правила дорожного движения нарушаются на этой книжной иллюстрации.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskMuseumPaintings1" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_2}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(1, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text justify-content-end">
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
    <!--Задание 5 пункт 2-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
         v-if="mainJSON.taskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].id === 23">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери, какие правила дорожного движения нарушаются на этой книжной иллюстрации.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskMuseumPaintings2" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_3}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(2, el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text justify-content-end" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_3 !== 'NA'">Готово</MyButton>
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
            constTaskLibraryNight: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            nextTask(screen){
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })
            },
            chooseAnswer(id, el){
                id++
                this.mainJSON.taskLibraryNight.results["ULSCLL2_Log_SCK2_" + id] = el.id
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_2 === 2){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK2_2 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK2_2 = 0
                }
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK2_3 === 4){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK2_3 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK2_3 = 0
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