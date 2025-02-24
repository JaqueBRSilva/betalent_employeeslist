<h1 align="center">
  <img alt="BeTalent Logo"
      src="./assets/images/icon.png"
      width="150"
      height="80%"
   />
  <br />
  BeTalent - Employees List
</h1>

<h2>📜 Sobre</h2>
<p>
	Teste da <strong>BeTalent</strong>.
    <br />
    Uma tabela apresentando uma lista de funcionários, consumindo uma fake API. 
    <br />
    Permite pesquisar o nome do funcionário, cargo e telefone. E abrir o menu pelo ícone à direita, podendo ver informações adicionais do funcionário, como Cargo, Telefone e Data de Admissão.
</p>

<br/>

<h3 align="center">
    <img
        alt="EmployeesList Preview"
        src="https://live.staticflickr.com/65535/54340220878_a6bed26fc8_o.png"
        width="300"
        height="40%"
    />
    <img
        alt="EmployeesList Preview"
        src="https://live.staticflickr.com/65535/54342854635_5942f9cba5_o.png"
        width="300"
        height="40%"
    />
</h3>

<br/>

<h2>🎨 Design</h2>
<ul style="list-style-type:circle">
    <li>
        <a href="https://www.figma.com/design/mXQDRkTFyZ0DOy8Pc3iN2a/Teste-T%C3%A9cnico-Mobile-BeTalent?m=auto&t=CzcYux3fyunkqbX0-1">
            Visualizar Design no Figma
        </a>
    </li>
</ul>

<br />

## 📥 Baixar & Testar

1. Instale ou já tenha o [Node.js](https://nodejs.org/en/) na máquina

2. O [Git](https://git-scm.com) é _opcional_ de se ter instalado na máquina. O projeto também pode ser baixado diretamente como `.zip`

3. Descompacte, entre no diretório `betalent_employeeslist` e instale as dependências do projeto.

    ```bash
    npm install
    ```

4. Para executar, tenha algum emulador configurado ou o celular conectado, e digite com base no sistema operacional do celular:

    - Android:
        ```bash
        npm run android
        ```

    - iOS:
        ```bash
        npm run ios
        ```

> [!NOTE] 
> O iOS roda somente em sistemas Mac. A não ser que você leia o QRCode gerado no terminal com um iPhone (dispositivo físico).

<br />

5. Antes de rodar o servidor, é necessário consultar seu IP na máquina e incluir no consumo da API. 

> [!TIP]
> Digite `ipconfig` em um terminal qualquer para saber seu IP.
> Copie e cole na variável `URL_API` (localizado em `src/app/index.tsx`), subtituindo **APENAS** o IP.

Fazendo essa alteração, abra um outro terminal e no servidor digite:

```bash
npm run server
```

6. Você também poderá ler o QRCode gerado no terminal. Mas tanto o computador quanto o celular precisam estar na mesma rede.

<br />

<h2>🌟 TECNOLOGIAS</h2>
<ul style="list-style-type:square">
    <li>
        <a target="_blank" href="https://docs.expo.dev/"
        >
            Expo / React Native
        </a>
    </li>
    <li>
        <a target="_blank" href="https://www.typescriptlang.org/pt/"
        >
            TypeScript
        </a>
    </li>
    <li>
        <a target="_blank" href="https://github.com/typicode/json-server"
        >
            json-server
        </a>
    </li>
</ul>

<br />

## 🔓 LICENÇA

### 👉 [MIT](../LICENSE)
_Uma licença permissiva curta e simples com condições que exigem apenas a preservação de direitos autorais e avisos de licença. Obras licenciadas, modificações e obras maiores podem ser distribuídas em termos diferentes e sem código-fonte._

**Permissões** <br/>
 ✔️ Uso comercial ◆ 
 ✔️ Modificação ◆ 
 ✔️ Distribuição ◆ 
 ✔️ Uso privado

**Limitações** <br/>
 ❌ Responsabilidade ◆ 
 ❌ Garantia

**Condições** <br/>
 ❗ Licença e aviso de direitos autorais