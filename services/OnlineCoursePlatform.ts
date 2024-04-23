import { AssignmentHandler } from '../handlers/AssignmentHandler';
import { Assignment } from '../models/Assignment';
import { FormatReviewer } from '../handlers/FormatReviewer'; 
import { TechnicalReviewer } from '../handlers/TechnicalReviewer'; 
import { ContentReviewer } from '../handlers/ContentReviewer'; 

export class OnlineCoursePlatform {
  private firstHandler: AssignmentHandler;

  constructor() {
    const formatReviewer = new FormatReviewer(); 
    const technicalReviewer = new TechnicalReviewer(); 
    const contentReviewer = new ContentReviewer(); 
    formatReviewer.setNextHandler(technicalReviewer); 
    technicalReviewer.setNextHandler(contentReviewer); 
    this.firstHandler = formatReviewer; 
  }
  async submitAssignment(assignment: Assignment): Promise<void> {
    console.log("Assignment submitted.");
    await this.firstHandler.handleAssignment(assignment);
  }
}
