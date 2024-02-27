<template>
    <div class="background backgroundTaskScienceFestival d-flex align-items-center flex-column"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" style="backdrop-filter: blur(5px);">
        <div class="instruction-block" id="instruction-block">
            <p>Перемести предупреждающие знаки под соответствующие подписи.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 flex-column"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyLibraryNight justify-content-between" style="padding: 2%; height: 85%">
                    <div class="d-flex" style="height: 35%">
                        <div class="task14El">
                            <div class="task14El1">Опасность падения груза</div>
                            <draggable
                                @add="error(1)"
                                class="list-group task14Triangle"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_1"
                                group="task14"
                            >
                                <template #item="{ element }">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <img :src=" require('../../assets/' + element.src) "
                                             alt="Avatar"  style="height: inherit"/>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task14El">
                            <div class="task14El1">Осторожно, возможность падения с высоты!</div>
                            <draggable
                                @add="error(2)"
                                class="list-group task14Triangle"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_2"
                                group="task14"
                            >
                                <template #item="{ element }">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <img :src=" require('../../assets/' + element.src) "
                                             alt="Avatar"  style="height: 95%"/>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task14El">
                            <div class="task14El1">Осторожно, пожароопасно!</div>
                            <draggable
                                @add="error(3)"
                                class="list-group task14Triangle"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_3"
                                group="task14"
                            >
                                <template #item="{ element }">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <img :src=" require('../../assets/' + element.src) "
                                             alt="Avatar"  style="height: 95%"/>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task14El">
                            <div class="task14El1">Внимание, опасность!</div>
                            <draggable
                                @add="error(4)"
                                class="list-group task14Triangle"
                                :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_4"
                                group="task14"
                            >
                                <template #item="{ element }">
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <img :src=" require('../../assets/' + element.src) "
                                             alt="Avatar"  style="height: 95%"/>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <draggable
                        class="list-group list-of-answers d-flex flex-row flex-wrap justify-content-center align-items-center"
                        :list="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns"
                        group="task14"
                    >
                        <template #item="{ element }">
                            <img :src=" require('../../assets/' + element.src) "
                                 alt="Avatar" style="height: 40%"/>
                        </template>
                    </draggable>
                </div>
        </div>
        <div class="background-text" id="background-text">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constTaskScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_1.length !== 0 ||
                        this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_2.length !== 0 ||
                        this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_3.length !== 0||
                        this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns_4.length !== 0"
            >Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskWarningSigns",
        data() {
            return {
                height: 0
            }
        },
        props: {
            screen: {},
            constTaskScienceFestival: {}
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
                if(this.mainJSON.taskScienceFestival["listOfAnswersTaskWarningSigns_" + id].length > 1){
                    this.mainJSON.taskScienceFestival.listOfAnswersTaskWarningSigns.push(this.mainJSON.taskScienceFestival["listOfAnswersTaskWarningSigns_" + id][1])
                    this.mainJSON.taskScienceFestival["listOfAnswersTaskWarningSigns_" + id].splice(1, 1)
                }
                let idNew = id + 1
                this.mainJSON.taskScienceFestival.results['ULSCLL3_Log_SCK3_' + idNew] = this.mainJSON.taskScienceFestival["listOfAnswersTaskWarningSigns_" + id][0].id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                let k = 0
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK3_2 === 6){
                    k++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK3_32 === 1){
                    k++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK3_43 === 5{
                    k++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Log_SCK3_54 === 7){
                    k++
                }
                if(k === 4){
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK3_2 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK3_2 = 0
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
    .task14Triangle {
        background: url("../../assets/triangle.png") rgba(255, 255, 255, 0.01) no-repeat;
        background-size: contain;
        height: 60%;
        width: 100%;
        background-position: center center;
    }
    .task14El{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        width: 25%;
        height: 100%;
    }
    .task14El1 {
        box-sizing: border-box;
        display: flex;
        padding: 10px 20px;
        background: #d2fff7;
        border-radius: 4px;
        height: 30%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .list-of-answers {
        margin-top: 10px;
        width: 100%;
        padding: 10px 20px;
        height: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>