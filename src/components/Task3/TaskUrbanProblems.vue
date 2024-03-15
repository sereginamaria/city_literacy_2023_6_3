<template>
    <div class="backgroundTaskCleaningDay d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Сопоставь проблемы крупных городов с их последствиями. Перетащи фразы из нижней части магнитной доски в
                нужные ячейки на схеме.
            </p>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100 flex-column"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay justify-content-between" style="max-height: 100%; height: 100%">
                <div class="d-flex justify-content-between w-100" style="height: 70%">
                    <div class="d-flex flex-column align-items-center justify-content-center" style="width: 30%">
                        <img src="../../assets/TaskCleaningDayTaskUrbanProblemsTitle1.png" alt="" style="width: 100%">
                        <draggable
                            @add="error(1)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1"
                            group="listOfAnswersUrbanProblems" style="height: 60%"
                        >
                            <template #item="{ element }">
                                <div class="d-flex align-items-center justify-content-center">
                                    <img :src=" require('../../assets/' + element.src) " style="width: 150%"
                                         alt="" />
                                </div>
                            </template>
                        </draggable>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center" style="width: 30%">
                        <img src="../../assets/TaskCleaningDayTaskUrbanProblemsTitle2.png" alt="" style="width: 100%">
                        <draggable
                            @add="error(2)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2"
                            group="listOfAnswersUrbanProblems" style="height: 60%"
                        >
                            <template #item="{ element }">
                                <div class="d-flex align-items-center justify-content-center">
                                    <img :src=" require('../../assets/' + element.src) " style="width: 150%"
                                         alt="" />
                                </div>
                            </template>
                        </draggable>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center" style="width: 30%">
                        <img src="../../assets/TaskCleaningDayTaskUrbanProblemsTitle3.png" alt="" style="width: 100%">
                        <draggable
                            @add="error(3)"
                            class="list-group list-group-el"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3"
                            group="listOfAnswersUrbanProblems" style="height: 60%"
                        >
                            <template #item="{ element }">
                                <div class="d-flex align-items-center justify-content-center">
                                    <img :src=" require('../../assets/' + element.src) " style="width: 150%"
                                         alt="" />
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>
                <draggable
                    class="list-group d-flex flex-row flex-wrap justify-content-center align-items-center w-100"
                    :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems"
                    group="listOfAnswersUrbanProblems" style="height: max-content; max-height: 40%"
                >
                    <template #item="{ element }">
                        <img :src=" require('../../assets/' + element.src) " style="width: 20%"
                             alt="" />
                    </template>
                </draggable>

            </div>
        </div>
        <div class="background-text" id="background-text">
            <div class="d-flex" style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].name}}</span>
                    {{constTaskCleaningDay.screens[this.mainJSON.taskCleaningDay.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import draggable from "vuedraggable";

export default {
    name: "TaskUrbanProblems",
    props: {
        screen: {},
        constTaskCleaningDay: {}
    },
    data() {
        return {
            height: 0
        }
    },
    components: {
        draggable
    },
    computed: {
        ...mapGetters(['mainJSON']),
    },
    methods: {
        ...mapMutations(["push_mainJSON"]),
        error(id) {
            if(this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id].length > 1){
                this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems.push(this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id][1])
                this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id].splice(1, 1)
            }
        },
        checkAnswer() {
            screen.isShow = false
            this.mainJSON.taskCleaningDay.shownScreenID++
            this.mainJSON.taskCleaningDay.screens.forEach(el => {
                if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                    el.isShow = true
                }
            })


            if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1.length !== 0 ){
                this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1[0].id
                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1[0].id === 1){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK1_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK1_1 = 0
            }
            if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2.length !== 0 ){
                this.mainJSON.taskCleaningDay.results.ULSE3_Log2_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2[0].id
                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2[0].id === 2){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK1_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK1_1 = 0
            }
            if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3.length !== 0 ){
                this.mainJSON.taskCleaningDay.results.ULSE3_Log3_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3[0].id
                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3[0].id === 3){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score3_SEK1_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score3_SEK1_1 = 0
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
        }
    },
    mounted(){
        this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
    }
}
</script>

<style scoped>
.background{
    background-position: center !important;
}

.list-group-el {
    margin: 20px;
    width: 80%;
    padding: 20px;
    border-radius: 4px;
}
</style>