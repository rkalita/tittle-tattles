import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
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
    private rumorService: RumorService,
    public dialog: MdDialog
  ) {
    this.rumors = rumorService.list();
  }

  ngOnInit() {
  }

  add() {
    let dialogRef = this.dialog.open(DialogAddRumorComponent, {
      width: '300px',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'dialog-add-rumor',
  templateUrl: './shared/dialogAddRumor.component.html',
  styleUrls: ['./shared/dialogAddRumor.component.scss'],
})

export class DialogAddRumorComponent {
  constructor(public dialogRef: MdDialogRef<DialogAddRumorComponent>) {}
}
