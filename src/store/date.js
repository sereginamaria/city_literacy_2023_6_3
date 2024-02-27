const date = {
    "login": '',
    "hash": '',
    "loginShow": true,
    "instructionShow": false,
    "mainPageShow": false,
    "pauseShow": false,
    "resultsShow": false,
    "feedbackShow": false,
    "allDone": false,
    "currentPushTime": 0,
    "currentTime": 4200,
    "ret": '',
    "retPush": '',
    "retPause": '',
    "results": {
        "login": null,
        "dataTimeStart": null,
        "dataTimeEndtaskScienceFestival": null,
        "dataTimeEndtaskChatWinterHolidays": null,
        "dataTimeEndtaskCleaningDay": null,
        "dataTimeEnd": null,
        "dataTimeLastUpdate": null
    },
    "listOfTasks": [
        {'name': 'taskScienceFestival', 'done': false},
        {'name': 'taskChatWinterHolidays', 'done': false},
        {'name': 'taskCleaningDay', 'done': false}
    ],
    "taskScienceFestival": {
        "results": {
            //ChooseBag and Moving things from bag
            "ULSCLL3_Log_SCK1_2": "NA",// todo поразмислыть в контексте state machine
            "ULSCLL3_Score_SCK1_2": "NA",

            //Choose shoes
            "ULSCLL3_Log_SCK1_3": "NA",
            "ULSCLL3_Score_SCK1_3": "NA",

            //Bag Weather
            "ULSCLL3_Log_SCK3_1": "NA",
            "ULSCLL3_Score_SCK3_1": "NA",

            //Warning Signs
            "ULSCLL3_Log_SCK3_2": "NA",
            "ULSCLL3_Log_SCK3_32": "NA",
            "ULSCLL3_Log_SCK3_43": "NA",
            "ULSCLL3_Log_SCK3_54": "NA",
            "ULSCLL3_Score_SCK3_2": "NA",

            //Metro
            "ULSCLL3_Log_SCK2_1": "NA",
            "ULSCLL3_Score_SCK2_1": "NA",

            //Museum Paintings
            "ULSCLL3_Log_SCK2_2": "NA",
            "ULSCLL3_Log_SCK2_3": "NA",
            "ULSCLL3_Score_SCK2_2": "NA",
            "ULSCLL3_Score_SCK2_3": "NA",

            //Workbook
            "ULSCLL3_Log_LLK1_1": "NA",
            "ULSCLL3_Log_LLK1_2": "NA",
            "ULSCLL3_Log_LLK1_3": "NA",
            "ULSCLL3_Log_LLK1_4": "NA",
            "ULSCLL3_Score_LLK1_1": "NA",
            "ULSCLL3_Score_LLK1_2": "NA",
            "ULSCLL3_Score_LLK1_3": "NA",
            "ULSCLL3_Score_LLK1_4": "NA",

            //Hooligans
            "ULSCLL3_Log_SCS4_2": "NA",
            "ULSCLL3_Log_SCS4_3": "NA",
            "ULSCLL3_Score_SCS4_2": "NA",
            "ULSCLL3_Score_SCS4_3": "NA",

            //Escape
            "ULSCLL3_Log_SCS4_1": "NA",
            "ULSCLL3_Score_SCS4_1": "NA",

            //Map
            "ULSCLL3_Log_LLK3_1": "NA",
            "ULSCLL3_Score_LLK3_1": "NA",

            //Fire
            "ULSCLL3_Log_SCK1_4": "NA",
            "ULSCLL3_Score_SCK1_4": "NA",


            //Attractions
            "ULSCLL3_Log_LLK2_1": "NA",
            "ULSCLL3_Score_LLK2_1": "NA",

            //Festival
            "ULSCLL3_Log_LLK4_1": "NA",
            "ULSCLL3_Score_LLK4_1": "NA",

            //12 Sites
            "ULSCLL3_Log_LLK5_1": "NA",
            "ULSCLL3_Score_LLK5_1": "NA",

            //15 Weather Forecast
            "ULSCLL3_Log_LLK6_1": "NA",
            "ULSCLL3_Log_LLK6_2": "NA",
            "ULSCLL3_Log_LLK6_3": "NA",
            "ULSCLL3_Log_LLK6_4": "NA",
            "ULSCLL3_Score_LLK6_1": "NA",
        },
        "isShow": false,
        "shownScreenID": 0,
        "screens": [
            {"id": 0, "isShow": true, "imgURL": "TaskScienceFestivalSitesDavid", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "TaskScienceFestivalSites", "haveTask": true, "taskName": "Sites",
                "description": ''},

            {"id": 2, "isShow": false, "imgURL": "TaskScienceFestivalWorkBookDavid", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": true, "imgURL": "TaskScienceFestivalWorkBook", "haveTask": true, "taskName": "WorkBook",
                "description": ''},

            {"id": 4, "isShow": false, "imgURL": "TaskScienceFestivalMovingThingsFromBagDavid", "haveTask": false,
                "description": ''},
            {"id": 5, "isShow": false, "imgURL": "TaskScienceFestivalMovingThingsFromBag", "haveTask": true, "taskName": "MovingThingsFromBag",
                "description": ''},

            {"id": 6, "isShow": false, "imgURL": "TaskScienceFestivalChooseShoesDavid", "haveTask": false,
                "description": ''},
            {"id": 7, "isShow": false, "imgURL": "TaskScienceFestivalChooseShoes", "haveTask": true, "taskName": "ChooseShoes",
                "description": ''},

            {"id": 8, "isShow": false, "imgURL": "TaskScienceFestivalMetroBackground", "haveTask": false,
                "description": ''},
            {"id": 9, "isShow": false, "imgURL": "TaskScienceFestivalMetroDavid", "haveTask": false,
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "TaskScienceFestivalMetro", "haveTask": true, "taskName": "Metro",
                "description": ''},

            {"id": 11, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsDavid1", "haveTask": false,
                "description": ''},
            {"id": 12, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsBackground", "haveTask": false,
                "description": 'Метро'},
            {"id": 13, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsAlice1", "haveTask": false,
                "description": ''},
            {"id": 14, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsDavid2", "haveTask": false,
                "description": ''},
            {"id": 15, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsAlice2", "haveTask": false,
                "description": ''},
            {"id": 16, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsDavid3", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintingsAlice3", "haveTask": false,
                "description": ''},
            {"id": 18, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintings1", "haveTask": true, "taskName": "MuseumPaintings1",
                "description": ''},
            {"id": 19, "isShow": false, "imgURL": "TaskScienceFestivalMuseumPaintings2", "haveTask": true, "taskName": "MuseumPaintings2",
                "description": ''},

            {"id": 20, "isShow": false, "imgURL": "TaskScienceFestivalEscapeBackground", "haveTask": false,
                "description": ''},
            {"id": 21, "isShow": false, "imgURL": "TaskScienceFestivalEscapeAlice1", "haveTask": false,
                "description": ''},
            {"id": 22, "isShow": false, "imgURL": "TaskScienceFestivalEscape", "haveTask": true, "taskName": "Escape",
                "description": ''},

            {"id": 23, "isShow": false, "imgURL": "TaskScienceFestivalEscapeDavid1", "haveTask": false,
                "description": ''},
            {"id": 24, "isShow": false, "imgURL": "TaskScienceFestivalEscapeDavid2", "haveTask": false,
                "description": ''},
            {"id": 25, "isShow": false, "imgURL": "TaskScienceFestivalEscapeAlice2", "haveTask": false,
                "description": ''},
            {"id": 26, "isShow": false, "imgURL": "TaskScienceFestivalEscapeDavid3", "haveTask": false,
                "description": ''},
            {"id": 27, "isShow": false, "imgURL": "TaskScienceFestivalEscapeAlice3", "haveTask": false,
                "description": ''},
            {"id": 28, "isShow": false, "imgURL": "TaskScienceFestivalEscapeDavid4", "haveTask": false,
                "description": ''},

            {"id": 29, "isShow": false, "imgURL": "TaskScienceFestivalFireBackground", "haveTask": false,
                "description": ''},
            {"id": 30, "isShow": false, "imgURL": "TaskScienceFestivalFireBackground", "haveTask": false,
                "description": ''},
            {"id": 31, "isShow": false, "imgURL": "TaskScienceFestivalFire", "haveTask": true, "taskName": "Fire",
                "description": ''},

            {"id": 32, "isShow": false, "imgURL": "TaskScienceFestivalHooligansBackground", "haveTask": false,
                "description": ''},
            {"id": 33, "isShow": false, "imgURL": "TaskScienceFestivalHooligansAlice1", "haveTask": false,
                "description": ''},
            {"id": 34, "isShow": false, "imgURL": "TaskScienceFestivalHooligans1", "haveTask": true, "taskName": "Hooligans1",
                "description": ''},
            {"id": 35, "isShow": false, "imgURL": "TaskScienceFestivalHooligansDavid1", "haveTask": false,
                "description": ''},
            {"id": 36, "isShow": false, "imgURL": "TaskScienceFestivalHooligansAlice2", "haveTask": false,
                "description": ''},
            {"id": 37, "isShow": false, "imgURL": "TaskScienceFestivalHooligansDavid2", "haveTask": false,
                "description": ''},
            {"id": 38, "isShow": false, "imgURL": "TaskScienceFestivalHooligansAlice3", "haveTask": false,
                "description": ''},
            {"id": 39, "isShow": false, "imgURL": "TaskScienceFestivalHooligans2", "haveTask": true, "taskName": "Hooligans2",
                "description": ''},


            {"id": 40, "isShow": false, "imgURL": "TaskScienceFestivalMapDavid", "haveTask": false,
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "TaskScienceFestivalMapAlice", "haveTask": false,
                "description": ''},
            {"id": 42, "isShow": false, "imgURL": "TaskScienceFestivalMap", "haveTask": true, "taskName": "Map",
                "description": ''},

            {"id": 43, "isShow": false, "imgURL": "TaskScienceFestivalAttractionsBackground", "haveTask": false,
                "description": ''},
            {"id": 44, "isShow": false, "imgURL": "TaskScienceFestivalAttractionsALice", "haveTask": false,
                "description": ''},
            {"id": 45, "isShow": false, "imgURL": "TaskScienceFestivalAttractions", "haveTask": true, "taskName": "Attractions",
                "description": ''},

            {"id": 46, "isShow": false, "imgURL": "TaskScienceFestivalFestivalAlice", "haveTask": false,
                "description": ''},
            {"id": 47, "isShow": false, "imgURL": "TaskScienceFestivalFestivalDavid", "haveTask": false,
                "description": ''},
            {"id": 48, "isShow": false, "imgURL": "TaskScienceFestivalFestival", "haveTask": true, "taskName": "Festival",
                "description": ''},

            {"id": 49, "isShow": false, "imgURL": "TaskScienceFestivalBadWeatherAlice1", "haveTask": false,
                "description": ''},
            {"id": 50, "isShow": false, "imgURL": "TaskScienceFestivalBadWeatherBackground", "haveTask": false,
                "description": ''},
            {"id": 51, "isShow": false, "imgURL": "TaskScienceFestivalBadWeatherDavid", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "TaskScienceFestivalBadWeatherAlice2", "haveTask": false,
                "description": ''},
            {"id": 53, "isShow": false, "imgURL": "TaskScienceFestivalBadWeatherBackground", "haveTask": true, "taskName": "BadWeather",
                "description": ''},

            {"id": 54, "isShow": false, "imgURL": "TaskScienceFestivalWarningSignsBackground", "haveTask": false,
                "description": ''},
            {"id": 55, "isShow": false, "imgURL": "TaskScienceFestivalWarningSignsAlice", "haveTask": false,
                "description": ''},
            {"id": 56, "isShow": false, "imgURL": "TaskScienceFestivalWarningSignsDavid", "haveTask": false,
                "description": ''},
            {"id": 57, "isShow": false, "imgURL": "TaskScienceFestivalWarningSigns", "haveTask": true, "taskName": "WarningSigns",
                "description": ''},

            {"id": 58, "isShow": false, "imgURL": "TaskScienceFestivalWeatherForecastAlice", "haveTask": false,
                "description": ''},
            {"id": 59, "isShow": false, "imgURL": "TaskScienceFestivalWeatherForecastDavid", "haveTask": false,
                "description": ''},
            {"id": 60, "isShow": false, "imgURL": "TaskScienceFestivalWarningSigns", "haveTask": true, "taskName": "WeatherForecast",
                "description": ''},

            {"id": 61, "isShow": false, "imgURL": "TaskScienceFestivalEnd", "haveTask": false,
                "description": ''},


        ],
        //Перетаскивание вещей в рюкзаке
        "listOfElementsStart": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "TaskScienceFestivalMovingThingsFromBagWetWipes.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagWetWipes_dop.png",
                "id": 2,
                "style": "width: 10%; position: absolute; bottom: 10%; left: 45%",
                "style_dop": "width: 20%; position: absolute; bottom: 5%; left: 0",
                "toolTip": "наушникки"
            },
            {
                "src": "TaskScienceFestivalMovingThingsFromBagUmbrella.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagUmbrella.png",
                "id": 7,
                "style": "width: 25%; position: absolute; bottom: 3%; left: 80%",
                "style_dop": "width: 25%; position: absolute; bottom: 0; left: 80%",
                "toolTip": "зонт-трость"
            },
            {
                "src": "TaskScienceFestivalMovingThingsFromBagCharger.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagCharger.png",
                "id": 3,
                "style": "width: 23%; position: absolute; bottom: 8%; left: 20%",
                "style_dop": "20%; position: absolute; bottom: 3%; left: 58%; z-index: 99",
                "toolTip": "носовой платок"
            },
            {
                "src": "TaskScienceFestivalMovingThingsFromBagNotebook.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagNotebook_dop.png",
                "id": 4,
                "style": "width: 25%; position: absolute; bottom: 3%; left: 53%",
                "style_dop": "width: 35%; position: absolute; bottom: 0; left: 50%",
                "toolTip": "школьный дневник"
            },
            {
                "src": "TaskScienceFestivalMovingThingsFromBagPencil.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagPencil_dop.png",
                "id": 6,
                "style": "width: 30%; position: absolute; bottom: 48%; left: 40%",
                "style_dop": "width: 30%; position: absolute; bottom: 0; left: 25%",
                "toolTip": "пенал"
            },
            {
                "src": "TaskScienceFestivalMovingThingsFromBagStationeryKnife.png",
                "src_dop": "TaskScienceFestivalMovingThingsFromBagStationeryKnife_dop.png",
                "id": 1,
                "style": "width: 15%; position: absolute; bottom: 51%; left: 55%",
                "style_dop": "width: 22%; position: absolute; bottom: 5%; left: 30%",
                "toolTip": "ножницы"
            }
        ],
        "listOfElementsEnd": [],
        //Задание рабочая тетрадь
        "modularTask1_14Show": false,
        //Картинки ко второму вопросу
        "modularTask1_15Show": false,
        //Картинки к третьему вопросу
        "modularTask1_16Show": false,
        //Картинки к четвертому вопросу
        "modularTask1_17Show": false,
        "ULSCLL3_Log_LLK1_1": "NA",
        "ULSCLL3_Log_LLK1_2": "NA",
        "ULSCLL3_Log_LLK1_3": "NA",
        "ULSCLL3_Log_LLK1_4": "NA",

        //Задание 9 задание
        "listOfElementsTask9": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "TaskScienceFestivalMapParkRuskeala.png",
                "name": "Парк Рускеала",
                "id": 8,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: 50%; left: calc(100%/4)"
            },
            {
                "src": "TaskScienceFestivalMapAlexGarden.png",
                "name": "Александровский Сад",
                "id": 4,
                "choose": null,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.95); left: calc(100%/2.1)"
            },
            // {
            //     "src": "TaskScienceFestivalMapKremlin.png",
            //     "name": "Кремль",
            //     "id": 9,
            //     "choose": null,
            //     "style": "width: 6.5%; position: absolute; bottom: calc(100%/2.4); left: calc(100%/2.25)"
            // },
            {
                "src": "TaskScienceFestivalMapPatriarchieLakes.png",
                "name": "Патриаршие пруды",
                "id": 6,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.65); left: calc(100%/3)"
            },
            {
                "src": "TaskScienceFestivalMapVolgaRiver.png",
                "name": "Река Волга",
                "id": 7,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/7); left: 20%"
            },
            {
                "src": "TaskScienceFestivalMapYauzaRiver.png",
                "name": "Река Яуза",
                "id": 2,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: 42%; left: calc(100%/1.4)"
            },
            {
                "src": "TaskScienceFestivalMapParkChistieLakes.png",
                "name": "Чистые пруды",
                "id": 5,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.7)"
            },
            {
                "src": "TaskScienceFestivalMapParkGorkiy.png",
                "name": "Парк Горького",
                "id": 3,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/4.7); left: calc(100%/2.4)"
            },
            {
                "src": "TaskScienceFestivalMapMoscowRiver.png",
                "name": "Москва Река",
                "id": 1,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: 25%; left: 60%"
            },
        ],
        "listOfAnswersTask9": [],


        "listOfElementsTaskAttractions": [
            {
                "id": 1,
                "value": "Александровский сад"
            },
            {
                "id": 2,
                "value": "Сад культуры и отдыха им. Н.Э. Баумана"
            },
            {
                "id": 4,
                "value": "Государственный исторический музей"
            },
            {
                "id": 5,
                "value": "Политехнический музей"
            },
            {
                "id": 6,
                "value": "Большой театр"
            },
            {
                "id": 7,
                "value": "Российская государственная библиотека"
            },
            {
                "id": 8,
                "value": "Парк Горького"
            },
        ],
        "listOfAnswersTaskAttractions_1": [],
        "listOfAnswersTaskAttractions_2": [],
        "listOfAnswersTaskAttractions_3": [],
        "listOfAnswersTaskAttractions": [],


        //Задание 12 задание
        "listOfAnswersTaskSites": [
            {
                "name": "Московские сезоны",
                "link": "https://moscowseasons.com/",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Выставочные залы Москвы",
                "link": "vzmoscow.ru",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Мос.ру. Афиша Москвы",
                "link": "https://www.mos.ru/afisha/",
                "id": 3,
                "choose": false,
            }, {
                "name": "Интерактивная карта Москвы",
                "link": "https://moscowmap.ru/",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTaskSites": [],

        "listOfAnswersTaskBadWeather": [
            {
                "name": "Спрятаться у торговой палатки",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Переждать под зонтиками на веранде кафе",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Спрятаться в беседке возле прудов",
                "id": 3,
                "choose": false,
            }, {
                "name": "Зайти в ближайший магазин",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTaskBadWeather": [],

        "listOfAnswersTaskWarningSigns": [
            {
                "src": "task14EL1.png",
                "id": 1,
            },
            {
                "src": "task14EL2.png",
                "id": 2,
            },
            {
                "src": "task14EL3.png",
                "id": 3,
            },
            {
                "src": "task14EL4.png",
                "id": 4,
            },
            {
                "src": "task14EL5.png",
                "id": 5,
            },
            {
                "src": "task14EL6.png",
                "id": 6,
            },
            {
                "src": "task14EL7.png",
                "id": 7,
            },
            {
                "src": "task14EL8.png",
                "id": 8,
            },
        ],
        "listOfAnswersTaskWarningSigns_1": [],
        "listOfAnswersTaskWarningSigns_2": [],
        "listOfAnswersTaskWarningSigns_3": [],
        "listOfAnswersTaskWarningSigns_4": [],

        "listOfAnswersTaskWeatherForecast": [
            {
                "id": 1,
                "value": "Погулять в Мичуринском саду на ВДНХ"
            },
            {
                "id": 2,
                "value": "Посмотреть экзотических рыб в Москвариуме"
            },
            {
                "id": 3,
                "value": "Покормить белок в парке Измайлово"
            },
            {
                "id": 4,
                "value": "Сходить в павильон “Космос” на выставку про космонавтику и авиацию"
            },
        ],
        "listOfAnswersTaskWeatherForecast_1": [],
        "listOfAnswersTaskWeatherForecast_2": [],
        "listOfAnswersTaskWeatherForecast_3": [],
        "listOfAnswersTaskWeatherForecast_4": [],
    },
    "taskChatWinterHolidays": {
        "isShow": false,
        "results": {
            //0
            "ULHLDT3_Log_HLS5_1": "NA",
            "ULHLDT3_Score_HLS5_1": "NA",
            //1
            "ULHLDT3_Log_HLK3_1": "NA",
            "ULHLDT3_Score_HLK3_1": "NA",
            //2
            "ULHLDT3_Log_HLK2_1": "NA",
            "ULHLDT3_Score_HLK2_1": "NA",
            //3 новый модуль
            "ULHLDT3_Log_HLK1_1": "NA",
            "ULHLDT3_Score_HLK1_1": "NA",
            //4
            "ULHLDT3_Log_DTS1_1": "NA",
            "ULHLDT3_Score_DTS1_1": "NA",
            //5
            "ULHLDT3_Log_DTS2_1": "NA",
            "ULHLDT3_Score_DTS2_1": "NA",
            //6
            "ULHLDT3_Log_DTS3_1": "NA",
            "ULHLDT3_Score_DTS3_1": "NA",
            //7
            "ULHLDT3_Log_DTS2_2": "NA",
            "ULHLDT3_Score_DTS2_2": "NA",
            //8
            "ULHLDT3_Log_DTS3_2": "NA",
            "ULHLDT3_Score_DTS3_2": "NA",
            //9
            "ULHLDT3_Log_HLK4_1": "NA",
            "ULHLDT3_Score_HLK4_1": "NA",
            //10
            "ULHLDT3_Log_DTK1_1": "NA",
            "ULHLDT3_Score_DTK1_1": "NA",
            //11
            "ULHLDT3_Log_HLS1_1": "NA",
            "ULHLDT3_Score_HLS1_1": "NA",
            //12
            "ULHLDT3_Log_HLS4_1": "NA",
            "ULHLDT3_Score_HLS4_1": "NA",
            //13
            "ULHLDT3_Log_HLS3_1": "NA",
            "ULHLDT3_Score_HLS3_1": "NA",
            //14новый модуль
            "ULHLDT3_Log_HLS4_2": "NA",
            "ULHLDT3_Score_HLS4_2": "NA",
            //15
            "ULHLDT3_Log_HLS2_1": "NA",
            "ULHLDT3_Score_HLS2_1": "NA",
            //16
            "ULHLDT3_Log_HLK2_2": "NA",
            "ULHLDT3_Score_HLK2_2": "NA",
            //17
            "ULHLDT3_Log_DTS1_2": "NA",
            "ULHLDT3_Score_DTS1_2": "NA",
        },
        //0
        "ULHLDT3_Log_HLS5_1": "NA",
        //1
        "ULHLDT3_Log_HLK3_1": "NA",
        //2
        "ULHLDT3_Log_HLK2_1": "NA",
        //3
        "ULHLDT3_Log_DTS1_1": "NA",
        //4
        "ULHLDT3_Log_DTS2_1": "NA",
        //5
        "ULHLDT3_Log_DTS3_1": "NA",
        //6
        "ULHLDT3_Log_DTS2_2": "NA",
        //7
        "ULHLDT3_Log_DTS3_2": "NA",
        //8
        "ULHLDT3_Log_HLK4_1": "NA",
        //9
        "ULHLDT3_Log_DTK1_1": "NA",
        //10
        "ULHLDT3_Log_HLS1_1": "NA",
        //11
        "ULHLDT3_Log_HLS4_1": "NA",
        //12
        "ULHLDT3_Log_HLS3_1": "NA",
        //13
        "ULHLDT3_Log_HLS2_1": "NA",
        //14
        "ULHLDT3_Log_HLK2_2": "NA",
        //15
        "ULHLDT3_Log_DTS1_2": "NA",

        //new
        "ULHLDT3_Log_HLK1_1": "NA",
        "ULHLDT3_Log_HLS4_2": "NA",

        "shownScreenID": 0,
        "screens": [
            {
                "id": 0, "type": "radio", "isShow": true, "haveImg": false,
                "description": ""
            },
            {
                "id": 1, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 2, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 3, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 4, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 5, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 6, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 7, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 8, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 9, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 10, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 11, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 12, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 13, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 14, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 15, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 16, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 17, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 18, "type": "end", "isShow": false, "haveImg": false,
                "description": ""
            },

        ],
        "chatShow": true,
        "checkBox1Selected": [],
        "height": '98%',
        "width": '70%',
        "left": 100,
        "top": 0
    },
    "taskCleaningDay": {
        "isShow": false,
        "results": {
            //Who is a volunteer
            "ULSE3_Log_SEK4_1": "NA",
            "ULSE3_Log_SEK4_2": "NA",
            "ULSE3_Log_SEK4_3": "NA",
            "ULSE3_Score_SEK4_1": "NA",

            //Card about volunteering
            "ULSE3_Log_SEK4_4": "NA",
            "ULSE3_Score_SEK4_2": "NA",

            //Rights and Obligations part 1
            "ULSE3_Log_SEK3": "NA",
            "ULSE3_Score_SEK3": "NA",

            //Rights and Obligations part 2
            "ULSE3_Log_SEK3_1": "NA",
            "ULSE3_Log_SEK3_2": "NA",
            "ULSE3_Score_SEK3_1": "NA",

            //Social institutions
            "ULSE3_Log1_SEK2_1": "NA",
            "ULSE3_Log2_SEK2_1": "NA",
            "ULSE3_Log3_SEK2_1": "NA",
            "ULSE3_Log4_SEK2_1": "NA",
            "ULSE3_Score1_SEK2_1": "NA",

            //Who planted the tree
            "ULSE3_Log_SEK2_2": "NA",
            "ULSE3_Score_SEK2_2": "NA",

            //Urban problems
            "ULSE3_Log1_SEK1_1": "NA",
            "ULSE3_Log2_SEK1_1": "NA",
            "ULSE3_Log3_SEK1_1": "NA",
            "ULSE3_Score1_SEK1_1": "NA",
            "ULSE3_Score2_SEK1_1": "NA",
            "ULSE3_Score3_SEK1_1": "NA",

            //Electronic Services 1_1
            "ULSE3_Log1_SEK5_1": "NA",
            "ULSE3_Score1_SEK5_1": "NA",

            //Electronic Services 1_2
            "ULSE3_Log1_SEK5_2": "NA",
            "ULSE3_Score2_SEK5_1": "NA",

            //Electronic Services 2
            "ULSE3_Log_SEK6_1": "NA",
            "ULSE3_Score_SEK6_1": "NA",

            //Cristmas Tree
            "ULSE3_Log_SES1": "NA",
            "ULSE3_Score_SES1": "NA",

            //Sorting Garbage
            "ULSE3_Log_SES2_1": "NA",
            "ULSE3_Log_SES2_2": "NA",
            "ULSE3_Log_SES2_3": "NA",
            "ULSE3_Log_SES2_4": "NA",
            "ULSE3_Log_SES2_5": "NA",
            "ULSE3_Log_SES3": "NA",
            "ULSE3_Score_SES2": "NA",
            "ULSE3_Score_SES3": "NA",

            //OverternedTrashBin
            "ULSE3_Log_SES4": "NA",
            "ULSE3_Score_SES4": "NA",

            //Woman with stroller
            "ULSE3_Log_SES5": "NA",
            "ULSE3_Score_SES5": "NA",

            //Taske off the backpack
            "ULSE3_Log_SEK3_3": "NA",
            "ULSE3_Score_SEK3_3": "NA",

            //Annn feels bad
            "ULSE3_Log_SES5_1": "NA",
            "ULSE3_Score_SES5_1": "NA",

            //WhyNeedCleaningDays
            "ULSE3_Log_SES1_1": "NA",
            "ULSE3_Score_SES1_1": "NA",

        },
        "shownScreenID": 0,
        "screens": [
            {"id": 0, "isShow": true, "imgURL": "TaskCleaningDayBackground", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysPasha1", "haveTask": false,
                "description": ''},
            {"id": 2, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysRuslan1", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysRuslan2", "haveTask": true,
                "taskName": "WhyNeedCleaningDays",
                "description": ''},
            {"id": 4, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysPasha2", "haveTask": false,
                "description": ''},
            {"id": 5, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysRuslan3", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "TaskCleaningDayTaskWhyNeedCleaningDaysRuslan3", "haveTask": false,
                "description": ''},

            {"id": 7, "isShow": false, "imgURL": "TaskCleaningDayTaskWillow", "haveTask": false,
                "description": ''},
            {"id": 8, "isShow": false, "imgURL": "TaskCleaningDayTaskWillowMariam1", "haveTask": false,
                "description": ''},
            {"id": 9, "isShow": false, "imgURL": "TaskCleaningDayTaskWillowMariam2", "haveTask": true,
                "taskName": "TaskWillow",
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "TaskCleaningDayTaskWillowRuslan", "haveTask": false,
                "description": ''},

            {"id": 11, "isShow": false, "imgURL": "TaskCleaningDayTaskSquirrelPasha", "haveTask": false,
                "description": ''},
            {"id": 12, "isShow": false, "imgURL": "TaskCleaningDayTaskSquirrelRuslan1", "haveTask": false,
                "description": ''},
            {"id": 13, "isShow": false, "imgURL": "TaskCleaningDayTaskSquirrelRuslan2", "haveTask": true,
                "taskName": "TaskSquirrel",
                "description": ''},
            {"id": 14, "isShow": false, "imgURL": "TaskCleaningDayTaskSquirrelRuslan3", "haveTask": false,
                "description": ''},
            {"id": 15, "isShow": false, "imgURL": "TaskCleaningDayTaskSquirrelRuslan3", "haveTask": false,
                "description": ''},

            {"id": 16, "isShow": false, "imgURL": "TaskCleaningDayTaskCulturalVolunteersPasha", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "TaskCleaningDayTaskCulturalVolunteersRuslan1", "haveTask": false,
                "description": ''},
            {"id": 18, "isShow": false, "imgURL": "TaskCleaningDayTaskCulturalVolunteersRuslan2", "haveTask": true,
                "taskName": "TaskCulturalVolunteers",
                "description": ''},

            {"id": 19, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbageMariam", "haveTask": false,
                "description": ''},
            {"id": 20, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbageRuslan", "haveTask": false,
                "description": ''},
            {"id": 21, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbage", "haveTask": true,
                "taskName": "TaskSortingGarbage",
                "description": ''},

            {"id": 22, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbageBatteryPasha", "haveTask": false,
                "description": ''},
            {"id": 23, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbageBatteryRuslan", "haveTask": false,
                "description": ''},
            {"id": 24, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbageBatteryMariam", "haveTask": false,
                "description": ''},
            {"id": 25, "isShow": false, "imgURL": "TaskCleaningDayTaskSortingGarbage", "haveTask": true,
                "taskName": "TaskSortingGarbageBattery",
                "description": ''},

            {"id": 26, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_1Pasha", "haveTask": false,
                "description": ''},
            {"id": 27, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_1Mariam", "haveTask": false,
                "description": ''},
            {"id": 28, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_1Ruslan", "haveTask": false,
                "description": ''},
            {"id": 29, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_1", "haveTask": true,
                "taskName": "ElectronicServicesPart2_1",
                "description": ''},

            {"id": 30, "isShow": false, "imgURL": "TaskCleaningDayTaskBusStopRuslan", "haveTask": false,
                "description": ''},
            {"id": 31, "isShow": false, "imgURL": "TaskCleaningDayTaskBusStop", "haveTask": false,
                "description": ''},
            {"id": 32, "isShow": false, "imgURL": "TaskCleaningDayTaskBusStopPasha", "haveTask": false,
                "description": ''},
            {"id": 33, "isShow": false, "imgURL": "TaskCleaningDayTaskBusStopMariam1", "haveTask": false,
                "description": ''},
            {"id": 34, "isShow": false, "imgURL": "TaskCleaningDayTaskBusStopMariam2", "haveTask": true,
                "taskName": "TaskBusStop",
                "description": ''},

            {"id": 35, "isShow": false, "imgURL": "TaskCleaningDayTaskBehaviorOnTheBus", "haveTask": false,
                "description": ''},
            {"id": 36, "isShow": false, "imgURL": "TaskCleaningDayTaskBehaviorOnTheBusRuslan", "haveTask": false,
                "description": 'Карта'},
            {"id": 37, "isShow": false, "imgURL": "TaskCleaningDayTaskBehaviorOnTheBusPasha1", "haveTask": false,
                "description": ''},
            {"id": 38, "isShow": false, "imgURL": "TaskCleaningDayTaskBehaviorOnTheBusPasha2", "haveTask": true,
                "taskName": "TaskBehaviorOnTheBus",
                "description": ''},

            {"id": 39, "isShow": false, "imgURL": "TaskCleaningDayTaskMariamFeelsBadMariam1", "haveTask": false,
                "description": ''},
            {"id": 40, "isShow": false, "imgURL": "TaskCleaningDayTaskMariamFeelsBadMariam2", "haveTask": true,
                "taskName": "TaskMariamFeelsBad",
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "TaskCleaningDayTaskMariamFeelsBad", "haveTask": false,
                "description": ''},

            {"id": 42, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart1Ruslan", "haveTask": false,
                "description": ''},
            {"id": 43, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart1Elena1", "haveTask": false,
                "description": ''},
            {"id": 44, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart1Pasha", "haveTask": false,
                "description": ''},
            {"id": 45, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart1Elena2", "haveTask": false,
                "description": ''},
            {"id": 46, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart1", "haveTask": true,
                "taskName": "TaskRightsAndObligationsPart1",
                "description": ''},

            {"id": 47, "isShow": false, "imgURL": "TaskCleaningDayTaskSocialInstitutionsMariam", "haveTask": false,
                "description": ''},
            {"id": 48, "isShow": false, "imgURL": "TaskCleaningDayTaskSocialInstitutionsElena", "haveTask": false,
                "description": ''},
            {"id": 49, "isShow": false, "imgURL": "TaskCleaningDayTaskSocialInstitutions", "haveTask": true,
                "taskName": "SocialInstitutions",
                "description": ''},

            {"id": 50, "isShow": false, "imgURL": "TaskCleaningDayTaskUrbanProblemsMariam", "haveTask": false,
                "description": ''},
            {"id": 51, "isShow": false, "imgURL": "TaskCleaningDayTaskUrbanProblemsElena", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "TaskCleaningDayTaskUrbanProblems", "haveTask": true,
                "taskName": "UrbanProblems",
                "description": ''},

            {"id": 53, "isShow": false, "imgURL": "TaskCleaningDayTaskWhoIsAVolunteerPasha", "haveTask": false,
                "description": ''},
            {"id": 54, "isShow": false, "imgURL": "TaskCleaningDayTaskWhoIsAVolunteerElena", "haveTask": false,
                "description": ''},
            {"id": 55, "isShow": false, "imgURL": "TaskCleaningDayTaskWhoIsAVolunteer", "haveTask": true,
                "taskName": "TaskWhoIsAVolunteer",
                "description": ''},

            {"id": 56, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart2Mariam", "haveTask": false,
                "description": ''},
            {"id": 57, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart2Elena1",  "haveTask": false,
                "description": 'Анне плохо'},
            {"id": 58, "isShow": false, "imgURL": "TaskCleaningDayTaskRightsAndObligationsPart2Elena2", "haveTask": true,
                "taskName": "TaskRightsAndObligationsPart2",
                "description": ''},

            {"id": 59, "isShow": false, "imgURL": "TaskCleaningDayTaskCardAboutVolunteeringElena2", "haveTask": false,
                "description": ''},
            {"id": 60, "isShow": false, "imgURL": "TaskCleaningDayTaskCardAboutVolunteeringElena1", "haveTask": false,
                "description": ''},
            {"id": 61, "isShow": false, "imgURL": "TaskCleaningDayTaskCardAboutVolunteering", "haveTask": true,
                "taskName": "TaskCardAboutVolunteering",
                "description": ''},

            {"id": 62, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart1Pasha", "haveTask": false,
                "description": ''},
            {"id": 63, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart1Elena", "haveTask": false,
                "description": ''},
            {"id": 64, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart1", "haveTask": true,
                "taskName": "TaskElectronicServicesPart1",
                "description": ''},

            {"id": 65, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_2Pasha", "haveTask": false,
                "description": ''},
            {"id": 66, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_2Mariam", "haveTask": false,
                "description": ''},
            {"id": 67, "isShow": false, "imgURL": "TaskCleaningDayTaskElectronicServicesPart2_2", "haveTask": true,
                "taskName": "TaskElectronicServicesPart2_2",
                "description": ''},

            {"id": 68, "isShow": false, "imgURL": "TaskCleaningDayEndMariam", "haveTask": false,
                "description": ''},
            {"id": 69, "isShow": false, "imgURL": "TaskCleaningDayEndElena", "haveTask": false,
                "description": ''},
            {"id": 70, "isShow": false, "imgURL": "TaskCleaningDayEndPasha", "haveTask": false,
                "description": ''}
        ],

        "ULSE3_Log_SEK4_1": "На какой основе?",
        "ULSE3_Log_SEK4_2": "Когда?",
        "ULSE3_Log_SEK4_3": "Как?",

        "listOfAnswersRightsAndObligationsPart1": [
            {
                "value": "Получать бесплатную медицинскую помощь",
                "id": 1,
            },
            {
                "value": "Защищать Отечество",
                "id": 2,
            },
            {
                "value": "Беречь природу",
                "id": 3,
            },
            {
                "value": "Посещать театры, музеи, выставки",
                "id": 4,
            },
            {
                "value": "Уважительно относиться к историческому и культурному наследию",
                "id": 5,
            },
            {
                "value": "Выбирать профессию по своему желанию",
                "id": 6,
            }
        ],
        "listOfAnswersRightsAndObligationsPart1_list1": [],
        "listOfAnswersRightsAndObligationsPart1_list2": [],
        "listOfAnswersRightsAndObligationsPart1_list3": [],
        "listOfAnswersRightsAndObligationsPart1_list4": [],
        "listOfAnswersRightsAndObligationsPart1_list5": [],
        "listOfAnswersRightsAndObligationsPart1_list6": [],

        "listOfAnswersSocialInstitutions": [
            {
                "value": "рассматривает дела об охране природы",
                "id": 2,
            },
            {
                "value": "прививает детям бережное отношение к природе",
                "id": 4,
            },
            {
                "value": "отражает экологические проблемы в художественных образах",
                "id": 1,
            },
            {
                "value": "заботится о природе на добровольной основе",
                "id": 3,
            },
        ],
        "listOfAnswersSocialInstitutions_list1": [],
        "listOfAnswersSocialInstitutions_list2": [],
        "listOfAnswersSocialInstitutions_list3": [],
        "listOfAnswersSocialInstitutions_list4": [],
        "listOfAnswersUrbanProblems": [
            {
                "value": "Нарушается баланс флоры и фауны",
                "id": 1,
            },
            {
                "value": "Утрачивается историческое архитектурное наследие",
                "id": 2,
            },
            {
                "value": "Ухудшается качество воздуха в городе",
                "id": 3,
            },
            {
                "value": "Освобождается больше площади для застройки",
                "id": 4,
            },
            {
                "value": "Районы новой застройки привлекают больше туристов",
                "id": 5,
            },
            {
                "value": "Почва становятся более пригодной для посадки цветов",
                "id": 6,
            },
            {
                "value": "Появляются новые методы очистки почвы",
                "id": 7,
            },
            {
                "value": "Улучшается микроклимат города",
                "id": 8,
            },
            {
                "value": "Городской воздух насыщается кислородом",
                "id": 9,
            }
        ],
        "listOfAnswersUrbanProblems_list1": [],
        "listOfAnswersUrbanProblems_list2": [],
        "listOfAnswersUrbanProblems_list3": [],

        "listOfAnswersSortingGarbage": [
            {
                "src": "TaskCleaningDaySortingGarbageGlassBottle",
                "id": 2,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/1.8); left: calc(100%/6)",
                "toolTip": "Стеклянная бутылка из под лимонада",
                "isShown": true
            },
            {
                "src": "TaskCleaningDaySortingGarbageCanCan",
                "id": 1,
                "style": "width: calc(100%/10); position: absolute; bottom: calc(100%/6); left: calc(100%/25)",
                "toolTip": "Алюминиевая банка",
                "isShown": true
            },
            {
                "src": "TaskCleaningDaySortingGarbagePlasticBottle",
                "id": 3,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/5)",
                "toolTip": "Пластиковая канистра",
                "isShown": true
            },
            {
                "src": "TaskCleaningDaySortingGarbageAppleCore",
                "id": 5,
                "style": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)",
                "toolTip": "Кожура банана",
                "isShown": true
            },
            {
                "src": "TaskCleaningDaySortingGarbageNewspaper",
                "id": 4,
                "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "toolTip": "Смятая реклама",
                "isShown": true
            },
            {
                "src": "TaskCleaningDaySortingGarbageBattery",
                "id": 6,
                "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "toolTip": "Аккумулятор от старого ноутбука",
                "isShown": false
            }
        ],
        "listOfAnswersSortingGarbage_list1": [],
        "listOfAnswersSortingGarbage_list2": [],
        "listOfAnswersSortingGarbage_list3": [],
        "listOfAnswersSortingGarbage_list4": [],
        "listOfAnswersSortingGarbage_list5": [],
        "listOfAnswersSortingGarbage_list6": [],

        "listOfAnswersBehaviorOnTheBus": [
            {
                "name": "Нужно негромко слушать музыку или смотреть видео без наушников.",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Нужно снимать рюкзаки и аккуратно ставить их в проходе.",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Нужно проходить в салон спокойно, не толкая других людей.",
                "id": 3,
                "choose": false,
            }, {
                "name": "Нужно разговаривать спокойно и негромко.",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersBehaviorOnTheBus": [],
    },
    "forms": {
        "results": {
            //1
            "ULSE_SEA1_1": "NA",
            "ULSE_SEA1_2": "NA",
            "ULSE_SEA1_3": "NA",
            "ULSE_SEA1_4": "NA",
            //2
            "ULSE_SEA3_1": "NA",
            "ULSE_SEA3_2": "NA",
            "ULSE_SEA3_3": "NA",
            "ULSE_SEA3_4": "NA",
            //3
            "ULSE_SEA4_1": "NA",
            "ULSE_SEA4_2": "NA",
            "ULSE_SEA4_3": "NA",
            "ULSE_SEA4_4": "NA",
            //4
            "ULSE_SEA2_1": "NA",
            "ULSE_SEA2_2": "NA",
            "ULSE_SEA2_3": "NA",
            "ULSE_SEA2_4": "NA",
            //5
            "ULSE_SEA5_0": "NA",
            "ULSE_SEA5_1": "NA",
            "ULSE_SEA5_2": "NA",
            "ULSE_SEA5_3": "NA",
            "ULSE_SEA5_4": "NA",
            //6
            "ULSC_SCA1_1": "NA",
            "ULSC_SCA1_2": "NA",
            "ULSC_SCA1_3": "NA",
            "ULSC_SCA1_4": "NA",
            //7
            "ULSC_SCA2_1": "NA",
            "ULSC_SCA2_2": "NA",
            "ULSC_SCA2_3": "NA",
            "ULSC_SCA2_4": "NA",
            //8
            "ULSC_SCA3_1": "NA",
            "ULSC_SCA3_2": "NA",
            "ULSC_SCA3_3": "NA",
            "ULSC_SCA3_4": "NA",
            //9
            "ULSC_SCA4_1": "NA",
            "ULSC_SCA4_2": "NA",
            "ULSC_SCA4_3": "NA",
            "ULSC_SCA4_4": "NA",
            //10
            "ULLL_LLA6_1": "NA",
            "ULLL_LLA6_2": "NA",
            "ULLL_LLA6_3": "NA",
            "ULLL_LLA6_4": "NA",
            //11
            "ULLL_LLA7_1": "NA",
            "ULLL_LLA7_2": "NA",
            "ULLL_LLA7_3": "NA",
            "ULLL_LLA7_4": "NA",
            "ULLL_LLA7_5": "NA",
            "ULLL_LLA7_6": "NA",
            "ULLL_LLA7_7": "NA",
            "ULLL_LLA7_8": "NA",
            "ULLL_LLA7_9": "NA",
            //12
            "ULLL_LLA8_1": "NA",
            "ULLL_LLA8_2": "NA",
            "ULLL_LLA8_3": "NA",
            "ULLL_LLA8_4": "NA",
            "ULLL_LLA8_5": "NA",
            "ULLL_LLA8_6": "NA",
            "ULLL_LLA8_7": "NA",
            //13
            "ULHL_HLA1_1": "NA",
            "ULHL_HLA1_2": "NA",
            "ULHL_HLA1_3": "NA",
            "ULHL_HLA1_4": "NA",
            "ULHL_HLA1_5": "NA",
            "ULHL_HLA1_6": "NA",
            "ULHL_HLA1_7": "NA",
            "ULHL_HLA1_8": "NA",
            //14
            "ULDT_DTA1_1": "NA",
            "ULDT_DTA1_2": "NA",
            "ULDT_DTA1_3": "NA",
            "ULDT_DTA1_4": "NA",
            "ULDT_DTA1_5": "NA",
            "ULDT_DTA1_6": "NA"
        },
        "isShow": false,
        "modelShow": true,
        "shownFormID": 1,
        "height": '80%',
        "width": '70%',
        "left": 100,
        "top": 20
    }
}

export default {
    date
}