<template>
    <div class="backgroundTaskLibraryNight backimp" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" :class="{background5: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 === 1,
    background6: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 === 2, background7: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 === 3, background8: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 === 4}"
    >
        <div class="instruction-block" id="instruction-block">
            <p>Что ответишь Кате? Где можно спрятаться от непогоды? Выбери один ответ.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 flex-column"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="task13">
                <div v-for="el in mainJSON.taskScienceFestival.listOfAnswersTaskBadWeather" :key="el.id" class="task13El"
                     :class="{choosenAnswer1: el.id === mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1}"
                     @click="chooseAnswer(el)">
                    <div>
                        {{el.name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskBadWeather",
        data() {
            return {
                height: 0
            }
        },
        props: {
            screen: {},
            constScienceFestival: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el) {
                this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK3_1 === 4){
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_SCK3_1 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_SCK3_1 = 0
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
    .task13 {
        display: flex;
        width: 100%;
        position: absolute;
        top: 60%;
        justify-content: center;
        padding: 0 calc(100%/10);
        flex-wrap: wrap;
        align-items: center;
    }
    .task13El {
        margin: 20px 50px;
        display: flex;
        min-height: 60px;
        width: calc(100%/4);
        /* min-width: max-content; */
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        /* height: calc(100%/4); */
        align-items: center;
        justify-content: center;
        padding: 0 2%;
        text-align: center;
    }
    .choosenAnswer1 {
        background: rgba(84, 190, 223, 0.8);
    }
    .backimp {
        background-position: unset !important;
    }
    .background5 {
        background: url("../../assets/TaskLibraryNightBadWeather4.webp") !important;
        background-size: cover!important;
    }
    .background6 {
        background: url("../../assets/TaskLibraryNightBadWeather2.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background7 {
        background: url("../../assets/TaskLibraryNightBadWeather1.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background8 {
        background: url("../../assets/TaskLibraryNightBadWeather3.webp") rgba(255, 255, 255, 0.01) !important;
        background-size: cover!important;
    }
</style>