import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
selector: 'app-client',
standalone: true,
imports: [ReactiveFormsModule],     // ajouter cette ligne
templateUrl: './client.component.html',
styleUrl: './client.component.css'
})
export class ClientComponent {


applyForm = new FormGroup({    // ajouter ce bloc
     name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  submitApplication() {
    this.applyForm.value.name ?? '';
    this.applyForm.value.email ?? '';
    this.applyForm.value.address ?? '';
    this.applyForm.value.phone ?? '';

     alert(this.applyForm.value.name)
  }
}
