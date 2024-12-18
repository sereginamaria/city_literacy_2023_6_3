<template>
    <div class="backgroundTaskScienceFestival" :class="{background_bottom: screen.id === 32 || screen.id === 33 || screen.id === 34 ||
    screen.id === 36  || screen.id === 38 || screen.id === 39 || screen.id === 40 || screen.id === 42}"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
    >
        <div v-if="screen.id === 8 || screen.id === 12 || screen.id === 20 || screen.id === 29 || screen.id === 32 || screen.id === 44 || screen.id === 51 || screen.id === 55">
            <div class="background-text-center">
                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
            </div>
        </div>

        <div class="background-text" id="background-text" v-else>
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
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
            constTaskScienceFestival: {}
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
                        if(el.name === 'taskScienceFestival'){
                            el.done = true
                            let t = new Date()
                            this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskScienceFestival =
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
                      this.mainJSON["mainPageShow"] = false
                        // this.mainJSON.forms['isShow'] = true
                        // this.mainJSON["instructionShow"] = true
                        // this.mainJSON["mainPageShow"] = false
                        // this.mainJSON.taskScienceFestival["isShow"] = false
                    }
                    else {
                        let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                        this.mainJSON[randomElement].isShow = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.listOfNotDoneTasks = []
                        this.mainJSON.taskScienceFestival["isShow"] = false
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
                if(screen.id === 62){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    if(screen.id !== 23 || screen.id !== 26 || screen.id !== 36 || screen.id !== 38) {
                        this.mainJSON.taskScienceFestival.shownScreenID++
                    }
                    if(screen.id === 36 ){
                        this.mainJSON.taskScienceFestival.shownScreenID = 39
                    }
                    if(screen.id === 38 ){
                        this.mainJSON.taskScienceFestival.shownScreenID = 40
                    }
                    if(screen.id === 23 || screen.id === 26){
                        this.mainJSON.taskScienceFestival.shownScreenID = 29
                    }

                    this.mainJSON.taskScienceFestival.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                            el.isShow = true
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .background_bottom {
        background-position: bottom 20% right!important;
    }
</style>