<template>
    <div class="backgroundTaskScienceFestival" :style="{ background: 'url(' + require('../../assets/TaskChatWinterHolidaysBackground.webp') + ')'}">
        <FormsModel v-if="this.mainJSON.forms.modelShow"/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormsModel from "@/components/Forms/FormsModel.vue";

export default {
    name: "ModelForms",
    components: {FormsModel},
    computed: {
        ...mapGetters(['mainJSON']),
    },
}
</script>

<style scoped>
</style>