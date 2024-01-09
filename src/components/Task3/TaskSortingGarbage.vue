<template>
    <div class="background backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Рассортируй мусор по контейнерам.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskSortingGarbage">
                <div class="d-flex w-100 justify-content-center" style="height: 70%">
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbagePlastic.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbagePaper.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbageGlass.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbageMetal.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbageFoodWaste.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                    <div class="position-relative d-flex justify-content-center" style="width: 16%">
                        <img src="../../assets/TaskCleaningDaySortingGarbageHazardousWaste.png" alt="" class="little-backpack">
                        <draggable

                            class="list-group list-group-el-sorting-garbage position-relative "
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6"
                            group="listOfAnswersSocialInstitutions"
                        >
                            <template #item="{ element }">
                                <img :src=" require('../../assets/' + element.src + '.png') "
                                     alt="Avatar" style="z-index: 99; width: 50%; position: absolute"/>
                            </template>
                        </draggable>
                    </div>
                </div>
                <draggable
                    class="list-group d-flex justify-content-center align-items-center flex-row"
                    :list="this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage"
                    group="listOfAnswersSocialInstitutions" style="width: 100%; height: 15%"
                >
                    <template #item="{ element }">
                        <img :src=" require('../../assets/' + element.src + '.png')" style="height: 100%" v-if="element.isShown"
                             alt="Avatar"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
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
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyTooltip :toolTipVisible="toolTipVisible" :toolTipMessage="toolTipMessage" :clientX="clientX" :clientY="clientY"/>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskSortingGarbage",
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        data() {
            return {
                toolTipVisible: false,
                toolTipMessage: '',
                clientX: 0,
                clientY: 0,
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
            onHover(event, message) {
                const { clientX, clientY } = event;
                this.toolTipVisible = true;
                this.clientX = clientX - clientX/15;
                this.clientY = clientY  - clientY/15;
                this.toolTipMessage = message
            },
            addAnswer(el, listID) {
                this.mainJSON.taskCleaningDay["ULSE3_Log_SEK4_" + listID] = el.value
                this.mainJSON.taskCleaningDay.results["ULSE3_Log_SEK4_" + listID] = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskCleaningDay.shownScreenID++
                this.mainJSON.taskCleaningDay.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                        el.isShow = true
                    }
                })

                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage.forEach(el => {
                    if (el.id === 6){
                        el.isShown = true
                    }
                })

                let answers = 0
                let answersWithMistake = 0
                let listOfAnswers = []
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.length === 1 && elId.id === 1){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.length > 1 && elId.id === 1){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_1 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.length === 1 && elId.id === 2){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.length > 1 && elId.id === 2){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_2 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.length === 1 && elId.id === 3){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.length > 1 && elId.id === 3){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_3 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length === 1 && elId.id === 4){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length > 1 && elId.id === 4){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_4 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.length === 1 && elId.id === 5){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.length > 1 && elId.id === 5){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_5 = listOfAnswers.join()
                    listOfAnswers = []
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.length !== 0){
                    this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.forEach(elId => {
                        listOfAnswers.push(elId.id)
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.length === 1 && elId.id === 6){
                            answers++
                        }
                        if (this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.length > 1 && elId.id === 6){
                            answersWithMistake++
                        }
                    })
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES3 = listOfAnswers.join()
                    listOfAnswers = []
                }

                if(answersWithMistake === 1){
                    answersWithMistake = 0
                }

                if(answers === 5){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES2 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES2 = 0


                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1 = []
                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2 = []
                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3 = []
                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4 = []
                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5 = []
                this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6 = []
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
.backgroundTaskSortingGarbage {
    justify-content: end;
    display: flex;
    flex-direction: column;
    padding: 3% 3% 0 3%;
    width: 90%;
    height: 100%;
}
.little-backpack {
    position: absolute;
    height: 100%;
}
.list-group-el-sorting-garbage {
    width: 80%;
    height: 100%;
}


    .background-task-sorting-garbage {
        padding: 0 3%;
        width: 90%;
        height: 80%;
    }
    .little-backpack {
        position: absolute;
        height: 100%;
    }
    .list-group-el-sorting-garbage {
        width: 80%;
        height: 100%;
    }
</style>