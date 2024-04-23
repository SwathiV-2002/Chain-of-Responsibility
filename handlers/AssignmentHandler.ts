import { Assignment } from '../models/Assignment';

export interface AssignmentHandler {
  setNextHandler(handler: AssignmentHandler): void;
  handleAssignment(assignment: Assignment): Promise<void>;
}
