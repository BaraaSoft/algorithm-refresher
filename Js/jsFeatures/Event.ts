

interface IEvent {
    [key: string]: [Function]
}

class EventBus<E extends string> {
    events: IEvent
    constructor() {
        this.events = {}

    }

    on<T extends Function>(eventName:E, callback:T) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }
    }

    trigger(eventName:E, ...rest:any[]) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(func => {
                func.apply(null, rest)
            });
        }
    }
}

export { EventBus}