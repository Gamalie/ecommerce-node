CREATE OR ALTER PROCEDURE getOneUser(@user_id varchar(50))
AS
BEGIN
SELECT * FROM Users  WHERE user_id=@User_id AND is_deleted=0

END

