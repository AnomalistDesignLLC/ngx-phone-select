# ngx-phone-select
Based on the awesome intl-tel-input by jackocnr(https://github.com/jackocnr/intl-tel-input)

## Installation

npm install https://github.com/AnomalistDesignLLC/ngx-phone-select --save

See https://www.npmjs.com/package/ngx-phone-select

## Changes

  - Added onlyCountries feature

## Usage

@ViewChild('phoneSelect') phoneSelect;

ngOnInit() {
    this.phoneSelect.onlyCountries(['us', 'ca', 'ph']);
}

## Credits

Full credit list at https://github.com/AnomalistDesignLLC/ngx-phone-select/blob/master/CREDITS.md
