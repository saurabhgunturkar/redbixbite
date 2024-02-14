import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-approve-cleaning-agency',
  templateUrl: './approve-cleaning-agency.component.html',
  styleUrls: ['./approve-cleaning-agency.component.css']
})
export class ApproveCleaningAgencyComponent implements OnInit {
  index = 0;
  datas = Data;

  ngOnInit() {
    console.log(this.datas);
    debugger;
  }

  search(
    agencyName: HTMLInputElement,
    customCode: HTMLInputElement,
    establishmentId: HTMLInputElement,
    status: any,
    agencyType: any
  ) {
    this.datas = Data.filter(res =>
      (agencyName.value && res.AgencyName.toLowerCase().includes(agencyName.value.toLowerCase())) ||
      (customCode.value && res.CustomCode.toLowerCase().includes(customCode.value.toLowerCase())) ||
      (establishmentId.value && res.EstablishmentID.toLowerCase().includes(establishmentId.value.toLowerCase())) ||
      (status.value && res.status.toLowerCase().includes(status.value.toLowerCase())) ||
      (agencyType.value && res.AgencyType.toLowerCase().includes(agencyType.value.toLowerCase()))
    );
  }
}
