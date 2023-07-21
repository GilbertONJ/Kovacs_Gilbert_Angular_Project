import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManipulationService {

   title = document.createElement('input');
   opinion = document.createElement('input');
   id =" "

  constructor() { }

  loading(id: string, key: string) {
    let content: string | null = localStorage.getItem(key);
    let contentArray: Array<string> | undefined = content?.split(',');
    let div = document.getElementById(id);


    if (typeof contentArray !== 'undefined') {
      for (let i = 0; i < contentArray.length; i+=2) {
        let table = document.createElement('table');
        let tr = document.createElement('tr');
        let tr_second = document.createElement('tr');
        let td = document.createElement('td');
        let th = document.createElement('th');

        th.innerHTML = contentArray[i];
        td.innerHTML = contentArray[i + 1];

        tr.appendChild(th);
        tr_second.appendChild(td);


        table.appendChild(tr);
        table.appendChild(tr_second);
        table.classList.add('opinions');
        div?.appendChild(table);
        console.log('Success');
      }
    }
  }


  adding(nameId: string) {
   this.id=nameId;
    let div = document.getElementById(nameId);
    let firstTitle = document.createElement('h3');
    let secondTitle = document.createElement('h3');
    let cencel = document.createElement('button');
    let addB = document.createElement('button');
    let containsButtons = document.createElement('div');
    cencel.innerHTML = "Cencel";
    addB.innerHTML = "Add";
    cencel.addEventListener('click', this.divDelete.bind(this));
    addB.addEventListener('click', this.addNewData.bind(this))
    containsButtons.classList.add('button-div');

    containsButtons.appendChild(cencel);
    containsButtons.appendChild(addB);
    firstTitle.innerHTML = "Title";
    secondTitle.innerHTML = "Opinion";
    let insideDiv = document.createElement('div');
    insideDiv.classList.add("insdie-div");
    insideDiv.id = "inside-div-id"

    let formDiv = document.createElement('div');
    
    this.title.placeholder = "Give me a title..."
    this.title.type = 'text';
    this.title.id = "titleInput"
    this.opinion.id = "opinionTextArea"
    this.opinion.type="textArea"
  


    formDiv.appendChild(firstTitle);
    formDiv.appendChild(this.title);
    formDiv.appendChild(secondTitle);
    formDiv.appendChild(this.opinion);
    formDiv.appendChild(containsButtons);

    formDiv.classList.add('form-div');
    insideDiv.appendChild(formDiv);


    document.body.appendChild(insideDiv);
    console.log("Adding");
  }

  divDelete() {
    let div = document.getElementById('inside-div-id');
    div?.remove()
  }

  addNewData() {

    const t =this.title.value;
    const o = this.opinion.value

    let storageContentString: string | null  = localStorage.getItem(this.id)
    storageContentString+=","+t+","+o
    if(storageContentString){
    localStorage.setItem(this.id,storageContentString)  
    }
    
    this.divDelete()
    location.reload()
 

  }

}
