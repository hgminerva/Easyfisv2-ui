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
import * as ng2 from 'angular2/core';
import { ChangeDetectionStrategy, Type, ViewEncapsulation } from 'angular2/core';
import { wjMetaBase } from "wijmo/wijmo.metaFactory";
export declare var WjComponent: (options: {
    wjIsDirective?: boolean;
    wjMetadataId?: any;
    wjParentDirectives?: any[];
    wjSiblingDirectiveId?: string;
    selector?: string;
    inputs?: string[];
    outputs?: string[];
    properties?: string[];
    events?: string[];
    host?: {
        [key: string]: string;
    };
    bindings?: any[];
    providers?: any[];
    exportAs?: string;
    moduleId?: string;
    queries?: {
        [key: string]: any;
    };
    viewBindings?: any[];
    viewProviders?: any[];
    changeDetection?: ChangeDetectionStrategy;
    templateUrl?: string;
    template?: string;
    styleUrls?: string[];
    styles?: string[];
    directives?: (Type | any[])[];
    pipes?: (Type | any[])[];
    encapsulation?: ViewEncapsulation;
}) => any;
export declare type ChangePropertyEvents = {
    prop: string;
    evExposed: string;
    evImpl: string;
};
export declare type EventPropertiesItem = {
    event: string;
    eventImpl: string;
    props?: ChangePropertyEvents[];
};
export declare type EventProperties = EventPropertiesItem[];
export declare class DirectiveTypeData {
    private _fwdResolved;
    private static _siblingIdCounter;
    metaData: wjMetaBase.interop.MetaDataBase;
    changeEventMap: EventProperties;
    parentDirectives: any[];
    siblingId: string;
    constructor(metaData: wjMetaBase.interop.MetaDataBase, changeEventMap: EventProperties, parentDirectives: any[], siblingId: string);
    resolveForwardDeclarations(): void;
}
export declare class WjDirectiveBehavior {
    static BehaviourRefProp: string;
    static parPropAttr: string;
    static siblingDirIdAttr: string;
    private static _pathBinding;
    private _parentPropDesc;
    private _siblingInsertedEH;
    directive: Object;
    typeData: DirectiveTypeData;
    elementRef: ng2.ElementRef;
    injector: ng2.Injector;
    parentBehavior: WjDirectiveBehavior;
    isDestroyed: boolean;
    static getHostElement(directive: Object, ngHostElRef: ng2.ElementRef): HTMLElement;
    static attach(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector): WjDirectiveBehavior;
    constructor(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector);
    dirOnInit(originalMethod: Function): void;
    dirOnDestroy(originalMethod: Function): void;
    dirOnChanges(originalMethod: Function, changes: any): void;
    static instantiateTemplate(parent: HTMLElement, viewContainerRef: ng2.ViewContainerRef, templateRef: ng2.TemplateRef, domRenderer: ng2.Renderer): {
        viewRef: ng2.EmbeddedViewRef;
        rootElement: Element;
    };
    private createEvents();
    private subscribeToEvents();
    private addHandlers(eventMap);
    private _setupAsChild();
    private _isChild();
    private _isParentInitializer();
    private _isParentReferencer();
    private _getParentProp();
    private _getParentReferenceProperty();
    private _useParentObj();
    private _isParentArray();
    private _parentInCtor();
    private _initParent();
    _getSiblingIndex(): number;
    private _siblingInserted(e);
    private _isHostElement();
    private static evaluatePath(obj, path);
    static getBehavior(directive: any): WjDirectiveBehavior;
    static containsDirective(parentDirective: Object, childDirective: Object): boolean;
    static resolveForwardDecl(array: any[]): void;
    static findParentBehavior(injector: ng2.Injector, directiveTypes: any[], upToBehavior?: WjDirectiveBehavior): WjDirectiveBehavior;
}
export declare class Ng2Utils {
    static directiveTypeDataProp: string;
    static initEvents(directiveType: any, changeEvents: EventProperties): string[];
    private static getChangeEventNameImplemented(propertyName);
    private static getChangeEventNameExposed(propertyName);
    private static getWjEventNameImplemented(eventName);
    static getChangeEventMap(metaData: wjMetaBase.interop.MetaDataBase): {
        event: string;
        eventImpl: string;
        props?: {
            prop: string;
            evExposed: string;
            evImpl: string;
        }[];
    }[];
}
