<template>
    <div class="backgroundTaskNewGirl"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери, какой электронный сервис подходит, чтобы помочь бабушке Кати записаться на компьютерные курсы. Кликни на нужную картинку.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyNewGirl flex-row flex-wrap" style="height: 85%; padding: 0">
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(1)" src="../../assets/TaskNewGirlElectronicServices5.webp" alt="" :class="{choose: mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 === 1}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(2)" src="../../assets/TaskNewGirlElectronicServices6.webp" alt="" :class="{choose: mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 === 2}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(3)" src="../../assets/TaskNewGirlElectronicServices3.webp" alt="" :class="{choose: mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 === 3}">
                </div>
                <div class="electronic_services_part1_img_block">
                    <img @click="choose(4)" src="../../assets/TaskNewGirlElectronicServices4.webp" alt="" :class="{choose: mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 === 4}">
                </div>
            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 !== 'NA'">Готово</MyButton>
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
            constTaskNewGirl: {}
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
                this.mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 = id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNewGirl.shownScreenID++
                this.mainJSON.taskNewGirl.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskNewGirl.results.ULSE2_Log2_SEK5_1 === 1){
                    this.mainJSON.taskNewGirl.results.ULSE2_Score2_SEK5_1 = 1
                }
                else this.mainJSON.taskNewGirl.results.ULSE2_Score2_SEK5_1 = 0
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
        border: 5px solid #54BEDF;
    }
</style>