import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    isMobileMode: boolean = false; 

  constructor(private applicationStateService: ApplicationStateService) { }

  ngOnInit(): void {
    this.isMobileMode = this.applicationStateService.getIsMobileResolution();

  }

}

