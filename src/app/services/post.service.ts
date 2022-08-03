import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = '/demo/cliente/all';
  private urlGetProductos = '/demo/producto/all';
  private urlAgregarCliente = '/demo/cliente/add';
  private urlAgregarProducto ='/demo/producto/add';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    console.log("hola posts")
    console.log(this.httpClient.get(this.url));
    return this.httpClient.get(this.url);
  }
  getProductos(){
    return this.httpClient.get(this.urlGetProductos);
  }
  addCliente(cliente:any){
    this.httpClient.post(this.urlAgregarCliente,cliente).subscribe((response)=>console.log(response));
  }
  addProducto(producto:any){
    this.httpClient.post(this.urlAgregarProducto,producto).subscribe((response)=>console.log(response));
  }
}