class Job {
    private _role: string;
    private _salary: number;

    get salary(): number {
        return this._salary;
    }

    constructor(role: string, salary: number) {
        this._role = role;
        this._salary = salary;
    }

    work(person_name: string): void {
        console.log(person_name + " сейчас работает как " + this._role);
    }
}

class Person {
    private _job: Job;
    set job(job: Job) {
        this._job = job;
    }

    private _name: string;

    constructor(name: string, job: Job) {
        this._name = name;
        this._job = job;
    }

    getSalary(): number {
        return this._job.salary;
    }
    work() {
        this._job.work(this._name);
    }
}

const chef: Job = new Job("chef", 50000);
const developer: Job = new Job("developer", 100000);

const Ivan: Person = new Person("Ivan", chef);
const Petya: Person = new Person("Petya", developer);

Ivan.work();
Petya.work();

Ivan.job = developer;

Ivan.work()