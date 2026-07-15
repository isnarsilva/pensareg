# Guia visual e de componentes

## Identidade
A direção combina **azul-escuro #101820** (confiança, precisão e setor corporativo), **laranja #ED8B00** (energia, inovação e cores oficiais da marca) e superfícies claras com muito espaço em branco.

### Cores
| Token | Valor | Uso |
|---|---:|---|
| `--navy-950` | `#080f15` | Rodapé |
| `--navy-900` | `#101820` | Seções de contraste |
| `--orange` | `#ed8b00` | Ações e destaques |
| `--ink` | `#172334` | Texto principal |
| `--muted` | `#5f6d7b` | Texto secundário |
| `--surface-alt` | `#f5f7f8` | Fundo alternativo |

### Tipografia e espaçamento
A pilha usa fontes de sistema para desempenho e privacidade. Títulos têm peso alto e tracking negativo; corpo usa entre 14 e 19 px. O ritmo principal é controlado por `--space-section` e o conteúdo por `--container`.

## Componentes
- **Brand:** logo institucional original em imagem, com recorte visual apenas das margens internas do arquivo.
- **Button:** ação primária laranja, com estado hover e foco nativo visível.
- **Section heading:** kicker, título responsivo e introdução opcional.
- **Solution card:** ícone, categoria, título e resumo; variante `.featured`.
- **Benefit:** bloco curto para diferenciais.
- **Dashboard:** ilustração CSS/SVG do produto, sem dados reais.
- **Process list:** sequência numerada de quatro etapas.
- **Header/menu:** fixo, transparente ao movimento e expansível no celular.

## Grid responsivo
Desktop usa 12 colunas conceituais; os grids visíveis variam de 2 a 4 colunas. Abaixo de 1000 px os blocos principais reduzem colunas. Abaixo de 760 px, conteúdo e navegação passam a uma coluna.
