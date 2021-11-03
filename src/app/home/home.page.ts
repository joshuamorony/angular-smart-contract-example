import { Component, OnInit } from '@angular/core';
import { ExplorersService } from '../services/explorers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public didError = false;
  public isAdding = false;
  public didComplete = false;
  public transactionHash = '';
  public champions$: Observable<string[]>;
  public explorers$: Observable<string[]>;

  constructor(public explorersService: ExplorersService) {}

  ngOnInit() {
    this.explorersService.init();
    this.champions$ = this.explorersService.getChampions();
    this.explorers$ = this.explorersService.getExplorers();
  }

  async addExplorer() {
    this.isAdding = true;
    try {
      this.transactionHash = await this.explorersService.addExplorer();
      this.isAdding = false;
      this.didComplete = true;
    } catch (err) {
      console.log(err);
      this.didError = true;
      this.isAdding = false;
    }
  }
}
