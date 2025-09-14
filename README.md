# Ecommerce Auth Service

Serviço de autenticação para o sistema de ecommerce de roupas.

## Pré-requisitos

- Java 17 ou superior
- Maven 3.6+

## Como executar

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd auth-service
```

### 2. Execute o projeto
```bash
./mvnw spring-boot:run
```

A aplicação estará disponível em: `http://localhost:8080`

## Acessando o banco de dados (H2 Console)

O H2 Console permite visualizar e gerenciar o banco de dados.

### URL e Configurações
- **URL**: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: (deixe em branco)

### Como usar
1. Acesse `http://localhost:8080/h2-console`
2. Preencha os campos:
   - **Driver Class**: `org.h2.Driver`
   - **JDBC URL**: `jdbc:h2:mem:testdb`
   - **User Name**: `sa`
   - **Password**: (deixe vazio)
3. Clique em "Connect"
4. Execute queries SQL como: `SELECT * FROM USERS;`

## Endpoints da API

- `POST /auth/login` - Fazer login
- `POST /auth/register` - Registrar novo usuário
- `GET /users` - Listar usuários (requer autenticação)

## Solução de problemas

### Porta 8080 já está em uso
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Ou altere a porta no application.properties:
server.port=8081
```

### H2 Console não acessível
Verifique se:
1. A aplicação está rodando
2. Acesse `http://localhost:8080/h2-console`
3. Use as configurações corretas listadas acima