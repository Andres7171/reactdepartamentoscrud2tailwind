import axios from "axios";
import Global from "../Global";

export default class ServiceCoches{
    async getCoches(){
        let url =Global.urlCoches
        let request='api/coches'
        let reponse=await axios.get(url+request)
        return reponse.data
    }
}