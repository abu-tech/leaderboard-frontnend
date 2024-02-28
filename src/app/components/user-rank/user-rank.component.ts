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

  constructor(private leaderboardService: LeaderboardService) { }

  userId = new FormControl("", [
    Validators.required
  ])

  onClick() {
    this.leaderboardService.getUserRank(this.userId.value).subscribe({
      next: (data: any) => this.leaderboard = data,
      error: (err) => console.log(err)
    })
    this.userId.reset()
  }
}
