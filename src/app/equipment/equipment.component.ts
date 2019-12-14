import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"]
  itemBeingEdited: string = null


  constructor() { }

  ngOnInit() {
  }

  editItem(item: string): void {
    this.itemBeingEdited = item;
  }

  removeFromEquipment(item: string): void {
    this.equipment.splice(this.equipment.indexOf(item),1);
  }

  saveItem(newName: string, item: string): void {
    if(! this.equipment.includes(newName)){
      this.equipment[this.equipment.indexOf(item)] = newName;
      this.itemBeingEdited = null;
    }
  }

  addToEquipment(newItem: string): void {
    if(! this.equipment.includes(newItem)){
      this.equipment.push(newItem);
    }
  }

}
