<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>

    <TaskSites v-if="screen.isShow && screen.haveTask && screen.taskName === 'Sites'"
               :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskWorkBook v-if="screen.isShow && screen.haveTask && screen.taskName === 'WorkBook'"
                  :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskMovingThingsFromBag v-if="screen.isShow && screen.haveTask && screen.taskName === 'MovingThingsFromBag'"
                             :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>

    <TaskChooseShoes v-if="screen.isShow && screen.haveTask && screen.taskName === 'ChooseShoes'"
                     :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskMetro v-if="screen.isShow && screen.haveTask && screen.taskName === 'Metro'"
               :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskMuseumPaintings v-if="(screen.taskName === 'MuseumPaintings1' || screen.taskName === 'MuseumPaintings2') &&
                        screen.isShow && screen.haveTask"
                         :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskEscape v-if="screen.isShow && screen.haveTask && screen.taskName === 'Escape'"
                :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskFire v-if="screen.isShow && screen.haveTask && screen.taskName === 'Fire'"
              :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskHooligans  v-if="(screen.taskName === 'Hooligans1' || screen.taskName === 'Hooligans2') &&
                screen.isShow && screen.haveTask"
                    :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskMap v-if="screen.isShow && screen.haveTask && screen.taskName === 'Map'"
             :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskAttractions v-if="screen.isShow && screen.haveTask && screen.taskName === 'Attractions'"
                     :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskFestival v-if="screen.isShow && screen.haveTask && screen.taskName === 'Festival'"
                  :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskBadWeather v-if="screen.isShow && screen.haveTask && screen.taskName === 'BadWeather'"
                    :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskWarningSigns v-if="screen.isShow && screen.haveTask && screen.taskName === 'WarningSigns'"
                      :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>
    <TaskWeatherForecast v-if="screen.isShow && screen.haveTask && screen.taskName === 'WeatherForecast'"
                         :screen="screen" :constTaskScienceFestival="constTaskScienceFestival"/>




</template>

<script>
import {mapGetters} from "vuex";
import TextScreen from "@/components/Task1/TextScreen";
import TaskMovingThingsFromBag from "@/components/Task1/TaskMovingThingsFromBag";
import TaskChooseShoes from "@/components/Task1/TaskChooseShoes";
import TaskMetro from "@/components/Task1/TaskMetro";
import TaskWorkBook from "@/components/Task1/TaskWorkBook";
import TaskMuseumPaintings from "@/components/Task1/TaskMuseumPaintings";
import TaskEscape from "@/components/Task1/TaskEscape";
import TaskFire from "@/components/Task1/TaskFire";
import TaskHooligans from "@/components/Task1/TaskHooligans";
import TaskMap from "@/components/Task1/TaskMap";
import TaskAttractions from "@/components/Task1/TaskAttractions";
import TaskFestival from "@/components/Task1/TaskFestival";
import TaskSites from "@/components/Task1/TaskSites";
import TaskBadWeather from "@/components/Task1/TaskBadWeather";
import TaskWarningSigns from "@/components/Task1/TaskWarningSigns";
import TaskWeatherForecast from "@/components/Task1/TaskWeatherForecast";
export default {
    name: "ModelTaskScienceFestival",
    components: {
        TaskWeatherForecast,
        TaskWarningSigns,
        TaskBadWeather,
        TaskSites,
        TaskFestival,
        TaskAttractions,
        TaskMap,
        TaskHooligans,
        TaskFire,
        TaskEscape,
        TaskMuseumPaintings,
        TaskWorkBook,
        TaskMetro,
        TaskChooseShoes,
        TaskMovingThingsFromBag,
        TextScreen,
    },
    computed: {
        ...mapGetters(['mainJSON', 'constTaskScienceFestival']),
        screenID(){
            return this.mainJSON.taskScienceFestival.shownScreenID
        },
        screen(){
            return this.mainJSON.taskScienceFestival.screens[this.screenID]
        }
    },
}
</script>

<style>
.backgroundTaskScienceFestival {
    height: calc(100vh - 140px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    /*background-position: center !important;*/
    background-position: 0 5% !important;
}

.backgroundTaskBodyLibraryNight {
    background: #FFFFFF;
    border: 1px solid #54BEDF;
    width: 85%;
    max-height: 85%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3%;
    backdrop-filter: blur(5px);
}

.background-text {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
    padding: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.background-text-center {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) -116.67%, #FFFFFF 47.55%, rgba(255, 255, 255, 0) 215.22%);
    padding: 20px;
    width: 100%;
    bottom: 50%;
    position: fixed;
}

.background-text-center p{
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 26px;
    color: #333333;
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
</style>