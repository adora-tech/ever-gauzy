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
import { OrganizationPositionsService } from '../../@core/services/organization-positions';
import { SharedModule } from '../../@shared/shared.module';
import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions.component';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
		NbInputModule,
		NbIconModule,
		TagsColorInputModule,
		NbActionsModule,
		TableComponentsModule,
		CardGridModule,
		Ng2SmartTableModule,
		PositionsRoutingModule,
		TagsColorInputModule,
		NbActionsModule,
		NbDialogModule.forChild(),
		TranslateModule,
		HeaderTitleModule,
    GauzyButtonActionModule
	],
	declarations: [PositionsComponent],
	providers: [OrganizationPositionsService]
})
export class PositionsModule {}
