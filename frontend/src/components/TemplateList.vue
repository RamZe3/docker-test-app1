<template>
  <h2 v-if="this.$store.getters.LOCALIZATION == 'ru'">Gnupot Шаблоны</h2>
  <h2 v-else>Gnupot Templates</h2>
  <h1 v-if="!ISAUTH && this.$store.getters.LOCALIZATION == 'ru'">Вы не авторизовались!</h1>
  <h1 v-if="!ISAUTH && this.$store.getters.LOCALIZATION == 'en'" >You not login!</h1>
  <table class="table" v-else-if="templates.length > 0">
    <thead v-if="this.$store.getters.LOCALIZATION == 'ru'">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название</th>
      <th scope="col">Дата</th>
      <th scope="col">Код шаблона</th>
    </tr>
    </thead>
    <thead v-else>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Invition string</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(template, index) in templates">
      <th scope="row">{{index+1}}</th>
      <td><router-link to="/" @click="this.$store.commit('setSettings', template)">{{template.title !== '' ? template.title : "Noname Graphic"}}</router-link></td>
      <td>{{ template.creation_date }}</td>
      <td>{{ template.invite_str }}</td>

    </tr>
    </tbody>
  </table>
  <h1 v-else-if="!this.$store.getters.ISLOADING  && this.$store.getters.LOCALIZATION == 'en'">No Templates in database!</h1>
  <h1 v-else-if="!this.$store.getters.ISLOADING  && this.$store.getters.LOCALIZATION == 'ru'">Нет шаблонов в базе данных!</h1>

<form v-if="ISAUTH" type="submit">
  <div class="row">
<!--      <div class="input-group mb-3">-->
<!--        <label class="input-group-text" for="inputGroupFile01">File</label>-->
<!--        <input type="file" class="form-control" id="inputGroupFile01">-->
<!--      </div>-->

      <setting-item v-model:settingInput="templateInputs[0]"
                    v-model="template_id"
      ></setting-item>
      <div v-if="this.$store.getters.LOCALIZATION == 'en'" class="buttons" style="padding-top: 10px">
    <button @click="createTemplateByInviteStr(template_id, this.$store.getters.USERID); loadTemplates(this.$store.getters.USERID)" type="button" class="btn btn-secondary btn-lg btn-block">Add</button>
  </div>
  <div  v-else class="buttons" style="padding-top: 10px">
    <button @click="createTemplateByInviteStr(template_id, this.$store.getters.USERID); loadTemplates(this.$store.getters.USERID)" type="button" class="btn btn-secondary btn-lg btn-block">Добавить шаблон</button>
  </div>
    </div>
  </form>
</template>

<script>
import {useTemplates} from "@/hooks/useTemplates";
import {useSettings} from "@/hooks/useSettings";
import {useSettingInputs} from "@/hooks/useSettingInputs";
import SettingItem from "@/components/SettingItem";

export default {
  name: "template-list",
  components: {SettingItem},
  //TODO логика загрузки шаблона
  //mounted() {
  //  this.$store.commit("setSettings", {
  //    function: '12345',
  //    Range1: '',
  //    Range2: '',
  //    Point: '',
  //    Code: '',
  //  })
  //}
  computed: {
    ISAUTH () {
      return this.$store.getters.ISAUTH
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  setup(props){
    const {templates, loadTemplates, template_id, getTemplateById, createTemplateByInviteStr} = useTemplates()
    const {loadSettings} = useSettings()
    const {settingInputs, templateInputs} = useSettingInputs()
    return { templates, loadTemplates,
              loadSettings, template_id, settingInputs,
              getTemplateById, templateInputs, createTemplateByInviteStr}
  },
  mounted() {
    this.loadTemplates(this.$store.getters.USERID)
  },
  watch: {
    ISAUTH: function () {
      this.loadTemplates(this.$store.getters.USERID)
    }
  }
}
</script>
<style scoped>

</style>