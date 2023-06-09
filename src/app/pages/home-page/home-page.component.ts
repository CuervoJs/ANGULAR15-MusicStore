import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CardEventComponent } from '../../commons/components/card-event/card-event.component';
import { SharedFormCompleteModule } from '../../commons/shared/shared-form-complete.module';
import { HomeApiService } from 'src/app/commons/services/api/home/home-api.service';
import { ICardEvent } from 'src/app/commons/models/components.interface';
import { IHomeGenres } from 'src/app/commons/services/api/home/home-api.interface';
import { PATH_BUY_PAGES } from 'src/app/commons/config/path-pages';
import { Router } from '@angular/router';
import { DemoCorsService } from 'src/app/commons/services/api/demo-cors/demo-cors.service';

@Component({
	standalone: true,
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	imports: [SharedFormCompleteModule, CardEventComponent]
})
export class HomePageComponent implements OnInit {
	@ViewChild('cardDummy') cardDummy?: CardEventComponent;

	private _homeApiService = inject(HomeApiService);
	private _router = inject(Router);
	private _demoCorsService = inject(DemoCorsService);

	listConcerts: ICardEvent[] = [];
	listGenres: IHomeGenres[] = [];

	cardEventDummy: ICardEvent = {
		date: '20/03/2023',
		description: 'xxxx',
		genre: 'ROCK',
		place: 'ccccc',
		hour: '22:00',
		idEvent: 1,
		price: 200,
		title: 'ESTO ES UN DEMO',
		urlImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
	};

	ngOnInit(): void {
		this._loadHome();

		//this._demoCorsService.getGreeting().subscribe();
	}

	clickCard(event: ICardEvent): void {
		this._router.navigate([PATH_BUY_PAGES.buyPage.withSlash], { state: { event } });
	}

	private _loadHome() {
		this._homeApiService.getHome().subscribe((response) => {
			this.listGenres = response.genres;
			this.listConcerts = response.getDataCardEvent();
		});
	}
}
