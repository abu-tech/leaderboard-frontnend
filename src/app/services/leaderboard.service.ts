import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) {

  }

  getCurrentWeekLeaderboard() {
    const url = 'http://localhost:8080/leaderboard/current-week'
    return this.http.get(url)
  }

  getLastWeekLeaderboardByCountry(country: any) {
    const url = `http://localhost:8080/leaderboard/last-week/${country}`
    return this.http.get(url)
  }

  getUserRank(userId: any) {
    const url = `http://localhost:8080/leaderboard/user-rank/${userId}`
    return this.http.get(url)
  }

}
