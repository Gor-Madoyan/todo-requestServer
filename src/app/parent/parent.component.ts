import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { DataServer } from '../interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  datas:DataServer[] = []
  count:number = 0
  time: any = 0
  constructor(private _reciveData:TodoService) { }

  ngOnInit(): void {
    this._reciveData.getData()
    .subscribe(data=>this.datas = data)

  };

  deletItem(val:number) {
    this.datas.forEach((value, i)=>{
      if(val === value.id) {
        this.datas.splice(i,1)
      }
    })   
  };

  serachItem(inp:any) {
     
    this.count++
    if(this.count) {
      
     this.time =  setTimeout(()=>{
        this.datas.filter((value)=>{
  
          return inp.value === value.userName
         }).map((val,i)=>{
           this.datas = []
           this.datas[i] = val

           
         })
        
      },2000)
  
    }else {
      this.count = 0
      clearTimeout(this.time)
    }
  }
  

}
