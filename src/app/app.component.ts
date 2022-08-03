import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { FormBuilder } from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts:any;
  myJson:any=JSON;
  productos:any;

  clienteForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    direccion: '',
    fecha_nacimiento: '',
    telefono: '',
    email: ''
  });
  productoForm = this.formBuilder.group({
    nombre: '',
    precio: '',
    stock: ''
  });
  constructor(private service:PostService,private formBuilder: FormBuilder) {
    
  }  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          console.log(response);          
         return this.posts = response;
        });
      this.service.getProductos()
        .subscribe(response =>{
          return this.productos= response;
        });
        
      
  }
  onSubmit(): void {
    // Process checkout data here
    let formData:any=new FormData();
    formData.append("nombre",this.clienteForm.get("nombre")?.value);
    formData.append("apellido",this.clienteForm.get("apellido")?.value);
    formData.append("direccion",this.clienteForm.get("direccion")?.value);
    formData.append("fecha_nacimiento",this.clienteForm.get("fecha_nacimiento")?.value);
    formData.append("telefono",this.clienteForm.get("telefono")?.value);
    formData.append("email",this.clienteForm.get("email")?.value);
    this.service.addCliente(formData);
    console.warn('Your order has been submitted', this.clienteForm.value);
    this.clienteForm.reset();
    alert("Usuario agregado exitosamente");
  }
  onSubmitProducto(): void {
    // Process checkout data here
    let formData:any=new FormData();
    formData.append("nombre",this.productoForm.get("nombre")?.value);
    formData.append("precio",this.productoForm.get("precio")?.value);
    formData.append("stock",this.productoForm.get("stock")?.value);
    this.service.addProducto(formData);
    console.warn('Your order has been submitted', this.productoForm.value);
    this.productoForm.reset();
    alert("Producto agregado exitosamente");
  }
}