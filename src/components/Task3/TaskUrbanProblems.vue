<template>
    <div class="backgroundTaskCleaningDay"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Сопоставь проблемы крупных городов с их последствиями. Перетащи фразы из нижней части магнитной доски в нужные ячейки на схеме.
            </p>
        </div>
        <div class="d-flex justify-content-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyCleaningDay" style="border: unset">
                <div style="border: 2px solid #54BEDF">
                    <table class="table">
                        <thead>
                            <tr style="background: #EDFFF6;">
                                <th scope="col" class="w-50" style="background: #EDFFF6;">Проблемы</th>
                                <th scope="col" class="w-50" style="background: #EDFFF6;">Последствия</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Загрязнение почвы</td>
                            <td>
                                <draggable
                                        @add="error(1)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        <tr style="background: #EDFFF6;">
                            <td style="background: #EDFFF6;">Снос исторических зданий</td>
                            <td style="background: #EDFFF6;">
                                <draggable
                                        @add="error(2)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        <tr>
                            <td>Сокращение “зеленых” зон в городе</td>
                            <td>
                                <draggable
                                        @add="error(3)"
                                        class="list-group list-group-el"
                                        :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3"
                                        group="listOfAnswersUrbanProblems"
                                >
                                    <template #item="{ element }">
                                        <div>
                                            {{element.value}}
                                        </div>
                                    </template>
                                </draggable>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <draggable
                            class="list-group d-flex flex-row flex-wrap justify-content-center align-items-center"
                            :list="this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems"
                            group="listOfAnswersUrbanProblems" style="background: #EDFFF6;"
                    >
                        <template #item="{ element }">
                            <div class="list-of-answers" style="width: unset">
                                {{element.value}}
                            </div>
                        </template>
                    </draggable>
                </div>

            </div>
        </div>


        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1.length !== 0 ||
            mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2.length !== 0 || mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3.length !== 0">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskUrbanProblems",
        props: {
            screen: {},
            constTaskCleaningDay: {}
        },
        data() {
            return {
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
            error(id) {
                if(this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id].length > 1){
                    this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems.push(this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id][1])
                    this.mainJSON.taskCleaningDay["listOfAnswersUrbanProblems_list" + id].splice(1, 1)
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskCleaningDay.shownScreenID++
                this.mainJSON.taskCleaningDay.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskCleaningDay.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1.length !== 0) {
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log1_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1[0].id
                    if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list1[0].id === 1){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK1_1 = 1
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK1_1 = 0
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2.length !== 0) {
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log2_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2[0].id
                    if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list2[0].id === 2){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK1_1 = 1
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK1_1 = 0
                }
                if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3.length !== 0) {
                    this.mainJSON.taskCleaningDay.results.ULSE3_Log3_SEK1_1 = this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3[0].id

                    if(this.mainJSON.taskCleaningDay.listOfAnswersUrbanProblems_list3[0].id === 3){
                        this.mainJSON.taskCleaningDay.results.ULSE3_Score3_SEK1_1 = 1
                    }
                    else this.mainJSON.taskCleaningDay.results.ULSE3_Score3_SEK1_1 = 0
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
.list-of-answers {
    margin: 10px;
    width: 20%;
    background: #d2fff7;
    border-radius: 4px;
    padding: 10px 20px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.list-group-el {
    margin: 20px;
    width: 80%;
    padding: 20px;
    background: #FFFFFF;
    border: 1px dashed #333333;
    border-radius: 4px;
}

    .list-group-el {
        margin: 0;
        width: unset;
    }
    .list-of-answers {
        background: #FAFEFF;
        border: 1px dashed #333333;
    }

</style>