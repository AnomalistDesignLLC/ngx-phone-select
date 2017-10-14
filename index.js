import { Directive, ElementRef, NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'intl-tel-input';
import { NG_VALIDATORS } from '@angular/forms';

var NgxPhoneSelectDirective = (function () {
    /**
     * @param {?} el
     */
    function NgxPhoneSelectDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    NgxPhoneSelectDirective.prototype.validate = function (c) {
        if (!this.isValidNumber()) {
            return {
                validatePhone: false
            };
        }
        return null;
    };
    /**
     * @return {?}
     */
    NgxPhoneSelectDirective.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).intlTelInput();
        $(this.el.nativeElement).intlTelInput('setNumber", "+447733123456');
    };
    /**
     * @param {?} countryCode
     * @return {?}
     */
    NgxPhoneSelectDirective.prototype.setCountry = function (countryCode) {
        $(this.el.nativeElement).intlTelInput('setCountry', countryCode.toLowerCase());
    };
    /**
     * @return {?}
     */
    NgxPhoneSelectDirective.prototype.isValidNumber = function () {
        if ($(this.el.nativeElement).intlTelInput('isValidNumber')) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxPhoneSelectDirective.prototype.getCountryData = function () {
        return $(this.el.nativeElement).intlTelInput('getSelectedCountryData');
    };
    return NgxPhoneSelectDirective;
}());
NgxPhoneSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxPhoneSelect]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return NgxPhoneSelectDirective; }), multi: true }
                ],
                exportAs: 'ngx-phone-select'
            },] },
];
/**
 * @nocollapse
 */
NgxPhoneSelectDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };

var NgxPhoneSelectModule = (function () {
    function NgxPhoneSelectModule() {
    }
    /**
     * @return {?}
     */
    NgxPhoneSelectModule.forRoot = function () {
        return {
            ngModule: NgxPhoneSelectModule,
            providers: []
        };
    };
    return NgxPhoneSelectModule;
}());
NgxPhoneSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxPhoneSelectDirective
                ],
                exports: [
                    NgxPhoneSelectDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxPhoneSelectModule.ctorParameters = function () { return []; };

export { NgxPhoneSelectModule, NgxPhoneSelectDirective };
