/*criar tabela*/
CREATE TABLE pessoas(
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE,
)

/*inserir informação*/
INSERT INTO pessoas(nome,nascimento) VALUES("Felipe","2001-09-03")
INSERT INTO pessoas(nome,nascimento) VALUES("Pedro","2001-06-20")
INSERT INTO pessoas(nome,nascimento) VALUES("Pelé","2001-12-25")

/*selecionar dados*/
SELECT * FROM pessoas

/*atualizar dados*/
UPDATE pessoas SET nome="Felipe Ribeiro"  WHERE id=?

/*deletar dados*/
SELECT * FROM pessoas WHERE id=5 /*conferir se é o certo*/
DELETE FROM pessoas WHERE id=1 /*deletar*/

/*ordenar*/
SELECT * FROM pessoas ORDER BY nome DESC /*decrescente*/

/*alterar tabela e adicionar coluna*/
ALTER TABLE "pessoas" ADD "genero" VARCHAR(1) NOT NULL AFTER "nascimento"

/*contagem*/
SELECT COUNT(genero), genero FROM pessoas GROUP BY genero

/*ESTRUTURAS ENTRE TABELAS*/
/*JOIN, ON, AS*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_canal = videos.id_vide

SELECT v.nome_video, v.autor_video, c.nome_canal
FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_vide
JOIN canais AS c ON vc.fk_canal = c.id_canal

/*JOIN == INNER JOIN: SÓ TRAZ OS VALORES PRESENTES NA CONSULTA*/
/*OUTER JOIN: TRAZ TBM VALORES NULL*/
SELECT *
FROM videos_canais AS vc
RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video

/*UNION: une consultas*/
SELECT *
FROM videos_canais AS vc
UNION
SELECT *
FROM videos_canais AS vc
RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal LIMIT 0, 25
