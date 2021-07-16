import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { HwDataService } from 'src/app/services/hw-data.service';

@Component({
  selector: 'hw-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {
  public house: any = {};
  public houses: any[] = [ 
    {name: "Gryffindor", phrase: "Valientes y Atrevidos"},
    {name: "Hufflepuff", phrase: "Trabajo duro, Paciencia, Lealtad"},
    {name: "Ravenclaw", phrase: "Inteligencia sin límite"},
    {name: "Slytherin", phrase: "Pureza de Sangre"}
  ];
  public characters: any[] = [];

  constructor(private hw: HwDataService) { 
    this.house = this.houses[0];
    this.reload();
  }

  ngOnInit(): void {
  }

  public reload(evn?: any) {
    this.hw.getCharacters(this.house.name).subscribe(res => {
      this.characters = res;
    });
  }

}
