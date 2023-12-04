<template>
    <!--Перетаскивание вещей из сумки-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>
                Какие вещи в рюкзаке небезопасно проносить в библиотеку? Выложи ДВЕ вещи, перетащив из рюкзака на стол. 
                Чтобы вернуть вещь в рюкзак, снова перетащи ее.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 flex-column position-relative"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <draggable
                class="list-group draggable-backpack-end"
                :list="this.mainJSON.taskLibraryNight.listOfElementsEnd"
                group="draggingThings"
            >
                <template #item="{ element }">
                    <img :src=" require('../../assets/' + element.src_dop) "
                         alt="Avatar"  :style="element.style_dop"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
                </template>
            </draggable>
            <div>
                <img src="../../assets/LittleBackpackOpen.png" alt="" class="little-backpack">
                <draggable
                    class="list-group draggable-backpack-start"
                    :list="this.mainJSON.taskLibraryNight.listOfElementsStart"
                    group="draggingThings"
                >
                    <template #item="{ element }">
                        <img :src=" require('../../assets/' + element.src) "
                             alt="Avatar" :style="element.style"  @mouseover="onHover($event, element.toolTip)" @mouseout="this.toolTipVisible = false"/>
                    </template>
                </draggable>
            </div>
        </div>
        <div class="background-text" id="background-text">
             <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="showModal" v-if="mainJSON.taskLibraryNight.listOfElementsEnd.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

    <MyTooltip :toolTipVisible="toolTipVisible" :toolTipMessage="toolTipMessage" :clientX="clientX" :clientY="clientY"/>

    <MyModal v-model:show="modalVisible" v-model:buttons="modalButtons"
             @update="checkAnswer"
    >
        {{this.modalMessage}}
    </MyModal>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskMovingThingsFromBag",
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        data() {
            return {
                modalVisible: false,
                modalButtons: [],
                modalMessage: '',
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
            ...mapGetters(['mainJSON', 'constTaskLibraryNight']),
            screenID(){
                return this.mainJSON.taskLibraryNight.shownScreenID
            }
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
            showModal(){
                this.modalVisible = true
                this.modalButtons = [
                    {value: "Да", status: true},
                    {value: "Нет", status: false}
                ]
                this.modalMessage = 'Ты действительно хочешь закончить выполнение этого задания? После этого уже нельзя будет изменить ответы.'
            },
            checkAnswer(status){
                this.modalVisible = false

                if(status){
                    screen.isShow = false
                    this.mainJSON.taskLibraryNight.shownScreenID++
                    this.mainJSON.taskLibraryNight.screens.forEach(el => {
                        if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                            el.isShow = true
                        }
                    })

                    let answers = []
                    let maxScore = 0
                    let middleScore = 0
                    this.mainJSON.taskLibraryNight.listOfElementsEnd.forEach(el => {
                        answers.push(el.id)
                        if(el.id === 2 || el.id === 7){
                            maxScore++
                        }
                        if(el.id === 1 || el.id === 3 || el.id === 4 || el.id === 5 || el.id === 6){
                            middleScore++
                        }
                    })
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_SCK1_2 = answers.join()
                    if(this.mainJSON.taskLibraryNight.listOfElementsEnd.length === 2 && maxScore === 2){
                        this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK1_2 = 2
                    }
                    else if(this.mainJSON.taskLibraryNight.listOfElementsEnd.length === 2 && maxScore === 1 && middleScore === 1){
                        this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK1_2 = 1
                    }
                    else {
                        this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_SCK1_2 = 0
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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>
    .little-backpack {
        position: absolute;
        bottom: 5%;
        width: 30%;
        left: 50%;
    }
    .draggable-backpack-end {
        height: 90%;
        width: 35%;
        left: 10%;
        bottom: 5%;
        position: absolute;
    }
    .draggable-backpack-start {
        position: absolute;
        bottom: 5%;
        width: 30%;
        left: 50%;
        height: 50%;
    }
</style>