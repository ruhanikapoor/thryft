import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { MOCK_LISTINGS } from '../../data/mockData';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search implements OnInit, OnDestroy {

  @Input() results: ListingPreview[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();

  query: string = '';
  showSuggestions = false; 

  private readonly searchSubject = new Subject<string>();
  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      this.search.emit(query);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.query = value;
    this.showSuggestions = true;
    this.searchSubject.next(value);
  }
  
  onSearchSubmit(): void {
    this.showSuggestions = false;
    this.searchSubject.next('');
    this.select.emit(this.query);
  }

  selectSuggestion(value: string): void {
    this.query = value;
    this.showSuggestions = false;
    this.select.emit(value);
  }
}