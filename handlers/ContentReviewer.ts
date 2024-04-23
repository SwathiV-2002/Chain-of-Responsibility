import { AssignmentHandler } from './AssignmentHandler';
import { Assignment } from '../models/Assignment';

export class ContentReviewer implements AssignmentHandler {
  private nextHandler: AssignmentHandler | null = null;
  setNextHandler(handler: AssignmentHandler): void {
    this.nextHandler = handler;
  }
  async handleAssignment(assignment: Assignment): Promise<void> {
    const wordCount = assignment.content.split(/\s+/).length;
    if (wordCount >= 20) {
      console.log("Content reviewer is reviewing the assignment.");     
    } else {
      console.log("Content does not meet the minimum word count requirement. Assignment rejected.");
    }
  }
}
