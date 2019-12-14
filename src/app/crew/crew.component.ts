import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  addToCrew(memberName: string, isFirst: boolean): void {
    if(memberName.length > 0){
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }

  removeFromCrew(member: object): void {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  editMember(member: object) {
    this.memberBeingEdited = member;
  }

  saveMember(updatedName: string, member: object): void {
    member['name'] = updatedName;
    this.memberBeingEdited = null;
  }

}
