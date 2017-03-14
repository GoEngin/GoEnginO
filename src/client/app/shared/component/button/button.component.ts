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

    @HostBinding('class.disabled') @Input() disabled: boolean;
    @HostBinding('class.hidden') @Input() hidden: boolean;
    @HostBinding('class.hasLabel') @Input() label: string;
    @HostBinding('class.hasImage') @Input() src: string;
}
