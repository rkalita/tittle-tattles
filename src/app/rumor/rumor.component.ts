import { Component, OnInit } from '@angular/core';
import { RumorService } from './shared/rumor.service'
import { Rumor } from './shared/rumor'

@Component({
  selector: 'app-rumor',
  templateUrl: './rumor.component.html',
  styleUrls: ['./rumor.component.scss'],
  providers: [RumorService]
})

export class RumorComponent implements OnInit {
  rumors: Array<Rumor>
  constructor(
    private rumorService: RumorService
  ) {
    this.rumors = rumorService.list();
  }

  ngOnInit() {
  }

}
