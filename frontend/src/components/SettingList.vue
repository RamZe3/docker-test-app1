<template>
  <h2 v-if="this.$store.getters.LOCALIZATION == 'ru'">Настройки графика</h2>
  <h2 v-else>Plot Settings</h2>
  <base-loading></base-loading>
<!--  <div class="alert alert-danger" role="alert">-->
<!--    This is a danger alert—check it out!-->
<!--  </div>-->
<!--  <div class="alert alert-danger" role="alert">-->
<!--    This is a danger alert—check it out!-->
<!--  </div>-->
  <form type="submit">
    

    <div class="row">
    <setting-item v-model:settingInput="inputs[23]"
                  v-model="this.$store.getters.IS_3D"
    ></setting-item>
  </div>

  <div class="row">
    <setting-item v-if="this.$store.getters.IS_3D !== 'true'" v-model:settingInput="inputs[0]"
                  v-model="settings.function"
    ></setting-item>
    <setting-item v-if="this.$store.getters.IS_3D !== 'false'" v-model:settingInput="inputs[22]"
                  v-model="settings.function3d"
    ></setting-item>
  </div>

  <div class="row">
    <setting-item v-model:settingInput="inputs[1]"
                  v-model="settings.Range1"
                  v-model:modelValue2="settings.Range2"></setting-item>

    <setting-item v-model:settingInput="inputs[2]"
                  v-model="settings.Range3"
                  v-model:modelValue2="settings.Range4"></setting-item>
    <setting-item v-if="this.$store.getters.IS_3D !== 'false'" v-model:settingInput="inputs[21]"
                  v-model="settings.Range5"
                  v-model:modelValue2="settings.Range6"></setting-item>
<!--    <div class="col">-->
<!--      <div class="input-group mb-3">-->
<!--        <span class="input-group-text" id="basic-addon1">Function</span>-->
<!--        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"-->
<!--               aria-describedby="basic-addon1">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <div class="input-group mb-3">-->
<!--        <span class="input-group-text" id="basic-addon1">Function</span>-->
<!--        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"-->
<!--               aria-describedby="basic-addon1">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <div class="input-group mb-3">-->
<!--        <span class="input-group-text" id="basic-addon1">Function</span>-->
<!--        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"-->
<!--               aria-describedby="basic-addon1">-->
<!--      </div>-->
<!--    </div>-->
  </div>
    <div class="row">
      <setting-item v-model:settingInput="inputs[3]"
                    v-model="settings.Title"
      ></setting-item>
    </div>
    <div class="row">
      <setting-item v-model:settingInput="inputs[4]"
                    v-model="settings.X_label"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[5]"
                    v-model="settings.Y_label"
      ></setting-item>
      <setting-item v-if="this.$store.getters.IS_3D !== 'false'" v-model:settingInput="inputs[19]"
                    v-model="settings.Z_label"
      ></setting-item>
    </div>
<!--  <div class="row">-->
<!--    <setting-item v-model:settingInput="settingInputs[2]"-->
<!--                  v-model="settings.Point"-->
<!--    ></setting-item>-->
<!--  </div>-->
    <div class="row">
      <setting-item v-model:settingInput="inputs[6]"
                    v-model="settings.Greed"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[8]"
                    v-model="settings.Height"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[7]"
                    v-model="settings.Width"
      ></setting-item>
    </div>

  <div class="row">
      <setting-item v-model:settingInput="inputs[12]"
                    v-model="settings.linecolor"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[13]"
                    v-model="settings.linewidth"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[14]"
                    v-model="settings.linetype"
      ></setting-item>
    </div>

  <div class="row">
      <setting-item v-model:settingInput="inputs[11]"
                    v-model="settings.zeroaxis"
      ></setting-item>

      <setting-item v-model:settingInput="inputs[15]"
                    v-model="settings.plottype"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[18]"
                    v-model="settings.border"
      ></setting-item>
    </div>

  <div class="row">
      <setting-item v-model:settingInput="inputs[16]"
                    v-model="settings.xtics"
      ></setting-item>
      <setting-item v-model:settingInput="inputs[17]"
                    v-model="settings.ytics"
      ></setting-item>
      <setting-item v-if="this.$store.getters.IS_3D !== 'false'" v-model:settingInput="inputs[20]"
                    v-model="settings.ztics"
      ></setting-item>
    </div>

  <div class="row">
    <div class="col">
