import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../../core/assets-loader/assets-loader.service';
import { FormGroup, Validators, FormBuilder, FormArray, ValidationErrors } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/core/services/profile/profile.service';

@Component({
  selector: 'app-profile-insert',
  templateUrl: './profile-insert-update.component.html',
  styleUrls: ['./profile-insert-update.component.css'],
  providers: []
})

export class ProfileInsertComponent implements OnInit {

  public profileData: any;
  protected title: string | undefined;
  protected source: ScriptService;
  protected profileId: string | undefined;
  protected profileInsertFormGroup: any;
  protected updateSuccess: string | boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private ProfileService: ProfileService,
    private formBuilder: FormBuilder
  ) {
    this.profileId = this.actRoute.snapshot.params['profileId'];
    this.source = new ScriptService();
  }

  ngOnInit() {
    this.title = document.title
    console.log(document.title);
    this.formBuilderValidation();
    this.editProfile();
  }

  editProfile() {
    // eslint-disable-next-line no-restricted-globals
    if (history.state.profile) {
      // eslint-disable-next-line no-restricted-globals
      this.formBuilderFn(history.state.profile);
    } else if (this.profileId) {
      const options = { queryParams: { "filter[_id]": this.profileId } };
      this.ProfileService.getRecords(options).subscribe((res: { data: any[]; }) => {
        this.formBuilderFn(res.data[0]);
      });
    }
  }

  formBuilderFn(data: any) {
    const formArrayList = ['services', 'experience', 'education', 'social', 'skill'];
    formArrayList.forEach(shortName => {
      let attributeName = this.shortIntoAttributeName(shortName);
      let actions = this.profileInsertFormGroup.get(attributeName) as FormArray;
      actions.clear();
      data[attributeName].map((action: any) => actions.push(this.dynamicFn(shortName)));
    });
    this.profileInsertFormGroup.patchValue(data);
  }

  dynamicFn(shortName: string) {
    // eslint-disable-next-line no-eval
    return eval(
      "this." + shortName + "FormBuilderGroup()"
    );
  }

  shortIntoAttributeName(shortName: string) {
    let attribOriginalNames: any = { social: 'social_media', skill: 'skills_and_percentage' }
    return attribOriginalNames[shortName] === undefined ? shortName : attribOriginalNames[shortName];
  }

  ngAfterViewInit() {
    this.source.scriptLoad([
      'chart', 'plugins', 'search', 'custom', 'customizer', 'uiAlerts'
    ]).then((data: any) => {
      console.log('script loaded ', data);
    }).catch((error: any) => console.log(error))
  }

  profileInsertOrUpdate() {
    if (this.getFormValidationErrors() === 0) {
      const id = typeof this.profileId === 'undefined' ? null : this.profileId;
      this.ProfileService.insertOrUpdate(id, this.profileInsertFormGroup.value).subscribe((res: any) => {
        if (typeof res.data !== 'undefined') {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          this.updateSuccess = res.data.meta.message;
          if (!id) { this.profileInsertFormGroup.reset(); }
          return true;
        }
        console.log(res);
        return false;
      });
    }
  }

  getFormValidationErrors() {
    let totalErrors = 0;
    Object.keys(this.profileInsertFormGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.profileInsertFormGroup.get(key).errors;
      if (controlErrors != null) {
        totalErrors++;
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
    console.log('Number of errors: ', totalErrors);
    return totalErrors;
  }

  add(name: string): void {
    let attributeName = this.shortIntoAttributeName(name);
    this.profileInsertFormGroup.get(attributeName).push(this.dynamicFn(name));
  }

  remove(name: string, index: number): void {
    let attributeName = this.shortIntoAttributeName(name);
    this.profileInsertFormGroup.get(attributeName).removeAt(index);
  }

  formBuilderValidation() {
    this.profileInsertFormGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(50)
      ]),
      my_self: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(300)
      ]),
      about_me: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(300)
      ]),
      about_my_profile: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(500)
      ]),
      email: this.formBuilder.control(
        { value: '', disabled: false },
        [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(50)]
      ),
      dob: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(150),
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ]),
      skills: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(500)
      ]),
      hobbies: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(500)
      ]),
      services: this.formBuilder.array([this.servicesFormBuilderGroup()]),
      experience: this.formBuilder.array([this.experienceFormBuilderGroup()]),
      education: this.formBuilder.array([this.educationFormBuilderGroup()]),
      social_media: this.formBuilder.array([this.socialFormBuilderGroup()]),
      skills_and_percentage: this.formBuilder.array([this.skillFormBuilderGroup()])
    })
  }

  servicesFormBuilderGroup(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(100)
      ]),
      description: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(150)
      ])
    });
  }

  experienceFormBuilderGroup(): FormGroup {
    return this.formBuilder.group({
      company_name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(100)
      ]),
      designation: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(60)
      ]),
      location: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(50)
      ]),
      start_date: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
      end_date: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
    })
  }

  educationFormBuilderGroup(): FormGroup {
    return this.formBuilder.group({
      institution_name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(100)
      ]),
      qualification: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(60)
      ]),
      location: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(60)
      ]),
      start_date: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
      end_date: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
    })
  }

  socialFormBuilderGroup(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
      url: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(60)
      ]),
    })
  }

  skillFormBuilderGroup(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ]),
      percentage: this.formBuilder.control('', [
        Validators.required, Validators.min(1), Validators.max(100)
      ])
    })
  }

}
