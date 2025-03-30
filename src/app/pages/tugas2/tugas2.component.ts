import { Component } from '@angular/core';

@Component({
  selector: 'app-tugas2',
  templateUrl: './tugas2.component.html',
  styleUrls: ['./tugas2.component.scss']
})
export class Tugas2Component {
  tugas2:any[]=[
    {
      nama:'Andi',
      semester:'1',
      MataKuliah:'Matematika',
      status:['Aktif']
    },
    {
      nama:'Budi',
      semester:'2',
      MataKuliah:'Fisika',
      status:['Izin']
    },
    {
      nama:'Siti',
      semester:'3',
      MataKuliah:'Ekonomi',
      status:['Aktif']
    },
    {
      nama:'Rina',
      semester:'4',
      MataKuliah:'Biologi',
      status:['DO']
    },
    {
      nama:'Dani ',
      semester:'5',
      MataKuliah:'Sosiologi',
      status:['Aktif']
    },
    {
      nama:'Joko',
      semester:'6',
      MataKuliah:'Kimia',
      status:['Izin']
    },
    {
      nama:'Lilis',
      semester:'7',
      MataKuliah:'Sejarah',
      status:['Aktif']
    },
    {
      nama:'Rudi',
      semester:'8',
      MataKuliah:'Seni',
      status:['Do']
    },
    {
      nama:'Tini',
      semester:'9',
      MataKuliah:'Geografi',
      status:['Aktif']
    },
    {
      nama:'Wawan',
      semester:'10',
      MataKuliah:'Sidang',
      status:['Aktif']
    },
  ]

}
