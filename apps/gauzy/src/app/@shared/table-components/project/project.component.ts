import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { IOrganization, IProject } from '@gauzy/contracts';

@Component({
	selector: 'ngx-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, ViewCell {
	@Input()
	value: any;
	@Input()
	rowData: any;
	organization: Promise<IOrganization> | null = null;
	count: number;
	project: IProject = {
		name: null,
		count: null,
		organization: null
	};

	projects: IProject[] = [];

	constructor() {}

	ngOnInit(): void {
		this.init();
	}

	public async init() {
		if (this.rowData.project) {
			this.project.name = this.rowData.project.name;
			this.project.count = this.rowData.project.membersCount;
			this.project.organization = this.rowData.project.organization
		} else if (this.rowData.projects) {
			this.projects = this.rowData.projects.map((project: any) => {
				return {
					name: project.name,
					count: project.membersCount,
					organization: project.organization
				};
			});
		}
	}
}
