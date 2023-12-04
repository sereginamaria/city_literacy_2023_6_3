<template>
    <!--Задание 15 задание-->
    <div class="backgroundTaskLibraryNight d-flex align-items-center flex-column"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" style="backdrop-filter: blur(5px);">
        <div class="instruction-block" id="instruction-block">
            <p>Построй план прогулки по времени. Выбери, когда лучше посетить то или иное место. Перетащи название места в нужный временной промежуток.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 flex-column"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyLibraryNight" style="height: 85%">
                    <div class="d-flex justify-content-between" style="height: 70%; margin-bottom: 3%; width: 100%">
                        <div class="task15El">
                            <div class="d-flex justify-content-center align-items-center flex-column" style="height: 70%">
                                <p  style="font-weight: 700; font-size: 30px;">11:00</p>
                                <img src="../../assets/task15El1.png" alt="" style="width: 70%;">
                            </div>
                            <draggable
                                @add="error(1)"
                                class="list-group list-group-el-weather-forecast"
                                :list="this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast_1"
                                group="task15"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task15El">
                            <div class="d-flex justify-content-center align-items-center flex-column" style="height: 70%">
                                <p  style="font-weight: 700; font-size: 30px;">13:00</p>
                                <img src="../../assets/task15El3.png" alt="" style="width: 70%;">
                            </div>
                            <draggable
                                @add="error(2)"
                                class="list-group list-group-el-weather-forecast"
                                :list="this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast_2"
                                group="task15"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task15El">
                            <div class="d-flex justify-content-center align-items-center flex-column" style="height: 70%">
                                <p style="font-weight: 700; font-size: 30px;">16:00</p>
                                <img src="../../assets/task15El1.png" alt="" style="width: 70%;">
                            </div>
                            <draggable
                                @add="error(3)"
                                class="list-group list-group-el-weather-forecast"
                                :list="this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast_3"
                                group="task15"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div class="task15El">
                            <div class="d-flex justify-content-center align-items-center flex-column" style="height: 70%">
                                <p  style="font-weight: 700; font-size: 30px;">18:00</p>
                                <img src="../../assets/task15El2.png" alt="" style="width: 70%;">
                            </div>
                            <draggable
                                @add="error(4)"
                                class="list-group list-group-el-weather-forecast"
                                :list="this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast_4"
                                group="task15"
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
                        class="list-group list-of-answers-weather-forecast d-flex flex-row justify-content-between align-items-center"
                        :list="this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast"
                        group="task15"
                    >
                        <template #item="{ element }">
                            <div class="task15List">
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>
        </div>
        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <div class="d-flex">
                <p>
                    <span class="name-in-dialog">{{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_1 !== 'NA' || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_2 !== 'NA'
            || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_3 !== 'NA' || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_4 !== 'NA'"
            >Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskWeatherForecast",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        data() {
            return {
                height: 0
            }
        },
        components: {
            draggable
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskLibraryNight["listOfAnswersTaskWeatherForecast_" + id].length > 1){
                    this.mainJSON.taskLibraryNight.listOfAnswersTaskWeatherForecast.push(this.mainJSON.taskLibraryNight["listOfAnswersTaskWeatherForecast_" + id][1])
                    this.mainJSON.taskLibraryNight["listOfAnswersTaskWeatherForecast_" + id].splice(1, 1)
                }
                this.mainJSON.taskLibraryNight.results['ULSCLL2_Log_LLK6_' + id] = this.mainJSON.taskLibraryNight["listOfAnswersTaskWeatherForecast_" + id][0].id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })
                if((this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_1 === 1 || this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_1 === 3) &&
                    (this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_3 === 1 || this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK6_3 === 3)) {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK6_1 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK6_1 = 0
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
    .list-of-answers-weather-forecast {
        text-align: center;
        height: 25%;
        width: 100%;
    }
    .list-group-el-weather-forecast {
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 25%;
        min-height: 15%;
    }
    .task15El{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        width: 25%;
        height: 100%;
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
    }
    .task15List {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        width: 25%;
        padding: 20px;
        background: #d2fff7;
        border-radius: 4px;
        height: max-content;
    }
</style>