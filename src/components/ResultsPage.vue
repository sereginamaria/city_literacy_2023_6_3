<template>
    <div class="dialog">
        <div class="dialog-content d-flex flex-column">
            <div class="d-flex flex-column">
                <p>Результаты выполнения теста "Городская грамотность"</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Компонент</th>
                        <th scope="col">Результат (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Просоциальная вовлеченность</td>
                        <td>{{ this.prosocialEngagement }}</td>
                    </tr>
                    <tr>
                        <td>Локальная грамотность</td>
                        <td>{{this.localLiteracy}}</td>
                    </tr>
                    <tr>
                        <td>Безопасность в городе</td>
                        <td>{{this.securityInTheCity}}</td>
                    </tr>
                    <tr>
                        <td>Здоровый образ жизни</td>
                        <td>{{this.healthyLifestyle}}</td>
                    </tr>
                    <tr>
                        <td>Применение цифровых технологий</td>
                        <td>{{this.applicationOfDigitalTechnologies}}</td>
                    </tr>
                    </tbody>
                </table>
                <p>Благодарим за участие!</p>
            </div>

            <div class="d-flex">
               <!-- <div class="m-3">
                    <p>TIME</p>
                    <div v-for="result in this.resultsTime" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>-->
                <div class="m-3 w-25">
                    <p>Задание 1</p>
                    <div v-for="result in this.resultsTaskNightInTheMuseum" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
                <div class="m-3 w-25">
                    <p>Чат Фестиваль</p>
                    <div v-for="result in this.resultsTaskChatWinterHolidays" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
                <div class="m-3 w-25">
                    <p>Задание 3</p>
                    <div v-for="result in this.resultsTaskCleaningDay" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
                <div class="m-3 w-25">
                    <p>Анкета</p>
                    <div v-for="result in this.resultsForms" :key="result">
                        {{result.key}}: {{result.value}}
                    </div>
                </div>
            </div>
            <div class="m-3">
                <div v-for="result in this.resultsTime" :key="result">
                    {{result.key}}: {{result.value}}
                </div>
            </div>
           <MyButton @click="exit">Выйти</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ResultsPage",
        data() {
            return {
                resultsTaskNightInTheMuseum: [],
                resultsTaskChatWinterHolidays: [],
                resultsTaskCleaningDay: [],
                resultsTime: [],
                resultsForms: [],
                securityInTheCity: 0,
                localLiteracy: 0,
                healthyLifestyle: 0,
                applicationOfDigitalTechnologies: 0,
                prosocialEngagement: 0,
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
          exit(){
              this.push_mainJSON({
                  push: this.mainJSON
              })

              let d = new Date()
              this.mainJSON.results.dataTimeEnd =  this.mainJSON.results.dataTimeLastUpdate = [
                  d.getFullYear(),
                  ('0' + (d.getMonth() + 1)).slice(-2),
                  ('0' + d.getDate()).slice(-2)
              ].join('-') + ' ' + [
                  ('0' + (d.getHours())).slice(-2),
                  ('0' + (d.getMinutes())).slice(-2),
                  ('0' + d.getSeconds()).slice(-2)
              ].join(':');

              this.mainJSON.taskCleaningDay["isShow"] = false
              this.mainJSON.taskChatWinterHolidays["isShow"] = false
              this.mainJSON.taskScienceFestival["isShow"] = false

              this.mainJSON['loginShow'] = true
              this.mainJSON['mainPageShow'] = false
              this.mainJSON['allDone'] = true
              this.mainJSON['resultsShow'] = false

              localStorage.clear()

            }
        },
        mounted(){
                // console.log('feedback')
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK1_2 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK1_2 === 2){
                    this.securityInTheCity+=2
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK1_3 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_1 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_2 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK2_3 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_1 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK1_4 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_2 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCS4_3 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK3_1 === 1){
                    this.securityInTheCity++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_SCK3_2 === 1){
                    this.securityInTheCity++
                }


                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK1_1 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK1_2 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK1_3 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK1_4 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK3_1 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK3_1 === 2){
                    this.localLiteracy+=2
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK2_1 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK4_1 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK5_1 === 1){
                    this.localLiteracy++
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK5_1 === 2){
                    this.localLiteracy+=2
                }
                if(this.mainJSON.taskScienceFestival.results.ULSCLL3_Score_LLK6_1 === 1){
                    this.localLiteracy++
                }

                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS5_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK3_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_1 === 2){
                    this.healthyLifestyle+=2
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK1_1 === 2){
                    this.healthyLifestyle+=2
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK1_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_1 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_1 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_1 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS2_2 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS3_2 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK4_1 === 2){
                    this.healthyLifestyle+=2
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK4_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTK1_1 === 1){
                    this.applicationOfDigitalTechnologies++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS1_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS3_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS4_2 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLS2_1 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_HLK2_2 === 1){
                    this.healthyLifestyle++
                }
                if(this.mainJSON.taskChatWinterHolidays.results.ULHLDT3_Score_DTS1_2 === 1){
                    this.applicationOfDigitalTechnologies++
                }


                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK4_2 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_1 === 2){
                    this.prosocialEngagement+=2
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK2_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK2_2 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK1_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK1_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score3_SEK1_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score1_SEK5_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score2_SEK5_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK6_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK6_1 === 2){
                    this.prosocialEngagement+=2
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES2 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES3 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES4 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES5 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_3 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SEK3_3 === 2){
                    this.prosocialEngagement+=2
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES5_1 === 1){
                    this.prosocialEngagement++
                }
                if(this.mainJSON.taskCleaningDay.results.ULSE3_Score_SES1_1 === 1){
                    this.prosocialEngagement++
                }

                // console.log(this.prosocialEngagement)
                // console.log(this.securityInTheCity)
                // console.log(this.localLiteracy)
                // console.log(this.healthyLifestyle)
                // console.log(this.applicationOfDigitalTechnologies)

                this.prosocialEngagement = Math.round(this.prosocialEngagement/23*100)
                this.securityInTheCity = Math.round(this.securityInTheCity/12*100)
                this.localLiteracy = Math.round(this.localLiteracy/11*100)
                this.healthyLifestyle = Math.round(this.healthyLifestyle/14*100)
                this.applicationOfDigitalTechnologies = Math.round(this.applicationOfDigitalTechnologies/7*100)


            for (const [key, value] of Object.entries(this.mainJSON.taskScienceFestival.results)) {
                this.resultsTaskNightInTheMuseum.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.taskChatWinterHolidays.results)) {
                this.resultsTaskChatWinterHolidays.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.taskCleaningDay.results)) {
                this.resultsTaskCleaningDay.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.results)) {
                this.resultsTime.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
            for (const [key, value] of Object.entries(this.mainJSON.forms.results)) {
                this.resultsForms.push({
                    key: `${key}`,
                    value: `${value}`
                })
            }
        }
    }
</script>

<style scoped>
    .dialog-content {
        overflow-y: scroll;
        max-height: 80vh;
        max-width: 80vw;
    }
</style>