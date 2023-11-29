<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskLibraryNight v-if="this.mainJSON.taskLibraryNight.isShow"/>
        <ModelTaskChatWinterHolidays v-if="this.mainJSON.taskChatWinterHolidays.isShow"/>
        <ModelTaskNewGirl v-if="this.mainJSON.taskNewGirl.isShow"/>
        <ModelForms v-if="this.mainJSON.forms.isShow"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModelTaskChatWinterHolidays from "@/components/Task2/ModelTaskChatWinterHolidays.vue";
    import ModelTaskNewGirl from "@/components/Task3/ModelTaskNewGirl";
    import ModelForms from "@/components/Forms/ModelForms.vue";
    import ModelTaskLibraryNight from "@/components/Task1/ModelTaskLibraryNight.vue";
    export default {
        name: "PageBody",
        components: {
            ModelTaskLibraryNight,
            ModelForms, ModelTaskNewGirl, ModelTaskChatWinterHolidays},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>