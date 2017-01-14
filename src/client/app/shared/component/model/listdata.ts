import { Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared.service'; 
//If you want to pass data by a templete property, you need to define a model for the data. Unless you get "[Object Object]" instead of the data
//The property is a string type except the model object.
//A boolean value is from a property is string type. Need to convert it to boolean value.
export class ListData {

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

    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() itemChange: EventEmitter<any> = new EventEmitter<any>();

	constructor(public config: any, protected _service: SharedService) {
        this._util = this._service.getUtil();
        this._initConfig(config);
        this._buildIndexes();
        this._selectDefaultValue();
	}

	private _initConfig(config: any) {
		this._items = config.items ? config.items : [];
		this._valueField = config.valueField ? config.valueField : 'id';
		this._displayField = config.displayField ? config.displayField : 'displayName';
        this._iconField = config.iconField ? config.iconField : '';
        this._defaultValue = config.defaultValue;
        this._multiSelect = config.multiSelect ? true : false;
        this._valueOnly = config.valueOnly ? true : false;
	}

    //for finding idx, for reducing loops.
    private _buildIndexes() {
        let items = this._items;
        let idxes: any = {};
        let vField = this._valueField;
        let idx: any;
        let count: number = items.length;
        let item: any;
        let id: any;
        for (idx in items) {
            item = items[idx];
            id = item[vField];
            item.__idx__ = idx;
            idxes[id] = idx;
            if (item.selected) {
                this._selectedIds[id] = true;
            }
            items[idx] = item;
        }
        this._items = items;
        this._indexes = idxes;
    }

    private _selectDefaultValue() {
        if (!this._util.isEmpty(this._defaultValue)) {
            this.selectItem(this._defaultValue);
        }
    }

    loadItems(items: any) {
        this._selectedIds = {};
        this._deletedItems = [];
        this._items = items;
        this._buildIndexes();
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
        this._indexes = idx;
        return count;
    }

    updateItem(item: any) {
        let idx = this.getIdx(item[this._valueField]);
        item.__modified__ = item.__modified__ || {}
        item.__modified__.isUpdated = true;
        this._items[idx] = item;
    }

    deleteItem(item: any) {
        let idx = this.getIdx(item[this._valueField]);
        item = this._items.splice(idx,1)[0];
        if (!(item.__modified && item.__modified.isNew)) {
            this._deletedItems.push(item);
        }
        this._buildIndexes();
    }

    getModifiedItems() {
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
            if (modified.isNew) {
                changes.new.push(item);
            } else if (modified.isUpdated) {
                changes.updated.push(item);
            }
        }
        changes.deleted = this._deletedItems;
        return changes;
    }
}