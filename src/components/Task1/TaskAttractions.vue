<template>
    <div class=" background backgroundTaskScienceFestival"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>
                Добавь подписи к объектам на картинках: перенеси название выбранного объекта в нужное поле.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 flex-column"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyScienceFestival">
                    <div class="d-flex">
                        <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                            <img src="../../assets/Task10Element1.webp" alt="" style="width: calc(100%/1.2);">
                            <draggable
                                @add="error(1)"
                                class="list-group task10"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_1"
                                group="task10"
                            >
                                <template #item="{ element }">
                                    <div class="answers2">
                                        <p>{{element.value}}</p>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                            <img src="../../assets/Task10Element2.webp" alt="" style="width: calc(100%/1.2);">
                            <draggable
                                @add="error(2)"
                                class="list-group task10"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_2"
                                group="task10"
                            >
                                <template #item="{ element }">
                                    <div class="answers2">
                                        <p>{{element.value}}</p>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
                            <img src="../../assets/Task10Element3.webp" alt="" style="width: calc(100%/1.2);">
                            <draggable
                                @add="error(3)"
                                class="list-group task10"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_3"
                                group="task10"
                            >
                                <template #item="{ element }">
                                    <div class="answers2">
                                        <p>{{element.value}}</p>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <draggable
                        class="list-group d-flex list-of-answers-attractions"
                        :list="this.mainJSON.taskScienceFestival.listOfElementsTaskAttractions"
                        group="task10"
                    >
                        <template #item="{ element }">
                            <div class="answers">
                                <p>{{element.value}}</p>
                            </div>
                        </template>
                    </draggable>
                </div>
        </div>
        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL3_Log_LLK2_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskAttractions",
        props: {
            screen: {},
            constTaskScienceFestival: {}
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        components: {
            draggable
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskScienceFestival["listOfAnswersTaskAttractions_" + id].length > 1){
                    this.mainJSON.taskScienceFestival.listOfElementsTaskAttractions.push(this.mainJSON.taskScienceFestival["listOfAnswersTaskAttractions_" + id][1])
                    this.mainJSON.taskScienceFestival["listOfAnswersTaskAttractions_" + id].splice(1, 1)
                }
                if(this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_1.length !== 0 && this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_2.length !== 0 &&
                    this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_3.length !== 0){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_LLK2_1 =  "Слот 1: " + this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_1[0].value + ", Слот 2: " +
                        this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_2[0].value + ", Слот 3: " + this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_3[0].value
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_1[0].id === 1 && this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_2[0].id === 4 &&
                    this.mainJSON.taskScienceFestival.listOfAnswersTaskAttractions_3[0].id === 6){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK2_1 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK2_1 = 0
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
.background {
    background-position: center !important;;
}
    .task10 {
        min-height: 40px;
        width: calc(100%/1.5);
        border: 1px dashed #333333;
        border-radius: 4px;
        height: calc(100%/5);
        margin-top: 10px;
    }
    .answers {
        min-height: 40px;
        width: max-content;
        background: #D2FFF7;
        border: 1px dashed #333333;
        border-radius: 4px;
        padding: 10px 20px;
        margin: 20px 20px;
    }
    .answers2 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: inherit; */
        background: #D2FFF7;
        border-radius: 4px;
        text-align: center;
    }
    .list-of-answers-attractions {
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 0 50px;
        margin-top: 20px;
    }
</style>