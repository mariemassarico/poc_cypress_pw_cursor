# POC Cypress e Playwright com Cursor

Este projeto demonstra a criação de testes automatizados usando Cypress e Playwright para o site Engage Sphere.

## Estrutura do Projeto

```
poc_cypress_pw_cursor/
├── cypress/
│   └── e2e/
│       ├── spec.cy.js          # Teste básico existente
│       └── testeCursor.cy.js   # Novos testes customizados
├── tests/
│   └── testeCursor.spec.js     # Testes Playwright
├── playwright.config.js        # Configuração do Playwright
├── cypress.config.js          # Configuração do Cypress
└── package.json
```

## Cenários de Teste Implementados

### 1. Boas Vindas Customizadas
- Testa se o sistema mostra uma mensagem de boas vindas personalizada quando um nome é inserido
- Verifica se a mensagem contém o nome digitado pelo usuário

### 2. Detalhes Customizados do Cliente
- Valida se os detalhes do cliente são exibidos corretamente
- Verifica se a interface responde adequadamente ao nome inserido

### 3. Volta dos Detalhes do Cliente
- Testa a funcionalidade de voltar ao estado inicial
- Verifica se o campo é limpo e a mensagem é resetada

### 4. Envio de Mensagem com Sucesso
- Simula o envio de uma mensagem
- Verifica se a operação é concluída com sucesso

## Como Executar os Testes

### Cypress

#### Abrir interface gráfica:
```bash
npm run cypress:open
```

#### Executar em modo headless:
```bash
npm run cypress:run
```

### Playwright

#### Executar todos os testes:
```bash
npm run playwright:test
```

#### Executar com interface gráfica:
```bash
npm run playwright:test:ui
```

#### Executar em modo headed (com navegador visível):
```bash
npm run playwright:test:headed
```

### Executar Ambos
```bash
npm run test:all
```

## Configurações

### Cypress
- Base URL: https://engage-sphere.vercel.app
- Configurado para aceitar cookies automaticamente
- Suporte a experimental studio

### Playwright
- Base URL: https://engage-sphere.vercel.app
- Configurado para Chrome, Firefox e Safari
- Relatórios HTML habilitados
- Trace habilitado para falhas

## Boas Práticas Implementadas

1. **Sem ponto e vírgula**: Os testes foram escritos sem ponto e vírgula ao final dos comandos
2. **Seletores robustos**: Uso de data-testid quando disponível
3. **Aguardas explícitas**: Uso de expect() para aguardar elementos
4. **Tratamento de cookies**: Aceitação automática de cookies
5. **Nomes descritivos**: Testes com nomes claros e objetivos
6. **Reutilização**: beforeEach para configuração comum
7. **Verificações múltiplas**: Validação de diferentes aspectos do comportamento

## Tecnologias Utilizadas

- **Cypress**: Framework de testes E2E
- **Playwright**: Framework de testes E2E multi-navegador
- **Node.js**: Runtime JavaScript
- **npm**: Gerenciador de pacotes

## Autor

Marie Massarico
