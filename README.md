# @snarloff/eslint-config

Este pacote é uma configuração pré-definida do ESLint e Prettier para projetos Node.js e Next.js, com base no pacote desenvolvido pela Rocketseat. Ele foi criado para facilitar a configuração do linter em seus projetos e garantir a consistência do código em toda a equipe.

## Instalação

Para começar a usar esta configuração, siga os seguintes passos:

1. Certifique-se de que você tenha o Node.js instalado em sua máquina. Caso contrário, você pode baixá-lo [aqui](https://nodejs.org/).

2. Crie um novo projeto Node.js ou acesse um projeto existente.

3. Abra o terminal na raiz do seu projeto e execute o seguinte comando:

```bash
npm install --save-dev eslint @snarloff/eslint-config
```

4. Crie um arquivo `.eslintrc.js` na raiz do seu projeto com o seguinte conteúdo:

```javascript
module.exports = {
  extends: '@snarloff/eslint-config/[node ou next]',
};
```

5. Você também pode adicionar scripts ao seu `package.json` para executar o ESLint e o Prettier facilmente. Por exemplo:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write ."
  }
}
```

Agora, você pode executar `npm run lint` para verificar seu código em busca de problemas e `npm run lint:fix` para corrigi-los automaticamente. Você também pode executar `npm run format` para formatar seu código usando o Prettier.

## Configurações Adicionais

Este pacote é uma configuração básica do ESLint e Prettier. Se você deseja adicionar ou substituir regras, basta estender a configuração no seu arquivo `.eslintrc.js`. Você pode fazer isso adicionando um objeto de configuração personalizada, por exemplo:

```javascript
module.exports = {
  extends: '@snarloff/eslint-config/node',
  rules: {
    // Suas regras personalizadas aqui
  },
};
```

Certifique-se de verificar a documentação do [ESLint](https://eslint.org/docs/rules/) para ver todas as regras disponíveis e como configurá-las.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Contribuição

Se você encontrar problemas ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma [issue](https://github.com/Snarloff/eslint-config-snarloff/issues) ou enviar um [pull request](https://github.com/Snarloff/eslint-config-snarloff/pulls) no GitHub. Suas contribuições são bem-vindas!
