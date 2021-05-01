import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { NewsFeed, NewsFeedState, NewsState } from "./news.model";

@Injectable()
export class NewsFacade {
    
    public newsFeed$ = this.appState$.select(store => store.newsFeed.list);

    constructor(private appState$: Store<NewsState>) {}

    getNewsFeed(): Observable<NewsFeed[]> {
        return this.appState$.select(store => store.newsFeed.list)
    }
}