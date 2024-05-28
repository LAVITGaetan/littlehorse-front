import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {
  raceId: string | null = null;
  race: any;
  apiUri = 'https://littlehorse.onrender.com/api/races';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.raceId = params.get('id');
      if (this.raceId) {
        this.getRaceDetails(this.raceId);
      }
    });
  }

  getRaceDetails(id: string): void {
    this.http.get(`${this.apiUri}/${id}`).subscribe(data => {
      this.race = data;
      console.log(this.race);
    });
  }
}
