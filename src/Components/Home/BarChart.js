import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2'

function BarChart() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData({
      labels: ['11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'],
      datasets: [{
        label: '',
        data: [200, 190, 300, 320, 400, 320, 200, 190, 300, 320, 400, 320, 200, 190, 300, 320, 400, 320, 200, 190, 300, 320, 400, 320],
        backgroundColor: [
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91'
        ],
        borderColor: [
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91',
          '#935b91'
        ],
        borderWidth: 1
      }]
    })

  }, [setData]);

  return (
    <div className="barchart">
      <div>
        {<Bar data={data}>
        </Bar>}
      </div>
      <label className="text-center"> Time of day</label>
    </div>
  );
}
export default BarChart
