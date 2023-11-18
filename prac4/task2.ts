class Product {
    private _name: string;
    private _cost: number;

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get cost(): number {
        return this._cost;
    }
    set cost(value: number) {
        this._cost = value;
    }

    constructor(name: string, cost: number) {
        this._name = name;
        this._cost = cost;
    }

    log(total: number) {
        const pr: string[] = [this._name, String(this._cost), String(total)];
        console.log(pr.join(';'));
    }
}

abstract class OrderItem {
    private _product: Product;
    private _count: number;
    
    get product(): Product {
        return this._product;
    }

    get count(): number {
        return this._count;
    }
    set count(value: number) {
        this._count = value;
    }

    constructor(product: Product, count: number) {
        this._product = product;
        this._count = count;
    }

    getCost(): number {
        return this._product.cost * this._count;
    }

    compare(order: OrderItem): number {
        if (order.getCost() > this.getCost()) {
            return -1;
        }
        else if (order.getCost() < this.getCost()) {
            return 1;
        }
        return 0;
    }
}

class OrderItemDiscount extends OrderItem {
    discount: number;
    percent: boolean;

    constructor(product: Product, count: number, discount: number, percent: boolean = false) {
        super(product, count);
        this.discount = discount;
        this.percent = percent;
    }

    getCostWithDiscount(): number {
        if (this.percent) {
            return Math.round(this.product.cost * this.count * (1 - this.discount/100));
        }
        return Math.round((this.product.cost - this.discount) * this.count);
    }

    override getCost(): number{
        return this.getCostWithDiscount();
    }
}

class OrderItemDiscountCount extends OrderItemDiscount {
    required_count: number;

    constructor(product: Product, count: number, discount: number, required_count: number = 1, percent: boolean = false) {
        super(product, count, discount, percent);
        this.required_count = required_count;
    }

    override getCost(): number {
        if (this.required_count >= this.count) {
            return this.getCostWithDiscount();
        }
        return this.product.cost * this.count;
    }
}

class OrderItemDeliver extends OrderItem {
    deliver_cost: number;

    constructor(product: Product, count: number, deliver_cost: number) {
        super(product, count);
        this.deliver_cost = deliver_cost;
    }

    override getCost(): number {
        return this.product.cost * this.count + this.count * this.deliver_cost;
    }
}

const orders: OrderItem[] = [
    new OrderItemDiscount(new Product('hleb', 100), 2, 0),
    new OrderItemDiscount(new Product('hleb', 100), 3, 5, true),
    new OrderItemDiscountCount(new Product('hleb', 100), 3, 5, 3, true),
    new OrderItemDiscountCount(new Product('hleb', 100), 1, 5, 3, true),
    new OrderItemDeliver(new Product('hleb', 100), 1, 10),
    new OrderItemDeliver(new Product('hleb', 100), 5, 30)
]

orders.forEach(orderItem => {orderItem.product.log(orderItem.getCost())})

orders.sort((a, b) => a.compare(b));

console.log('after sort')

orders.forEach(orderItem => {orderItem.product.log(orderItem.getCost())})

