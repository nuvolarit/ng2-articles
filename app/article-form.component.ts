import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Article} from './article';
import {CKEditorComponent} from './ckeditor.component'

@Component({
    selector: 'article-form',
    templateUrl: 'app/article-form.component.html',
    directives: [CKEditorComponent]
})
export class ArticleFormComponent {

    active = true;
    submitted = false;

    model = new Article(1,
        'Draghi: forze globali concorrono per tenere bassa l’inflazione',
        'Alessandro Merli',
        `«Ci sono forze nell'economia globale oggi che, tutte assieme, concorrono per mantenere bassa l'inflazione»`
    )

    onSubmit() {
        this.submitted = true;
    }

    newArticle() {
        this.model = new Article(2, '', '', '');
        this.active = false;
        setTimeout(() => { this.active = true }, 0);
    }
}


