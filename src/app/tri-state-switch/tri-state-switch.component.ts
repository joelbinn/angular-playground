import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tri-state-switch',
  templateUrl: './tri-state-switch.component.html',
  styleUrls: ['./tri-state-switch.component.scss']
})
export class TriStateSwitchComponent implements OnInit {
  state = 0;
  private ascending = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSwitch() {
    switch (this.state) {
      case 0:
        this.state = 1;
        this.ascending = true;

        break;
      case 1:
        if (this.ascending) {
          this.state = 2;
        } else {
          this.state = 0;
        }
        break;
      case 2:
        this.state = 1;
        this.ascending = false;
        break;
    }
  }

  setState(state: number) {
    this.state = state;
  }
}
