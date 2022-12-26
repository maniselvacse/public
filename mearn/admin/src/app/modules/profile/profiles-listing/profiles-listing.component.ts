import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../../core/assets-loader/assets-loader.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ProfileInterface } from '../profile-interface';

declare const triggerSwal: any;

@Component({
  selector: 'app-profiles-listing',
  templateUrl: './profiles-listing.component.html',
  styleUrls: ['./profiles-listing.component.css']
})
export class ProfilesListingComponent implements OnInit {

  protected title: string | undefined;
  protected profiles$: ProfileInterface[] | undefined;
  protected include: ScriptService;
  protected deletedSuccess: boolean | string = false;

  constructor(public ProfileService: ProfileService) {
    this.include = new ScriptService();
  }

  ngOnInit(): void {
    this.title = document.title

    this.ProfileService.getRecords().subscribe(res => {
      this.profiles$ = res.data;
    });
  }

  ngAfterViewInit() {
    this.include.linksLoad([
      'sweetAlert', 'flagIcon', 'jqueryDataTables', 'responsiveDataTables', 'selectDataTables',
      'dataTables'
    ]).then((data: any) => {
      console.log('links loaded ', data);
    }).catch((error: any) => console.log(error))

    this.include.scriptLoad([
      'sweetAlert', 'jqueryDataTables', 'dataTableResponsive', 'dataTableSelect',
      'plugins', 'search', 'custom', 'customizer', 'dataTables', 'uiAlerts', 'sweetAlertExtraComponents'
    ]).then((data: any) => {
      console.log('script loaded ', data);
    }).catch((error: any) => console.log(error))
  }

  profileDelete(id: any) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure want to delete?") === true) {
      this.ProfileService.deleteProfile(id).subscribe((res: any) => {
        if (res.meta.message) {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          this.profiles$?.splice(id, 1);
          triggerSwal(res.meta.message);
          return true;
        }
        return false;
      });
    }
  }
}
