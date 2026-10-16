import axios from "axios";
import Global from "../Global";

export default class ServiceCoches {
  async getCoches() {
    let url = Global.urlCoches;
    let request = "api/coches";
    let reponse = await axios.get(url + request);
    return reponse.data;
  }

  async createCoche(coche) {
    let url = Global.urlCoches;
    let request = "api/coches/insertcoche";
    try {
      let response = await axios.post(url + request, coche);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async editCoche(coche) {
    let url = Global.urlCoches;
    let request = "api/coches/updatecoche";
    try {
      let response = await axios.put(url + request, coche);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
