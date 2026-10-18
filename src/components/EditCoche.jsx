import React, { Component } from "react";
import ServiceCoches from "../services/ServiceCoches";

export default class EditCoche extends Component {
  

  cajaMarca=React.createRef()
  cajaModelo=React.createRef()
  cajaConductor=React.createRef()
  cajaImagen=React.createRef()

service=new ServiceCoches()



  cancelModal=()=>{
  this.props.cambiarMostrarEdit()
  }

  editCoche=async()=>{
    let cocheEdited={
      idCoche:parseInt(this.props.coche.idCoche),
      marca:this.cajaMarca.current.value,
      modelo:this.cajaModelo.current.value,
      conductor:this.cajaConductor.current.value,
      imagen:this.cajaImagen.current.value
    }
    try{
      await this.service.editCoche(cocheEdited)
      this.props.loadCoches()
      this.props.cambiarMostrarEdit()
    }catch(error){
      console.log(error.message)
    }
    

  }
  
  
  
  
  render() {
    return (
      <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h5 className="text-lg font-semibold text-gray-800">
              Editar Coche
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
            <h4>Datos de coche: </h4>
            <form action="">
              <div className="mb-4">
                  <label className="mb-1 block font-medium text-gray-700">Marca</label>
                  <input defaultValue={this.props.coche.marca} ref={this.cajaMarca} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
              <div className="mb-4">
                  <label className="mb-1 block font-medium text-gray-700">Modelo</label>
                  <input defaultValue={this.props.coche.modelo} ref={this.cajaModelo} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
              <div className="mb-4">
                  <label className="mb-1 block font-medium text-gray-700">Conductor</label>
                  <input defaultValue={this.props.coche.conductor} ref={this.cajaConductor} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>
              <div className="mb-4">
                  <label className="mb-1 block font-medium text-gray-700">Imagen URL</label>
                  <input defaultValue={this.props.coche.imagen} ref={this.cajaImagen} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
              </div>          
          </form>
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
              onClick={this.editCoche}
              type="button"
              className="rounded-md bg-yellow-300 px-4 py-2 font-medium text-white transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
        
      </div>
    );
  }
}
