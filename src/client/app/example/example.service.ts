import { EventEmitter, Input, Output, Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BaseService } from '../base.service';

@Injectable()
export class ExampleService extends BaseService {

    constructor(protected _service: SharedService) {
        super(_service);
    }

    getExampleList() {
        let list: any[];
        return list = [
            {
                id: 0,
                title: 'Grid Example'
            }
        ];
    }

    getGridData() {
      //https://qe6b.usw1.aws.tidemark.net/reference/?debug=true#v/I4fabN5K
      let gridCH: any = {
        'grid' : {
          'width' : 18,
          'height' : 1,
          'standardPageHeight' : 100,
          'standardPageWidth' : 18,
          'relevantPageRange' : 1,
          'columnHeaderHeight' : 5,
          'rowHeaderWidth' : 1
        },
        'page' : {
          'x' : 0,
          'y' : 0
        },
        'content' : {
          'data' : [ [ {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'value' : 7551.044634,
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'value' : 14932.919969999999,
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          }, {
            'ri' : 'dec$#,###.00;$#,###.00-u:b'
          } ] ]
        },
        'columnHeaders' : {
          'data' : [ [ {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          }, {
            'value' : 'Gross Sales',
            'ri' : 'txt:w',
            'groupKey' : 'Gross Sales'
          } ], [ {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          }, {
            'value' : 'Acqua Di Parma',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma'
          } ], [ {
            'value' : 'Amazon',
            'ri' : 'txt:w',
            'groupKey' : 'Amazon'
          }, {
            'value' : 'Amazon',
            'ri' : 'txt:w',
            'groupKey' : 'Amazon'
          }, {
            'value' : 'Walgreens',
            'ri' : 'txt:w',
            'groupKey' : 'Walgreens'
          }, {
            'value' : 'Walgreens',
            'ri' : 'txt:w',
            'groupKey' : 'Walgreens'
          }, {
            'value' : 'CVS',
            'ri' : 'txt:w',
            'groupKey' : 'CVS'
          }, {
            'value' : 'CVS',
            'ri' : 'txt:w',
            'groupKey' : 'CVS'
          }, {
            'value' : 'Drugstore.com',
            'ri' : 'txt:w',
            'groupKey' : 'Drugstore.com'
          }, {
            'value' : 'Drugstore.com',
            'ri' : 'txt:w',
            'groupKey' : 'Drugstore.com'
          }, {
            'value' : 'FamilyOTC',
            'ri' : 'txt:w',
            'groupKey' : 'FamilyOTC'
          }, {
            'value' : 'FamilOTC',
            'ri' : 'txt:w',
            'groupKey' : 'FamilyOTC'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'Sears',
            'ri' : 'txt:w',
            'groupKey' : 'Sears'
          }, {
            'value' : 'Sears',
            'ri' : 'txt:w',
            'groupKey' : 'Sears'
          }, {
            'value' : 'Target',
            'ri' : 'txt:w',
            'groupKey' : 'Target'
          }, {
            'value' : 'Target',
            'ri' : 'txt:w',
            'groupKey' : 'Target'
          }, {
            'value' : 'ULTA Beauty',
            'ri' : 'txt:w',
            'groupKey' : 'ULTA Beauty'
          }, {
            'value' : 'ULTA Beauty',
            'ri' : 'txt:w',
            'groupKey' : 'ULTA Beauty'
          } ], [ {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          } ], [ {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          }, {
            'value' : 'FQT1_11',
            'ri' : 'txt:wb',
            'actions' : [ 'a3' ]
          } ] ]
        },
        'rowHeaders' : {
          'data' : [ [ {
            'value' : 'Plan',
            'ri' : 'txt:w'
          } ] ]
        },
        'renderingInstructions' : {
          'dec$#,###.00;$#,###.00-u:b' : {
            'renderer' : 'PR.view.base.renderer.Number',
            'options' : {
              'scale' : 0,
              'roundingMode' : 1,
              'formatString' : '$#,###.00;$#,###.00-',
              'style' : 'font-weight:bold;',
              'missingValuePlaceholder' : ''
            }
          },
          'txt:w' : {
            'renderer' : 'PR.view.base.renderer.Text',
            'options' : {
              'style' : 'white-space:normal;'
            }
          },
          'txt:wb' : {
            'renderer' : 'PR.view.base.renderer.Text',
            'options' : {
              'style' : 'white-space:normal;font-weight:bold;'
            }
          }
        },
        'conditionalFormats' : { },
        'actions' : {
          'a3' : {
            'type' : 'EXPAND'
          }
        },
        'columnEdgeBricks' : [ {
          'dimensionInfo' : {
            'role' : 'TIME'
          },
          'start' : [ 0, 0 ],
          'end' : [ 17, 4 ]
        } ],
        'rowEdgeBricks' : [ {
          'dimensionInfo' : {
            'role' : 'SCENARIO'
          },
          'start' : [ 0, 0 ],
          'end' : [ 0, 0 ]
        } ]
      };

      let gridRH: any = {
        'grid' : {
          'width' : 1,
          'height' : 6066,
          'standardPageHeight' : 100,
          'standardPageWidth' : 1,
          'relevantPageRange' : 1,
          'columnHeaderHeight' : 1,
          'rowHeaderWidth' : 5
        },
        'page' : {
          'x' : 0,
          'y' : 0
        },
        'content' : {
          'data' : [ [ {
            'value' : 196.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 97.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 64.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 48.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 38.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 31.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 26.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 23.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 20.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 18.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 16.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 15.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 386.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 191.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 127.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 94.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 74.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 62.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 52.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 45.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 40.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 36.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 32.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 29.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 196.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 97.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 64.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 48.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 38.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 31.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 26.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 23.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 20.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 18.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 16.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 15.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 386.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 191.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 127.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 94.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 74.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 62.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 52.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 45.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 40.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 36.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 32.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 29.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 196.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 97.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 64.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 48.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 38.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 31.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 26.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 23.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 20.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 18.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 16.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 15.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 386.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 191.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 127.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 94.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 74.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 62.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 52.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 45.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 40.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 36.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 32.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 29.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 196.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 97.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 64.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 48.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 38.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 31.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 26.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 23.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 20.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 18.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 16.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 15.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 386.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 191.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 127.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 94.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 74.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 62.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 52.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 45.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 40.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 36.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 32.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 29.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 196.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 97.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 64.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ], [ {
            'value' : 48.0,
            'ri' : 'dec#,###;-#,###u:b'
          } ] ]
        },
        'columnHeaders' : {
          'data' : [ [ {
            'value' : 'Plan',
            'ri' : 'txt:w'
          } ] ]
        },
        'rowHeaders' : {
          'data' : [ [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD1'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2',
            'ri' : 'txt:w',
            'groupKey' : 'Acqua Di Parma-Razors & Accessories-SKU-PRD2'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Skin Care-SKU-PRD33',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Skin Care-SKU-PRD33'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'May',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'June',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'July',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'August',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'September',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'October',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'November',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD34'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA East',
            'ri' : 'txt:wb',
            'groupKey' : 'USA East'
          }, {
            'value' : 'December',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'January',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'February',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'March',
            'ri' : 'txt:w'
          } ], [ {
            'value' : 'Units',
            'ri' : 'txt:w',
            'groupKey' : 'Units'
          }, {
            'value' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35',
            'ri' : 'txt:w',
            'groupKey' : 'Dr. Denese New York-Bath & Body Care-SKU-PRD35'
          }, {
            'value' : 'Kmart',
            'ri' : 'txt:w',
            'groupKey' : 'Kmart'
          }, {
            'value' : 'USA West',
            'ri' : 'txt:wb',
            'groupKey' : 'USA West'
          }, {
            'value' : 'April',
            'ri' : 'txt:w'
          } ] ]
        },
        'renderingInstructions' : {
          'txt:w' : {
            'renderer' : 'PR.view.base.renderer.Text',
            'options' : {
              'style' : 'white-space:normal;'
            }
          },
          'txt:wb' : {
            'renderer' : 'PR.view.base.renderer.Text',
            'options' : {
              'style' : 'white-space:normal;font-weight:bold;'
            }
          },
          'dec#,###;-#,###u:b' : {
            'renderer' : 'PR.view.base.renderer.Number',
            'options' : {
              'scale' : 0,
              'roundingMode' : 1,
              'formatString' : '#,###;-#,###',
              'style' : 'font-weight:bold;',
              'missingValuePlaceholder' : ''
            }
          }
        },
        'conditionalFormats' : { },
        'actions' : { },
        'columnEdgeBricks' : [ {
          'dimensionInfo' : {
            'role' : 'SCENARIO'
          },
          'start' : [ 0, 0 ],
          'end' : [ 0, 0 ]
        } ],
        'rowEdgeBricks' : [ {
          'dimensionInfo' : {
            'role' : 'TIME'
          },
          'start' : [ 0, 0 ],
          'end' : [ 4, 99 ]
        } ]
      };
    }

}
