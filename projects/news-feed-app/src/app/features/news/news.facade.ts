import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { selectAllNews, selectNewsFeed, State } from "../../shared/store";
import { NewsFeed } from "./news.model";

@Injectable()
export class NewsFacade {
    
    public newsFeed$ = this.appState$.pipe(select(selectNewsFeed));

    constructor(private appState$: Store<State>) {}

    getNewsFeed(): Observable<NewsFeed[]> {
        return this.appState$.select(store => store.feature.news.newsFeed)
    }
}