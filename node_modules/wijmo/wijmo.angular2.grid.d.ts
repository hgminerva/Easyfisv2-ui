/*
    *
    * Wijmo Library 5.20161.138
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
import { ElementRef, ViewContainerRef, TemplateRef } from 'angular2/core';
import { QueryList, Injector, Renderer } from 'angular2/core';
import * as ngCore from 'angular2/core';
/**
 * Angular 2 component for the @see:FlexGrid control.
 *
 * Use the <b>wj-flex-grid</b> component to add <b>FlexGrid</b> controls to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>. For example:
 *
 * <pre>&lt;p&gt;Here is a data bound FlexGrid control with four columns:&lt;/p&gt;
 * &lt;wj-flex-grid [itemsSource]="data"&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Country'"
 *     [binding]="'country'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Sales'"
 *     [binding]="'sales'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Expenses'"
 *     [binding]="'expenses'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 *   &lt;wj-flex-grid-column
 *     [header]="'Downloads'"
 *     [binding]="'downloads'"&gt;
 *   &lt;/wj-flex-grid-column&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * The <b>WjFlexGrid</b> component is derived from the <b>FlexGrid</b> control and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid</b> component may contain @see:wijmo/wijmo.angular2.grid.WjFlexGridColumn,
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate,
 * @see:wijmo/wijmo.angular2.grid.detail.WjFlexGridDetail and
 * @see:wijmo/wijmo.angular2.grid.filter.WjFlexGridFilter child components.
*/
export declare class WjFlexGrid extends wijmo.grid.FlexGrid {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
 * Angular 2 component for the @see:FlexGrid @see:Column control.
 *
 * The <b>wj-flex-grid-column</b> component must be contained in a
 * @see:wijmo/wijmo.angular2.grid.WjFlexGrid component.
 *
 * Use the <b>wj-flex-grid-column</b> component to add <b>Column</b> objects to your
 * Angular 2 applications. For details about Angular 2 markup syntax, see
 * <a href="static/angular2Markup.html">Angular 2 Markup</a>.
 *
 * The <b>WjFlexGridColumn</b> component is derived from the <b>Column</b> class and
 * inherits all its properties, events and methods.
 *
 * The <b>wj-flex-grid-column</b> component may contain
 * @see:wijmo/wijmo.angular2.grid.WjFlexGridCellTemplate child directives.
*/
export declare class WjFlexGridColumn extends wijmo.grid.Column {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Defines the type of cell to which to apply the template. This value is specified in the <b>cell-type</b> attribute
* of the @see:WjFlexGridCellTemplate directive.
*/
export declare enum CellTemplateType {
    /** Defines a regular (data) cell. */
    Cell = 0,
    /** Defines a cell in edit mode. */
    CellEdit = 1,
    /** Defines a column header cell. */
    ColumnHeader = 2,
    /** Defines a row header cell. */
    RowHeader = 3,
    /** Defines a row header cell in edit mode. */
    RowHeaderEdit = 4,
    /** Defines a top left cell. */
    TopLeft = 5,
    /** Defines a group header cell in a group row. */
    GroupHeader = 6,
    /** Defines a regular cell in a group row. */
    Group = 7,
    /** Defines a cell in a new row template. */
    NewCellTemplate = 8,
}
/**
 * TBD
 */
export declare class WjFlexGridCellTemplate implements ngCore.OnInit, ngCore.OnDestroy {
    viewContainerRef: ViewContainerRef;
    templateRef: TemplateRef;
    elRef: ElementRef;
    private domRenderer;
    wjFlexGridCellTemplate: any;
    cellTypeStr: string;
    cellOverflow: string;
    cellType: CellTemplateType;
    valuePaths: Object;
    grid: WjFlexGrid;
    column: WjFlexGridColumn;
    ownerControl: any;
    constructor(viewContainerRef: ViewContainerRef, templateRef: TemplateRef, elRef: ElementRef, domRenderer: Renderer, injector: Injector);
    static _getTemplContextProp(templateType: CellTemplateType): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    _instantiateTemplate(parent: HTMLElement): {
        viewRef: ngCore.EmbeddedViewRef;
        rootElement: Element;
    };
    private _attachToControl();
}
export declare class WjTemplateCmp {
    private viewContainerRef;
    private templateRef;
    private templates;
    contentChildren: QueryList<TemplateRef>;
    viewChildren: QueryList<TemplateRef>;
    constructor(elRef: ElementRef, injector: Injector, viewContainerRef: ViewContainerRef, templateRef: TemplateRef, templates: QueryList<TemplateRef>);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}
