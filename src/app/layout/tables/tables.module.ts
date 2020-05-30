import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, StatModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
