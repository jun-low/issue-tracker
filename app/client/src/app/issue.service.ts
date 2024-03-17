import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:3000/api/issue';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl, issue);
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${issue.id}`, issue);
  }

  deleteIssue(id: number): Observable<Issue> {
    return this.http.delete<Issue>(`${this.apiUrl}/${id}`);
  }
}