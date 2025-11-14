# Sistema de Pedidos - Django + React

Um sistema completo de gerenciamento de pedidos construído com Django REST Framework no backend e React com TypeScript no frontend.

## 📋 Pré-requisitos

- **Python 3.8+**
- **Node.js 20+** (recomendado usar nvm)
- **PostgreSQL** instalado e rodando
- **Git**

## 🚀 Configuração do Projeto

### 1. Clone o Repositório

```bash
git clone <url-do-repositorio>
cd Teste-Clau
```

### 2. Configuração do Backend (Django)

#### 2.1. Navegue para a pasta do backend

```bash
cd backend
```

#### 2.2. Crie e ative um ambiente virtual Python

```bash
python -m venv .venv
source .venv/bin/activate  # No Windows: .venv\Scripts\activate
```

#### 2.3. Instale as dependências

```bash
pip install -r requirements.txt
```

#### 2.4. Configure o banco de dados PostgreSQL

1. **Crie o banco de dados**:

```bash
createdb ordersdb
```

2. **Configure o arquivo `.env`** na pasta `backend`:

```bash
# Crie o arquivo .env
touch .env
```

Adicione as seguintes variáveis ao arquivo `.env`:

```env
# Configuração do Banco de Dados PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ordersdb
DB_USER=seu_usuario_postgresql
DB_PASSWORD=sua_senha_postgresql
```

#### 2.5. Execute as migrações

```bash
python manage.py migrate
```

#### 2.6. Popule o banco com dados de exemplo

```bash
python manage.py create_mock_data
```

#### 2.7. Inicie o servidor Django

```bash
python manage.py runserver 9001
```

O backend estará disponível em: `http://127.0.0.1:9001/`

### 3. Configuração do Frontend (React)

#### 3.1. Abra um novo terminal e navegue para a pasta do frontend

```bash
cd frontend
```

#### 3.2. Instale o Node.js 20+ usando nvm (recomendado)

```bash
# Instale o nvm se não tiver
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instale e use o Node.js 20
nvm install 20
nvm use 20
```

#### 3.3. Instale as dependências

```bash
npm install
```

#### 3.4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:5173/`

## 🎯 Como Usar

### Acesso à Aplicação

- **Frontend**: http://localhost:5173/
- **Backend API**: http://127.0.0.1:9001/api/orders/
- **Admin Django**: http://127.0.0.1:9001/admin/ (se configurado)

### Funcionalidades

- ✅ Visualização de pedidos
- ✅ Filtros por status (Todos, Cancelados, Aprovados, Prontos para Produção)
- ✅ Detalhes expandíveis dos pedidos
- ✅ Toggle entre dados da API e dados mock
- ✅ Design responsivo

### Comandos Úteis

#### Backend

```bash
# Criar novos dados mock
python manage.py create_mock_data

# Criar superusuário para admin
python manage.py createsuperuser

# Executar migrações
python manage.py migrate

# Iniciar servidor
python manage.py runserver 9001
```

#### Frontend

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Executar linting
npm run lint
```

#### Banco de Dados

```bash
# Criar banco
createdb ordersdb

# Conectar ao banco
psql -d ordersdb

# Fazer backup
pg_dump ordersdb > backup.sql

# Restaurar backup
psql -d ordersdb -f backup.sql
```

## 🗄️ Backup e Restauração do Banco de Dados

### Criando um Backup

Para criar um backup completo do banco de dados atual:

```bash
# Navegue para a pasta raiz do projeto
cd /caminho/para/Teste-Clau

# Crie o backup (substitua os parâmetros conforme sua configuração)
pg_dump -h localhost -p 5432 -U seu_usuario -d ordersdb > backup-seu-nome.sql
```

### Restaurando um Backup

Para restaurar um backup existente (como o `backup-claudivan.sql` incluído no projeto):

#### 1. **Remova o banco atual** (⚠️ **Cuidado**: isso apagará todos os dados!)

```bash
# Conecte ao PostgreSQL como usuário padrão
psql -h localhost -p 5432 -U seu_usuario -d postgres

# Remova o banco existente
DROP DATABASE IF EXISTS ordersdb;

# Crie um novo banco vazio
CREATE DATABASE ordersdb;

