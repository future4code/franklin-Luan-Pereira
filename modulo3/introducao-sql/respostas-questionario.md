**1.A**
>**CREATE TABLE** Actor (
    id **VARCHAR**(255) PRIMARY KEY,
    name **VARCHAR**(255) NOT NULL,
    salary **FLOAT** NOT NULL,
    birth_date **DATE** NOT NULL,
    gender **VARCHAR**(6) NOT NULL
);

> *VARCHAR* - Recebe caracteres(string)
> *FLOAT* - Recebe numeros com casas decimais (não inteiros)
> *DATE* - Recebe data

**1.B**
> *SHOW TABLES* - Mostra as tabelas
> *SHOW DATABASE* - Mostra banco de dados

**1.C**
> *DESCRIBE ACTOR* - Mostra a tabela 'Actor'

**2.B** 
> *Error Code: 1602. Duplicate entry "2" for primary key.* 

Codigo de erro: 1602. Entrada Duplicada 2 para chave primaria.

**2.C**
Nao consegue inserir porque falta preenchimento de outros dados

**2.D**
Nao recebe parametro name 

**2.E**
Data inserida sem aspas

**3.A**
> SELECT * from Actor WHERE gender="female"

**3.B**
> SELECT salary from Actor WHERE name="Tony Ramos"

**3.C**
> SELECT * from Actor WHERE gender = "invalid"

**3.D**
> SELECT * from Actor WHERE salary > 500000