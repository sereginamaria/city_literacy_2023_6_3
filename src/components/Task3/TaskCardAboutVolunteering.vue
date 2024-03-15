<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Отметь в таблице, какая информация о волонтерстве верная, а какая – нет.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay background-task-card-about-volunteering">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Эта информация верна?</th>
                        <th scope="col">Да</th>
                        <th scope="col">Нет</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Стать волонтером в 14 лет можно без разрешения родителей.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-1" @click="addAnswer(1)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-1" @click="addAnswer(2)"></td>
                    </tr>
                    <tr>
                        <td>Волонтерство помогает расширить кругозор и посетить новые места.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-2" @click="addAnswer(3)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-2" @click="addAnswer(4)"></td>
                    </tr>
                    <tr>
                        <td>Волонтерский паспорт — документ, где фиксируются все достижения волонтера в общественной жизни города.</td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-3" @click="addAnswer(5)"></td>
                        <td> <input class="form-check-input mt-0" type="radio" name="task-card-about-volunteering-3" @click="addAnswer(6)"></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <div class="background-text" id="background-text">
        <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].name}}</span>
                    {{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_4 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskCardAboutVolunteering",
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        data() {
            return {
                list1: [],
                list2: [],
                list3: [],
                rightAnswer1: 0,
                rightAnswer2: 0,
                rightAnswer3: 0,
                height: 0
            }
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            addAnswer(id) {
                if(id === 1 || id === 2){
                    if (id === 1){
                        this.rightAnswer1 = 0
                    }
                    if (id === 2){
                        this.rightAnswer1 = 1
                    }
                    this.list1 = []
                    this.list1.push(id)
                }
                if(id === 3 || id === 4){
                    if (id === 3){
                        this.rightAnswer2 = 1
                    }
                    if (id === 4){
                        this.rightAnswer2 = 0
                    }
                    this.list2 = []
                    this.list2.push(id)
                }
                if(id === 5 || id === 6){
                    if (id === 5){
                        this.rightAnswer3 = 1
                    }
                    if (id === 6){
                        this.rightAnswer3 = 0
                    }
                    this.list3 = []
                    this.list3.push(id)
                }

                let answer = this.list1.concat(this.list2).concat(this.list3)
                this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK4_4 = answer.join()
                if(this.rightAnswer1 === 1 && this.rightAnswer2 === 1 && this.rightAnswer3 === 1) {
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_2 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_2 = 0
            },
            checkAnswer() {
                this.modalVisible = false

                    screen.isShow = false
                    this.mainJSON.taskCleaningDay.shownScreenID++
                    this.mainJSON.taskCleaningDay.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                            el.isShow = true
                        }
                    })
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
    .background-task-card-about-volunteering {
        width: 40%;
        position: absolute;
        top: 20%;
        left: 28%;
    }

    .table td, th {
        border: 1px solid #54BEDF;
        padding: 20px 40px;
    }
</style>