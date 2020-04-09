Highcharts.setOptions({
    lang: {
        thousandsSep: ' '
    },
});
Highcharts.chart('container', {
    chart: {
        type: 'column',
        zoomType: 'x',

    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    title:{
        text:'Traffic'
    },
    yAxis:{
        title:{
            text:'Values'
        }
    },
    xAxis: {
        type: 'datetime'
    },
    data: {
        enablePolling: true,
        csvURL: 'https://raw.githubusercontent.com/HPAI-BSC/hpai-bsc.github.io/master/csv_charts/traffic_density_trams.csv'
    },

});