import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {
	NbCardModule,
	NbButtonModule,
	NbInputModule,
	NbIconModule,
	NbDialogModule,
	NbActionsModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { TagsColorInputModule } from '../../@shared/tags/tags-color-input/tags-color-input.module';
import { TableComponentsModule } from '../../@shared/table-components/table-components.module';
import { SharedModule } from '../../@shared/shared.module';
import { EmployeeLevelComponent } from './employee-level.component';
import { EmployeeLevelRoutingModule } from './employee-level-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { TranslateModule } from '../../@shared/translate/translate.module';
import { HeaderTitleModule } from '../../@shared/components/header-title/header-title.module';
import { GauzyButtonActionModule } from '../../@shared/gauzy-button-action/gauzy-button-action.module';

@NgModule({
	imports: [
		SharedModule,
		ThemeModule,
		NbCardModule,
		FormsModule,
		NbButtonModule,
		EmployeeLevelRoutingModule,
		NbInputModule,
		NbIconModule,
		TagsColorInputModule,
		NbActionsModule,
		CardGridModule,
		Ng2SmartTableModule,
		NbDialogModule,
		TableComponentsModule,
		TagsColorInputModule,
		NbActionsModule,
		NbDialogModule.forChild(),
		TranslateModule,
		HeaderTitleModule,
    GauzyButtonActionModule
	],
	declarations: [EmployeeLevelComponent],
	providers: []
})
export class EmployeeLevelModule {}
