import {ref} from "vue";

export function useSettingInputs() {
    const settingInputs = ref(
        [
            {id: 0, type: 'base', title: 'Function', placeholder: 'sin(x); cos(x)'},
            {id: 1, type: 'double', title: 'Range X', placeholder1: '-1', placeholder2: '3'},
            {id: 2, type: 'double', title: 'Range Y', placeholder1: '-1', placeholder2: '3'},
            {id: 3, type: 'base', title: 'Label', placeholder: 'Example'},
            {id: 4, type: 'base', title: 'X label', placeholder: 'X label'},
            {id: 5, type: 'base', title: 'Y label', placeholder: 'Y label'},
            {
                id: 6, type: 'options', title: 'Greed', options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false}
                ]
            },
            {id: 7, type: 'base', title: 'Wight', placeholder: '1280'},
            {id: 8, type: 'base', title: 'Height', placeholder: '940'},
            {id: 9, type: 'area', title: 'Scripts', placeholder: 'Write commands here...'},
            {id: 10, type: 'file', title: 'Data File', placeholder: 'Write commands here...', data: ''},

            {
                id: 11, type: 'options', title: 'Zeroaxis', options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false}
                ]
            },
            {id: 12, type: 'base', title: 'Color', placeholder: 'green'},
            {id: 13, type: 'base', title: 'Wigth', placeholder: '1-6'},
            {id: 14, type: 'base', title: 'Points Type', placeholder: '1-6'},
            {
                id: 15, type: 'options', title: 'Plot Type', options: [
                    {title: 'Boxes', value: 'boxes'},
                    {title: 'Steps', value: 'steps'},
                    {title: 'Lines', value: 'lines'},
                    {title: 'Linespoints', value: 'linespoints'},
                    {title: 'Points', value: 'points'},
                    {title: 'Steps', value: 'steps'},
                ]
            },

            {id: 16, type: 'base', title: 'X tics', placeholder: '2'},
            {id: 17, type: 'base', title: 'Y tics', placeholder: '2'},
            {
                id: 18, type: 'options', title: 'Border', options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false}
                ]
            },
            {id: 19, type: 'base', title: 'Z label', placeholder: 'Z label', only_3d: true},
            {id: 20, type: 'base', title: 'Z tics', placeholder: '2', only_3d: true},
            {id: 21, type: 'double', title: 'Range Z', placeholder1: '-1', placeholder2: '3', only_3d: true},
            {id: 22, type: 'base', title: 'Plot3D', placeholder: 'cos(x+y)', only_3d: true},
            {
                id: 23, type: 'options', title: 'Graphic Type', is_3d: true, options: [
                    {title: '2D', value: false},
                    {title: '3D', value: true}
                ]
            },

            {
                id: 200, type: 'options', title: 'Points Type', options: [
                    {title: 'Boxes', value: 'boxes'},
                    {title: 'Steps', value: 'steps'},
                    {title: 'Lines', value: 'lines'},
                    {title: 'Linespoints', value: 'linespoints'},
                    {title: 'Points', value: 'points'},
                    {title: 'Steps', value: 'steps'},
                ]
            },
        ])

        const templateInputs = ref(
            [
                {id: 0, type: 'base', title: 'Template id', placeholder: '12345678'},
            ])

            const templateInputs1 = ref(
                [
                    {id: 0, type: 'base', title: 'Номер шаблона', placeholder: '12345678'},
                ])

                const settingInputs1 = ref(
                    [
                        {id: 0, type: 'base', title: 'Функция', placeholder: 'sin(x); cos(x)'},
                        {id: 1, type: 'double', title: 'Диапазон X', placeholder1: '-1', placeholder2: '3'},
                        {id: 2, type: 'double', title: 'Диапазон Y', placeholder1: '-1', placeholder2: '3'},
                        {id: 3, type: 'base', title: 'Название', placeholder: 'Пример'},
                        {id: 4, type: 'base', title: 'Название X', placeholder: 'X'},
                        {id: 5, type: 'base', title: 'Название Y', placeholder: 'Y'},
                        {
                            id: 6, type: 'options', title: 'Сетка', options: [
                                {title: 'Да', value: true},
                                {title: 'Нет', value: false}
                            ]
                        },
                        {id: 7, type: 'base', title: 'Ширина', placeholder: '1280'},
                        {id: 8, type: 'base', title: 'Высота', placeholder: '940'},
                        {id: 9, type: 'area', title: 'Скрипт', placeholder: 'Пишите команды здесь...'},
                        {id: 10, type: 'file', title: 'Файл данных', placeholder: 'Вставьте файл сюда...', data: ''},
            
                        {
                            id: 11, type: 'options', title: 'Ось Z', options: [
                                {title: 'Да', value: true},
                                {title: 'Нет', value: false}
                            ]
                        },
                        {id: 12, type: 'base', title: 'Цвет', placeholder: 'green'},
                        {id: 13, type: 'base', title: 'Размер', placeholder: '1-6'},
                        {id: 14, type: 'base', title: 'Тип точек', placeholder: '1-6'},
                        {
                            id: 15, type: 'options', title: 'Тип отрисовки', options: [
                                {title: 'Boxes', value: 'boxes'},
                                {title: 'Steps', value: 'steps'},
                                {title: 'Lines', value: 'lines'},
                                {title: 'Linespoints', value: 'linespoints'},
                                {title: 'Points', value: 'points'},
                                {title: 'Steps', value: 'steps'},
                            ]
                        },
            
                        {id: 16, type: 'base', title: 'Шаг деления X', placeholder: '2'},
                        {id: 17, type: 'base', title: 'Шаг деления Y', placeholder: '2'},
                        {
                            id: 18, type: 'options', title: 'Границы', options: [
                                {title: 'Да', value: true},
                                {title: 'Нет', value: false}
                            ]
                        },
                        {id: 19, type: 'base', title: 'Название Z', placeholder: 'Z', only_3d: true},
                        {id: 20, type: 'base', title: 'Шаг деления  Z', placeholder: '2', only_3d: true},
                        {id: 21, type: 'double', title: 'Диапазон Z', placeholder1: '-1', placeholder2: '3', only_3d: true},
                        {id: 22, type: 'base', title: 'Функция 3D', placeholder: 'cos(x+y)', only_3d: true},
                        {
                            id: 23, type: 'options', title: 'Тип графика', is_3d: true, options: [
                                {title: '2D', value: false},
                                {title: '3D', value: true}
                            ]
                        },
            
                        {
                            id: 200, type: 'options', title: 'Тип точек', options: [
                                {title: 'Boxes', value: 'boxes'},
                                {title: 'Steps', value: 'steps'},
                                {title: 'Lines', value: 'lines'},
                                {title: 'Linespoints', value: 'linespoints'},
                                {title: 'Points', value: 'points'},
                                {title: 'Steps', value: 'steps'},
                            ]
                        },
                    ])
    

    return {
        settingInputs, templateInputs, settingInputs1, templateInputs1
    }
}