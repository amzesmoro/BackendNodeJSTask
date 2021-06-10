-- Option 1
SELECT u1.ID, u1.UserName, u2.UserName as ParentUserName
FROM User as u1 LEFT JOIN User as u2 on u1.Parent = u2.ID
ORDER BY u1.ID ASC

-- Option 2
SELECT u1.ID, u1.UserName, u2.UserName as ParentUserName
FROM User as u1 LEFT JOIN User as u2 on u2.ID = u1.Parent
ORDER BY u1.ID ASC