# Saia do psql
\q
```

#### 2. **Restaure os dados do backup**

```bash
# Navegue para a pasta raiz do projeto onde está o arquivo de backup
cd /caminho/para/Teste-Clau

# Restaure o backup (substitua pelo nome do seu arquivo de backup)
psql -h localhost -p 5432 -U seu_usuario -d ordersdb < backup-claudivan.sql
```

#### 3. **Verifique a restauração**

```bash
# Navegue para a pasta do backend
cd backend

# Ative o ambiente virtual se necessário
source ../.venv/bin/activate  # ou o caminho para seu .venv

# Verifique os dados restaurados
python manage.py shell -c "from orders.models import Order, OrderItem; print('Orders:', Order.objects.count()); print('Items:', OrderItem.objects.count())"
```

### Exemplo de Uso com o Backup Incluído

O projeto inclui um arquivo `backup-claudivan.sql` com dados de exemplo. Para usá-lo:

```bash
# 1. Navegue para a pasta raiz
cd Teste-Clau

# 2. Remova e recrie o banco
psql -h localhost -p 5432 -U seu_usuario -d postgres -c "DROP DATABASE IF EXISTS ordersdb;"
psql -h localhost -p 5432 -U seu_usuario -d postgres -c "CREATE DATABASE ordersdb;"

# 3. Restaure o backup
psql -h localhost -p 5432 -U seu_usuario -d ordersdb < backup-claudivan.sql

# 4. Inicie o servidor
cd backend
python manage.py runserver 9001
```

### 📋 Notas sobre Backup/Restauração

- **⚠️ Atenção**: A restauração remove **todos** os dados existentes no banco
- **Credenciais**: Substitua `seu_usuario` pela sua configuração do PostgreSQL
- **Arquivo .env**: Certifique-se de que as credenciais no `.env` estão corretas
- **Verificação**: Sempre verifique se a restauração foi bem-sucedida testando a API
- **Backup Regular**: Faça backups regulares dos seus dados importantes

## 📁 Estrutura do Projeto

```
Teste-Clau/
├── backend/                 # Django REST Framework
│   ├── backend/            # Configurações do Django
│   ├── orders/             # App de pedidos
│   │   ├── models.py       # Modelos de dados
│   │   ├── serializers.py  # Serializers da API
│   │   ├── views.py        # Views da API
│   │   └── management/     # Comandos customizados
│   ├── manage.py
│   ├── requirements.txt
│   └── .env               # Variáveis de ambiente
├── frontend/               # React + TypeScript
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── Types/         # Tipos TypeScript
│   │   ├── data/          # Dados mock
│   │   └── utils/         # Utilitários
│   ├── package.json
│   └── vite.config.ts
└── README.md              # Este arquivo
```

## 🔧 Solução de Problemas

### Erros Comuns

**1. Erro de CORS**

- Verifique se o frontend está rodando na porta 5173
- Confirme as configurações de CORS no `backend/settings.py`

**2. Erro de conexão com banco**

- Verifique se o PostgreSQL está rodando
- Confirme as credenciais no arquivo `.env`
- Verifique se o banco `ordersdb` foi criado

**3. Erro de versão do Node.js**

- Use Node.js 20+ (instale via nvm)
- Limpe node_modules e reinstale: `rm -rf node_modules package-lock.json && npm install`

**4. Erro de Python/Django**

- Confirme que o ambiente virtual está ativo
- Instale as dependências: `pip install -r requirements.txt`
- Execute as migrações: `python manage.py migrate`

## 🌟 Tecnologias Utilizadas

### Backend

- **Django 5.2.7** - Framework web
- **Django REST Framework** - API REST
- **PostgreSQL** - Banco de dados
- **django-cors-headers** - Configuração CORS

### Frontend

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **React Icons** - Ícones

## 📝 Notas Importantes

- O sistema suporta dois tipos de dados: dados da API Django e dados mock locais
- Use o botão toggle no frontend para alternar entre as fontes de dados
- Os dados mock incluem imagens e informações completas do cliente
- Os dados da API são mais simples e focados nos pedidos básicos
- O servidor Django roda na porta 9001 por padrão
- O servidor React roda na porta 5173 por padrão

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando Django + React**
