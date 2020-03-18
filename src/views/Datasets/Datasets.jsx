import React, { Component } from "react";
import { hostUrl } from "../../utilities/request";
import ErrorManager from "../../utilities/ErrorManager/errorManager";
import Loading from "../../utilities/Loading/loading";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import Table from "../../utilities/table";

// @material-ui/icons
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Copyright from "@material-ui/icons/Copyright";
import FindInPage from "@material-ui/icons/FindInPage";
import Note from "@material-ui/icons/Note";
import TableChart from "@material-ui/icons/TableChart";
import Update from "@material-ui/icons/Update";
import Archive from "@material-ui/icons/Archive";
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

  render() {
    const { error, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorManager error={error} place={"tc"} />;
    }
    return (
      <Tabs
        headerColor="info"
        tabs={this.getDataTabs({ ...this.state, ...this.props })}
      />
    );
  }

  getDataTabs(props) {
    return [
      {
        tabName: "Accessibility",
        tabIcon: FindInPage,
        tabContent: this.getAccessibilityData(props)
      },
      {
        tabName: "Origin",
        tabIcon: AssignmentInd,
        tabContent: this.getOriginData(props)
      },
      {
        tabName: "Update",
        tabIcon: Update,
        tabContent: this.getUpdateData(props)
      },
      {
        tabName: "Licenses",
        tabIcon: Copyright,
        tabContent: this.getLicensesData(props)
      },
      {
        tabName: "Notes",
        tabIcon: Note,
        tabContent: this.getNotesData(props)
      },
      {
        tabName: "Resources",
        tabIcon: Archive,
        tabContent: this.getResourcesData(props)
      },
      {
        tabName: "All data",
        tabIcon: TableChart,
        tabContent: this.getAllData(props)
      }
    ];
  }

  getAccessibilityData(props) {
    const matadataSection = [
      {
        title: "Relationships",
        description: "relationships",
        value: "relationships"
      },
      {
        title: "URL to download",
        description: "download_url",
        value: "download_url"
      },
      {
        title: "state",
        description: "state",
        value: "state"
      },
      {
        title: "Type",
        description: "type",
        value: "type"
      },
      {
        title: "Number of resources",
        description: "num_resources",
        value: "num_resources"
      },
      {
        title: "URL",
        description: "url",
        value: "url"
      },
      {
        title: "Ckan url",
        description: "ckan_url",
        value: "ckan_url"
      },
      {
        title: "Ratings average",
        description: "ratings_average",
        value: "ratings_average"
      },
      {
        title: "Ratings count",
        description: "ratings_count",
        value: "ratings_count"
      }
    ];

    return this.createAccordionData({ ...props, data: matadataSection });
  }

  getOriginData(props) {
    const matadataSection = [
      {
        title: "Maintainer",
        description: "maintainer",
        value: "maintainer"
      },
      {
        title: "Maintainer email",
        description: "maintainer_email",
        value: "maintainer_email"
      },
      {
        title: "number of tags",
        description: "num_tags",
        value: "num_tags"
      },
      {
        title: "Tags",
        description: "tags",
        value: "tags"
      },
      {
        title: "Author",
        description: "author",
        value: "author"
      },
      {
        title: "Author email",
        description: "author_email",
        value: "author_email"
      },
      {
        title: "Version",
        description: "version",
        value: "version"
      },
      {
        title: "Creator user id",
        description: "creator_user_id",
        value: "creator_user_id"
      },
      {
        title: "Groups",
        description: "groups",
        value: "groups"
      },
      {
        title: "Organization",
        description: "organization",
        value: "organization"
      },
      {
        title: "Owner org",
        description: "owner_org",
        value: "owner_org"
      }
    ];
    return this.createAccordionData({ ...props, data: matadataSection });
  }

  getUpdateData(props) {
    const matadataSection = [
      {
        title: "Metadata created",
        description: "metadata_created",
        value: "metadata_created"
      },
      {
        title: "Metadata modified",
        description: "metadata_modified",
        value: "metadata_modified"
      },
      {
        title: "Revision id",
        description: "revision_id",
        value: "revision_id"
      }
    ];
    return this.createAccordionData({ ...props, data: matadataSection });
  }

  getLicensesData(props) {
    const matadataSection = [
      {
        title: "License title",
        description: "license_title",
        value: "license_title"
      },
      {
        title: "Is private",
        description: "private",
        value: "private"
      },
      {
        title: "Is open",
        description: "isopen",
        value: "isopen"
      },
      {
        title: "License",
        description: "license",
        value: "license"
      },
      {
        title: "License id",
        description: "license_id",
        value: "license_id"
      }
    ];
    return this.createAccordionData({ ...props, data: matadataSection });
  }

  getNotesData(props) {
    const matadataSection = [
      {
        title: "Notes rendered",
        description: "notes_rendered",
        value: "notes_rendered"
      },
      {
        title: "Notes",
        description: "notes",
        value: "notes"
      },
      {
        title: "Extras",
        description: "extras",
        value: "extras"
      }
    ];

    return this.createAccordionData({ ...props, data: matadataSection });
  }

  getResourcesData(props) {
    const matadataSection = [];
    return this.createAccordionData({ ...props, data: matadataSection });
  }

  createAccordionData(props) {
    return (
      <Accordeon
        items={props.data.map(data => {
          return { ...data, content: this.getCharts({ ...props, option : data }) };
        })}
      />
    );
  }

  getCharts(props) {
    const { option } = props;
    switch (option.value) {
      case "author":
      case "organization_description":
        return <PieChart data={this.state.data} option={option} />;
      case "license":
      case "resources":
      case "relationships":
        return <BarChart data={this.state.data} option={option} />;
      default:
        return <PieChart data={this.state.data} option={option} />;
    }
  }

  getAllData(props) {
    const { data } = props;
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
}
