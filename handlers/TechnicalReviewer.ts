import { AssignmentHandler } from './AssignmentHandler';
import { Assignment } from '../models/Assignment';

export class TechnicalReviewer implements AssignmentHandler {
  private nextHandler: AssignmentHandler | null = null;

  setNextHandler(handler: AssignmentHandler): void {
    this.nextHandler = handler;
  }

  async handleAssignment(assignment: Assignment): Promise<void> {
    if (assignment.technicalCorrectness) {
      console.log("Technical reviewer successfully reviewed the assignment.");
      if (this.nextHandler) {
        await this.nextHandler.handleAssignment(assignment);
      }
    } else {
      console.log("Technical correctness is not met. Assignment rejected.");
    }
  }
}
