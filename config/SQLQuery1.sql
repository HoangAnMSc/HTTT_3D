create database dialy
use dialy
create table Nguoi_dung (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	MatKhau varchar(255),
	SDT varchar(10),
	x float,
	y float,
	tinhtrang varchar(255),
	DiaChi varchar(255),
    City varchar(255),
	Toa_do geography ,
)
create table HoDuongTinh (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	SDT varchar(10),
	x float,
	y float,
	DiaChi varchar(255),
	NgayBiDuongTinh datetime,
	tinhtrang varchar(255),
    City varchar(255),
	Toa_do geography ,
)
Create table User_Ho(
	NguoiDungID int NOT NULL,
	HoID int NOT NULL,
	CONSTRAINT PK_KhoaChinh PRIMARY KEY (NguoiDungID, HoID),
	CONSTRAINT FK_ND FOREIGN KEY (NguoiDungID) REFERENCES Nguoi_dung(ID),
	CONSTRAINT FK_Ho FOREIGN KEY (HoID) REFERENCES HoDuongTinh(ID)
)
-- Thêm Nguoi Dung

INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 1,'Alan','Le',0362791662,10.869948, 106.796439,'UIT',18/05/2020,'duong tinh','BINH DUONG',geography::Point(10.869948, 106.796439, 4326))

INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 2,'Jonny','Dang',0123456789,10.874842, 106.798475,'USA',19/05/2020,'duong tinh','HOA KI',geography::Point(10.874842, 106.798475, 4326))

