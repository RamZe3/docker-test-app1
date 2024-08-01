import {ref, onMounted, computed} from "vue";
import {useCookies} from "vue3-cookies";
import axios from "axios";
import {useStore} from "vuex";
import {API_URL_MAIN, TEMPLATES_API_URL} from "@/common/API";

export function useTemplates(){
    const templates = ref([])
    const template_id = ref("")
    const store = useStore()

    const loadTemplates = async (userid) => {
        // if (userid === null){
        //     return
        // }
        store.commit("setLoading", true)
        //const response = await axios.get('http://localhost:8080/api/templates/?id=' + userid);
        const response = await axios.get(API_URL_MAIN + TEMPLATES_API_URL + '/?id=' + userid);
        templates.value = response.data

        for (let i = 0; i < templates.value.length; i++) {
            templates.value[i].creation_date = new Date(templates.value[i].creation_date).toLocaleDateString()
          }
        
        store.commit("setLoading", false)
    }

    const getTemplateById = async (templateid) => {
        // if (userid === null){
        //     return
        // }
        store.commit("setLoading", true)
        //const response = await axios.get('http://localhost:8080/api/templates/?id=' + userid);
        const response = await axios.get(API_URL_MAIN + TEMPLATES_API_URL + '/?id=' + templateid);
        templates.value = response.data
        store.commit("setLoading", false)
    }

    const createTemplateByInviteStr = async (invite_str, user_id) => {
        // if (userid === null){
        //     return
        // }
        console.log("поиск производим " + invite_str + user_id)
        store.commit("setLoading", true)
        //const response = await axios.get('http://localhost:8080/api/templates/?id=' + userid);
        //TODO раскодировать
        const response = await axios.get(API_URL_MAIN + TEMPLATES_API_URL + "/save" + '/?invite_str=' + invite_str + '&user_id=' + user_id);
        //templates.value = response.data
        store.commit("setLoading", false)
    }

    //const getTemplates = () => {
    //    for (let i = 0; i < templates.value.length; i++) {
    //        templates.value[i].number = i
    //    }
    //    return templates.value
    //}

    const saveSettings = async () => {
        //settings.value = {
        //    function: '123',
        //    Range1: '',
        //    Range2: '',
        //    Point: '',
        //    Code: '',
        //}
    }

    //onMounted(loadTemplates)
    //computed(getTemplates)

    return {
        templates, loadTemplates, template_id, getTemplateById, createTemplateByInviteStr
    }
}