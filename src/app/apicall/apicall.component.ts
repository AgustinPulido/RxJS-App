import { Component, OnInit } from '@angular/core';
import { JsonService} from '../../services/json-service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  repositories: Array<any> = [];
  isLoading: boolean = false;

  constructor(
    private json: JsonService,
  ) {}

  ngOnInit(): void {
  }

  GithubCall(){
    this.isLoading = true;
    // Ejemplo de API utilizando subscribe
    this.json.getData("https://api.github.com/users/AgustinPulido/repos").subscribe((val: any) => {
      this.repositories = val;
      console.log(val);
      this.isLoading = false;
    });
  }

}
