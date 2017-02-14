import { Component, Input, ElementRef, Output, EventEmitter, ViewChild, ViewContainerRef, HostListener, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { BaseComponent } from '../base.component';

//TODO: listitem edit event
@Component({
    selector: 'mc-grid',
    moduleId: module.id,
    styleUrls: ['grid.component.css'],
    templateUrl: 'grid.component.html'
})

export class GridComponent extends BaseComponent {

    private _testDataO: any;

    constructor(protected _el: ElementRef, protected _service: SharedService) {
        super(_el, _service);
    }

    /*
    column header data example, colspan has higher priority than the rowspan.
    [
        [{value:'xxx'},{value:'xxx'},{value:'yyy'},{value:'yyy'},{value:'yyy'}],
        [{value:'xxx'},{value:'xxx'},{value:'yyy'},{value:'aaa'},{value:'zzz'}],
        [{value:'kkk'},{value:'kkk'},{value:'bbb'},{value:'ccc'},{value:'zzz'}]
    ] 
    this will be converted to table data as below. Upper rows has higher priority then below rows.
    [
        [{value:'xxx',colspan:2,rowspan:2},{value:'yyy',colspan:3}],
        [{value:'yyy'},{value:'aaa'},{value:'zzz',colspan:1,rowspan:2}],
        [{value:'kkk',colspan:2},{value:'bbb'},{value:'ccc'}]
    ]
    If the data is for the row headers, rowspan has higher priority than the colspan. need to rotate data and convert and rotate again.
    [
        [{value:'xxx',colspan:2,rowspan:2},{value:'yyy',rowspan:2},{value:'yyy',colspan:2}],
        [{value:'aaa'},{value:'zzz',colspan:1,rowspan:2}],
        [{value:'kkk',colspan:2},{value:'bbb'},{value:'ccc'}]
    ]
    */
    convertColHeaderDataToTableData(rows: any, isRowHeader: boolean = false) {
        let rowIdx: number;
        let cellIdx: number;
        let _cellIdx: number;
        let row: any;
        let cell: any;
        let table: any[];
        let tRow: any[];
        let tCell: any;
        let _tCell: any;
        let lastTCell: any;
        let lastTRow: any[];
        let _lastTRow: any[];
        let rowCount: number = rows.length;
        let cellCount: number;
        let nextIdx: number;
        let i: number;
        let isSame: boolean;
        let skip: boolean;
        let colspan: number;
        let rowspan: number;
        let lastCell: any;
        for (rowIdx = 0; rowIdx < rowCount; rowIdx++) {
            row = rows[rowIdx];
            tRow = [];
            _lastTRow = null;
            cellCount = row.length;
            for (cellIdx = 0; cellIdx < cellCount; cellIdx++) {
                cell = row[cellIdx];
                skip = false;
                if (lastTRow) {
                    _lastTRow = _lastTRow || [];
                    if (lastTRow[cellIdx].value === cell.value) {
                        _cellIdx = -1;
                        lastCell = lastTRow[cellIdx];
                        colspan = lastCell.colspan;
                        rowspan = lastCell.rowspan;
                        if (colspan > 1) {
                            isSame = true;
                            for (i = 1; i < colspan; i++) {
                                if (lastCell.value !== row[cellIdx + i].value) {
                                    isSame = false;
                                    break;
                                }
                            }
                            if (isSame) {
                                lastCell.rowspan = rowspan + 1;
                                //jump to the next cell
                                _cellIdx = cellIdx + colspan - 1;//jump to the next cell
                                skip = true;
                            } else {
                                if (isRowHeader) {
                                    //need to divide the previous row's cell
                                    lastCell.colspan = i - 1;
                                    lastCell.rowspan = rowspan + 1;
                                    table[lastCell.rowIdx][cellIdx] = lastCell;
                                    _tCell = this.util.clone(lastCell);
                                    _tCell.colspan = colspan - i + 1;
                                    _tCell.rowspan = rowspan;
                                    table[lastCell.rowIdx].splice(cellIdx + 1, 0, _tCell);
                                    _cellIdx = cellIdx + colspan - 1;//jump to the next cell
                                    skip = true;
                                }
                            }
                        } else {
                            lastCell.rowspan = rowspan + 1;
                            skip = true;
                        }
                        if (skip) {
                            //reference the previous cell, maybe need to add a row number then need to update by row/col index.
                            _lastTRow.push(lastCell);
                            //jump to the next cell
                            if (_cellIdx > 0) {
                                cellIdx = _cellIdx;
                            }
                        }
                    }
                }
                if (!skip) {
                    if (lastTCell && lastTCell.value === cell.value) {
                        lastTCell.colspan = lastTCell.colspan + 1;
                    } else {
                        tCell = {
                            value: cell.value,
                            colspan: 1,
                            rowspan: 1,
                            rowIdx: rowIdx
                        };
                        tRow.push(tCell);
                        lastTCell = tCell;
                        if (_lastTRow) {
                            _lastTRow.push(tCell);
                        }
                    }
                }
            }
            lastTCell = null;
            lastTRow = _lastTRow || tRow;
            table.push(tRow);
        }
        return table;
    }

    buildPageHtml(rows: any[]) {
        let html = '<table>';
        let rowIdx: number;
        let cellIdx: number;
        let row: any;
        let cell: any;
        for (rowIdx = 0; rowIdx < rows.length; rowIdx++) {
            html += '<tr data-rowidx="' + rowIdx + '" class="grid__row">';
            row = rows[rowIdx];
            for (cellIdx = 0; cellIdx < row.length; cellIdx++) {
                cell = row[cellIdx];
                html += '<td colspan="' + (cell.colspan || 1) + '" rowspan="' + (cell.rowspan || 1) + '" class="grid__cell" data-cellidx="' + cellIdx + '">';
                html += '<span class="grid__cell__content">' + cell.displayName + '</span>';
                html += '</td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        return html;
    }
}
