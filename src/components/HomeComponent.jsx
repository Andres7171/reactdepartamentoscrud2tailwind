import React, { Component } from "react";
import ServiceCoches from "../services/ServiceCoches";
import { NavLink } from "react-router-dom";
export default class HomeComponent extends Component {
  service = new ServiceCoches();
  state = {
    coches: [],
  };

  loadCoches = async () => {
    let allCoches = awaitthis.service.getCoches();
    this.setState({
      coches: allCoches,
    });
  };

  componentDidMount = async () => {
    await this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>Home Component</h1>

        <div className="w-full overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Marca</th>
                <th className="px-6 py-4 font-semibold">Modelo</th>
                <th className="px-6 py-4">Conductor</th>
                <th className="px-6 py-4"><img style={{width:'20px',height:'20px'}} src="" alt="" /></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-blue-200">
              {this.state.departamentos.map((departamento, index) => {
                return (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 hover:bg-blue-200 ${
                      index % 2 === 0 ? "bg-blue-100" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-800">
                      {departamento.nombre}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      {departamento.localidad}
                    </td>

                    <td className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                      <button>Edit</button>
                    </td>

                    <td className="px-6 py-4">
                      <button className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
