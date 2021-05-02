import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { selectNewsFeed, State } from "../../shared/store";
import { LoadNews } from "./news.action";
import { NewsFeed } from "./news.model";
import { selectNewsbyUser } from "./news.selectors";

@Injectable()
export class NewsFacade {
    
    public newsFeed$ = this.appState$.pipe(select(selectNewsFeed));
    public news$ = this.appState$.pipe(select(selectNewsbyUser))

    constructor(private appState$: Store<State>) {}

    loadNews(){
        this.appState$.dispatch(new LoadNews);
    }

    getNewsFeed(): Observable<NewsFeed[]> {
        return this.appState$.select(store => store.feature.news.newsFeed)
    }
}