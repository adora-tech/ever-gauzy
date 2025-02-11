import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualTimeRoutingModule } from './manual-time-routing.module';
import { ManualTimeComponent } from './manual-time/manual-time.component';
import { SharedModule } from '../../../@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {
	NbIconModule,
	NbSpinnerModule,
	NbCardModule,
	NbSelectModule,
	NbBadgeModule
} from '@nebular/theme';
import { HeaderTitleModule } from '../../../@shared/components/header-title/header-title.module';
import { DateRangeTitleModule } from '../../../@shared/components/date-range-title/date-range-title.module';
import { GauzyFiltersModule } from '../../../@shared/timesheet/gauzy-filters/gauzy-filters.module';
import { ProjectColumnViewModule } from "../../../@shared/report/project-column-view/project-column-view.module";

@NgModule({
	declarations: [ManualTimeComponent],
	imports: [
		CommonModule,
		ManualTimeRoutingModule,
		SharedModule,
		TranslateModule,
		NbIconModule,
		NbSpinnerModule,
		NbCardModule,
		NbSelectModule,
		FormsModule,
		NbBadgeModule,
		HeaderTitleModule,
		DateRangeTitleModule,
		GauzyFiltersModule,
		ProjectColumnViewModule,
	],
})
export class ManualTimeModule {}
