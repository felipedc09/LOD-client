import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Datasets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: props.data
    };
  }

  componentDidMount() {
    this.loadDatasets();
  }

  render() {
    const { data, columns } = this.state;
    if (!columns) {
      return <div> Loading ... </div>;
    }
    return <ReactTable data={data.nodes} columns={columns} />;
  }

  // preparaLink() {
  //     const {data} = this.state;
  //     urlRdf = "";
  //     name = "";
  //     for (x in data.nodes) {
  //         urlRdf = lod.nodes[x].urlResourceRdf.replace(".bz2", "");
  //         name = lod.nodes[x].nodeName;
  //     }
  //     $('#desgarga-dataset').attr("href", urlRdf);
  //     $('#desgarga-dataset').attr("download", name);
  // }

  loadDatasets() {
    var columns = [
      {
        Header: "#",
        accessor: "id"
      },
      {
        Header: "Nombre",
        accessor: "nodeTitle"
      },
      {
        Header: "# Tripletas",
        accessor: "triples"
      },
      {
        Header: "Grado",
        accessor: "cluster"
      },
      {
        Header: "Licencia",
        accessor: "license_title"
      },
      {
        Header: "Estado",
        accessor: "state"
      },
      {
        Header: "# Racursos",
        accessor: "size"
      }
      // {
      //     data: 'ckanUrl',
      //     title: 'Repositorio',
      //     render: function (data, type, full, meta) {
      //         var link = "<div class='ver'>";
      //         link += "<a class='btn btn-default btn-xs' href='" + data + "' target='_blank'><i class='glyphicon glyphicon-search'></i></a>";
      //         link += "</div>";
      //         return link;
      //     }
      // }
    ];
    this.setState({ columns });
  }
}
