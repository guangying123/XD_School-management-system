-- 创建student表
create database XD_School_Manager;
use XD_School_Manager;
create table Student 
(
	xuehao 	char(11) primary key,
    Sname   varchar(20) not null,
    sex    	char(2) not null,
    IDCard 	char(18),
    mz  	varchar(10),
    jguan   varchar(20),
    birth   date,
    mianmao varchar(10),
    riqi    date,
    yuan    varchar(12),
    zhuanye varchar(20),
    fangxiang varchar(20),
    nianjia   char(4),
    banji     varchar(20),
    img     varchar(255)
);

-- 创建账号和密码表  user_pw
create table user_pw
(
	userid char(11) ,
    pw varchar(20) not null,
    foreign key(userid) references student(xuehao)
);














insert into user_pw(userid,pw) values("14030130040","chang199698")

-- 插入语句
insert into student(xuehao,Sname,sex) values("14030130040","畅阳光","男");
update student set img = "images/光哥.jpg" where xuehao="14030130040";
update student set  mianmao="党员",riqi="2014-8-15", yuan="计算机学院",zhuanye="计算机科学与技术",fangxiang="计科网络方向",nianjia="2014" where xuehao="14030130040";
select * from student;
update student set banji = "13" where xuehao="14030130040"


