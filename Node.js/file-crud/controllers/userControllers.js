const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'users.json');

const readUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeUsers = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

exports.getUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

exports.getUser = (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ msg: 'User not found' });
};

exports.createUser = (req, res) => {
  const users = readUsers();
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name: req.body.name,
  };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const users = readUsers();
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ msg: 'User not found' });

  users[idx] = { ...users[idx], ...req.body };
  writeUsers(users);
  res.json(users[idx]);
};

exports.deleteUser = (req, res) => {
  let users = readUsers();
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ msg: 'User not found' });

  const deletedUser = users.splice(idx, 1)[0];
  writeUsers(users);
  res.json(deletedUser);
};
