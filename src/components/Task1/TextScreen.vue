<template>
    <div class="backgroundTaskLibraryNight"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}"
    >
        <div v-if="screen.id === 4 || screen.id === 10 || screen.id === 14 || screen.id === 24 || screen.id === 27 || screen.id === 45 || screen.id === 48">
            <div class="background-text-center">
                <p>
                    <span class="name-in-dialog">{{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <div class="background-text" id="background-text" style="background: none; justify-content: end;">
                <MyButton class="white-buttons" @click="nextTask(screen)" style="height: 40px">Далее</MyButton>
            </div>
        </div>

        <div class="background-text" id="background-text" v-else>
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
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
            constScienceFestival: {}
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
                        if(el.name === 'taskLibraryNight'){
                            el.done = true
                            let t = new Date()
                            this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results.dataTimeEndtaskLibraryNight =
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
                        this.mainJSON.taskScienceFestival["isShow"] = false
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
                if(screen.id === 59){
                    this.modalVisible = true
                    this.modalButtons = [
                        {value: "Хорошо", status: true}
                    ]
                    this.modalMessage = 'Молодец! Переходи к следующему заданию!'
                }
                else {
                    screen.isShow = false
                    if(screen.id !== 30 || screen.id !== 38 || screen.id !== 40) {
                        this.mainJSON.taskScienceFestival.shownScreenID++
                    }
                    if(screen.id === 30){
                        this.mainJSON.taskScienceFestival.shownScreenID = 32
                    }
                    if(screen.id === 38 || screen.id === 40){
                        this.mainJSON.taskScienceFestival.shownScreenID = 42
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
</style>