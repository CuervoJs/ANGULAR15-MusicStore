import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedFormBasicModule } from '../../commons/shared/shared-form-basic.module';

@Component({
	standalone: true,
	selector: 'app-recovery-password-page',
	templateUrl: './recovery-password-page.component.html',
	styleUrls: ['./recovery-password-page.component.scss'],
	imports: [RouterModule, SharedFormBasicModule]
})
export default class RecoveryPasswordPageComponent {}