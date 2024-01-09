<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни пропуски, выбирая подходящие по смыслу слова.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay h-50" style="width: 70%">
                <p style="font-size: 20px; color: white">Волонтер — это человек, который выполняет какую-либо полезную общественную работу на благо общества
                    <MySelect :list="constTaskCleaningDay.listOfAnswersTaskWhoIsAVolunteer1" :listID="1" @answer="addAnswer"
                              :selected="this.mainJSON.taskCleaningDay.ULSE3_Log_SEK4_1" style="font-size: 20px"></MySelect>
                    , делает это
                    <MySelect :list="constTaskCleaningDay.listOfAnswersTaskWhoIsAVolunteer2" :listID="2" @answer="addAnswer"
                              :selected="this.mainJSON.taskCleaningDay.ULSE3_Log_SEK4_2" style="font-size: 20px"></MySelect>
                    и
                    <MySelect :list="constTaskCleaningDay.listOfAnswersTaskWhoIsAVolunteer3" :listID="3" @answer="addAnswer"
                              :selected="this.mainJSON.taskCleaningDay.ULSE3_Log_SEK4_3" style="font-size: 20px"></MySelect>.
                </p>
            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_1 !== 'NA' ||
            mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_2 !== 'NA' || mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskWhoIsAVolunteer",
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
            addAnswer(el, listID) {
                this.mainJSON.taskCleaningDay["ULSE3_Log_SEK4_" + listID] = el
                this.mainJSON.taskCleaningDay.results["ULSE3_Log_SEK4_" + listID] = el
            },
            checkAnswer() {

                    screen.isShow = false
                    this.mainJSON.taskCleaningDay.shownScreenID++
                    this.mainJSON.taskCleaningDay.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                            el.isShow = true
                        }
                    })
                    if(this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_1 === 'безвозмездно' &&
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_2 === 'в свободное время' &&
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_3 === 'по собственному желанию') {
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_1 = 1
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_1 = 0
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