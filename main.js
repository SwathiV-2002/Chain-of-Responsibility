"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OnlineCoursePlatform_1 = require("./services/OnlineCoursePlatform");
const Assignment_1 = require("./models/Assignment");
function generateRandomWord() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
function generateRandomWords(wordCount) {
    const wordsArray = [];
    for (let i = 0; i < wordCount; i++) {
        let word = '';
        const wordLength = Math.floor(Math.random() * 100) + 1;
        for (let j = 0; j < wordLength; j++) {
            word += generateRandomWord();
        }
        wordsArray.push(word);
    }
    return wordsArray;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const onlineCoursePlatform = new OnlineCoursePlatform_1.OnlineCoursePlatform();
        const wordCount = 20;
        const wordsArray = generateRandomWords(wordCount);
        const assignmentContent = wordsArray.join(' ');
        const assignment = new Assignment_1.Assignment(assignmentContent, "PDF", true);
        yield onlineCoursePlatform.submitAssignment(assignment);
    });
}
main();
//# sourceMappingURL=main.js.map