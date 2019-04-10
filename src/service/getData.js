import axios from 'axios'
import '../config/http'
import {clienturl} from '../config/env'

export const getnews = function(id,page,gv) {
  var data = axios.post(clienturl+'ClientNews?id='+id+'&page='+page+'&gv='+gv)
  return data
}
