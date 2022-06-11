import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild('detail') detail: TemplateRef<any>;
  @ViewChild('newInscription') newInscription: TemplateRef<any>;
  @ViewChild('edit') edit: TemplateRef<any>;

  public dataSource: MatTableDataSource<any>;
  public dataSource2: MatTableDataSource<any>;
  public studentSelected: any;
  public newCourse: any;
  public courseToEdit: any;
  public courseEdited: any;
  public courseEditedNota: any;
  public nota: any;
  public cursos: any = [{
    id: 1,
    nombre: 'Angular',
    duracion: '2 meses'
  },
  {
    id: 2,
    nombre: 'React',
    duracion: '1 meses'
  },
  {
    id: 2,
    nombre: 'Sequelize',
    duracion: '2 meses'
  }]
  public displayedColumns: string[] = ['position', 'name', 'years', 'email', 'new', 'inscriptions'];
  public displayedColumns2: string[] = ['Id', 'Nombre', 'Nota', 'Editar', 'Eliminar'];
  public data: any = [
    {
      position: 1, name: 'Agustin Pulido', years: 28, email: 'aguspulido14@gmail.com', inscripciones: [
        {
          id: 9,
          Nombre: 'Angular',
          Nota: 3,
        },
        {
          id: 8,
          Nombre: 'React',
          Nota: 9,
        },
        {
          id: 10,
          Nombre: 'Sequelize',
          Nota: 8,
        }
      ]
    },
    {
      position: 2, name: 'Lucas Hess', years: 76, email: 'lucashess@gmail.com', inscripciones: [
        {
          id: 9,
          Nombre: 'Angular',
          Nota: 3,
        }
      ]
    },
    {
      position: 3, name: 'Ricardo Galan', years: 31, email: 'ricardogalan@hotmail.com', inscripciones: [
        {
          id: 9,
          Nombre: 'Angular',
          Nota: 3,
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.dataSource2 = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  openModal(details: any): void {
    this.studentSelected = details;
    this.dataSource2 = new MatTableDataSource(details.inscripciones);
    let dialogRef = this.dialog.open(this.detail, { disableClose: false });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  openEditModal(details: any): void {
    this.courseToEdit = details;
    let dialogRef = this.dialog.open(this.edit, { disableClose: false });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  newInscriptionModal(details: any): void {
    this.studentSelected = details;
    let dialogRef = this.dialog.open(this.newInscription, { disableClose: false });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  deleteInscription(inscription: any) {
    let index = this.studentSelected.inscripciones.indexOf(inscription);
    this.data[this.data.indexOf(this.studentSelected)].inscripciones.splice(index, 1);
    this.dataSource2 = new MatTableDataSource(this.data[this.data.indexOf(this.studentSelected)].inscripciones);
  }

  newInscribe() {
    this.data[this.data.indexOf(this.studentSelected)].inscripciones.push({ id: this.newCourse.id, Nombre: this.newCourse.nombre, Nota: this.nota });
    this.newCourse = undefined;
    this.nota = undefined;
  }

  editInscription() {
    let studentIndex = this.data.indexOf(this.studentSelected);
    let inscriptionIndex = this.studentSelected.inscripciones.indexOf(this.courseToEdit);
    if (this.courseEdited) {
      this.data[studentIndex].inscripciones[inscriptionIndex].Nombre = this.courseEdited.nombre;
    }
    if (this.courseEditedNota) {
      this.data[studentIndex].inscripciones[inscriptionIndex].Nota = this.courseEditedNota;
    }
  }

}
