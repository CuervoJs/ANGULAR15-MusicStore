import { Component, OnInit } from '@angular/core';
import { CardEventComponent } from '../../commons/components/card-event/card-event.component';
import { SharedFormCompleteModule } from '../../commons/shared/shared-form-complete.module';
import { HomeApiService } from 'src/app/commons/services/api/home/home-api.service';
import { ICardEvent } from 'src/app/commons/components/models/components.interface';
import { IHomeGenres } from 'src/app/commons/services/api/home/home-api.interface';

@Component({
	standalone: true,
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	imports: [SharedFormCompleteModule, CardEventComponent]
})
export class HomePageComponent implements OnInit {
	constructor(private _homeApiSerice: HomeApiService) {}

	listConcerts: ICardEvent[] = [];
	listGenres: IHomeGenres[] = [];

	ngOnInit(): void {
		this._homeApiSerice.getHome().subscribe((response) => {
			this.listConcerts = response.getDataCardEvent();
			this.listGenres = response.genres;
		});
	}

	clickCard(event: ICardEvent): void {
		console.log('-------CLICK CARD--------', event);
	}
}
