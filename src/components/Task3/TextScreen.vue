<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
    >
        <div v-if="screen.id === 0 || screen.id === 7 || screen.id === 31 || screen.id === 35 || screen.id === 41">
            <div class="background-text-center">
                <p>
                    <span class="name-in-dialog">{{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].name}}</span>
                    {{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].text}}
                </p>
            </div>
            <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
            </div>
        </div>

        <div class="background-text" id="background-text" v-else>
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].name}}</span>
                    {{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
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
        name: "TextScreen",
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                listOfNotDoneTasks: [],
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            checkAnswer(status) {
                this.modalVisible = false

                if (status) {
                    this.mainJSON.listOfTasks.forEach( el => {
                        if(el.name === 'taskCleaningDay'){
                            el.done = true
                            let t = new Date()
                            this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskCleaningDay =
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
                        if(el.done === false){
                            this.listOfNotDoneTasks.push(el.name)
                        }
                    })
                    if(this.listOfNotDoneTasks.length === 0){
                        let t = new Date()
                        this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEnd =
                            [
                                t.getFullYear(),
                                ('0' + (t.getMonth() + 1)).slice(-2),
                                ('0' + t.getDate()).slice(-2)
                            ].join('-') + ' ' + [
                                ('0' + (t.getHours())).slice(-2),
                                ('0' + (t.getMinutes())).slice(-2),
                                ('0' + t.getSeconds()).slice(-2)
                            ].join(':');
                        this.mainJSON.taskCleaningDay["isShow"] = false
            this.mainJSON.taskChatWinterHolidays["isShow"] = false
            this.mainJSON.taskScienceFestival["isShow"] = false
            this.mainJSON['feedbackShow'] = true
                        // this.mainJSON.forms['isShow'] = true
                        // this.mainJSON["instructionShow"] = true
                        // this.mainJSON["mainPageShow"] = false
                        // this.mainJSON.taskCleaningDay["isShow"] = false
                    }
                    else {
                        let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                        this.mainJSON[randomElement].isShow = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.listOfNotDoneTasks = []
                        this.mainJSON.taskCleaningDay["isShow"] = false
                    }
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
            nextTask(screen){
                if(screen.id === 70){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    if(screen.id !== 5  || screen.id !== 14 || screen.id !== 59) {
                        this.mainJSON.taskCleaningDay.shownScreenID++
                    }

                    // if(screen.id === 3 && this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES1_1 !== 4 ){
                    //     this.mainJSON.taskCleaningDay.shownScreenID = 5
                    // }

                    // if(screen.id === 13 && this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES1 !== 2 ){
                    //     this.mainJSON.taskCleaningDay.shownScreenID = 15
                    // }
                    //
                    // if(screen.id === 58 && this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK3 !== 2 ){
                    //     this.mainJSON.taskCleaningDay.shownScreenID = 60
                    // }

                    if(screen.id === 5){
                        this.mainJSON.taskCleaningDay.shownScreenID = 7
                    }
                    if(screen.id === 14){
                        this.mainJSON.taskCleaningDay.shownScreenID = 16
                    }
                    if(screen.id === 59){
                        this.mainJSON.taskCleaningDay.shownScreenID = 61
                    }

                    this.mainJSON.taskCleaningDay.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
</style>