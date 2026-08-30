interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

class Appointment implements AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    constructor(startTime: Date, endTime: Date, description: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

    public printAppointment(): void {
        console.log(`Appointment: ${this.description}`);
        console.log(`Start Time: ${this.startTime}`);
        console.log(`End Time: ${this.endTime}`);
    }
}
