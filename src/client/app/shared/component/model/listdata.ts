import { Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared.service'; 
//If you want to pass data by a templete property, you need to define a model for the data. 
//Unless you get "[Object Object]" instead of the data
//The property is a string type except the model object.
//A boolean value is from a property is string type. Need to convert it to boolean value.
export class ListData {

    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() itemChange: EventEmitter<any> = new EventEmitter<any>();

    private _da: any;
    private _indexes: any;
    private _items: any;
    private _valueField: any;
    private _displayField: string;
    private _iconField: string;
    private _defaultValue: any;
    private _multiSelect: boolean;
    private _selectedIds: any = {};
    private _deletedItems: any = [];
    //value will be selected values. if not, selected items will be value.
    private _valueOnly: boolean;
    private _util: any;
    private _hasDirty: boolean = false;

    constructor(public config: any, protected _service: SharedService) {
        this._util = this._service.getUtil();
        this._da = this._service.getDataAccess();
        this._initConfig(config);
        this._selectDefaultValue();
    }

    private _initConfig(config: any) {
        this._items = config.items ? config.items : [];
        this._valueField = config.valueField ? config.valueField : 'id';
        if (!config.indexes) {
            this._buildIndexes(this._items,this._valueField);
        } else {
            this._indexes = config.indexes;
            this._selectedIds = config.selectedIds ? config.selectedIds : {};
        }
        this._displayField = config.displayField ? config.displayField : 'displayName';
        this._iconField = config.iconField ? config.iconField : '';
        this._defaultValue = config.defaultValue;
        this._multiSelect = config.multiSelect ? true : false;
        this._valueOnly = config.valueOnly ? true : false;
    }

    private _selectDefaultValue() {
        if (!this._util.isEmpty(this._defaultValue)) {
            this.selectItem(this._defaultValue);
        }
    }

    private _buildIndexes(items: any, idField: string) {
        let data = this._da.buildIndex(items,idField);
        this._items = data.items;
        this._indexes = data.indexes;
        this._selectedIds = data.selectedIds;
        data = null;
    }

    loadItems(items: any) {
        this._deletedItems = [];
        this._buildIndexes(items,this._valueField);
    }

    getIdx(value: any) {
        let idx = this._indexes[value];
        if (this._util.isEmpty(idx)) {
            idx = -1;
        }
        return parseInt(idx);
    }

    getItem(id: any) {
        let idx = this.getIdx(id);
        let item = false;
        if (idx > -1) {
            item = this._items[idx];
        }
        return item;
    }

    getItems() {
        return this._items;
    }

    getValueField() {
        return this._valueField;
    }

    getDisplayField() {
        return this._displayField;
    }

    getIconField() {
        return this._iconField;
    }

    isMultiSelect() {
        return this._multiSelect;
    }

    selectItemByIndex(idx: number) {
        if (idx < 0) return;
        let item = this._items[idx];
        let id = item[this._valueField];
        item.selected = true;
        this._selectedIds[id] = true;
        this._items[idx] = item;
        this.selectedItemChange.emit({selectedIds:this._selectedIds,lastSelectedIds:[id]});
    }

    unselectItemByIndex(idx: number) {
        if (idx < 0) return;
        let item = this._items[idx];
        let id = item[this._valueField];
        item.selected = false;
        this._selectedIds[id] = false;
        this._items[idx] = item;
        this.selectedItemChange.emit({selectedIds:this._selectedIds,lastSelectedIds:[id]});
    }

    selectItem(value: any) {
        this.selectItems([value]);
    }

    selectItems(values: any) {
        let unselected: boolean = false;
        if (!Array.isArray(values)) {
            values = [values];
        }
        let valueOnly = this._valueOnly;
        let vField = this._valueField;
        let lastSelectedIds: any = [];
        let item: any;
        let id: any;
        let value: any;
        for (value of values) {
            if (!valueOnly) {
                value = value[vField];
            }
            let idx = this.getIdx(value);
            if (idx > -1) {
                if (!unselected) {
                    this.unselectAll();
                    unselected = true;
                }
                item = this._items[idx];
                item.selected = true;
                id = item[this._valueField];
                this._selectedIds[id] = true;
                lastSelectedIds.push(id);
                this._items[idx] = item;
            }
        }
        this.selectedItemChange.emit({selectedIds:this._selectedIds,lastSelectedIds:lastSelectedIds});
        return lastSelectedIds;
    }

    unselectAll() {
        let items = this._items;
        let selectedIds = this._selectedIds;
        let unselectedIds: any = [];
        let lastUnselectedIds: any = [];
        let id: any;
        let idx: number;
        for (id in selectedIds) {
            if (selectedIds[id]) {
                idx = this._indexes[id];
                items[idx].selected = false;
                unselectedIds.push(id);
                selectedIds[id] = null;
                lastUnselectedIds.push(id);
            }
        }
        this.selectedItemChange.emit({selectedIds:this._selectedIds,lastUnselectedIds:lastUnselectedIds});
        return lastUnselectedIds;
    }

    getSelectedItems() {
        return this._valueOnly ? this._getSelectedValues() : this._getSelectedItems();
    }

    _getSelectedItems() {
        let _selectedItems: any = [];
        let items = this._items;
        let selectedIds = this._selectedIds;
        let indexes = this._indexes;
        let id: any;
        for (id in selectedIds) {
            if (selectedIds[id]) {
                _selectedItems.push(items[indexes[id]]);
            }
        }
        return _selectedItems;
    }

    _getSelectedValues() {
        let _selectedValues: any = [];
        let selectedIds = this._selectedIds;
        let id: any;
        for (id in selectedIds) {
            if (selectedIds[id]) {
                _selectedValues.push(id);
            }
        }
        return _selectedValues;
    }

    addItem(item: any) {
        let items = this._items;
        let idxes = this._indexes;
        let vField = this._valueField;
        //update index
        let idx = items.length;
        item.__idx__ = idx;
        //temp id
        item[vField] = '__modified__' + idx;
        idxes[item[vField]] = idx;
        if (item.selected) {
            this._selectedIds[item[vField]] = true;
        }
        item.__modified__ = {
            isNew: true
        }
        let count = this._items.push(item);
        this._indexes = idxes;
        this._hasDirty = true;
        this.itemChange.emit({target: this, added: true, item: item, hasDirty: this._hasDirty});
        return count;
    }

    updateItem(item: any) {
        let idx = this.getIdx(item[this._valueField]);
        item.__modified__ = item.__modified__ || {}
        item.__modified__.isUpdated = true;
        this._items[idx] = item;
        this._hasDirty = true;
        this.itemChange.emit({target: this, updated: true, item: item, hasDirty: this._hasDirty});
        return item;
    }

    deleteItem(item: any) {
        let idx = this.getIdx(item[this._valueField]);
        item = this._items.splice(idx,1)[0];
        if (!(item.__modified && item.__modified.isNew)) {
            this._deletedItems.push(item);
        }
        this._buildIndexes(this._items,this._valueField);
        this._hasDirty = true;
        this.itemChange.emit({target: this, deleted: true, item: item, hasDirty: this._hasDirty});
    }

    getModifiedItems(removeDirty: boolean = true) {
        let vField = this._valueField;
        let changes: any = {
            new: [],
            updated: [],
            deleted: []
        }
        let item: any;
        let modified: any;
        let items = this._items;
        for (item of items) {
            modified = item.__modified__;
            if (modified) {
                if (modified.isNew) {
                    changes.new.push(item);
                } else if (modified.isUpdated) {
                    changes.updated.push(item);
                }
                if (removeDirty) {
                    delete item.__modified__;
                }
            }
        }
        changes.deleted = this._deletedItems;
        if (removeDirty) {
            this._deletedItems = [];
            this._hasDirty = false;
        }
        this.itemChange.emit({target: this, hasDirty: this._hasDirty});
        return changes;
    }
}
