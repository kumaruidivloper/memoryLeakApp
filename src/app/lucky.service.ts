import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuckyService {

  constructor() { }

 private luckyGenerator$: Observable<number>;
 private subscribersCount = 0;

 public getLuckyNumber(): Observable<number> {
   this.subscribersCount++;

   if (!this.luckyGenerator$) {
     this.luckyGenerator$ = Observable.create((subject: Subject<number>) => {
       setInterval(() => {
         const number = Math.floor(Math.random() * 10);
         subject.next(number);
       }, 1000);
     });
   }
   return this.luckyGenerator$;
 }

 public getSubscribersCount(): number {
   return this.subscribersCount;
 }
}
