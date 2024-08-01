//TODO не используется
import axios, {Axios} from "axios";
import {API_URL_MAIN, PLOT_EXAMPLE_API_URL, TEMPLATES_API_URL} from "@/common/API";

export const settingsModule = {
    state: () => ({
        settings: {
            function: '',
            Range1: '',
            Range2: '',
            Point: '',
            Code: '',
        },
        plot_path: PLOT_EXAMPLE_API_URL,
        file_data: '',
        is_3d: 'false',
    }),
    getters: {
        SETTINGS: state => {
            return state.settings
        },
        PLOT_PATH: state => {
            return state.plot_path
        },
        FILE_DATA: state => {
            return state.file_data
        },
        IS_3D: state => {
            return state.is_3d
        }
        //computed свойства
        //TODO доделать (мб фильтер)
    },
    mutations: {
        setSettings(state, settings){
            state.settings = settings
        },

        setPath(state, path){
            state.plot_path = path
        },
        setFileData(state, file_data){
            state.file_data = file_data
        },
        setIs3d(state, is_3d){
            state.is_3d = is_3d
        }
    },
    actions:{
        //TODO доделать получение из backend
        getSettings: async (context, settings) => {
            //let {data} = await Axios.get('http://yourwebsite.com/api/setting');
            //context.commit('setSettings', settings);
            const settings1 = {
                function: 'test',
                Range1: '',
                Range2: '',
                Point: '',
                Code: '',
            };
            context.commit('setSettings', settings1);
        },
        saveSettings: async (context, settings) => {
            //let path = await axios.post('http://localhost:8080/api/templates/plot',
            let path = await axios.post(API_URL_MAIN + TEMPLATES_API_URL + '/plot',
                {
                    "x_range_l": context.state.settings.Range1,
                    "x_range_r": context.state.settings.Range2,
                    //"grid": false,
                    "func": [context.state.settings.function],
                    "user_id": 13
                });
            alert(context.state.plot_path)
            //context.commit('setPath', path);
        },
    },
    //namespaced: true
}