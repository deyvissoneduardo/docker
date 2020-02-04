create database email_sender;

/*para se conectar ao banco postgres*/
\c email_sender

create table emails (
    id serial not null,
    data timestamp not null default current_timestamp,
    assunto varchar(100) not null,
    mensagem varchar(250) not null
);