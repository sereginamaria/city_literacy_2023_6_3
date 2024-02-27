<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskScienceFestival v-if="this.mainJSON.taskScienceFestival.isShow"/>
        <ModelTaskChatWinterHolidays v-if="this.mainJSON.taskChatWinterHolidays.isShow"/>
        <ModelTaskCleaningDay v-if="this.mainJSON.taskCleaningDay.isShow"/>
        <ModelForms v-if="this.mainJSON.forms.isShow"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModelTaskChatWinterHolidays from "@/components/Task2/ModelTaskChatWinterHolidays.vue";
    import ModelTaskCleaningDay from "@/components/Task3/ModelTaskCleaningDay";
    import ModelForms from "@/components/Forms/ModelForms.vue";
    import ModelTaskScienceFestival from "@/components/Task1/ModelTaskScienceFestival.vue";
    export default {
        name: "PageBody",
        components: {
            ModelTaskScienceFestival,
            ModelForms, ModelTaskCleaningDay, ModelTaskChatWinterHolidays},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>