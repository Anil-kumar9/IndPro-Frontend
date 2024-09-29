import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyanamic-display',
  templateUrl: './dyanamic-display.component.html',
  styleUrls: ['./dyanamic-display.component.css']
})
export class DyanamicDisplayComponent implements OnInit {

  repositories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('https://api.github.com/users/Anil-kumar9/repos').subscribe(data => {
      this.repositories = data;
    });
  }

}
