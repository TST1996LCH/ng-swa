import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  customerID: string;  
  
  constructor(private route: ActivatedRoute) {
    this.customerID = '';
  }

  ngOnInit(): void {
    this.customerID = this.route.snapshot.paramMap.get('id') || '';
  }

}
