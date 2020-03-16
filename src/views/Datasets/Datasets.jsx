import React, { Component } from "react";
import { hostUrl } from "../../utilities/request";
import ErrorManager from "../../utilities/ErrorManager/errorManager";
import Loading from "../../utilities/Loading/loading";
import Table from "../../utilities/table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import Accordeon from "components/Accordeon/Accordeon";
import Tabs from "components/CustomTabs/CustomTabs";

export default class Datasets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      columns: [],
      data: props.data,
      instanceSelected: props.instance
    };
  }

  componentDidMount() {
    const { instanceSelected } = this.state;
    if (instanceSelected) {
      this.getDatasets(instanceSelected.name);
    }
  }

  render() {
    const { error, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorManager error={error} place={"tc"} />;
    }
    return <Tabs headerColor="info" tabs={this.getDataTabs({...this.state, ...this.props})} />;
  }

  getDataTabs(props) {
    return [
      {
        tabName: "Accessibility",
        tabIcon: Face,
        tabContent: this.getAccessibilityData(props)
      },
      {
        tabName: "Reuse",
        tabIcon: Chat,
        tabContent: this.getReuseData(props)
      },
      {
        tabName: "Update",
        tabIcon: Build,
        tabContent: this.getUpdateData(props)
      },
      {
        tabName: "Licences",
        tabIcon: Build,
        tabContent: this.getLicencesData(props)
      },
      {
        tabName: "Notes",
        tabIcon: Build,
        tabContent: this.getNotesData(props)
      },
      {
        tabName: "All data",
        tabIcon: Build,
        tabContent: this.getAllData(props)
      }
    ];
  }

  getAccessibilityData(props) {
    const matadataSection = [
      {
        title: "Collapsible group Item #1",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #2",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #3",
        content:
          "Anim "
      }
    ]
    return this.createAccordionData({data:matadataSection})
  }

  getReuseData(props) {
    const matadataSection = [
      {
        title: "Collapsible group Item #1",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #2",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #3",
        description: "description",
        content:
          "Anim "
      }
    ]
    return this.createAccordionData({data:matadataSection})
  }

  getUpdateData(props) {
    const matadataSection = [
      {
        title: "Collapsible group Item #1",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #2",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #3",
        description: "description",
        content:
          "Anim "
      }
    ]
    return this.createAccordionData({data:matadataSection})
  }

  getLicencesData(props) {
    const matadataSection = [
      {
        title: "Collapsible group Item #1",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #2",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #3",
        description: "description",
        content:
          "Anim "
      }
    ]
    return this.createAccordionData({data:matadataSection})
  }

  getNotesData(props) {
    const matadataSection = [
      {
        title: "Collapsible group Item #1",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #2",
        description: "description",
        content:
          "Anim "
      },
      {
        title: "Collapsible group Item #3",
        description: "description",
        content:
          "Anim "
      }
    ]

    return this.createAccordionData({data:matadataSection})
  }

  createAccordionData(props) {
    return (
      <Accordeon
        items={props.data}
      />
    );
  }

  getAllData(props) {
    const {data} = props
    return (
      <Table
        title={"Attributes"}
        data={data}
        filters={[
          "id",
          "title",
          "metadata_created",
          "private",
          "isopen",
          "license_title",
          "download_url",
          "state",
          "type",
          "num_resources",
          "ckan_url",
          "organization",
          "owner_org"
        ]}
      />
    );
  }

  async getDatasets(instanceName) {
    try {
      const res = await fetch(`${hostUrl}instances/${instanceName}`);
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      this.setState({
        isLoading: false,
        data
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.error(error);
    }
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
