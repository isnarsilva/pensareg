# Documentação técnica

## Stack e arquitetura
A aplicação usa exclusivamente HTML5, CSS3 e JavaScript ES6+, sem dependências externas, build ou framework. Conteúdo, apresentação e comportamento permanecem separados.

```
/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── utils.js
│   ├── animations.js
│   └── main.js
├── img/
└── docs/
```

## Convenções
- Classes em inglês, minúsculas e com hífen quando necessário.
- Tokens globais em `:root`; media queries concentradas em `responsive.css`.
- JavaScript progressivo e defensivo, carregado com `defer`.
- Atributos `data-*` conectam comportamento sem acoplar seletores de estilo.
- Conteúdo decorativo não é anunciado por leitores de tela.

## Segurança, privacidade e LGPD
Não há formulário, rastreador, armazenamento local, cookie ou processamento de dados pessoais. Não há HTML gerado a partir de entrada do usuário nem chamadas externas, reduzindo superfícies de XSS e dependência de terceiros. Em produção, configurar HTTPS, CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` e proteção contra framing no servidor.

## Evolução
Cada seção é uma unidade semântica migrável para componente de React/Vue/Angular. Os tokens podem alimentar um Design System ou configuração Tailwind. Integrações futuras devem ficar em módulos próprios e consumir APIs por uma camada de serviço, mantendo renderização e dados separados.
## Monitoramento e Analytics

A arquitetura da página deverá ser preparada para integração futura com plataformas de monitoramento e análise de acesso (Google Analytics 4, Matomo, Umami ou solução equivalente), utilizando uma camada desacoplada que permita substituir a ferramenta sem alterações significativas no código-fonte. Qualquer implementação deverá respeitar os requisitos da LGPD, incluindo gestão de consentimento quando aplicável, minimização da coleta de dados e transparência no tratamento das informações.