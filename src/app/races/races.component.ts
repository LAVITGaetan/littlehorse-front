import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {

  constructor(private http: HttpClient) { }
  api_uri = "https://littlehorse.onrender.com/api/races"
  races: any;
  isLoading: boolean = false
  ngOnInit() {
    this.isLoading = true
    this.http.get(this.api_uri).subscribe(data => {
      this.races = data
      console.log(data);
      this.isLoading = false
    })
  }
}
