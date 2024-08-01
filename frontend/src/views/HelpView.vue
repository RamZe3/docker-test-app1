<template>
  <h6 v-if="this.$store.getters.LOCALIZATION == 'ru'" class="tablex start-p"><b>WebPlotter</b> - это веб приложение для отрисовки графиков функций. Утилита позволяет сохранять шаблоны настроек и использовать их через время.
  В приложении можно выбирать диапазон значений, изменять название графика и осей, выбирать размер изображения.
  Ниже приведен список основных комманд с их описанием. Обязательно нужно указать команду "function", остальные по желанию.</h6>
  <h6 v-else class="tablex start-p"><b>WebPlotter</b> - is a web application for plotting functions. The utility allows saving settings templates and using them later. In the application, you can select a range of values, change the name of the graph and axes, choose the size of the image. Below is a list of main commands with their descriptions. It is mandatory to specify the "function" command, the rest are optional.</h6>
  <br>
  <h6 v-if="this.$store.getters.LOCALIZATION == 'ru'"><b>Команды</b></h6>
  <h6 v-else><b>Commands</b></h6>
  <table v-if="this.$store.getters.LOCALIZATION == 'ru'" class="table tablex">
    <thead>
    <tr>
      <th scope="col">Команда</th>
      <th scope="col">Описание</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><b>Тип графика</b></td>
      <td>Тип графика, который будет отрисован</td>
    </tr>
    <tr>
      <td><b>Функция</b></td>
      <td>Функции, которые нужно отрисовать. Несколько функций можно передать через ";"</td>
    </tr>
    <tr>
      <td><b>Диапазон X</b></td>
      <td>Диапазон значений для осиX</td>
    </tr>
    <tr>
      <td><b>Диапазон Y</b></td>
      <td>Диапазон значений для оси Y</td>
    </tr>
    <tr>
      <td><b>Диапазон Z</b></td>
      <td>Диапазон значений для оси Z</td>
    </tr>
    <tr>
      <td><b>Название</b></td>
      <td>Название графика</td>
    </tr>
    <tr>
      <td><b>Название X</b></td>
      <td>Название оси X</td>
    </tr>
    <tr>
      <td><b>Название Y</b></td>
      <td>Название оси Y</td>
    </tr>
    <tr>
      <td><b>Название Z</b></td>
      <td>Название оси Z</td>
    </tr>
    <tr>
      <td><b>Цвет</b></td>
      <td>Цвет графика</td>
    </tr>
    <tr>
      <td><b>Размер</b></td>
      <td>Размер элементов графика</td>
    </tr>
    <tr>
      <td><b>Тип точек</b></td>
      <td>Тип точек (от 1 до 8)</td>
    </tr>
    <tr>
      <td><b>Ось</b></td>
      <td>Наличие оси графика</td>
    </tr>
    <tr>
      <td><b>Тип графика</b></td>
      <td>Тип графика</td>
    </tr>
    <tr>
      <td><b>Граница</b></td>
      <td>Наличие рамок графика</td>
    </tr>
    <tr>
      <td><b>Шаг X</b></td>
      <td>Диапозон единицы деления X</td>
    </tr>
    <tr>
      <td><b>Шаг Y</b></td>
      <td>Диапозон единицы деления Y</td>
    </tr>
    <tr>
      <td><b>Шаг Z</b></td>
      <td>Диапозон единицы деления Z</td>
    </tr>
    <tr>
      <td><b>Высота</b></td>
      <td>Высота изображения</td>
    </tr>
    <tr>
      <td><b>Ширина</b></td>
      <td>Ширина изображения</td>
    </tr>
    <tr>
      <td><b>Файл данных</b></td>
      <td>Файл с данными для отрисовки</td>
    </tr>
    <tr>
      <td><b>Скрипт</b></td>
      <td>Скрипты для отрисовки графика на языке Gnuplot</td>
    </tr>
    </tbody>
  </table>

  
  <table v-else class="table tablex">
    <thead>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><b>Graphic Type</b></td>
      <td>The type of graph to be plotted</td>
    </tr>
    <tr>
      <td><b>Function</b></td>
      <td>The functions to be plotted. Multiple functions can be passed separated by ";"</td>
    </tr>
    <tr>
      <td><b>Range X</b></td>
      <td>The range of values for the X-axis</td>
    </tr>
    <tr>
      <td><b>Range Y</b></td>
      <td>The range of values for the Y-axis</td>
    </tr>
    <tr>
      <td><b>Range Z</b></td>
      <td>The range of values for the Z-axis</td>
    </tr>
    <tr>
      <td><b>Label</b></td>
      <td>The name of the graph</td>
    </tr>
    <tr>
      <td><b>X label</b></td>
      <td>The label for the X-axis</td>
    </tr>
    <tr>
      <td><b>Y label</b></td>
      <td>The label for the Y-axis</td>
    </tr>
    <tr>
      <td><b>Z label</b></td>
      <td>The label for the Z-axis</td>
    </tr>
    <tr>
      <td><b>Color</b></td>
      <td>The color of the graph</td>
    </tr>
    <tr>
      <td><b>Width</b></td>
      <td>The size of graph elements</td>
    </tr>
    <tr>
      <td><b>Points Type</b></td>
      <td>The type of points (from 1 to 8)</td>
    </tr>
    <tr>
      <td><b>Zeroaxis</b></td>
      <td>The presence of the graph axis</td>
    </tr>
    <tr>
      <td><b>Plot Type</b></td>
      <td>The type of graph</td>
    </tr>
    <tr>
      <td><b>Border</b></td>
      <td>The presence of graph borders</td>
    </tr>
    <tr>
      <td><b>X ticks</b></td>
      <td>The range of X-axis tick units</td>
    </tr>
    <tr>
      <td><b>Y ticks</b></td>
      <td>The range of Y-axis tick units</td>
    </tr>
    <tr>
      <td><b>Z ticks</b></td>
      <td>The range of Z-axis tick units</td>
    </tr>
    <tr>
      <td><b>Height</b></td>
      <td>The height of the image</td>
    </tr>
    <tr>
      <td><b>Width</b></td>
      <td>The width of the image</td>
    </tr>
    <tr>
      <td><b>Data File</b></td>
      <td>The file with data for plotting</td>
    </tr>
    <tr>
      <td><b>Scripts</b></td>
      <td>Scripts for plotting the graph using Gnuplot language</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HelpView"
}
</script>

<style scoped>
.tablex{
  text-align: left;
}

.start-p{
  padding-top: 30px;
}
</style>