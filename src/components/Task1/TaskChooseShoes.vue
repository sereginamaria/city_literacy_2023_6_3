<template>
    <!--Выбор обуви-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>
                Выбери ту полку, на которой находится подходящая обувь для тебя и для Кати.
                Помни, что обувь должна подходить для места, где будет много людей.
            </p>
        </div>
        <div>
            <img src="../../assets/Boots1.png" alt="" :class="{colorBoots: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 === 1}"
                 @click="addAnswer(1)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак"
                 style="width: calc(100%/4);
    left: calc(100%/2.6);
    bottom: calc(100%/1.5);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots2.png" alt="" :class="{colorBoots: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 === 2}"
                 @click="addAnswer(2)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак"
                 style="width: calc(100%/4);
    left: calc(100%/2.6);
    bottom: calc(100%/2.1);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots3.png" alt="" :class="{colorBoots: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 === 3}"
                 @click="addAnswer(3)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Большой рюкзак"
                 style="width: calc(100%/4);
    left: calc(100%/2.6);
    bottom: calc(100%/4);
    /* width: calc(100%/3); */
    position: absolute;"
            >
            <img src="../../assets/Boots4.png" alt="" :class="{colorBoots: mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 === 4}"
                 @click="addAnswer(4)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Маленький рюкзак"
                 style="width: calc(100%/4);
    left: calc(100%/2.6);
    bottom: calc(100%/15);
    /* width: calc(100%/3); */
    position: absolute;"
            >
        </div>
        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].name}}</span>
                    {{constScienceFestival.screens[this.mainJSON.taskScienceFestival.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskChooseShoes",
        props: {
            screen: {},
            constScienceFestival: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            addAnswer(id){
                this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 = id
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskScienceFestival.shownScreenID++
                this.mainJSON.taskScienceFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskScienceFestival.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskScienceFestival.results.ULSCLL2_Log_SCK1_3 === 2){
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_SCK1_3 = 1
                }
                else {
                    this.mainJSON.taskScienceFestival.results.ULSCLL2_Score_SCK1_3 = 0
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
        }
    }
</script>

<style scoped>
    .colorBoots {
        filter: drop-shadow(0px 0px 35px #FFFFFF) drop-shadow(12.7928px 8.52851px 8.52851px rgba(0, 0, 0, 0.0));
    }
</style>