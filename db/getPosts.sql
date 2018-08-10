SELECT p.title, u.username, u.profile_pic
FROM postz p 
JOIN userz u
ON p.author_id = u.id; 