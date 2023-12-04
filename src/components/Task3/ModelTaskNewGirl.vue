<template>
    <div>
        Задание 3.
        В разработке. нажмите кнопку "Завершить" для перехода к следующему заданию.
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ModelTaskNewGirl",
        components: {
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskNewGirl']),
            screenID(){
                return this.mainJSON.taskNewGirl.shownScreenID
            },
            screen(){
                return this.mainJSON.taskNewGirl.screens[this.screenID]
            }
        },
    }
</script>

<style>
.backgroundTaskNewGirl {
    height: calc(100vh - 140px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    background-position: center !important;
}

.backgroundTaskBodyNewGirl {
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

    .electronic_services_part1_img_block {
        display: flex;
        width: 45%;
        height: 45%;
        align-items: center;
        justify-content: center;
    }
    .electronic_services_part1_img_block img{
        height: 100%;
    }
</style>