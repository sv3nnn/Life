
var myChart = echarts.init(document.getElementById('main'));

option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['New diagnoses in China', 'The current diagnosis trend in China']
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['07-21', '07-26', '08-00', '08-05', '08-10', '08-15', '08-20']
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			name: 'New diagnoses in China',
			type: 'line',
			stack: 'The total',
			data: [320, 332, 301, 334, 390, 330, 320]
		},
		{
			name: 'The current diagnosis trend in China',
			type: 'line',
			stack: 'The total',
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
};

myChart.setOption(option);
