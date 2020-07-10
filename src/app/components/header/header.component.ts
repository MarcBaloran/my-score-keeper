import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  // allplayers:{team: string, score: number}[];
  // scores: {[key:string]: number}

  ngOnInit(): void {

    // this.allplayers.reduce((score,currPlayer) => ({
    //   ...score,
    //   [score[currPlayer.team]]: (score[currPlayer.team] || 0) + currPlayer.score 
    // }), {});


    // const allPlayersInTeam1: {team: string, score: number}[];

    // allPlayersInTeam1.reduce((accumulator, currPlayer) => accumulator + currPlayer.score, 0)
  }



    /*
{
  team1: 46,
  team2: 46
}

//before anything executes
{

}

after player1 { }
{
  team1 : 1
}


    */





}
