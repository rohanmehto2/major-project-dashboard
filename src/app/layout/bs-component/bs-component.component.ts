import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './../../services/rest.service';

@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
    switchId;
    public switchData: any = {};

    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    //Active Line Chart

    public lineChartData2: Array<any> = [];
    public lineChartLabels2: Array<any> = [];

    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    constructor(private route: ActivatedRoute,
        private router: Router, private restService: RestService) {
            this.route.params.subscribe((params) => this.switchId = params['id']);
        }

    ngOnInit() {
        const days = 2;
        let url = `/switch/${this.switchId}`;
        this.restService.get(url)
        .subscribe((data: any) => this.switchData = data.smartSwitch);

        url = `/temperature?switchId=${this.switchId}&days=${days}`;
        this.restService.get(url)
        .subscribe((data: any) => {
            this.lineChartData = [
                {
                    data: data.temperatures.temperatures,
                    label: this.switchData.name
                }
            ];
            this.lineChartLabels = data.temperatures.timestamps;
            console.log(data);
        });

        url = `/activity?switchId=${this.switchId}&days=${days}`;
        this.restService.get(url)
        .subscribe((data: any) => {
            this.lineChartData2 = [
                {
                    data: data.activities.activities,
                    label: this.switchData.name
                }
            ];
            this.lineChartLabels2 = data.activities.timestamps;
        });

        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
}
