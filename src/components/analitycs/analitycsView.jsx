import React from "react";
import Select from "react-select";
import Loading from "../../resources/loading.gif";

function generateSelectOptions(options, selectedOption, handleChange) {
  options = options.map(option => {
    return { value: option, label: option };
  });
  return (
    <Select value={selectedOption} onChange={handleChange} options={options} />
  );
}
function chargeMetadata(props) {
  if (props.loading_flag) {
    return (
      <img
        src={Loading}
        alt=""
      />
    );
  }
  return optionsByInstance(props);
}

function optionsByInstance(props) {
  if (props.options_flag) {
    return (
      <div >
        <div>
          <h4>Seleccione de entre las siguientes opciones</h4>
        </div>
        <div >
          <label>
            <input
              type="radio"
              name="opciones"
              value="organization_description"
              checked={props.radio_option_sel === "organization_description"}
              onChange={props.onChangeOption}
              className="form-check-input"
            />
            Descripcion de la organizacion
          </label>
          <label className="radio-inline">
          <input
              type="radio"
              name="opciones"
              value="author"
              checked={props.radio_option_sel === "author"}
              onChange={props.onChangeOption}
              className="form-check-input"
            /> Autores
          </label>
          <label className="radio-inline">
          <input
              type="radio"
              name="opciones"
              value="license"
              checked={props.radio_option_sel === "license"}
              onChange={props.onChangeOption}
              className="form-check-input"
            />Licencias
          </label>
          <label className="radio-inline">
          <input
              type="radio"
              name="opciones"
              value="resources"
              checked={props.radio_option_sel === "resources"}
              onChange={props.onChangeOption}
              className="form-check-input"
            />
            Formatos de recursos
          </label>
          <label className="radio-inline">
          <input
              type="radio"
              name="opciones"
              value="relationships"
              checked={props.radio_option_sel === "relationships"}
              onChange={props.onChangeOption}
              className="form-check-input"
            />Relaciones como objeto y sujeto
          </label>
          <label className="radio-inline"><input
              type="radio"
              name="opciones"
              value="gen_table"
              checked={props.radio_option_sel === "gen_table"}
              onChange={props.onChangeOption}
              className="form-check-input"
            />Tabla general
          </label>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-raised btn-warning"
            onClick={props.actionProcess}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

function getCharts(props) {
  if (props.graph_control) {
    if (
      props.radio_option_sel === "author" ||
      props.radio_option_sel === "organization_description"
    ) {
      return (
        <piechart
          data={props.instance_metadata}
          option={props.radio_option_sel}
        />
      );
    }
    if (
      props.radio_option_sel === "author" ||
      props.radio_option_sel === "organization_description"
    ) {
      return (
        <piechart
          data={props.instance_metadata}
          option={props.radio_option_sel}
        />
      );
    }
    if (
      props.radio_option_sel === "license" ||
      props.radio_option_sel === "resources" ||
      props.radio_option_sel === "relationships"
    ) {
      return (
        <barchart
          data={props.instance_metadata}
          option={props.radio_option_sel}
        />
      );
    }
    if (props.radio_option_sel === "gen_table") {
      return <generaltable data={props.instance_metadata} />;
    }
  }
}

export default function AnalitycsView(props) {
  console.log(props)
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Entrada de datos</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={props.handleSubmit}>
                  <legend>Selección de instancia y opciones</legend>
                  <fieldset>
                    <div className="form-group">
                      <label>Instancia</label>
                      {generateSelectOptions(
                        props.names_options,
                        props.instance_selected,
                        props.onChangeInstance
                      )}
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-raised btn-sm btn-primary"
                        onClick={props.loadMetadata}
                        name="button"
                      >
                        Cargar metadata
                      </button>
                      {chargeMetadata(props)}
                    </div>
                    <hr />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {getCharts(props)}
        </div>
      </div>
    </React.Fragment>
  );
}
