(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('intl-tel-input'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'intl-tel-input', '@angular/forms'], factory) :
	(factory((global['ngx-phone-select'] = {}),global._angular_core,global._angular_common,null,global._angular_forms));
}(this, (function (exports,_angular_core,_angular_common,intlTelInput,_angular_forms) { 'use strict';

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
    NgxPhoneSelectDirective.prototype.onlyCountries = function (countryCodes) {
        $(this.el.nativeElement).intlTelInput({
            preferredCountries: [],
            onlyCountries: countryCodes
        });
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
    { type: _angular_core.Directive, args: [{
                selector: '[ngxPhoneSelect]',
                providers: [
                    { provide: _angular_forms.NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () { return NgxPhoneSelectDirective; }), multi: true }
                ],
                exportAs: 'ngx-phone-select'
            },] },
];
/**
 * @nocollapse
 */
NgxPhoneSelectDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
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
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
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

exports.NgxPhoneSelectModule = NgxPhoneSelectModule;
exports.NgxPhoneSelectDirective = NgxPhoneSelectDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
