# 🗓️ Sistema de Agendamento via WhatsApp

Este projeto tem como objetivo criar um sistema completo de agendamentos, ideal para negócios que desejam permitir que seus clientes agendem horários diretamente pelo WhatsApp. O sistema é desenvolvido em **Node.js**, com **banco de dados MySQL**, **mensagens automatizadas**, geração dinâmica de horários, integração com a **API oficial do WhatsApp**, e execução de tarefas programadas com `node-cron`.

---

## 🤖 Como o bot funciona

O bot será o principal ponto de interação com os usuários. Ele deve:

- **Responder comandos enviados via WhatsApp**
- **Listar horários disponíveis automaticamente**
- **Registrar novos agendamentos com base nos comandos recebidos**
- **Confirmar ou cancelar agendamentos**
- **Lembrar o cliente do compromisso próximo ao horário**
- Utilizar **uma fila de atendimento** para não sobrecarregar o sistema quando várias mensagens forem recebidas ao mesmo tempo.

Exemplos de comandos:
- `/horarios` → mostra horários disponíveis
- `/agendar 2025-05-05 14:00` → agenda o horário escolhido
- `/meus-agendamentos` → mostra os agendamentos ativos
- `/cancelar` → cancela o agendamento ativo
- `/confirmar` → confirma o agendamento

---

### 🧭 Fluxo do Sistema de Agendamentos via WhatsApp

Abaixo está o fluxograma que representa o caminho da mensagem desde o envio pelo cliente até a resposta final do sistema:

![Fluxograma do bot](https://i.imgur.com/TbxskaE.png)

#### 🧠 Como funciona o fluxo:

1. **Cliente envia mensagem via WhatsApp**  
   O cliente inicia o contato solicitando um agendamento, cancelamento ou modificação.

2. **Mensagem chega no servidor**  
   O backend recebe essa mensagem e inicia o processamento.

3. **Mensagem é enviada para o sistema de fila**  
   Para garantir escalabilidade e não travar o servidor principal, a mensagem é enfileirada.

4. **Worker processa a mensagem**  
   Um worker (processo separado) analisa a mensagem e identifica a intenção do cliente (marcar, adiar, editar ou cancelar um horário).

5. **Ação do cliente é identificada**  
   O sistema toma decisões baseadas na intenção extraída da mensagem.

6. **Ação executada (marcar/adiar/editar/cancelar horário)**  
   Dependendo da ação, o sistema verifica a tabela de horários disponíveis no banco de dados e realiza a alteração necessária.

7. **Resposta para o cliente**  
   O bot responde com a confirmação da ação ou apresenta opções disponíveis (como horários alternativos).

---

🧩 Esse fluxo garante um atendimento organizado, eficiente e sem travamentos, mesmo com múltiplas mensagens chegando ao mesmo tempo.

## ✅ To-do List (Organizado)

### 🔧 1. Setup do Projeto ✅
- [x] Inicializar projeto Node.js (`npm init`)
- [x] Estrutura de pastas (`src`, `cron`, `services`, `db`, `bot`)
- [x] Configurar Docker + Docker Compose (Node + MySQL)
- [x] Criar `.env` com variáveis (PORT, DB_HOST, DB_USER, DB_PASS, etc)

---

### 🗂️ 2. Banco de Dados
- [ ] Criar tabelas no MySQL:
  - [ ] `profissionais`
  - [ ] `clientes`
  - [ ] `horarios_disponiveis`
  - [ ] `agendamentos`
- [ ] Criar seed de horários para testes
- [ ] Criar migrations ou script SQL versionado

---

### ⏰ 3. Node-Cron + Geração de Horários
- [ ] Instalar e configurar `node-cron`
- [ ] Criar tarefa diária para gerar horários da semana seguinte
- [ ] Ignorar sábados, domingos e feriados (lista fixa ou API)
- [ ] Marcar horário como **indisponível** se já estiver passado do limite de clientes agendados para o mesmo horário

---

### 🤖 4. Bot do WhatsApp (Core do Sistema)
- [ ] Integrar com a API oficial do WhatsApp
- [ ] Criar fila de mensagens para evitar sobrecarga do bot
- [ ] Implementar comandos básicos via WhatsApp:
  - [ ] `/horarios` → listar horários disponíveis
  - [ ] `/agendar [data hora]` → agendar horário
  - [ ] `/confirmar` → confirmar agendamento
  - [ ] `/cancelar` → cancelar agendamento
  - [ ] `/meus-agendamentos` → listar agendamentos do cliente
- [ ] Mensagens automáticas:
  - [ ] Confirmação de agendamento
  - [ ] Lembrete antes do horário
  - [ ] Mensagem de cancelamento
- [ ] Sistema de logs de mensagens e erros do bot

---

### 🧪 5. Testes Essenciais (Não Pode Falhar)
- [ ] Gerar horários válidos da semana (sem feriados ou duplicados)
- [ ] Garantir que dois clientes não agendem o mesmo horário
- [ ] Cliente consegue:
  - [ ] Agendar horário
  - [ ] Ver horários atualizados
  - [ ] Cancelar e liberar horário corretamente
- [ ] Bot:
  - [ ] Responde corretamente aos comandos
  - [ ] Processa fila de mensagens sem travar
  - [ ] Não duplica agendamentos por mensagens repetidas
  - [ ] Lida com falhas de conexão à API do WhatsApp

---

### 🧰 6. Extras (Estabilidade e Manutenção)
- [ ] Script de limpeza de agendamentos antigos
- [ ] Logs de erro simples (arquivo ou console)
- [ ] Documentar como subir o projeto com Docker
- [ ] Criar instruções de uso do bot no `README.md`

---

## 🚀 Tecnologias Usadas
- Node.js
- MySQL
- Docker / Docker Compose
- Node-Cron
- API oficial do WhatsApp

---

## ✍️ Autor
Carlos Eduardo — projeto pessoal de estudo e aplicação prática de backend, automação e integração de sistemas com foco real.
