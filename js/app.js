Highcharts.chart('container', {

    title: {
      text: 'Владений за матч'
    },
  
    yAxis: {
      title: {
        text: ''
      }
    },
  
  
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
  
    series: [{
      name: 'Владений за матч',
      data: [11, 26, 9,]
    }, {
      name: 'Очков за матч',
      data: [30, 16, 8,]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });



  Highcharts.chart('teams', {

    title: {
      text: 'Владений за матч'
    },
  
    yAxis: {
      title: {
        text: ''
      }
    },
  
  
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
  
    series: [{
      name: 'Владений за матч',
      data: [11, 26, 9,]
    }, {
      name: 'Очков за матч',
      data: [30, 16, 8,]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });



  Highcharts.chart('container_3', {
    chart: {
            type: 'line',
        },
    title: {
        text: 'Очки'
    },
    yAxis: {
        title: {
            text: 'Очки'
        },
        labels: {
            enabled: false
        },
    },
    xAxis: {
        labels: {
            enabled: false
        },
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: false
            }
        }
    },
     series: [{
        showInLegend: false,
        data: [140, 147, 153, 127, 127, 128, 149, 142, 125, 136],
        color: "red",
    }, {
        showInLegend: false,
        data: [139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7],
        color: "black",
        dataLabels: {
                enabled: false
            },
    }]
});





Highcharts.chart('container_4', {
  chart: {
          type: 'line',
      },
  title: {
      text: 'Очки'
  },
  yAxis: {
      title: {
          text: 'Очки'
      },
      labels: {
          enabled: false
      },
  },
  xAxis: {
      labels: {
          enabled: false
      },
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  exporting: {
      buttons: {
          contextButton: {
              enabled: false
          }
      }
  },
   series: [{
      showInLegend: false,
      data: [140, 147, 153, 127, 127, 128, 149, 142, 125, 136],
      color: "red",
  }, {
      showInLegend: false,
      data: [139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7, 139.7],
      color: "black",
      dataLabels: {
              enabled: false
          },
  }]
});

