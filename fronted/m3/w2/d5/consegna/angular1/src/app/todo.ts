export class Todo {
id: number | undefined;
content: string;
completed : boolean;
  

    constructor(content: string, completed : boolean) {
        this.content = content;
      this.completed = completed;
}
}
