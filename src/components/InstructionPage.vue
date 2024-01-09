<template>
    <div class="instruction-body" :class="{backgroundTaskLibraryNight: mainJSON.taskLibraryNight.isShow, backgroundTaskChatWinterHolidays: mainJSON.taskChatWinterHolidays.isShow ||
    mainJSON.forms.isShow, backgroundTaskCleaningDay: mainJSON.taskCleaningDay.isShow}">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="instruction-card">
                <div>
                    <p v-if="mainJSON.taskLibraryNight.isShow">{{constTaskLibraryNight.instruction}}</p>
                    <p v-if="mainJSON.taskChatWinterHolidays.isShow">{{constTaskChatWinterHolidays.instruction}}</p>
                    <p v-if="mainJSON.taskCleaningDay.isShow">{{constTaskCleaningDay.instruction}}</p>
                    <p v-if="mainJSON.forms.isShow">{{constForm.instruction}}</p>
                </div>
                <div class="mt-3">
                    <p>
                        Обрати внимание: при выполнении каждого задания после нажатия кнопки «Готово» ты уже не сможешь изменить ответ.
                    </p>
                </div>
                <div class="d-flex justify-content-end" v-if="!mainJSON.forms.isShow">
                    <p style="font-style: italic; text-align: right;" class="mb-4">
                        Все имена и события в тесте вымышлены, любые совпадения с реальными людьми и событиями случайны.
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <MyButton style="width: 250px" @click="instruction" class="blue-buttons">Приступить</MyButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "InstructionPage",
        computed: {
            ...mapGetters(['mainJSON', 'constTaskLibraryNight', 'constTaskChatWinterHolidays', 'constTaskCleaningDay', 'constForm']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            instruction() {
                this.mainJSON['instructionShow'] = false
                this.mainJSON['mainPageShow'] = true
                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .instruction-body {
        backdrop-filter: blur(5px);
        height: 100vh;
        background-size: cover !important;
    }
    .backgroundTaskLibraryNight {
        background: url("../assets/TaskLibraryNightBackground.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .backgroundTaskChatWinterHolidays {
        background: url("../assets/TaskChatWinterHolidaysBackground.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .backgroundTaskCleaningDay {
        background: url("../assets/TaskCleaningDayBackground.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .instruction-card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 957px;
        max-height: 750px;
        background: #fff;
        border: 1px solid #2a94d6;
        box-shadow: 0 2px 20px rgb(24 24 24 / 50%);
        border-radius: 15px;
        padding: 20px 40px;
        text-align: justify;
    }
</style>