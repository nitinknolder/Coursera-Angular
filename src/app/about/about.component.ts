import {Component, OnInit} from '@angular/core';
import {Leader} from '../Shared/leader';
import {LeadersService} from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;
  constructor(private leaderService: LeadersService) {
  }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.errMess = <any>errmess);
  }

}
