import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-of-coach',
  templateUrl: './schedule-of-coach.component.html',
  styleUrls: ['./schedule-of-coach.component.scss']
})
export class ScheduleOfCoachComponent implements OnInit {
  timeArray = [
   {
    time:'08.00am - 09.00am'
   },
   {
    time:'09.00am - 10.00am'
   }
,
{
  time:'10.00am - 11.00am'
 }
,
{
  time:'12.00am - 01.00pm'
 }
,
{
  time:'01.00pm - 02.00pm'
 }
,
{
  time:'02.00pm - 03.00pm'
 },
 {
  time:'03.00pm - 04.00pm'
 },
 {
  time:'04.00pm - 05.00pm'
 },
 {
  time:'05.00pm - 06.00pm'
 },
 {
  time:'06.00pm - 07.00pm'
 },
 {
  time:'02.00am - 03.00am'
 }







  ]
  constructor() { }

  ngOnInit() {
  }

}
