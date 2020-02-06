import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  states: Array<String> = ['TN', 'FR', 'US', 'IN'];
  nestedForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, Validators.required],
      address: this._fb.array([this.addAddressGroup()])
    });
  }

  addAddressGroup() {
    return this._fb.group({
      primaryFlg: [],
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, Validators.required]
    });
  }

  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.nestedForm.get('address');
  }

  get firstName() {
    return this.nestedForm.get('firstName');
  }

  get lastName() {
    return this.nestedForm.get('lastName');
  }


  submitHandler() {
    if (this.nestedForm.valid) {
      console.log("success");
    }

  }

}
