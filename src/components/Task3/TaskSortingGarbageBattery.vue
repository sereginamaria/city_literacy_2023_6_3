<template>
    <div class="background backgroundTaskCleaningDay d-flex align-items-center flex-column" style="backdrop-filter: blur(5px);"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери контейнер, куда выбросить пауэрбанк.
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
            mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length !== 0  ||
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
        name: "TaskSortingGarbageBattery",
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
                height: 0,
                nextTask: false,
                listOfAnswersSortingGarbage: [
                    {
                        "src": "TaskCleaningDaySortingGarbageBattery",
                        "id": 6,
                        "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                        "toolTip": "Перегоревшая энергосберегающая лампочка"
                    }
                ]
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

                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_1 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_1 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_1.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_1 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list1[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_2 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_2 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_2.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_2 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list2[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_3 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_3 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_3.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_3 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list3[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
                    }
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_4 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_4 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_4.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_4 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list4[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
                    }
                }

                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_5 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_5 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_5.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES2_5 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list5[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
                    }
                }

                if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6.length !== 0){
                    if( this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES3 !== "NA"){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES3 =  this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES3.toString() +
                            this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6[0].id.toString()
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Log_SES3 = this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersSortingGarbage_list6[0].id === 6){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 1
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 = 0
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