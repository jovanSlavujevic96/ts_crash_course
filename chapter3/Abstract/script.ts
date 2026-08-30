interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

abstract class AppointmentABC implements AppointmentInterface {
    protected _startTime: Date;
    protected _endTime: Date;
    protected _description: string;

    constructor(startTime: Date, endTime: Date, description: string) {
        this._startTime = startTime;
        this._endTime = endTime;
        this._description = description;
    }

    // Interface members implemented via public getters, keeping the
    // backing fields protected so subclasses can access them directly
    // while external consumers only see the interface's public API.
    public get startTime(): Date {
        return this._startTime;
    }

    public get endTime(): Date {
        return this._endTime;
    }

    public get description(): string {
        return this._description;
    }

    public abstract printAppointment(): void;
}

class Appointment extends AppointmentABC {
    constructor(startTime: Date, endTime: Date, description: string) {
        super(startTime, endTime, description);
    }

    public printAppointment(): void {
        console.log(`Appointment: ${this.description}`);
        console.log(`Start Time: ${this.startTime}`);
        console.log(`End Time: ${this.endTime}`);
    }
}

const a1: Appointment = new Appointment(new Date('2024-06-01T10:00:00'), new Date('2024-06-01T11:00:00'), 'Team Meeting');
a1.printAppointment();

const iface: AppointmentInterface = a1; // This is valid because Appointment implements AppointmentInterface    
iface.printAppointment(); // This will also work, demonstrating polymorphism

// this will work because the interface exposes the public getters, but the backing fields are protected and not directly accessible
console.log(`Description via interface: ${iface.description}`);
console.log(`Start Time via interface: ${iface.startTime}`);
console.log(`End Time via interface: ${iface.endTime}`);
