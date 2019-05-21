import React, { Component } from "react";
import rd3 from 'react-d3-library';
import  "./piechart.css"

export default class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph_data: [],
      graph_options: {},
      specific_data: [],
      data: [],
      option: ""
    };
  }

  componentDidMount() {
    this.actionProcess();
  }

  render(){
    var PieChart = rd3.createPieChart;
    return (

    );
  }

  actionProcess() {
    const { data, specific_data, option, graph_data } = this.state;
    var up = 0;
    var up_per = 0;
    var down = 0;
    var down_per = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i][option] == null || data[i][option] == "") {
        down++;
      } else {
        var temp = {
          title: data[i]["title"],
          option: data[i][option]
        };
        specific_data.push(temp);
        up++;
      }
    }

    up_per = (up * 100) / (up + down);
    down_per = (down * 100) / (up + down);

    var output_arr = [
      {
        label: "Registrado, " + up_per.toFixed(2) + "%",
        value: up
      },
      {
        label: "No registrado, " + down_per.toFixed(2) + "%",
        value: down
      }
    ];
    this.displayGraph();
    this.setState({
      graph_data: output_arr
    });
    console.log(graph_data);
  }

  displayGraph() {
    this.setState({
      graph_options: {
        chart: {
          type: "pieChart",
          height: 500,
          x: function(d) {
            return d.label;
          },
          y: function(d) {
            return d.value;
          },
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: false,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          }
        }
      }
    });
    this.setstate({ graph_data: [] });
  }
}
