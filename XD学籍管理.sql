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
    pw varchar(20) not null
    -- foreign key(userid) references student(xuehao)
) engine=InnoDB;

insert into user_pw values("14030130040","chang199698");

-- 创建课程表
create table Course
(
	courseID char(11) ,
    coursename varchar(255) not null,
    xuefen int not null,
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

-- 创建成绩表
create table score(
xuehao   char(11) references Student(xuehao),
CourseID char(11) references XKtab(courseID),
score int not null
)

-- 创建老师账号信息表
create table Tuser_pw
(
	userid char(11)  primary key,
    pw varchar(20) not null
);

-- alter table Tuser_pw add primary key (userid);
-- 创建老师表

CREATE TABLE `teacher` (
  `gonghao` char(11),
  `tname` varchar(20) NOT NULL,
  `sex` char(2) NOT NULL,
  `IDcard` char(18) DEFAULT NULL,
  `jigaun` varchar(20) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `riqi` date DEFAULT NULL,
  `jibie` varchar(10) DEFAULT NULL,
  `xueyuan` varchar(20) DEFAULT NULL,
  `banji` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gonghao`),
  foreign key(gonghao) references Tuser_pw(userid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- 以下部分为我测试数据库而自行插入的


-- 插入课程
insert into Course values("jgt00000014","工程制图",2);
insert into Course values("jcyy0000014","C语言",2);
insert into Course values("jdxwl000014","大学物理",2);
insert into Course values("jjsll000014","军事理论",2);
insert into Course values("jdljcl00015","电路基础",2);
insert into Course values("jxhyxt00015","信号与系统",2);
insert into Course values("jsfjc000016","算法基础",3);
insert into Course values("jwjyl000016","微机原理",2);

-- 分配课程
insert into XKtab values("jsfjc000016","1403013",1,18,"2016-1","关羽","B335",4,"下午",2);
insert into XKtab values("jwjyl000016","1403013",1,18,"2016-2","车向泉","B345",2,"上午",2);
insert into XKtab values("jxhyxt00015","1403013",1,18,"2015-2","朱娟娟","B305",2,"上午",2);
insert into XKtab values("jdljcl00015","1403013",1,7,"2015-2","周端","B205",4,"上午",2);
insert into XKtab values("jjsll000014","1403013",1,7,"2015-1","杨小小","D205",3,"上午",2);
insert into XKtab values("jdxwl000014","1403013",1,15,"2015-1","王欣明","B337",5,"下午",2);
insert into XKtab values("jcyy0000014","1403013",1,18,"2014-2","姚勇","B437",1,"上午",1);
insert into XKtab values("jgt00000014","1403013",1,18,"2014-2","马云","B603",2,"上午",1);
insert into XKtab values("jrjgc000000","1403013",1,18,"2017-1","姚勇","B601",4,"上午",2);
insert into XKtab values("jwlaq000000","1403013",1,18,"2017-1","焦晓鹏","B603",2,"上午",1);
insert into XKtab values("jwlcc000000","1403013",1,12,"2017-1","车向泉","B601",5,"下午",2);


-- 录入分数
insert into score values("14030130040","jgt00000014",78);
insert into score values("14030130040","jcyy0000014",88);
insert into score values("14030130040","jdxwl000014",68);
insert into score values("14030130040","jjsll000014",98);
insert into score values("14030130040","jdljcl00015",89);
insert into score values("14030130040","jxhyxt00015",98);
insert into score values("14030130040","jwjyl000016",89);
insert into score values("14030130040","jsfjc000016",78);

-- 插入一个老师
insert into Tuser_pw values("14030130036",123456);
insert into teacher(gonghao,tname,sex,riqi,jibie,xueyuan,banji) values("14030130036","蒿鹏程","男","2000-08-15","讲师","计算机学院","1403013");


select * from xktab ;


select * from XKtab;
insert into score values("14030130040","jrjgc000000",98);
insert into score values("14030130040","jwlaq000000",88);
insert into score values("14030130040","jwlcc000000",89);
alter table Course add  xuefen int not null;

truncate table XKtab;

select * from Course
update Course set xuefen= 3 where courseID = 'jrjgc000000' or courseID ='jwlaq000000';
update Course set xuefen = 2 where courseID ='jwlcc000000';
alter table Student modify banji char(7) not null
update Student set banji = "1403013" where xuehao="14030130040";

select * from XKtab





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
select coursename,xuefen,score from score,Course where score.CourseID = Course.CourseID and xuehao = "14030130040" and score.CourseID in(select courseID from XKtab  where class =(select banji from Student where xuehao = "14030130040") and xueqi = "2015-2");

select * from Tuser_pw;



select * from student;

select * from XKtab where class = "1403013" group by xueqi;

SET SQL_SAFE_UPDATES = 0;
delete from score where CourseID = "jrjgc000000";

SET SQL_SAFE_UPDATES = 0;
delete from score where CourseID = "jwlaq000000";

insert into score values("14030130040","jrjgc000000",88);
insert into score values("14030130040","jwlaq000000",86);
