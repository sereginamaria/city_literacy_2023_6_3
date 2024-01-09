<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери электронный сервис, который поможет бабушкам записаться на курсы иностранного языка. Кликни на нужную картинку.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay flex-row flex-wrap" style="height: 85%; padding: 0">
                <div class="imgBlock" style="margin-right: 2%">
                    <img @click="choose(1)" src="../../assets/TaskCleaningDayElectronicServices5.png" alt=""
                         :class="{choose: mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 === 1}" style="width: 100%">
                </div>
                <div class="imgBlock">
                    <img @click="choose(2)" src="../../assets/TaskCleaningDayElectronicServices4.png" alt=""
                         :class="{choose: mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 === 2}" style="width: 100%">
                </div>
                <div class="imgBlock" style="margin-right: 2%">
                    <img @click="choose(3)" src="../../assets/TaskCleaningDayElectronicServices3.png" alt=""
                         :class="{choose: mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 === 3}" style="width: 100%">
                </div>
                <div class="imgBlock">
                    <img @click="choose(4)" src="../../assets/TaskCleaningDayElectronicServices2.png" alt=""
                         :class="{choose: mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 === 4}" style="width: 100%">
                </div>
            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskElectronicServicesPart2_2",
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            choose(id) {
                this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 = id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskCleaningDay.shownScreenID++
                this.mainJSON.taskCleaningDay.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK5_2 === 1){
                    this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK5_1 = 1
                }
                else this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK5_1 = 0
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
.choose {
    filter: drop-shadow(5px 5px 5px #6CFF95) drop-shadow(-5px 5px 5px #6CFF95) drop-shadow(5px -5px 5px #6CFF95) drop-shadow(-5px -5px 5px #6CFF95);
}
    .imgBlock {
        display: flex;
        width: 38%;
        align-items: center;
        justify-content: center;
    }
    .imgBlock img{
        height: 100%;
    }
</style>