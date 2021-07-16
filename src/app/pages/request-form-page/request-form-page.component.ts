import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrationModel } from 'src/app/core/models';
import { ResourceLoader } from '@angular/compiler';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'hw-request-form-page',
  templateUrl: './request-form-page.component.html',
  styleUrls: ['./request-form-page.component.scss']
})
export class RequestFormPageComponent implements OnInit {
  public houses: any[] = [ "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  public form: FormGroup;
  private id: number = 0;

  constructor(private route: ActivatedRoute,
              private enrollment: EnrollmentService) { 
    this.form = this.setForm();
  }

  private setForm(data?: RegistrationModel) {
    return new FormGroup({
      'id': new FormControl(data?.id),
      'name': new FormControl(data?.name, Validators.compose([Validators.required, Validators.maxLength(20)])),
      'lastname': new FormControl(data?.lastname, Validators.compose([Validators.required, Validators.maxLength(20)])),
      'identification': new FormControl(data?.identification, Validators.compose([Validators.required, Validators.min(1), Validators.max(9999999999)])),
      'age': new FormControl(data?.age, Validators.compose([Validators.required, Validators.min(8), Validators.max(99)])),
      'house': new FormControl(data?.house, Validators.required),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.enrollment.get(parseInt(id)).subscribe(res => {
      this.form = this.setForm(res);
    });
    
  }

  public async save() {
    const data = this.form.value;
    const all = await this.enrollment.getAll().toPromise();
    const prev = all.find(f => f.identification == data.identification);
    if (prev && !data.id) {
      alert("Ya existe un registro con esta identificacion");
      return;
    }
    await this.enrollment.set(data).toPromise();
    alert("Cambios Realizados");
    location.pathname = "requests";
  }

}
