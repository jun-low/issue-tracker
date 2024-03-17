import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Issue } from '../../issue';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  newIssue: Issue = { id: 0, title: '', description: '' };
  editedIssue: Issue | null = null;

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues()
      .subscribe(issues => this.issues = issues);
  }

  createIssue(): void {
    this.issueService.createIssue(this.newIssue)
      .subscribe(issue => {
        this.issues.push(issue);
        this.newIssue = { id: (this.issues.length + 1), title: '', description: '' };
        this.getIssues()
      });
  }

  // updateIssue(issue: Issue): void {
  //   this.issueService.updateIssue(issue)
  //     .subscribe(() => this.getIssues());
  // }

  updateIssue(issue: Issue): void {
    this.editedIssue = issue;
  }

  cancelEdit(): void {
    this.editedIssue = null;
  }

  saveIssue(): void {
    if (this.editedIssue) {
      this.issueService.updateIssue(this.editedIssue)
        .subscribe(() => {
          this.getIssues();
          this.editedIssue = null;
        });
    }
  }

  deleteIssue(issue: Issue): void {
    this.issueService.deleteIssue(issue.id)
      .subscribe(() => this.getIssues());
  }
}