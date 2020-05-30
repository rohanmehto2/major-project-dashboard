import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../../services/rest.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    lcuId;
    public lcuData = {};
    constructor( private route: ActivatedRoute,
        private router: Router, private restService: RestService) {
            this.route.params.subscribe((params) => this.lcuId = params['id']);
        }

    ngOnInit() {
        const url = `/lcu/${this.lcuId}`;
        this.restService.get(url)
        .subscribe((data: any) => this.lcuData = data);
    }
}
