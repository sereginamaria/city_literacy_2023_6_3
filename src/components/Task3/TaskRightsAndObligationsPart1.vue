<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни схему о правах и обязанностях граждан, перетащив фразы снизу в соответствующий пустой блок.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay" style="justify-content: unset;">
                <div class="d-flex justify-content-center w-100" style="height: 50%">
                    <div class="top-block ">
                        <div style="color: white;" class="text-bold">Права</div>
                        <draggable
                                @add="error(1)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(2)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(3)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                    </div>
                    <div class="top-block">
                        <div style="color: white;" class="text-bold">Обязанности</div>
                        <draggable
                                @add="error(4)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(5)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                        <draggable
                                @add="error(6)"
                                class="list-group list-group-el"
                                :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6"
                                group="listOfAnswersRightsAndObligationsPart1"
                        >
                            <template #item="{ element }">
                                <div>
                                    {{element.value}}
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>
                <draggable
                        class="list-group d-flex flex-row flex-wrap justify-content-center align-items-center"
                        :list="this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1"
                        group="listOfAnswersRightsAndObligationsPart1" style="height: 30%; width: 100%"
                >
                    <template #item="{ element }">
                        <div class="list-of-answers">
                            {{element.value}}
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskRightsAndObligationsPart1",
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
                if(this.mainJSON.taskCleaningDay["listOfAnswersRightsAndObligationsPart1_list" + id].length > 1){
                    this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1.push(this.mainJSON.taskCleaningDay["listOfAnswersRightsAndObligationsPart1_list" + id][1])
                    this.mainJSON.taskCleaningDay["listOfAnswersRightsAndObligationsPart1_list" + id].splice(1, 1)
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

                let list1 = []
                let list2 = []
                let answers = 0

                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1.length !== 0 ){
                    list1.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1[0].id === 4 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1[0].id === 5 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list1[0].id === 6){
                        answers++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2.length !== 0 ){
                    list1.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2[0].id === 4 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2[0].id === 5 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list2[0].id === 6){
                        answers++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3.length !== 0 ){
                    list1.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3[0].id === 4 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3[0].id === 5 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list3[0].id === 6){
                        answers++
                    }
                }

                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4.length !== 0 ){
                    list2.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4[0].id === 1 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4[0].id === 3 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list4[0].id === 2){
                        answers++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5.length !== 0 ){
                    list2.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5[0].id === 1 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5[0].id === 3 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list5[0].id === 2){
                        answers++
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6.length !== 0 ){
                    list2.push(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6[0].id)
                    if(this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6[0].id === 1 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6[0].id === 3 ||
                        this.mainJSON.taskCleaningDay.listOfAnswersRightsAndObligationsPart1_list6[0].id === 2){
                        answers++
                    }
                }

                if(answers === 6){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_1 = 2
                }
                else if(answers === 5 || answers === 4){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_1 = 0

                if(list1.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK3_1 = list1.join()
                }
                if(list2.length !== 0){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SEK3_2 = list2.join()
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
    .top-block {
        margin: 0 5%;
        background: #72A2AE;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
</style>