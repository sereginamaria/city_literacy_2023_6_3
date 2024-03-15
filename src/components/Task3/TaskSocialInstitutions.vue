<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Соотнеси социальные институты и то, какой вклад они вносят в заботу о природе.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay flex-row" style="width: 95%; height: 95%;">
                <div class="d-flex justify-content-center flex-column" style="padding: 1%; width: 50%; background: #72A2AE;">
                    <div class="d-flex" >
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskCleaningDaySocialInstitutions1.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Искусство</div>
                            <draggable
                                    @add="error(1)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list1"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex" >
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskCleaningDaySocialInstitutions2.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Судебная система</div>
                            <draggable
                                    @add="error(2)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list2"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex" >
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskCleaningDaySocialInstitutions3.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Волонтерство</div>
                            <draggable
                                    @add="error(3)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list3"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex" >
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskCleaningDaySocialInstitutions4.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Школа</div>
                            <draggable
                                    @add="error(4)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list4"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>

                <draggable
                        class="list-group d-flex flex-column justify-content-center align-items-center"
                        :list="this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions"
                        group="listOfAnswersSocialInstitutions" style="width: 45%; height: 100%;  padding: 20px; justify-content: space-between !important;"
                >
                    <template #item="{ element }">
                        <div class="list-of-answers" style="width: 100%; height: 12%;">
                            {{element.value}}
                        </div>
                    </template>
                </draggable>
            </div>
        </div>

        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list1.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list2.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list3.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list4.length">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskSocialInstitutions",
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
                if(this.mainJSON.taskCleaningDay["listOfAnswersSocialInstitutions_list" + id].length > 1){
                    this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions.push(this.mainJSON.taskCleaningDay["listOfAnswersSocialInstitutions_list" + id][1])
                    this.mainJSON.taskCleaningDay["listOfAnswersSocialInstitutions_list" + id].splice(1, 1)
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
                let results = 0
                if(this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list1.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK2_1 = this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list1[0].id
                    if(this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK2_1 === 1){
                        results++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list2.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log2_SEK2_1 = this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list2[0].id
                    if(this.mainJSON.taskCleaningDay.results.ULSE3_Log2_SEK2_1 === 2){
                        results++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list3.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log3_SEK2_1 = this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list3[0].id
                    if(this.mainJSON.taskCleaningDay.results.ULSE3_Log3_SEK2_1 === 3){
                        results++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list4.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log4_SEK2_1 = this.mainJSON.taskCleaningDay.listOfAnswersSocialInstitutions_list4[0].id
                    if(this.mainJSON.taskCleaningDay.results.ULSE3_Log4_SEK2_1 === 4){
                        results++
                    }
                }

                if(results === 4){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK2_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK2_1 = 0

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
.list-of-answers {
    margin: 10px;
    width: 20%;
    background: #d2fff7;
    border-radius: 4px;
    padding: 10px 20px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.list-group-el {
    margin: 20px;
    width: 80%;
    padding: 20px;
    background: #FFFFFF;
    border: 1px dashed #333333;
    border-radius: 4px;
}
</style>