<!--      <div class="input-group mb-3">-->
<!--        <label class="input-group-text" for="inputGroupFile01">File</label>-->
<!--        <input type="file" class="form-control" id="inputGroupFile01">-->
<!--      </div>-->

      <setting-item v-model:settingInput="inputs[10]"
                    v-model="inputs[10].data"
      ></setting-item>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
<!--      <div class="input-group mb-3">-->
<!--        <label class="input-group-text" for="inputGroupFile01">File</label>-->
<!--        <input type="file" class="form-control" id="inputGroupFile01">-->
<!--      </div>-->

      <setting-item v-model:settingInput="inputs[9]"
                    v-model="settings.Code"
      ></setting-item>
    </div>
  </div>
<!--  <div class="row">-->
<!--    <setting-item v-model:settingInput="settingInputs[3]"-->
<!--                  v-model="settings.Code"-->
<!--    ></setting-item>-->
<!--  </div>-->
<!--  <div class="row">-->
<!--    <div class="col col-area">-->
<!--      <div class="input-group">-->
<!--        <span class="input-group-text">Scripts</span>-->
<!--        <textarea class="form-control" aria-label="With textarea"></textarea>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div v-if="this.$store.getters.LOCALIZATION == 'ru'" class="row buttons">
    <button @click="saveSettings" type="button" class="btn btn-secondary btn-lg btn-block">Отрисовать график</button>
  </div>
  <div v-else class="row buttons">
    <button @click="saveSettings" type="button" class="btn btn-secondary btn-lg btn-block">Plot Graphic</button>
  </div>

  <div v-if="this.$store.getters.LOCALIZATION == 'ru'" class="row buttons">
    <button @click="saveSettings1" type="button" class="btn btn-secondary btn-lg btn-block" :class="{disabled: !this.$store.getters.ISAUTH}" >Сахранить шаблон</button>
  </div>
  <div v-else class="row buttons">
    <button @click="saveSettings1" type="button" class="btn btn-secondary btn-lg btn-block" :class="{disabled: !this.$store.getters.ISAUTH}" >Save settings</button>
  </div>
  </form>

<!--  <form method="get" :action="this.$store.getters.PLOT_PATH">-->
<!--    <div class="row buttons">-->
<!--      <button type="submit" class="btn btn-secondary btn-lg btn-block">Save settings</button>-->
<!--    </div>-->
<!--  </form>-->
<!--  <h1>{{this.$store.getters.SETTINGS}}</h1>-->
</template>

<script>
import SettingItem from "@/components/SettingItem";
import {useSettings} from "@/hooks/useSettings";
import {useSettingInputs} from "@/hooks/useSettingInputs";
import {useUser} from "@/hooks/useUser";

export default {
  name: "setting-list",
  components: {SettingItem},
  setup(props) {
    const {settings, loadSettings, saveSettings, saveSettings1 } = useSettings()
    const {settingInputs, settingInputs1} = useSettingInputs()
    
    return {
      settings, saveSettings, saveSettings1, loadSettings,
      settingInputs, settingInputs1
      //user, login, signOut
    }
  },
  mounted() {
    this.loadSettings(this.$store.getters.SETTINGS)
  },
  computed: {
    inputs(){
      console.log(this.settingInputs)
      const loc = this.$store.getters.LOCALIZATION 
      if(loc == 'ru'){
        return this.settingInputs1
      }
      else{
        return this.settingInputs
      }
    }
  }
}
//console.log(this.$store.getters.SETTINGS)
</script>

<style scoped>

</style>