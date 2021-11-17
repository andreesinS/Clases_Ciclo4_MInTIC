import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const crypto = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  GenerarClave(){
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave:string){
    let claveCifrada = crypto.MD5(clave).toString();
    return claveCifrada;
  }

}
