import {Directive, AfterViewInit, Input, Output, EventEmitter} from 'angular2/core';
import {NG_VALUE_ACCESSOR, Control, ControlValueAccessor} from 'angular2/common';
import {isBlank, CONST_EXPR} from 'angular2/src/facade/lang';
import {Self, forwardRef, Provider} from 'angular2/src/core/di';
import {ElementRef} from 'angular2/src/core/linker';
import {Renderer} from 'angular2/src/core/render';

const CKEDITOR_VALUE_ACCESSOR = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => CKEditorComponent), multi: true}));

@Directive({
    selector: 'ckeditor[ngModel]',
    bindings:[CKEDITOR_VALUE_ACCESSOR]
})
export class CKEditorComponent implements ControlValueAccessor {
    
    //@Input() value: string;
    //@Output() input = new EventEmitter<string>()
    //editor: CKEDITOR.editor;

    onChange = (_) => { };
    onTouched = () => { };

    /*
    ngAfterViewInit() {
        this.editor = CKEDITOR.replace('editor1');
        this.editor.on('change', function(evt) {
            //this.input.emit(evt.editor.getData());
            console.log(evt.editor.getData());
        });
        this.editor.setData(this.value);
    }
    */

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

    writeValue(value: any) {
        //this.editor.setData(this.value);
        console.log(value);
    }

    registerOnChange(fn: () => any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this.onTouched = fn;
    }
}