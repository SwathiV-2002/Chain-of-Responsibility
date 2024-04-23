import { OnlineCoursePlatform } from './services/OnlineCoursePlatform';
import { Assignment } from './models/Assignment';
import faker from 'faker';

async function main() {
    const onlineCoursePlatform = new OnlineCoursePlatform();
    const minWordCount = 5; 
    const maxWordCount = 30; 
    const wordCount = faker.datatype.number({ min: minWordCount, max: maxWordCount });    
    const assignmentContent = faker.lorem.words(wordCount); 
    console.log(assignmentContent);
    const assignment = new Assignment(assignmentContent, "PDF", false);
    await onlineCoursePlatform.submitAssignment(assignment);
}

main();
