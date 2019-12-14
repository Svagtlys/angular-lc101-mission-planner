import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"]
  itemBeingEdited = null

  constructor() { }

  ngOnInit() {
  }

  editItem(item: string): void {
    this.itemBeingEdited = item;
  }

  removeFromExperiments(item: string): void {
    this.experiments.splice(this.experiments.indexOf(item),1);
  }

  saveItem(newName: string, item: string): void {
    if(! this.experiments.includes(newName)){
      this.experiments[this.experiments.indexOf(item)] = newName;
      this.itemBeingEdited = null;
    }
  }

  addToExperiments(newItem: string): void {
    if(! this.experiments.includes(newItem)){
      this.experiments.push(newItem);
    }
  }

}
