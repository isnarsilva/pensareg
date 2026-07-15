# Guia de manutenção

## Executar localmente
A página não exige build. Abra `index.html` ou sirva a raiz com qualquer servidor HTTP estático.

## Adicionar uma seção
1. Crie um `<section>` com `id` único e `aria-labelledby`.
2. Adicione o link de âncora ao menu se necessário.
3. Reuse `.container`, `.section` e `.section-heading`.
4. Inclua estilos de layout e ajustes em `responsive.css`.
5. Teste teclado, leitores de tela, 320 px, 768 px e 1440 px.

## Alterar componentes
Tokens ficam em `variables.css`; layout macro em `layout.css`; aparência de componentes em `components.css`; breakpoints em `responsive.css`. Evite valores duplicados quando um token resolve o caso.

## Incluir JavaScript
Use um arquivo específico em `js/`, carregue com `defer` e faça feature detection. Não injete entradas não confiáveis com `innerHTML`. Novas integrações devem tratar erros, timeouts e estados de carregamento.

## Privacidade e segurança
Qualquer coleta futura exige base legal, finalidade explícita, minimização, transparência, retenção definida e revisão de consentimento. Formulários devem validar no cliente e no servidor, incluir proteção contra abuso e nunca expor credenciais. Atualize a CSP ao adicionar origens.

## Checklist de publicação
- Validar HTML, links, foco e contraste.
- Testar redução de movimento e menu por teclado.
- Otimizar ativos e verificar desempenho.
- Configurar cabeçalhos HTTPS/CSP/HSTS no host.
- Revisar ortografia, metadados e e-mail institucional.
