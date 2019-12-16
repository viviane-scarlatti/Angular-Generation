import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListawebService {

  // isso chamamos de Injeção de Dependência

  constructor(private http: HttpClient) { }

  public obterTarefas(){
    return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }

}
