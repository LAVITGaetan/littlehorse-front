import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cheval',
  templateUrl: './cheval.component.html',
  styleUrls: ['./cheval.component.css']
})
export class ChevalComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  api_uri = "https://littlehorse.onrender.com/api/cheval"
  horse: any;
  horse_count = 0;
  horse_name: string | null = null;
  isLoading: boolean = false
  ngOnInit(): void {
    this.isLoading = true
    this.route.paramMap.subscribe(params => {
      this.horse_name = params.get('name');
      if (this.horse_name) {
        this.getHorseDetails(this.horse_name);
      }

    });
  }

  getHorseDetails(id: string): void {
    this.http.get(`${this.api_uri}/${id}`).subscribe(data => {
      this.horse = data;
      this.horse_count = Object.keys(data).length
      this.isLoading = false
      console.log(this.horse);
    });
  }
}
