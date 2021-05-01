/**
 * 
 * Reducte boundel size By prevent making duplicate module
 * SharedModule just contains declarables (component, directive and pips) and do not import any service providers
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';



@NgModule({
  declarations: [
    BreakingNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule]
})
export class SharedModule { }
