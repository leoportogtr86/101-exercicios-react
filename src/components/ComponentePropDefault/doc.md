## Default Props: O Plano B que Nunca Te Deixa na Mão!

Sabe aquele amigo que sempre traz algo extra para o churrasco, só para garantir que não vai faltar? Ou aquele famoso
“Plano B” que você tem quando algo não sai como esperado? Pois é, no mundo do React, existe algo assim também. E o nome
dessa maravilha é **Default Props**!

As **default props** são como aquele backup estratégico que você faz quando quer garantir que seu componente funcione
direitinho, mesmo se alguém esquecer de passar as props que ele precisa. Elas são simples, eficientes e, o melhor de
tudo, estão sempre ali para te salvar quando você esquece algum detalhe. Vamos mergulhar nessa ideia e aprender como
usar esse superpoder de forma divertida!

### O Que São Default Props?

**Default props** são valores padrão que você define para as props de um componente. Se alguém tentar usar seu
componente e, por algum motivo, esquecer de passar uma prop, o React vai automaticamente usar o valor padrão que você
definiu. É como se fosse um plano de contingência para quando a prop estiver de férias ou resolver tirar um dia de
folga.

Vamos imaginar que você tem um componente de **Lancheira**, mas dessa vez, quem está preparando a lancheira (o dev) às
vezes esquece de colocar uma fruta. Sem problemas! Com default props, o React vai garantir que, se nada for passado, uma
maçã padrão sempre estará na lancheira.

### Como Usar Default Props?

Vamos ao código! Aqui temos o componente **Lancheira**, que agora aceita props de `fruta`, `quantidade`, e `bebida`.
Porém, se alguém esquecer de passar a fruta ou a bebida, não tem problema, porque nós temos **default props** prontos
para entrar em ação:

```jsx
import React from 'react';

function Lancheira({fruta, quantidade, bebida}) {
    return (
        <div>
            <h2>Lancheira do React (com Plano B!)</h2>
            <p>Fruta: {fruta}</p>
            <p>Quantidade: {quantidade}</p>
            <p>Bebida: {bebida}</p>
        </div>
    );
}

Lancheira.defaultProps = {
    fruta: 'maçã',
    bebida: 'água',
};

export default Lancheira;
```

Nesse caso, definimos que, se ninguém lembrar de passar a `fruta`, vai ser **"maçã"**. Se esquecerem de adicionar
a `bebida`, o React, como o amigo prevenido que é, coloca **"água"** na lancheira.

Agora, podemos usar o componente de várias maneiras:

```jsx
<Lancheira quantidade={2}/>
```

No exemplo acima, só passamos a quantidade, e o React vai preencher as lacunas com os valores padrão: uma maçã e água.
Simples e eficiente! Claro, se quisermos personalizar, ainda podemos fazer isso:

```jsx
<Lancheira fruta="banana" quantidade={1} bebida="suco"/>
```

Aqui, passamos tudo direitinho. E, adivinha? O React vai usar os valores que enviamos, ignorando as default props. Ele
só vai usar o Plano B (default props) quando esquecermos de passar algo.

### Default Props em Componentes de Classe

Se você é do time das **classes** (e não há nada de errado com isso!), também pode usar default props facilmente. Olha
só como funciona em componentes de classe:

```jsx
import React, {Component} from 'react';

class Lancheira extends Component {
    render() {
        const {fruta, quantidade, bebida} = this.props;

        return (
            <div>
                <h2>Lancheira do React (Modo Classe)</h2>
                <p>Fruta: {fruta}</p>
                <p>Quantidade: {quantidade}</p>
                <p>Bebida: {bebida}</p>
            </div>
        );
    }
}

Lancheira.defaultProps = {
    fruta: 'maçã',
    bebida: 'água',
};

export default Lancheira;
```

O mesmo conceito, mas usando classes. Fácil, né?

### O Que Você Pode Definir como Default Props?

Basicamente, qualquer prop que você passa para o seu componente pode ter um valor padrão. Pode ser uma **string**, *
*número**, **booleano**, **função**, **array**, ou até mesmo **objetos complexos**. Desde que seja uma prop que você
espera, pode ter um valor de fallback:

- **Strings**: `'Texto padrão'`
- **Números**: `42`
- **Booleanos**: `true` ou `false`
- **Arrays**: `['item1', 'item2']`
- **Objetos**: `{ chave: 'valor' }`
- **Funções**: `() => console.log('Função padrão')`

Veja um exemplo mais elaborado com diferentes tipos de props:

```jsx
Lancheira.defaultProps = {
    fruta: 'laranja',
    quantidade: 3,
    bebida: 'suco de laranja',
    vegetariano: true,
    alimentosExtras: ['bolacha', 'cereal'],
    config: {
        temperatura: 'gelado',
        embalagem: 'sustentável'
    },
    onAbrirLancheira: () => console.log('Lancheira foi aberta!')
};
```

Aqui, temos uma lancheira **super completa** com default props de diferentes tipos. O React está pronto para qualquer
cenário!

### E se o Valor Passado for `null` ou `undefined`?

Vale uma observação: as default props só são usadas quando a prop está **undefined**. Se você passar
explicitamente `null` como valor de uma prop, o React vai respeitar isso e não vai usar a default prop.

### Por que Usar Default Props?

Agora que você já viu o quão simples é usar **default props**, vamos listar alguns motivos pelos quais você deve
adotá-las como seu melhor amigo na hora de construir componentes:

1. **Prevenção de Erros**: Garante que o componente sempre tenha um valor válido, mesmo quando alguém esquece de passar
   algo.
2. **Facilidade no Desenvolvimento**: Economiza tempo, já que você não precisa verificar se todas as props foram
   passadas corretamente em cada renderização.
3. **Componentes Mais Robustos**: Com default props, seu componente está sempre preparado para funcionar,
   independentemente da falta de alguns dados.

### Conclusão: Default Props são o Backup Ideal!

As **default props** são como aquele kit de emergência que você sempre leva para um acampamento. Você pode até não
precisar dele, mas quando alguém esquece o básico, você estará pronto! É uma forma de deixar seu código mais robusto,
prevenido e, claro, sem surpresas desagradáveis.

Então, da próxima vez que estiver construindo componentes, lembre-se: as **default props** estão ali para salvar o dia
quando suas props decidirem tirar uma folga inesperada!

🍎 **React e suas props nunca mais serão os mesmos, agora com default props!**