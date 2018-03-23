import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[] = [
    {
      name: 'Naturliga kakor',
      applications: [
        {
          no: 'aa-zz-0001',
          status: 'Inskickad',
          caze: {
            no: 20203000,
            status: 'Beredning pågår'
          }
        },
        {
          no: 'aa-zz-0001',
          status: 'Ej inskickad'
        }
      ]
    },
    {
      name: 'Miljövänliga bananer',
      applications: [
        {
          no: 'bb-zz-0001',
          status: 'Inskickad',
          caze: {
            no: 20203100,
            status: 'I väntan'
          }
        }
      ]
    }
    ];

  savePdf() {
    const doc = new jsPDF();
    const elementHandler = {};
    const source = window.document.getElementById('pdf');
    doc.fromHTML(
      source,
      15,
      15,
      {
        'width': 180, 'elementHandlers': elementHandler
      });

    doc.output('dataurlnewwindow');
  }

  fileSelected() {
    FileSaver.saveAs(
      new Blob(
        ['Kaka;Banan;'],
        {type: 'application/octet-stream;charset=utf-8'}
      ),
      'payment.csv'
    );
  }
}

export interface Case {
  no: number;
  status: string;
}

export interface Application {
  no: string;
  status: string;
  caze?: Case;
}

export interface Project {
  name: string;
  applications: Application[];
}
