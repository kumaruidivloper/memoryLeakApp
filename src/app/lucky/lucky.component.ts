import { Component, OnInit } from '@angular/core';
import { LuckyService } from '../lucky.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss']
})
export class LuckyComponent implements OnInit {

 public subscribersCount = 0;
 public number: number;
 public randomNumber = true;

 private luckySubscription$: Subscription;

 constructor(private luckyService: LuckyService) {}

 public ngOnInit(): void {
  this.luckySubscription$ = this.luckyService.getLuckyNumber().subscribe((luckyNumber: number) => {
     this.number = luckyNumber;
     console.log(`Retrieved lucky number ${this.number} for subscriber ${this.subscribersCount}`);
   });
  this.subscribersCount = this.luckyService.getSubscribersCount();

  // setTimeout(() => {
  //   this.randomNumber = false;
  // }, 2000);
 }

//   public ngOnDestroy(): void {
//   this.luckySubscription$.unsubscribe();
// }

}
