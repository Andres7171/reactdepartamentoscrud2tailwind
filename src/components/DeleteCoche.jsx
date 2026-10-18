import React, { Component } from "react";
import ServiceCoches from "../services/ServiceCoches";

export default class DeleteCoche extends Component {
  service = new ServiceCoches();
  cancelModal = () => {
    this.props.cambiarMostrarDelete();
  };

  deleteCoche = async () => {
    try {
      await this.service.deleteCoche(this.props.coche.idCoche);
      this.props.loadCoches();
      this.props.cambiarMostrarDelete();
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h5 className="text-lg font-semibold text-gray-800">
              Eliminar Coche
            </h5>
            <button
              onClick={this.cancelModal}
              type="button"
              aria-label="Close"
              className="rounded-md p-1 text-xl leading-none text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="space-y-2 px-6 py-4 text-gray-700">
            <h4>Estas seguro de que quieres eliminar este coche?</h4>
            <p>Marca: {this.props.coche.marca}</p>
            <p>Modelo: {this.props.coche.modelo}</p>
            <p>Conductor: {this.props.coche.conductor}</p>
          </div>

          {/* FOOTER */}
          <div className="flex justify-end gap-2 border-t border-gray-200 px-6 py-4">
            <button
              type="button"
              onClick={this.cancelModal}
              className="rounded-md bg-gray-500 px-4 py-2 font-medium text-white transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancelar
            </button>
            <button
              onClick={this.deleteCoche}
              type="button"
              className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
