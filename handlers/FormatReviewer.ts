import { AssignmentHandler } from './AssignmentHandler';
import { Assignment } from '../models/Assignment';

export class FormatReviewer implements AssignmentHandler {
  private nextHandler: AssignmentHandler | null = null;

  setNextHandler(handler: AssignmentHandler): void {
    this.nextHandler = handler;
  }

  async handleAssignment(assignment: Assignment): Promise<void> {
    if (assignment.format === "PDF") {
      console.log("Format reviewer reviewed the assignment successfully.");
      if (this.nextHandler) {
        await this.nextHandler.handleAssignment(assignment);
      }
    } else {
      console.log("Format is not PDF. Assignment rejected.");
    }
  }
}
