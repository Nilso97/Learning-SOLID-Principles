Forked: https://github.com/allonsmandy/solid-typescript - Excelente explicação dos princípios do S.O.L.I.D 👏📚

## Principios do S.O.L.I.D

São principios da programação que foram reunidos para nos ajudar a manter um código limpo e flexível e fácil de ser mantido.

(geralmente relacionados a programaçao orientada a objetos, mas podem ser aplicados a programaçao em geral)

---

### S - Single responsability principle (principio da responsabilidade única)

Uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, também...) Este principio está intimamente ligado com outro conhecido como Separation of concerns.

### O - Open/closed principle - principio do aberto/fechado

Módulos, classes, objetos e operações devem estar abertos para extensão, mas fechados para modificações.

### L - Liskov substituion principle - principio da substituiçao de liskov

Se d(x) é uma propriedade demonstrável dos objetos x de tipo T. Então d(y) deve ser verdadeiro para o de tipo S onde S é um subtitpo de T. (Subtipos precisam ser substituiveis por seus tipos de base).

### I - Interface segregation principle - principio da segregação de interface

Os clientes nao devem ser forçados a depender de interfaces que não utilizam.

### D - Dependency inversion principle - principio da inversao de dependencia

Modulos de alto nivel nao devem ser dependentes dos modulos de baixo nivel, ambos devem depender de abstrações. Detalhes devem depender das abstrações, nao o inverso.
