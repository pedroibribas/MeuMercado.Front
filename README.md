## Deploy para o GitHub Pages

### Workflow
1. Rodar `ng build --output-path docs --base-href /MeuMercado.Front/` para gerar uma pasta `docs` com o código compilado que é usado pelo GitHub Pages.
> Alternativamente, rodar o script personalizado `npm run docs`.
2. Copiar `docs/index.html` e nomeá-lo como `docs/404.html`, senão o GitHub Pages não encontrará as rotas da aplicação e lancará o erro 404.

### Referências
- [_Deploy to Github Pages_, por Angular.](https://angular.io/guide/deployment#deploy-to-github-pages)

<br>

## Padrões

### Polimorfismo
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