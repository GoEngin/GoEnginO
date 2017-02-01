import { Output } from '@angular/core';
import { SharedService } from './shared/shared.service';

export class BaseService {

    protected da: any;
    protected util: any;

    constructor(protected service: SharedService) {
        this.util = this.service.getUtil();
        this.da = this.service.getDataAccess();
    }
}
