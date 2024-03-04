import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-current-week',
  standalone: true,
  imports: [],
  templateUrl: './current-week.component.html',
  styleUrl: './current-week.component.css'
})
export class CurrentWeekComponent {
  leaderboard: any[] = []
  isLoading = true

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.leaderboardService.getCurrentWeekLeaderboard().subscribe({
      next: (data: any) => {
        this.leaderboard = data
        this.isLoading = false
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
      }
    })
  }
}
