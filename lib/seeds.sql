BEGIN;

INSERT INTO users (user_id, username, password) VALUES

(1, 'irwin', 'irwin');


INSERT INTO secretStuff (secret_id, mySecret, myOtherSecret) VALUES

(1, 'one time i stole', 'another time i lied'),
(2, 'i have a phobia of squirrels', 'jk'),
(3, 'third secret', 'need coffee to be witty');

INSERT INTO rooms (room_name, user_id) VALUES

('kitchen', 1);
INSERT INTO items (description, price, room_id, user_id) VALUES
('table', '20', 3, 1);


COMMIT;
