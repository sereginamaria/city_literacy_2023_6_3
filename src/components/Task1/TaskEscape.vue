<template>
    <!--Задание 6 задание-->
    <div class="backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Что ответишь Алисе? Выбери один вариант ответа
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskScienceFestival.listOfAnswersTaskEscape" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1}"
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
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons"  disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskEscape",
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

                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 3 || this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 4){
                    this.mainJSON.taskScienceFestival.shownScreenID++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 1){
                    this.mainJSON.taskScienceFestival.shownScreenID+=5
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 2){
                    this.mainJSON.taskScienceFestival.shownScreenID+=2
                }

                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 1 || this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 === 3){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_1 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_1 = 0
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
            },
            chooseAnswer(el){
                this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCS4_1 = el.id
            },
        }
    }
</script>

<style scoped>

</style>