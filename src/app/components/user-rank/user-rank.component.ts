import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-rank',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-rank.component.html',
  styleUrl: './user-rank.component.css'
})
export class UserRankComponent {
  leaderboard: any[] = []
  isLoading = false

  constructor(private leaderboardService: LeaderboardService) { }

  userId = new FormControl("", [
    Validators.required
  ])

  onClick() {
    this.isLoading = true;
    this.leaderboardService.getUserRank(this.userId.value).subscribe({
      next: (data: any) => {
        this.leaderboard = data
        this.isLoading = false
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
      }
    })
    this.userId.reset()
  }
}
