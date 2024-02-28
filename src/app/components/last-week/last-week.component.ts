import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-last-week',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './last-week.component.html',
  styleUrl: './last-week.component.css'
})
export class LastWeekComponent {
  leaderboard: any[] = []
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
  }

  countryCode = new FormControl("", [
    Validators.required
  ])

  onClick() {
    this.leaderboardService.getLastWeekLeaderboardByCountry(this.countryCode.value).subscribe({
      next: (data: any) => this.leaderboard = data,
      error: (err) => console.log(err)
    })
    this.countryCode.reset()
  }
}
