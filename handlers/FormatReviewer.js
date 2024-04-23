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
exports.FormatReviewer = void 0;
class FormatReviewer {
    constructor() {
        this.nextHandler = null;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
    }
    handleAssignment(assignment) {
        return __awaiter(this, void 0, void 0, function* () {
            if (assignment.format === "PDF") {
                console.log("Format reviewer reviewed the assignment successfully.");
                if (this.nextHandler) {
                    yield this.nextHandler.handleAssignment(assignment);
                }
            }
            else {
                console.log("Format is not PDF. Assignment rejected.");
            }
        });
    }
}
exports.FormatReviewer = FormatReviewer;
//# sourceMappingURL=FormatReviewer.js.map