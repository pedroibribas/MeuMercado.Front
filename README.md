## Deploy com GitHub Pages
<!-- instruções -->
<!-- referência -->

## Polimorfismo
```ts
// Dicionário
enum EElement { default, /*...novos*/ }
interface IElement { title: string; }
interface IElementDictionary { [key in EElement]: IElement }
export const ElementDictionary = { [EElement.default]: { title: 'Hello, World!' }, /*...novos*/ };

// Componente
export class ElementComponent implements OnInit {
    @Input({ required: true }) type!: EElement;
    protected element!: IElement;
    ngOnInit(): void { this.element = Element[this.type]; }
}

// Uso
<app-element-component [type]="EElement.default"></app-element-component>

```