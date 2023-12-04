<template>
    <div class="backgroundTaskNewGirl"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
    >
        <div v-if="screen.id === 38 || screen.id === 41 || screen.id === 48 || screen.id === 61 || screen.id === 67">
            <div class="background-text-center">
                <p>
                    <span class="name-in-dialog">{{constTaskNewGirl.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].text}}
                </p>
            </div>
            <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
            </div>
        </div>

        <div class="background-text" id="background-text" v-else>
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskNewGirl.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].text}}
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
            constTaskNewGirl: {}
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
                        if(el.name === 'taskNewGirl'){
                            el.done = true
                            let t = new Date()
                            this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskNewGirl =
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
                        this.mainJSON.forms['isShow'] = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.mainJSON.taskNewGirl["isShow"] = false
                    }
                    else {
                        let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                        this.mainJSON[randomElement].isShow = true
                        this.mainJSON["instructionShow"] = true
                        this.mainJSON["mainPageShow"] = false
                        this.listOfNotDoneTasks = []
                        this.mainJSON.taskNewGirl["isShow"] = false
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
                if(screen.id === 75){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    if(screen.id !== 7 || screen.id !== 10 || screen.id !== 17 || screen.id !== 53) {
                        this.mainJSON.taskNewGirl.shownScreenID++
                    }
                    if(screen.id === 7){
                        this.mainJSON.taskNewGirl.shownScreenID = 9
                    }
                    if(screen.id === 10){
                        this.mainJSON.taskNewGirl.shownScreenID = 12
                    }
                    if(screen.id === 17){
                        this.mainJSON.taskNewGirl.shownScreenID = 19
                    }
                    if(screen.id === 53){
                        this.mainJSON.taskNewGirl.shownScreenID = 55
                    }

                    this.mainJSON.taskNewGirl.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
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