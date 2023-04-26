import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { PATHS_AUTH_PAGES, PATH_MAINTENANCE_PAGES } from 'src/app/commons/config/path-pages';
import { ChannelHeaderService } from 'src/app/commons/services/local/channel-header.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	private _Router = inject(Router);
	private _channelHeaderService = inject(ChannelHeaderService);
	private _formBuilder = inject(FormBuilder);
	//constructor(private _Router: Router, private _channelHeaderService: ChannelHeaderService) {}

	title = 'INICIO DE SESIÓN';
	readonly pathRecovery = PATHS_AUTH_PAGES.recoverPasswordPage.withSlash;
	readonly pathRegister = PATHS_AUTH_PAGES.registerPage.withSlash;
	disabledButton = false;

	ngOnInit(): void {
		console.log('Method not implemented.');
	}

	//VALIDACIONES
	formGroup = this._formBuilder.nonNullable.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	clickLogin(): void {
		console.log(this.formGroup.getRawValue());
		if (this.formGroup.valid) {
			this._channelHeaderService.showUser(true);
			void this._Router.navigateByUrl(PATH_MAINTENANCE_PAGES.withSlash);
		}
		//OBTENER EL VALOR DE UN COMPONENTE
		//console.log(this.formGroup.controls.email.value);

		//VALIDACIONES SI ES VALIDO EL FORMULARIO
		//console.log(this.formGroup.invalid);
		//console.log(this.formGroup.pending);
		//console.log(this.formGroup.disabled);
	}
}
