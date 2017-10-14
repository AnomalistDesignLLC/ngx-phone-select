import { AfterViewInit, ElementRef } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class NgxPhoneSelectDirective implements AfterViewInit, Validator {
    private el;
    validatePhone: string;
    constructor(el: ElementRef);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    ngAfterViewInit(): void;
    setCountry(countryCode: any): void;
    isValidNumber(): boolean;
    getCountryData(): any;
}
