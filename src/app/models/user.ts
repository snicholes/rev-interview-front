import { Question } from "./question";

export class User {
    constructor(
        public id:number,
        public firstName:string,
        public lastName:string,
        public savedQuestions:Question[]
    ) {}
}
