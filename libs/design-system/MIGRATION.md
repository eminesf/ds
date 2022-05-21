# Migração

Esse documento visa listar todas as breaking changes que tiveram entre uma versão e outra e como ajustar o que foi alterado.

## Versão 5.0.0 para 6.0.0

### Provider
Foi removido o estilo que determinava a altura e foi adicionada uma prop `fullScreen` para definir a altura como `height: 100vh` em casos que seja preciso que o Provider ocupe a altura inteira da tela mesmo que o conteúdo não ocupe tal espaço (ex: Miniapps).
```tsx
/// CASO DE NECESSIDADE DE ALTURA COMPLETA DA TELA
// antes
<Provider>
  {/* conteúdo */}
</Provider>

// depois
<Provider fullScreen >
  {/* conteúdo */}
</Provider>
```


## Versão 4.0.0 para 5.0.0

### LabelValueGroup

Foi alterado os valores da propriedade `variant` para seguir o padrão utilizado em outros componentes.

```
default -> undefined
```

### AppFeedback

Foi alterado os valores da propriedade `variant` para seguir o padrão utilizado em outros componentes.

```
error -> critical
```

### ModalIcon

Foi removida a propriedade `variant` do componente e adicionada no componente `Modal`, pois semanticamente e seguindo o padrão já feito em outros componentes, o componente pai que deve contem essa variação.

```tsx
// antes
<Modal>
  <ModalIcon name="bell" variant="danger" />
</Modal>

// depois
<Modal variant="critical">
  <ModalIcon name="bell" />
</Modal>
```

Os valores da propriedade `variant` tambem foram alterados.

```
danger -> critical
warning -> alert
default -> neutral
```

### Hint

Foi removida a propriedade `show` e adicionada a propriedade `closable`. Notamos que daria para implementarmos internamente o comportamento de fechar o Hint.

```tsx
// antes
const [show, setShow] = useState(true);

<Hint show={show} onClose={() => setShow(false)} />

// agora
<Hint closable />
```

Também foi alterado os valores da propriedade `variant` para seguir o padrão utilizado em outros componentes.

```
error -> critical
```

### HintMessage

Foi alterado seu nome para `HintText` para se adequar a padrões já utilizados anteriormente.

```tsx
// antes
<HintMessage>Conteúdo</HintMessage>

// depois
<HintText>Conteúdo</HintText>
```

## Versão 3.0.4 para 4.0.0

### LabelValueAction

Anteriormente podiamos setar um ícone para a ação apenas passando a propriedade `icon`, agora temos que indicar qual a posição em que o ícone ficará, semelhante ao que fazemos com o `Button`.

```tsx
// antes
<LabelValueAction icon="pencil" />

// agora
<LabelValueAction iconBefore="pencil" />
```

## Versão 2.4.5 para versão 3.0.0

### AppSeparator

Esse componente foi renomeado para apenas `Separator` mantendo exatamente a mesma API de uso. Isso ocorreu pois o componente pode ser utilizado tem qualquer contexto, não apenas no App.

```tsx
// antes
import { AppSeparator } from "@agi/design-system";

<AppSeparator />

// agora
import { Separator } from "@agi/design-system";

<Separator />
```

## Versão 1.2.13 para versão 2.0.0

### LabelValue

Anteriormente ele possuia uma propriedade chamada `variant` que era utilizada para mudar o "tom" da mensagem (se era de sucesso, erro etc), agora essa propriedade mudou para `tone`, um nome mais semântico e a propriedade `variant` alterou sua responsabilidade para agora para alterar a forma que o componente é apresentado, funcionando igual ao `LabelValueGroup`.

```tsx
// antes
<LabelValue variant="success" />

// agora
<LabelValue tone="success" />
```

Ponto importante é que a propriedade `variant` não pode ser utilizada quando o `LabelValue` é filho de um `LabelValueGroup`, pois o proprío `LabelValueGroup` cuida para setar corretamente a `variant` dos seus filhos.