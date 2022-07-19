import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-header-opening',
  templateUrl: './header-opening.component.html',
  styleUrls: ['./header-opening.component.scss']
})
export class HeaderOpeningComponent implements OnInit {
  isMobileMode: boolean = false; 

  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit(): void {
    this.isMobileMode = this.applicationStateService.getIsMobileResolution();

  }

}
