import React, { Component } from "react";
import ServiceCoches from "../services/ServiceCoches";
import { NavLink } from "react-router-dom";
import EditCoche from "./EditCoche";
import DeleteCoche from "./DeleteCoche";
export default class HomeComponent extends Component {
  service = new ServiceCoches();
  state = {
    coches: [],
    mostrarEdit:false,
    mostrarDelete:false,
    cocheSeleccionado:null
  };

  loadCoches = async () => {
    let allCoches = await this.service.getCoches();
    this.setState({
      coches: allCoches,
    });
  };

  cambiarMostrarEdit=()=>{
    this.setState({
      mostrarEdit:!this.state.mostrarEdit
    })
  }

  cambiarMostrarDelete=()=>{
    this.setState({
      mostrarDelete:!this.state.mostrarDelete
    })
  }

  mostrarModalEdit=(coche)=>{
    this.setState({
      mostrarEdit:true,
      cocheSeleccionado:coche,
    })
  }

  mostrarModalDelete=(coche)=>{
    this.setState({
      mostrarDelete:true,
      cocheSeleccionado:coche,
    })
  }



  componentDidMount = async () => {
    await this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>Home Component</h1>
        {
          this.state.mostrarEdit == true &&
          (<EditCoche loadCoches={this.loadCoches} cambiarMostrarEdit={this.cambiarMostrarEdit} coche={this.state.cocheSeleccionado}/>)
        }
        {
          this.state.mostrarDelete == true &&
          (<DeleteCoche loadCoches={this.loadCoches} cambiarMostrarDelete={this.cambiarMostrarDelete} coche={this.state.cocheSeleccionado}/>)
        }

        <div className="w-full overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Marca</th>
                <th className="px-6 py-4 font-semibold">Modelo</th>
                <th className="px-6 py-4">Conductor</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Modify</th>
                <th className="px-6 py-4">Delete</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-blue-200">
              {this.state.coches.map((coche, index) => {
                return (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 hover:bg-blue-200 ${
                      index % 2 === 0 ? "bg-blue-100" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-800">{coche.marca}</td>

                    <td className="px-6 py-4 text-gray-800">{coche.modelo}</td>
                    <td className="px-6 py-4 text-gray-800">
                      {coche.conductor}
                    </td>
                    <td className="px-6 py-4 text-gray-800">{coche.idCoche}</td>

                    <td className="px-6 py-4">
                      <button onClick={()=>this.mostrarModalEdit(coche)}  className="rounded-md bg-yellow-300 px-4 py-2 font-medium text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                        Edit
                      </button>
                    </td>

                    <td className="px-6 py-4">
                      <button onClick={()=>this.mostrarModalDelete(coche)} className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
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
