<template>
    <div>
        Задание 1.
        В разработке. нажмите кнопку "Завершить" для перехода к следующему заданию.
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "ModelTaskLibraryNight",
        components: {
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskLibraryNight']),
          screenID(){
            return this.mainJSON.taskLibraryNight.shownScreenID
          },
          screen(){
            return this.mainJSON.taskLibraryNight.screens[this.screenID]
          }
        },
    }
</script>

<style>
  .backgroundTaskLibraryNight {
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
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
    font-weight: bold;
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