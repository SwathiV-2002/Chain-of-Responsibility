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
exports.OnlineCoursePlatform = void 0;
const FormatReviewer_1 = require("../handlers/FormatReviewer");
const TechnicalReviewer_1 = require("../handlers/TechnicalReviewer");
const ContentReviewer_1 = require("../handlers/ContentReviewer");
class OnlineCoursePlatform {
    constructor() {
        const formatReviewer = new FormatReviewer_1.FormatReviewer();
        const technicalReviewer = new TechnicalReviewer_1.TechnicalReviewer();
        const contentReviewer = new ContentReviewer_1.ContentReviewer();
        formatReviewer.setNextHandler(technicalReviewer);
        technicalReviewer.setNextHandler(contentReviewer);
        this.firstHandler = formatReviewer;
    }
    submitAssignment(assignment) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Assignment submitted.");
            yield this.firstHandler.handleAssignment(assignment);
        });
    }
}
exports.OnlineCoursePlatform = OnlineCoursePlatform;
//# sourceMappingURL=OnlineCoursePlatform.js.map