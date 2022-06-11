import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public info: any;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['Id', 'Nombre', 'Nota', 'Editar', 'Eliminar'];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.dataSource = new MatTableDataSource();
    this.info = data;
  }

  ngOnInit(): void {
    console.log(this.info);
    this.dataSource = new MatTableDataSource(this.info.data.inscripciones);
  }

}
