export class Holiday {

    public id: number;
    public name: string;
    public date: Date;

    constructor(
        id: number,
        name: string,
        date: Date,
    ) {
        this.id = id;
        this.name = name;
        this.date = date;
    }
}