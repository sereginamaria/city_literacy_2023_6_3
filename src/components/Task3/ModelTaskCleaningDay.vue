<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskWhyNeedCleaningDays v-if="screen.isShow && screen.haveTask && screen.taskName === 'WhyNeedCleaningDays'"
                         :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskWillow v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskWillow'"
                            :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskSquirrel v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskSquirrel'"
                                   :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskCulturalVolunteers v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskCulturalVolunteers'"
                                   :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskSortingGarbage v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskSortingGarbage'"
                               :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskSortingGarbageBattery v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskSortingGarbageBattery'"
                       :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskElectronicServicesPart2_1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart2_1'"
                                 :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskBusStop v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskBusStop'"
                                   :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskBehaviorOnTheBus v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskBehaviorOnTheBus'"
                                   :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskMariamFeelsBad v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskMariamFeelsBad'"
                            :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskRightsAndObligationsPart1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskRightsAndObligationsPart1'"
                   :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskSocialInstitutions v-if="screen.isShow && screen.haveTask && screen.taskName === 'SocialInstitutions'"
              :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskUrbanProblems v-if="screen.isShow && screen.haveTask && screen.taskName === 'UrbanProblems'"
                           :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskWhoIsAVolunteer v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskWhoIsAVolunteer'"
                        :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskRightsAndObligationsPart2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskRightsAndObligationsPart2'"
                                 :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskCardAboutVolunteering v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskCardAboutVolunteering'"
                 :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskElectronicServicesPart1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskElectronicServicesPart1'"
                      :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
    <TaskElectronicServicesPart2_2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskElectronicServicesPart2_2'"
                          :screen="screen" :constTaskCleaningDay="constTaskCleaningDay"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TextScreen from "@/components/Task3/TextScreen.vue";
    import TaskWhyNeedCleaningDays from "@/components/Task3/TaskWhyNeedCleaningDays.vue";
    import TaskWillow from "@/components/Task3/TaskWillow.vue";
    import TaskSquirrel from "@/components/Task3/TaskSquirrel.vue";
    import TaskCulturalVolunteers from "@/components/Task3/TaskCulturalVolunteers.vue";
    import TaskSortingGarbageBattery from "@/components/Task3/TaskSortingGarbageBattery.vue";
    import TaskSortingGarbage from "@/components/Task3/TaskSortingGarbage.vue";
    import TaskElectronicServicesPart2_1 from "@/components/Task3/TaskElectronicServicesPart2_1.vue";
    import TaskBusStop from "@/components/Task3/TaskBusStop.vue";
    import TaskBehaviorOnTheBus from "@/components/Task3/TaskBehaviorOnTheBus.vue";
    import TaskMariamFeelsBad from "@/components/Task3/TaskMariamFeelsBad.vue";
    import TaskRightsAndObligationsPart1 from "@/components/Task3/TaskRightsAndObligationsPart1.vue";
    import TaskSocialInstitutions from "@/components/Task3/TaskSocialInstitutions.vue";
    import TaskUrbanProblems from "@/components/Task3/TaskUrbanProblems.vue";
    import TaskWhoIsAVolunteer from "@/components/Task3/TaskWhoIsAVolunteer.vue";
    import TaskRightsAndObligationsPart2 from "@/components/Task3/TaskRightsAndObligationsPart2.vue";
    import TaskCardAboutVolunteering from "@/components/Task3/TaskCardAboutVolunteering.vue";
    import TaskElectronicServicesPart1 from "@/components/Task3/TaskElectronicServicesPart1.vue";
    import TaskElectronicServicesPart2_2 from "@/components/Task3/TaskElectronicServicesPart2_2.vue";

    export default {
        name: "ModelTaskCleaningDay",
        components: {
            TaskElectronicServicesPart2_2,
            TaskElectronicServicesPart1,
            TaskCardAboutVolunteering,
            TaskRightsAndObligationsPart2,
            TaskWhoIsAVolunteer,
            TaskUrbanProblems,
            TaskSocialInstitutions,
            TaskRightsAndObligationsPart1,
            TaskMariamFeelsBad,
            TaskBehaviorOnTheBus,
            TaskBusStop,
            TaskElectronicServicesPart2_1,
            TaskSortingGarbage,
            TaskSortingGarbageBattery,
            TaskCulturalVolunteers,
            TaskSquirrel,
            TaskWillow,
            TaskWhyNeedCleaningDays,
            TextScreen
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskCleaningDay']),
            screenID(){
                return this.mainJSON.taskCleaningDay.shownScreenID
            },
            screen(){
                return this.mainJSON.taskCleaningDay.screens[this.screenID]
            }
        },
    }
</script>

<style>
.backgroundTaskCleaningDay {
    height: calc(100vh - 70px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    background-position: center !important;
}

.backgroundTaskBodyCleaningDay {
    width: 85%;
    max-height: 85%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3%;
}

    .background-text {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
        padding: 20px;
        width: 100%;
     /*   position: fixed;
        bottom: 0;*/
    }


    .background-text p{
        color: white;
        font-size: 18px;
    }

    .choosenAnswer {
        background: rgba(84, 190, 223, 0.15);
    }

    .option-answers-background {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        left: calc(100%/1.8);
        width: calc(100%/3);
        position: absolute;
        bottom: calc(100%/2.5);
    }
    .option-answers-border {
        border: 2px solid #54BEDF;
        padding: 10px 20px;
    }

    .name-in-dialog {
        font-style: italic;
        font-weight: bold;
        font-size: 18px;
        color: white;
    }

    .list-group-el {
        margin: 20px;
        width: 80%;
        padding: 20px;
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
    }


</style>