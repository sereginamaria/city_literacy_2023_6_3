<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskLibraryNight v-if="this.mainJSON.taskScienceFestival.isShow"/>
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
    import ModelTaskLibraryNight from "@/components/Task1/ModelTaskLibraryNight.vue";
    export default {
        name: "PageBody",
        components: {
            ModelTaskLibraryNight,
            ModelForms, ModelTaskCleaningDay, ModelTaskChatWinterHolidays},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>