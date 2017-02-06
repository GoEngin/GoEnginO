import { Component, Input, HostBinding } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'mc-button',
    moduleId: module.id,
    styleUrls: ['button.component.css'],
    templateUrl: 'button.component.html'
})

export class ButtonComponent {
    @Input() icon: string;
    @Input() src: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() hidden: boolean;

    @HostBinding('class.disabled') hb_disabled = 'disabled';
    @HostBinding('class.hidden') hb_hidden = 'hidden';
    @HostBinding('class.hasLabel') hb_hasLabel = 'label';
    @HostBinding('class.hasImage') hb_hasImage = 'src';
}
