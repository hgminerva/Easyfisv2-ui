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
/**
* Contains Angular 2 components for the <b>wijmo.chart.analytics</b> module.
*
* <b>wijmo.angular2.chart.analytics</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjAnalitics from 'wijmo/wijmo.angular2.chart.analytics';</pre>
*
*/
import { Injector, ElementRef } from 'angular2/core';
/**
* Angular 2 component for the @see:WjFlexChart @see:TrendLine object.
*
* The <b>wj-flex-chart-trend-line</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-trend-line</b> component to add <b>TrendLine</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartTrendLine</b> component is derived from the <b>TrendLine</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartTrendLine extends wijmo.chart.analytics.TrendLine {
    constructor(elRef: ElementRef, injector: Injector);
}
/**
* Angular 2 component for the @see:WjFlexChart @see:MovingAverage object.
*
* The <b>wj-flex-chart-moving-average</b> component must be contained in a
* @see:wijmo/wijmo.angular2.chart.analytics.WjFlexChart component.
*
* Use the <b>wj-flex-chart-moving-average</b> component to add <b>MovingAverage</b> objects to your
* Angular 2 applications. For details about Angular 2 markup syntax, see
* <a href="static/angular2Markup.html">Angular 2 Markup</a>.
*
* The <b>WjFlexChartMovingAverage</b> component is derived from the <b>MovingAverage</b> class and
* inherits all its properties, events and methods.
*/
export declare class WjFlexChartMovingAverage extends wijmo.chart.analytics.MovingAverage {
    constructor(elRef: ElementRef, injector: Injector);
}
