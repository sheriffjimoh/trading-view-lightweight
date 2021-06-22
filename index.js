
const log = console.log;


const chartProperties = {
    width: 1000,
    height: 500,
    timeScale:{
        timeVisible:true,
        secondsVisible:false 
    },

    layout: {
        backgroundColor: '#000000',
        textColor: 'rgba(255, 255, 255, 0.9)',
    },
    grid: {
        vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
        },
        horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
        },
    },
    
}

    

const domElement = document.getElementById('ChartLog');


const chart = LightweightCharts.createChart(domElement, chartProperties);




// APi samples, you can pull your own data 
const candleSeries = chart.addCandlestickSeries();

fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000')
.then(res => res.json())
.then(data => {

   const   cdata = data.map(d =>{
    return{time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
   });
   candleSeries.setData(cdata)
}).catch( err => console.log(err));




// manual data
// const lineSeries = chart.addLineSeries();
// lineSeries.setData([
//     { time: '2019-04-11', value: 80.01 },
//     { time: '2019-04-12', value: 96.63 },
//     { time: '2019-04-13', value: 76.64 },
//     { time: '2019-04-14', value: 81.89 },
//     { time: '2019-04-15', value: 74.43 },
//     { time: '2019-04-16', value: 80.01 },
//     { time: '2019-04-17', value: 96.63 },
//     { time: '2019-04-18', value: 76.64 },
//     { time: '2019-04-19', value: 81.89 },
//     { time: '2019-04-20', value: 74.43 },
// ]);