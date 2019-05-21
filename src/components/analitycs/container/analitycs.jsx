import React, { Component } from "react";
import AnalitycsView from "../analitycsView";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instance_metadata: [],
      names_options: [],
      instance_selected: null,
      radio_option_sel: "",
      graph_control: false,
      options_flag: false,
      loading_flag: false
    };
    this.getInstanceMetadata = this.getInstanceMetadata.bind(this);
    this.loadMetadata = this.loadMetadata.bind(this);
    this.actionProcess = this.actionProcess.bind(this);
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onChangeInstance = this.onChangeInstance.bind(this);
  }

  componentDidMount() {
    this.getNames();
  }

  render() {
    const {
      instance_metadata,
      names_options,
      instance_selected,
      radio_option_sel,
      graph_control,
      options_flag,
      loading_flag
    } = this.state;
    return (
      <AnalitycsView
        instance_metadata={instance_metadata}
        names_options={names_options}
        instance_selected={instance_selected}
        radio_option_sel={radio_option_sel}
        graph_control={graph_control}
        options_flag={options_flag}
        loading_flag={loading_flag}
        loadMetadata={this.loadMetadata}
        getInstanceMetadata={this.getInstanceMetadata}
        actionProcess={this.actionProcess}
        onChangeOption={this.onChangeOption}
        onChangeInstance={this.onChangeInstance}
      />
    );
  }

  async getInstanceMetadata(instance) {
    try {
      const res = await fetch("http://127.0.0.1:5000/" + instance);
      const data = await res.json();
      console.log(data)
      this.setState({
        instance_metadata: data.data.packages,
        loading_flag: false,
        options_flag: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getNames() {
    try {
      const res = await fetch("http://127.0.0.1:5000/names");
      const data = await res.json();
      console.log(data);
      this.setState({
        names_options: data.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit() {}

  loadMetadata() {
    const { instance_selected } = this.state;
    this.setState({ loading_flag: true });
    if (instance_selected) {
      this.getInstanceMetadata(instance_selected.value);
    }
  }

  actionProcess() {
    const { radio_option_sel } = this.state;
    if (radio_option_sel) {
      this.setState({ graph_control: true });
    }
  }

  onChangeOption(e) {
    this.setState({
      graph_control: false,
      radio_option_sel: e.currentTarget.value
    });
  }

  onChangeInstance(object) {
    this.setState({
      options_flag: false,
      graph_control: false,
      instance_selected: object
    });
  }
}
