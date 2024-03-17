import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IssueListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
