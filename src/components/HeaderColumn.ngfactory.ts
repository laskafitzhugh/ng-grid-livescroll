/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './HeaderColumn';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../services/GridReactiveServices';
import * as import10 from '../services/SortingService';
import * as import11 from '@angular/common/src/pipes/async_pipe';
export class Wrapper_HeaderColumn {
  /*private*/ _eventHandler:Function;
  context:import0.HeaderColumn;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.HeaderColumn(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_model(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.model = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = this.context.colWidth;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_1) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.colWidth;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      view.renderer.setElementStyle(el,'minWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_2).toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.colWidth;
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      view.renderer.setElementStyle(el,'maxWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_3) == null)? (null as any): view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_3).toString()));
      this._expr_3 = currVal_3;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.sort()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HeaderColumn_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderColumn_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeaderColumn>;
  _HeaderColumn_0_3:Wrapper_HeaderColumn;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderColumn_Host0,renderType_HeaderColumn_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'div',new import3.InlineArray2(2,'aw-grid-head-col',''),rootSelector,(null as any));
    this.compView_0 = new View_HeaderColumn0(this.viewUtils,this,0,this._el_0);
    this._HeaderColumn_0_3 = new Wrapper_HeaderColumn(this.injectorGet(import9.ReactiveGridService,this.parentIndex),this.injectorGet(import10.SortingService,this.parentIndex));
    this.compView_0.create(this._HeaderColumn_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HeaderColumn_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeaderColumn) && (0 === requestNodeIndex))) { return this._HeaderColumn_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderColumn_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._HeaderColumn_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._HeaderColumn_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const HeaderColumnNgFactory:import8.ComponentFactory<import0.HeaderColumn> = new import8.ComponentFactory<import0.HeaderColumn>('[aw-grid-head-col]',View_HeaderColumn_Host0,import0.HeaderColumn);
const styles_HeaderColumn:any[] = ([] as any[]);
var renderType_HeaderColumn:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_HeaderColumn,{});
export class View_HeaderColumn0 extends import2.AppView<import0.HeaderColumn> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  _pipe_async_0:import11.AsyncPipe;
  _pipe_async_1:import11.AsyncPipe;
  /*private*/ _expr_10:any;
  _pipe_async_2:import11.AsyncPipe;
  _pipe_async_3:import11.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderColumn0,renderType_HeaderColumn,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'span',new import3.InlineArray2(2,'class','sortingSymbol'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n		➤\n',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._pipe_async_0 = new import11.AsyncPipe(this.ref);
    this._pipe_async_1 = new import11.AsyncPipe(this.ref);
    this._pipe_async_2 = new import11.AsyncPipe(this.ref);
    this._pipe_async_3 = new import11.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_6:any = import3.inlineInterpolate(1,'\n	',this.context.label,'\n');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_1,currVal_6);
      this._expr_6 = currVal_6;
    }
    valUnwrapper.reset();
    const currVal_7:any = ((valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.sortingService.sortState.model)).column == this.context.model) && valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.sortingService.sortState.model)).sorting);
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_7,currVal_7))) {
      this.renderer.setElementClass(this._el_3,'sort',currVal_7);
      this._expr_7 = currVal_7;
    }
    valUnwrapper.reset();
    const currVal_10:any = ((valUnwrapper.unwrap(this._pipe_async_2.transform(this.context.sortingService.sortState.model)).column == this.context.model) && valUnwrapper.unwrap(this._pipe_async_3.transform(this.context.sortingService.sortState.model)).descending);
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_10,currVal_10))) {
      this.renderer.setElementClass(this._el_3,'desc',currVal_10);
      this._expr_10 = currVal_10;
    }
  }
  destroyInternal():void {
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
    this._pipe_async_2.ngOnDestroy();
    this._pipe_async_3.ngOnDestroy();
  }
}