<template>
    <div class="backgroundTaskCleaningDay d-flex align-items-center flex-column"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block" v-if="!this.showModalDialog">
            <p>
                Перед тобой карта важных проблем нашего города. Кликнув на объект на карте,
                ты увидишь описание проблемы. Укажи, можно ли решить эту проблему, отправив заявку в электронный сервис?
            </p>
        </div>
        <div class="d-flex justify-content-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay taskElectronicServicesPart1" style="position: relative">

                    <!--                <img src="../../assets/TaskCleaningDayElectronicServicesMap.webp" alt="" style="width: 80%">-->
                    <img src="../../assets/TaskCleaningDayElectronicServicesIconNoise.png" alt="" @click="openModalDialog('Noise')" style="width: 10%;
    position: absolute;
    top: 52%;
    left: 18%;">
                    <img src="../../assets/TaskCleaningDayElectronicServicesIconHomelessPerson.png" alt="" @click="openModalDialog('HomelessPerson')" style="    width: 10%;
    position: absolute;
    top: 42%;
    left: 33%;">
                    <img src="../../assets/TaskCleaningDayElectronicServicesIconPollution.png" alt="" @click="openModalDialog('Pollution')" style="width: 10%;
    position: absolute;
    top: 70%;
    left: 55%;">
                    <img src="../../assets/TaskCleaningDayElectronicServicesIconCat.png" alt="" @click="openModalDialog('Cat')" style="    width: 10%;
    position: absolute;
    top: 5%;
    left: 70%;">

            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="this.answers.answerHomelessPerson !== null || this.answers.answerCat !== null ||
                      this.answers.answerPollution !== null || this.answers.answerNoise !== null">
                Готово
            </MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <div v-if="this.showModalDialog" class="dialog d-flex flex-column">
        <div style="margin: auto; align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: center;">
            <div class="dialog-content mb-3" style="margin: unset">
                <div class="mb-3">
                    Укажи, можно ли решить эту проблему, отправив заявку в электронный сервис?
                </div>
            </div>
            <div class="dialog-content" style="margin: unset; width: max-content;">
                <div class="mb-3">
                    <img :src=" require('../../assets/' + this.imgSrc + '.webp') " alt="" style="width: 100%">
                    <div>
                        {{this.message}}
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <MyButton v-for="button in this.modalButtons" :key="button.value" @click="addAnswer(this.type, button.status)" style="width: 45%"
                              class="me-3 blue-buttons" :class="{yesButtonTrue: this.yesButtonTrue && button.status, noButtonTrue: this.noButtonTrue && !button.status}"
                    >
                        {{button.value}}
                    </MyButton>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskElectronicServicesPart1",
        data() {
            return {
                type: '',
                showModalDialog: false,
                modalButtons: [],
                imgSrc: '',
                message: '',
                yesButtonTrue: false,
                noButtonTrue: false,
                answers: {
                    answerHomelessPerson: null,
                    answerCat: null,
                    answerPollution: null,
                    answerNoise: null,
                },
                height: 0
            }
        },
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            openModalDialog(type){
                this.yesButtonTrue = false
                this.noButtonTrue = false
                this.type = type
                this.showModalDialog = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                if (type === 'Noise'){
                    this.imgSrc = 'TaskCleaningDayElectronicServicesIconModalNoise'
                    this.message = 'Днем, когда школьники делают уроки, соседская собака сверху гавкает и мешает'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerNoise' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerNoise' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'HomelessPerson'){
                    this.imgSrc = 'TaskCleaningDayElectronicServicesIconModalHomelessPerson'
                    this.message = 'Утром сложно добираться в школу из-за пробок на дорогах'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerHomelessPerson' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerHomelessPerson' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'Pollution'){
                    this.imgSrc = 'TaskCleaningDayElectronicServicesIconModalPollution'
                    this.message = 'В озеро на окраине города регулярно выбрасывают промышленные отходы'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerPollution' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerPollution' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
                if (type === 'Cat'){
                    this.imgSrc = 'TaskCleaningDayElectronicServicesIconModalCat'
                    this.message = 'На дерево залез кот и не может спуститься'
                    for(const [key, value] of Object.entries(this.answers)){
                        if(key === 'answerCat' && value === true){
                            this.yesButtonTrue = true
                            this.noButtonTrue = false
                        }
                        if(key === 'answerCat' && value === false){
                            this.yesButtonTrue = false
                            this.noButtonTrue = true
                        }
                    }
                }
            },
            addAnswer(type, status) {
                if(type === 'HomelessPerson'){
                    this.answers.answerHomelessPerson = status
                }
                if(type === 'Cat'){
                    this.answers.answerCat = status
                }
                if(type === 'Pollution'){
                    this.answers.answerPollution = status
                }
                if(type === 'Noise'){
                    this.answers.answerNoise = status
                }
                this.showModalDialog = false
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskCleaningDay.shownScreenID++
                this.mainJSON.taskCleaningDay.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                        el.isShow = true
                    }
                })

                let ans = []
                let results = 0

             /*   console.log(this.answers.answerHomelessPerson)
                console.log(this.answers.answerCat)
                console.log(this.answers.answerPollution)
                console.log(this.answers.answerNoise)*/

                if(this.answers.answerHomelessPerson){
                    ans.push(1)
                }
                else if (this.answers.answerHomelessPerson === false) {
                    ans.push(2)
                    results++
                }
                else {
                    ans.push("NA")
                }

                if(this.answers.answerCat){
                    ans.push(3)
                    results++
                }
                else if (this.answers.answerCat === false) {
                    ans.push(4)
                }
                else {
                    ans.push("NA")
                }

                if(this.answers.answerPollution){
                    ans.push(5)
                    results++
                }
                else if (this.answers.answerPollution === false) {
                    ans.push(6)
                }
                else {
                    ans.push("NA")
                }

                if(this.answers.answerNoise){
                    ans.push(7)
                }
                else if (this.answers.answerNoise === false) {
                    ans.push(8)
                    results++
                }
                else {
                    ans.push("NA")
                }

                this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK6_1 = ans.join()
                if(results === 4){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK6_1 = 2
                }
                else if(results === 3 || results === 2){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK6_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK6_1 = 0

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
    .yesButtonTrue {
        background: green;
        border-color: green;
    }
    .noButtonTrue {
        background: green;
        border-color: green;
    }
    .taskElectronicServicesPart1 {
        background: url("../../assets/TaskCleaningDayElectronicServicesMap.webp") no-repeat;
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: center;
        max-height: none;
    }
</style>