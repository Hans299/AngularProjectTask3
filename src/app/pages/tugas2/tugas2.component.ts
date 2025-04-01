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
    },
    {
      nama:'Budi',
      semester:'2',
      MataKuliah:'Fisika',
    },
    {
      nama:'Siti',
      semester:'3',
      MataKuliah:'Ekonomi',
    },
    {
      nama:'Rina',
      semester:'4',
      MataKuliah:'Biologi',
    },
    {
      nama:'Dani ',
      semester:'5',
      MataKuliah:'Sosiologi',
    },
    {
      nama:'Joko',
      semester:'6',
      MataKuliah:'Kimia',
    },
    {
      nama:'Lilis',
      semester:'7',
      MataKuliah:'Sejarah',
    },
    {
      nama:'Rudi',
      semester:'8',
      MataKuliah:'Seni',
    },
    {
      nama:'Tini',
      semester:'9',
      MataKuliah:'Geografi',
    },
    {
      nama:'Wawan',
      semester:'10',
      MataKuliah:'Sidang',
    },
  ]
  status:string='Aktif'
}
