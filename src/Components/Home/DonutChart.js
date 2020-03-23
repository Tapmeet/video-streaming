import React from "react";
import anychart from 'anychart';
const DonutChart = () => {
  React.useEffect(() => {
    anychart.onDocumentReady(function () {
      // create data set
      var data = [
        { x: 'Galaxy 9', value: 10 },
        { x: 'Iphone 11', value: 20 },
        { x: 'Galaxy 10 ', value: 15 },

        // { x: 'Ipad Pro', value: 20 },
        { x: 'Note 10', value: 15 },
        { x: 'Lg C9 Oled Tv', value: 18 },

        { x: 'Samsung Q90', value: 10 },
        { x: 'Oled Tv', value: 40 },
        { x: 'Iphone X', value: 20 }
      ];

      // create pie chart with passed data
      var chart = anychart.pie(data);

      // set chart radius
      chart.innerRadius('65%')
        // set value for the exploded slices
        .explode(25);

      // create standalone label and set settings
      var label = anychart.standalones.label();
      label.enabled(true)
        .text('iPhone 11 \n\n 1.93Tb')
        .width('100%')
        .height('100%')
        .adjustFontSize(true, true)
        .minFontSize(10)
        .maxFontSize(25)
        .fontColor('#60727b')
        .position('center')
        .anchor('center')
        .hAlign('center')
        .vAlign('middle');

      // set label to center content of chart
      chart.center().content(label);

      // create range color palette with color ranged
      var palette = anychart.palettes.rangeColors();
      palette.items([
        { color: '#935b91' },
        { color: '#52a429' },
        { color: '#f3b266' },

        // { color: '#a09e91' },
        { color: '#634465' },
        { color: '#1dafd6' },

        { color: '#95c01f' },
        { color: '#f796b8' },
        { color: '#e67924' },

      ]);
      // set chart palette
      chart.palette(palette);
      chart.legend()
        .position('right')
        .itemsLayout('vertical');
      // set container id for the chart
      chart.container('container');
      // initiate chart drawing
      chart.draw();
    });
  });

  return (
    <div id="container"></div>
  );
}
export default DonutChart
