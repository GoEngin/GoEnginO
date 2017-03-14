//TODO: autofill is destroying UI design -_-; 
//This component covers all of the form fields
//The real input field comes from seperated components. This compoment is a container for that.
import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild, OnInit, HostBinding } from '@angular/core';
import { SharedService } from '../../../shared.service'; 
import { BaseComponent } from '../../base.component';
import { TextComponent } from '../text/text.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { ListData } from '../../model/listdata';

const CONS: any = {
    dataConfig: {
        YN: {
            valueOnly: true,
            items: [
                {'id': true, 'displayName': 'Yes'},
                {'id': false, 'displayName': 'No', 'selected':true}
            ]
        }
    }
}

//If the component doesn't have moduleId, 404 error.
@Component({
    selector: 'mc-input',
    moduleId: module.id,
    styleUrls: ['./input.component.css'],
    templateUrl: './input.component.html'
})

export class InputComponent extends BaseComponent implements OnInit {

    @ViewChild(TextComponent) fieldTextCmp: TextComponent;
    @ViewChild(ToggleComponent) fieldToggleCmp: ToggleComponent;

    //form field base
    private _valid: boolean = true;
    private _fieldCmp: any;
    private _rendered: boolean = false;
    private _isToggle: boolean = false;

    @HostBinding('class.focused') private _focused: boolean = false;
    @HostBinding('class.icon__label') private _iconLabel: string;
    @HostBinding('class.has-label') @Input() label: string = '';
    @HostBinding('class.invalid') private get invalid() { return !this._valid; }
    @HostBinding('class.changed') private _changed: boolean = false;
    @HostBinding('class.has-value') private _value: any;
    @HostBinding('class.hidden') @Input() hidden: boolean = false;
    @HostBinding('class.disabled') @Input() disabled: boolean = false; //readonly

    @Input() frm: any;
    @Input() type: string = 'text';
    @Input() name: string;
    @Input() validators: any;
    @Input() iconLabel: string;
    @Input() placeholder: string;
    @Input() errorMessage: string;
    @Input() help: boolean = false;
    @Input() iconHelp: string = 'question';
    @Input() listData: ListData;

    @Input() 
    set hiddenAndDisabled(value: boolean) {
        this.hidden = value;
        this.disabled = value;
    }

    @Input()
    get valid() {
        return this._valid;
    }

    @Input()
    set value(value: any) {
        if (!this.disabled && this._value !== value) {
            let oldValue = this._value;
            this._value = value;
            // value can be from fieldCmp.
            this._updateFieldValue(value);
            this._validate(value);
            this.valueChange.emit({target:this, newValue:this._value, oldValue:oldValue});
        }
    }
    get value() {
        return this._value;
    }

    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    constructor( protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }

    ngOnInit() {
        this._initData();
    }

    private _initData() {
        switch (this.type) {
            case 'boolean':
                this.listData = new ListData(CONS.dataConfig.YN, this._service);
                break;
        }
    }

    private _getCmpName() {
        let cmpName = 'text';
        switch (this.type) {
            case 'boolean':
            case 'toggle':
                cmpName = 'toggle';
                break;
        }
        return cmpName;
    }

    private _getFieldComponent() {
        if (!this._fieldCmp) { 
            let cmp: any;
            switch (this._getCmpName()) {
                case 'text':
                    cmp = this.fieldTextCmp;
                    break;
                case 'toggle':
                    cmp = this.fieldToggleCmp;
                    break;
            }
            this._fieldCmp = cmp;
        }
        return this._fieldCmp;
    }

    private _validate(value: any) {
        let result: any = this._service.getValidator().validate(value, this.validators, this.frm);
        if (result) {
            //TODO: show an error message by the result. The result has the detail.
            //Error message should get from i18n with params.
            this.errorMessage = result.error;
            this._valid = false;
        } else {
            this._valid = true;
        }
        return this._valid;
    }

    private _updateFieldValue(value: any) {
        let fc = this._getFieldComponent();
        if (fc.value !== this._value) {
            fc.value = this._value;
        }
    }

    validate() {
        if (!this.disabled) {
            return this._validate(this.value);
        }
        return true;
    }

    onValueChange(value: any) {
        this.value = value;
    }

    onFocus(e: any) {
        this._focused = true;
    }

    onBlur(e: any) {
        this._focused = false;
    }
}
