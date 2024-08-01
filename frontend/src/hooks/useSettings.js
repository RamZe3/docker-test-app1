import {onMounted, onBeforeMount, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import {API_URL_MAIN, TEMPLATES_API_URL} from "@/common/API";

export function useSettings() {
    //TODO сохранение ссылки на картинку
    const store = useStore()
    const settings = ref(
        {
            function: '',
            Range1: null,
            Range2: null,
            Range3: null,
            Range4: null,
            Range5: null,
            Range6: null,
            Width: null,
            Height: null,
            Title: '',
            X_label: '',
            Y_label: '',
            Z_label: '',
            Greed: 'false',
            Data: '',
            linecolor: '',
            linewidth: '',
            linetype: '',
            zeroaxis: 'false',
            xtics: null,
            ytics: null,
            ztics: null,
            border: 'true',
            plottype: '',
            Code: '',
            function3d: '',
        })

        //func3d      VARCHAR(255),
        //z_range_l INTEGER,
        //z_range_r INTEGER,
        //z_label   VARCHAR(255),
        //zeroaxis      boolean,
        //color   VARCHAR(255),
        //wigth   VARCHAR(255),
        //points_type VARCHAR(255),
        //plot_type VARCHAR(255),
        //border boolean,
        //z_tics    INTEGER,
        //file_data VARCHAR(255),

    const loadSettings = async (settingsValue) => {
        let id = settingsValue.id
        console.log(settingsValue.id)
        console.log("load func = " + settingsValue.func)
        if(settingsValue.id === undefined){
            return
        }
            settings.value.function = settingsValue.func
            settings.value.Range1 = settingsValue.x_range_l
            settings.value.Range2= settingsValue.x_range_r
            settings.value.Range3= settingsValue.y_range_l
            settings.value.Range4= settingsValue.y_range_r
            settings.value.Width= settingsValue.width
            settings.value.Height= settingsValue.height
            settings.value.Title= settingsValue.title
            settings.value.X_label= settingsValue.x_label
            settings.value.Y_label= settingsValue.y_label
            settings.value.Greed= settingsValue.grid
            settings.value.Code= settingsValue.p_script

            settings.value.function3d= settingsValue.func3d
            settings.value.Range5= settingsValue.z_range_l
            settings.value.Range6= settingsValue.z_range_r
            settings.value.Z_label= settingsValue.z_label
            settings.value.zeroaxis= settingsValue.zeroaxis
            settings.value.linecolor= settingsValue.color
            settings.value.linewidth= settingsValue.wigth
            settings.value.linetype= settingsValue.points_type
            settings.value.plottype= settingsValue.plot_type
            settings.value.border= settingsValue.border
            settings.value.ztics= settingsValue.z_tics
            settings.value.xtics= settingsValue.x_tics
            settings.value.ytics= settingsValue.y_tics
            settings.value.Data= settingsValue.file_data

        let path = await axios.get(API_URL_MAIN + TEMPLATES_API_URL + "/plot/" + id)
        //let path = await axios.get("http://localhost:8080/api/templates/plot/" + id)
        setTimeout(store.commit, 1000, 'setPath', path.data);
    }

    const plotSettings = async () => {
        var re = /\s*;\s*/;
        //var func = settings.value.function.split(re);
        console.log("plot func = " + settings.value.function)
        console.log(store.getters.FILE_DATA)
        //let path = await axios.post('http://localhost:8080/api/templates/plot',
        let path = await axios.post(API_URL_MAIN + TEMPLATES_API_URL + '/plot',
            {
                "x_range_l": settings.value.Range1,
                "x_range_r": settings.value.Range2,
                "y_range_l": settings.value.Range3,
                "y_range_r": settings.value.Range4,
                "width": settings.value.Width,
                "height": settings.value.Height,
                "title": settings.value.Title,
                "x_label": settings.value.X_label,
                "y_label": settings.value.Y_label,
                //TODO мб add tics
                // "x_tics": 2,
                // "y_tics": 2,
                "grid": settings.value.Greed,
                "p_script": settings.value.Code,
                "func": settings.value.function,
                "user_id": store.getters.USERID,

                "func3d": settings.value.function3d,
                "z_range_l": settings.value.Range5,
                "z_range_r": settings.value.Range6,
                "z_label": settings.value.Z_label,
                "zeroaxis": settings.value.zeroaxis,
                "color": settings.value.linecolor,
                "wigth": settings.value.linewidth,
                "points_type": settings.value.linetype,
                "plot_type": settings.value.plottype,
                "border": settings.value.border,
                "z_tics": settings.value.ztics,
                "x_tics": settings.value.xtics,
                "y_tics": settings.value.ytics,
                "file_data": store.getters.FILE_DATA,
            }
            );
        setTimeout(store.commit, 1000, 'setPath', path.data);

        console.log(settings.value)
    }

    const saveSettings1 = async () => {
        var re = /\s*;\s*/;
        //var func = settings.value.function.split(re);

        //let request = await axios.post('http://localhost:8080/api/templates',
        let request = await axios.post(API_URL_MAIN + TEMPLATES_API_URL,
            {
                "x_range_l": settings.value.Range1,
                "x_range_r": settings.value.Range2,
                "y_range_l": settings.value.Range3,
                "y_range_r": settings.value.Range4,
                "width": settings.value.Width,
                "height": settings.value.Height,
                "title": settings.value.Title,
                "x_label": settings.value.X_label,
                "y_label": settings.value.Y_label,
                "grid": settings.value.Greed,
                "p_script": settings.value.Code,
                "func": settings.value.function,
                "user_id": store.getters.USERID,

                "func3d": settings.value.function3d,
                "z_range_l": settings.value.Range5,
                "z_range_r": settings.value.Range6,
                "z_label": settings.value.Z_label,
                "zeroaxis": settings.value.zeroaxis,
                "color": settings.value.linecolor,
                "wigth": settings.value.linewidth,
                "points_type": settings.value.linetype,
                "plot_type": settings.value.plottype,
                "border": settings.value.border,
                "z_tics": settings.value.ztics,
                "x_tics": settings.value.xtics,
                "y_tics": settings.value.ytics,
                "file_data": store.getters.FILE_DATA,
            }
        );
    }

    const setFileData = (file_data) => {
        settings.value.Data = file_data
        console.log('получилосб 2х')
        console.log(settings.value.Data);
    }

    return {
        settings, loadSettings, saveSettings: plotSettings, saveSettings1, setFileData
    }
}