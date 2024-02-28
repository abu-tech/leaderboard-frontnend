import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) {

  }

  getCurrentWeekLeaderboard() {
    const url = 'https://leaderboard-backend-51d3.onrender.com/leaderboard/current-week'
    return this.http.get(url)
  }

  getLastWeekLeaderboardByCountry(country: any) {
    const url = `https://leaderboard-backend-51d3.onrender.com/leaderboard/last-week/${country}`
    return this.http.get(url)
  }

  getUserRank(userId: any) {
    const url = `https://leaderboard-backend-51d3.onrender.com/leaderboard/user-rank/${userId}`
    return this.http.get(url)
  }

}
