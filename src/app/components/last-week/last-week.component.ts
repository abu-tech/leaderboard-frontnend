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
  isLoading = false

  constructor(private leaderboardService: LeaderboardService) { }

  countryCode = new FormControl("", [
    Validators.required
  ])

  onClick() {
    this.isLoading = true
    this.leaderboardService.getLastWeekLeaderboardByCountry(this.countryCode.value).subscribe({
      next: (data: any) => {
        this.leaderboard = data
        this.isLoading = false
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
      }
    })
    this.countryCode.reset()
  }
}
