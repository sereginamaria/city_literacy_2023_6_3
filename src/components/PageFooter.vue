<template>
    <div class="container-fluid d-flex justify-content-end align-items-center footer" :class="{'justify-content-between': this.mainJSON.taskChatWinterHolidays.isShow}">
        <div v-if="this.mainJSON.taskChatWinterHolidays.isShow">
            <MyButton class="ml-3 transparent-buttons"
                      data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Чат"
                      @click="openChat"
            >
                <img src="../assets/tak2-chat-icon.svg">
            </MyButton>
        </div>
        <MyButton style="background: #F3AE4E; border-color: #F3AE4E; width: 200px" @click="showModal">Завершить</MyButton>
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
        name: "PageFooter",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
                listOfNotDoneTasks: [],
                change: 0
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            openChat(){
                if(this.mainJSON.taskChatWinterHolidays.isShow){
                    this.mainJSON.taskChatWinterHolidays.chatShow = !this.mainJSON.taskChatWinterHolidays.chatShow
                }
            },
            showModal(){
                this.modalVisible = true
                if (this.mainJSON.forms.isShow === true){
                    this.modalButtons = [
                        {value: "Завершить", status: 'end'}
                    ]
                    this.modalMessage = 'Молодец! Ты выполнил все задания! Нажми кнопку "Завершить" чтобы выйти из программы.'
                }
                else {
                    this.modalButtons = [
                        {value: "Да", status: true},
                        {value: "Нет", status: false}
                    ]
                    this.modalMessage = 'Ты действительно хочешь завершить задание перейти к следующему?'
                }

            },
            checkAnswer(status){
                this.modalVisible = false

                if(status){
                    this.change = 0
                    if(this.mainJSON.taskScienceFestival.isShow && this.change === 0){
                        this.mainJSON.taskScienceFestival["isShow"] = false
                        this.nextTask('taskScienceFestival')
                    }
                    if(this.mainJSON.taskChatWinterHolidays.isShow  && this.change === 0){
                        this.addAnswersTaskChatWinterHolidays()
                        this.mainJSON.taskChatWinterHolidays["isShow"] = false
                        this.nextTask('taskChatWinterHolidays')
                    }
                    if(this.mainJSON.taskCleaningDay.isShow  && this.change === 0){
                        this.mainJSON.taskCleaningDay["isShow"] = false
                        this.nextTask('taskCleaningDay')
                    }
                }

                if (status === 'end'){
                    this.mainJSON.taskCleaningDay["isShow"] = false
                    this.mainJSON.taskChatWinterHolidays["isShow"] = false
                    this.mainJSON.taskScienceFestival["isShow"] = false
                    this.mainJSON.forms["isShow"] = false
                    // this.mainJSON['feedbackShow'] = true
                    this.mainJSON['resultsShow'] = true
                    /*this.mainJSON['loginShow'] = true
                    this.mainJSON['mainPageShow'] = false
                    this.mainJSON['allDone'] = true*/

                    let exceptionIndicators = ['ULLL_LLA8_2', 'ULHL_HLA1_2', 'ULHL_HLA1_4', 'ULHL_HLA1_6', 'ULDT_DTA1_4', 'ULDT_DTA1_5', 'ULDT_DTA1_6']
                    let changeExceptionIndicator = 0

                    exceptionIndicators.forEach(exceptionIndicator => {
                        if(this.mainJSON.forms.results[exceptionIndicator] !== undefined){
                            if (this.mainJSON.forms.results[exceptionIndicator] === 1 && changeExceptionIndicator === 0){
                                changeExceptionIndicator++
                                this.mainJSON.forms.results[exceptionIndicator] = 4
                            }
                            if (this.mainJSON.forms.results[exceptionIndicator] === 2 && changeExceptionIndicator === 0){
                                changeExceptionIndicator++
                                this.mainJSON.forms.results[exceptionIndicator] = 3
                            }
                            if (this.mainJSON.forms.results[exceptionIndicator] === 3 && changeExceptionIndicator === 0){
                                changeExceptionIndicator++
                                this.mainJSON.forms.results[exceptionIndicator] = 2
                            }
                            if (this.mainJSON.forms.results[exceptionIndicator] === 4 && changeExceptionIndicator === 0){
                                changeExceptionIndicator++
                                this.mainJSON.forms.results[exceptionIndicator] = 1
                            }
                            changeExceptionIndicator = 0
                        }
                    })

                    let d = new Date()
                    this.mainJSON.results.dataTimeEnd =  this.mainJSON.results.dataTimeLastUpdate = [
                        d.getFullYear(),
                        ('0' + (d.getMonth() + 1)).slice(-2),
                        ('0' + d.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (d.getHours())).slice(-2),
                        ('0' + (d.getMinutes())).slice(-2),
                        ('0' + d.getSeconds()).slice(-2)
                    ].join(':');

                    this.push_mainJSON({
                        push: this.mainJSON
                    })

                    localStorage.clear()

                }
            },
            nextTask(taskName){
                this.mainJSON.listOfTasks.forEach( el => {
                    if(el.name === taskName){
                        el.done = true
                        let t = new Date()
                        this.mainJSON.results.dataTimeLastUpdate = this.mainJSON.results['dataTimeEnd' + taskName] =
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
                if (this.listOfNotDoneTasks.length === 0){
                    this.endTask()
                }
                else {
                    let randomElement = this.listOfNotDoneTasks[Math.floor(Math.random()*this.listOfNotDoneTasks.length)]
                    this.mainJSON[randomElement].isShow = true
                    this.mainJSON["instructionShow"] = true
                    this.mainJSON["mainPageShow"] = false
                    this.change++
                    this.listOfNotDoneTasks = []
                }
            },
            endTask(){
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
                this.mainJSON.forms['isShow'] = true
                this.mainJSON["instructionShow"] = true
                this.mainJSON["mainPageShow"] = false
            },
            addAnswersTaskChatWinterHolidays(){

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS5_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS5_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS5_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS5_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK3_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK3_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK3_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK3_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK2_1 !== "NA"){
                    let ULHLDT3_Log_HLK2_1 = this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK2_1.split(',')
                    let ULHLDT3_Log_HLK2_1_answer = 0
                    ULHLDT3_Log_HLK2_1.forEach(el => {
                        if (el === '3'){
                            ULHLDT3_Log_HLK2_1_answer++
                        }
                        if (el === '4'){
                            ULHLDT3_Log_HLK2_1_answer++
                        }
                    })
                    if(ULHLDT3_Log_HLK2_1.length === 2 && ULHLDT3_Log_HLK2_1_answer === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_1 = 2
                    }
                    else if (ULHLDT3_Log_HLK2_1.length === 1 && ULHLDT3_Log_HLK2_1_answer === 1) {
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK1_1 !== "NA"){
                    let ULHLDT3_Log_HLK1_1 = this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK1_1.split(',')
                    let ULHLDT3_Log_HLK1_1_answer = 0
                    ULHLDT3_Log_HLK1_1.forEach(el => {
                        if (el === '1'){
                            ULHLDT3_Log_HLK1_1_answer++
                        }
                        if (el === '4'){
                            ULHLDT3_Log_HLK1_1_answer++
                        }
                    })
                    if(ULHLDT3_Log_HLK1_1.length === 2 && ULHLDT3_Log_HLK1_1_answer === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK1_1 = 2
                    }
                    else if (ULHLDT3_Log_HLK1_1.length === 1 && ULHLDT3_Log_HLK1_1_answer === 1) {
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK1_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK1_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS1_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS1_1 === 3){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS2_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS2_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS3_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS3_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS2_2 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS2_2 === 3){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_2 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_2 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS3_2 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS3_2 === 4){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_2 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_2 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK4_1 !== "NA"){
                    let ULHLDT3_Log_HLK4_1 = this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK4_1.split(',')
                    let ULHLDT3_Log_HLK4_1_answer = 0
                    ULHLDT3_Log_HLK4_1.forEach(el => {
                        if (el === '1'){
                            ULHLDT3_Log_HLK4_1_answer++
                        }
                        if (el === '3'){
                            ULHLDT3_Log_HLK4_1_answer++
                        }
                    })
                    if(ULHLDT3_Log_HLK4_1.length === 2 && ULHLDT3_Log_HLK4_1_answer === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK4_1 = 2
                    }
                    else if (ULHLDT3_Log_HLK4_1.length === 1 && ULHLDT3_Log_HLK4_1_answer === 1) {
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK4_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK4_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTK1_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTK1_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTK1_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTK1_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS1_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS1_1 === 3){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS1_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS1_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS4_1!== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS4_1 === 1){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_1 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS4_2 !=="NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS4_2 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_2 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_2 = 0
                }

                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS3_1 !=="NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS3_1 === 3){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS3_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS3_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS2_1 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLS2_1 === 2){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS2_1 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS2_1 = 0
                }


                if (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK2_2 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_HLK2_2 === 1){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_2 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_2 = 0
                }


                if  (this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS1_2 !== "NA"){
                    if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Log_DTS1_2 === 3){
                        this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_2 = 1
                    }
                    else this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_2 = 0

                }
            },
        }
    }
</script>

<style scoped>
    .footer {
        height: 70px;
        background: #344A5F;
        backdrop-filter: blur(8.15485px);
        position: fixed;
        bottom: 0;
        z-index: 99;
    }
</style>