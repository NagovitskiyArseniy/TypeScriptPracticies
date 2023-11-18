type User = {
    name: string,
    messages: string[],
    warnings: string[],
    created_at: Date
}

function getDiffDates(date_start: Date, date_end: Date): number {
    const oneDay = 1000 * 60 * 60 * 24; 
    const diffInTime = date_end.getTime() - date_start.getTime(); 
    return Math.round(diffInTime / oneDay);
}

class TrustedUser {
    constructor(public readonly user: User) {}

    getConfidenceRatio(): number { 
        const date_now: Date = new Date(Date.now());

        return this.user.messages.length * 2 - this.user.warnings.length * 100 + getDiffDates(this.user.created_at, date_now);
    }
}

class ConfidenceHelper {
    static checkConfidenceRatio(confidenceRatio: number): boolean {
        return confidenceRatio >= 0;
    }

    static getUnConfidenceUsers(users: TrustedUser[]): TrustedUser[] {
        let result: TrustedUser[] = [];
        
        users.forEach(element => {
            if (!ConfidenceHelper.checkConfidenceRatio(element.getConfidenceRatio())) {
                result.push(element);
            }
        });

        return result;
    }
}


// Список юзеров
const users: User[] = [
    {
        name: 'John',
        messages: ['hi', 'test2'],
        warnings: [],
        created_at: new Date(Date.UTC(2023, 1, 1))
    },
    {
        name: 'John',
        messages: ['hi', 'test2'],
        warnings: ['war1', 'war2'],
        created_at: new Date(Date.UTC(2023, 11, 10))
    },
];

// Засовываем юзеров в TrustedUser
let TrustedUsers: TrustedUser[] = [];
users.forEach(element => {TrustedUsers.push(new TrustedUser(element))})

// Получаем и вывводим на экран юзеров с плохой репутацией
console.log(ConfidenceHelper.getUnConfidenceUsers(TrustedUsers))