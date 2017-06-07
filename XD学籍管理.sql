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

-- 创建课程表
create table Course
(
	courseID char(11) ,
    coursename varchar(255) not null,
    primary key(courseID)
);

-- 创建选课表
create table XKtab
(
	courseID char(11),
    class char(7) not null,
    cstart int not null,
    cend int not null,
    xueqi varchar(10) not null,
    teacher char(11) not null,
    room varchar(10) not null,
    whichday int not null,
    AMPM char(4) not null,
    jie int not null,
    foreign key (courseID) references Course(courseID)
)











delete from XKtab where courseID = "jrjgc000000";
select * from XKtab


alter table XKtab drop column whichday

alter table XKtab add jie int not null

update table XKtab set whichday=4,AMPM="上午",jie=2  where courseID = "jrjgc000000";



ALTER TABLE XKtab modify class char(7)
insert into Course(courseID,coursename) values("jrjgc000000","软件工程");
insert into XKtab values("jrjgc000000","1403013",1,18,"2017-1","姚勇","B601",4,"上午",2);

select * from XKtab

update table XKtab set whichday = 5 where courseID = "jwlcc000000"


insert into Course(courseID,coursename) values("jwlaq000000","网络安全");
insert into XKtab values("jwlaq000000","1403013",1,18,"2017-1","焦晓鹏","B603",2,"上午",1);


insert into Course(courseID,coursename) values("jwlcc000000","网络存储");
insert into XKtab values("jwlcc000000","1403013",1,12,"2017-1","车向泉","B601",2,"下午",2);







insert into user_pw(userid,pw) values("14030130040","chang199698")

-- 插入语句
insert into student(xuehao,Sname,sex) values("14030130040","畅阳光","男");
update student set img = "images/光哥.jpg" where xuehao="14030130040";
update student set  mianmao="党员",riqi="2014-8-15", yuan="计算机学院",zhuanye="计算机科学与技术",fangxiang="计科网络方向",nianjia="2014" where xuehao="14030130040";
select * from student;
update student set banji = "13" where xuehao="14030130040"


