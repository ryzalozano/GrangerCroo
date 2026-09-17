import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  newArrivalsPage = 0;

  nextNewArrivals() {
    this.newArrivalsPage++;
  }

  previousNewArrivals() {
    this.newArrivalsPage--;
  }

  trendingPage = 0;

  nextTrending() {
    this.trendingPage++;
  }

  previousTrending() {
    this.trendingPage--;
  }

  bestSellersPage = 0;

  nextBestSellers() {
    this.bestSellersPage++;
  }

  previousBestSellers() {
    this.bestSellersPage--;
  }

}