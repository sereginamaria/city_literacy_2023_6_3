<template>
    <div class="backgroundTaskNewGirl"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни пропуски, выбирая слова, которые больше всего подходят.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyNewGirl h-50" style="width: 70%">
                <p style="font-size: 20px">Волонтер — это человек, который осуществляет
                    <MySelect :list="constTaskNewGirl.listOfAnswersTaskWhoIsAVolunteer1" :listID="1" @answer="addAnswer"
                              :selected="this.mainJSON.taskNewGirl.ULSE2_Log_SEK4_1" style="font-size: 20px"></MySelect>
                    деятельность
                    <MySelect :list="constTaskNewGirl.listOfAnswersTaskWhoIsAVolunteer2" :listID="2" @answer="addAnswer"
                              :selected="this.mainJSON.taskNewGirl.ULSE2_Log_SEK4_2" style="font-size: 20px"></MySelect>
                    <MySelect :list="constTaskNewGirl.listOfAnswersTaskWhoIsAVolunteer3" :listID="3" @answer="addAnswer"
                              :selected="this.mainJSON.taskNewGirl.ULSE2_Log_SEK4_3" style="font-size: 20px"></MySelect>.
                </p>
            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_1 !== 'NA' ||
            mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_2 !== 'NA' || mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_3 !== 'NA'">Готово</MyButton>
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
        name: "TaskWhoIsAVolunteer",
        props: {
            screen: {},
            constTaskNewGirl: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            addAnswer(el, listID) {
                this.mainJSON.taskNewGirl["ULSE2_Log_SEK4_" + listID] = el
                this.mainJSON.taskNewGirl.results["ULSE2_Log_SEK4_" + listID] = el
            },
            checkAnswer(status) {
                this.modalVisible = false

                if(status) {
                    screen.isShow = false
                    this.mainJSON.taskNewGirl.shownScreenID++
                    this.mainJSON.taskNewGirl.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
                            el.isShow = true
                        }
                    })
                    if(this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_1 === 'добровольную' &&
                        this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_2 === 'на благо общества' &&
                        this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK4_3 === 'без получения денежного вознаграждения') {
                        this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK4_1 = 1
                    }
                    else this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK4_1 = 0
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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>
</style>