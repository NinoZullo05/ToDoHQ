-- Register Query

INSERT INTO users (Username, Email, Password) VALUES (? , ? , ?)

-- Login Query

SELECT * FROM users WHERE Username = ? AND Password = ?;

 -- Get UserName by id 

SELECT UserName from users WHERE UserID = ? ;

-- Update User's Email

UPDATE users SET Email = ? WHERE UserID = ? ;

-- Update User's Password

UPDATE users SET Password = ? WHERE UserID = ? ;

-- Delete User

DELETE FROM users WHERE UserID = ? ;

