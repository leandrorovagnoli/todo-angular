export class Todo {
    public Id: number;
    public Title: string;
    public Done: boolean;

    constructor(id: number, title: string, done: boolean) {
        this.Id = id;
        this.Title = title;
        this.Done = done;
    }
}