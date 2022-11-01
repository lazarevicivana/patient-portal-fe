import { NodeWithI18n } from "@angular/compiler";

export class Feedback {
    patientId: string = 'ddd51def-45b7-4b8e-bf4b-4e32e51ad262';
    date: Date = new Date();
    text: string = '';
    isAnonymous: Boolean = false;
    isPublic: Boolean = false;
    status: Number = 2;


    public constructor(obj?: any) {
        if (obj) {
            this.patientId = obj.patientId;
            this.date = obj.date;
            this.text = obj.text;
            this.isAnonymous = obj.isAnonymous;
            this.isPublic = obj.isPublic;
            this.status = obj.status;        
        }
    }
}