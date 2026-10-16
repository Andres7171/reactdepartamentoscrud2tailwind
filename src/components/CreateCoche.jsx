import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import ServiceCoches from "../services/ServiceCoches";

export default class CreateCoche extends Component {
  cajaId=React.createRef()
  cajaMarca=React.createRef()
  cajaModelo=React.createRef()
  cajaConductor=React.createRef()
  cajaImagen=React.createRef()
  
  service=new ServiceCoches()

  state={
    mensaje:null,
    status:false
  }

  createCoche=async(event)=>{
    event.preventDefault()
    
    let coche={
        idCoche:parseInt(this.cajaId.current.value),
        marca:this.cajaMarca.current.value,
        modelo:this.cajaModelo.current.value,
        conductor:this.cajaConductor.current.value,
        imagen:this.cajaImagen.current.value
    }
    try{
        await this.service.createCoche(coche)
        this.setState({
            status:!this.state.status
        })
    }catch(error){
        this.setState({
            mensaje:error.message
        })
    }

    
  }
  
  
    render() {
        if(this.state.status){
            return <Navigate to='/'/>
        }else{
            return (
                <div>
                    <h1>Create Coche</h1>
                    {
                        this.state.mensaje &&
                        (<h4  style={{ color: "red", fontWeight: "bold" }}>{this.state.mensaje}</h4>)
                    }
                    <form className="px-6" action="">
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Id</label>
                            <input ref={this.cajaId} type="number" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Marca</label>
                            <input ref={this.cajaMarca} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Modelo</label>
                            <input ref={this.cajaModelo} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Conductor</label>
                            <input ref={this.cajaConductor} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                        </div>
                        <div className="mb-4">
                            <label className="mb-1 block font-medium text-gray-700">Imagen URL</label>
                            <input ref={this.cajaImagen} type="text" className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                        </div>
                        <button onClick={this.createCoche} className="rounded-md bg-blue-300 px-4 py-2 font-medium text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">Crear</button>

                    </form>
                </div>

                );
        }
    
  }
}
