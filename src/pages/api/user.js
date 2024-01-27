import { User } from '@/database/models';

async function getAll() {
  try {
    const users = await User.findAll();
    return users;
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

async function create(body) {
  try {
    const { name, email } = body;
    const user = await User.create({ name, email });
    return user;
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

async function update(id, body) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(body);
      return user;
    } else {
      throw new Error('User not found');
    }
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

async function remove(id) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return 'User deleted successfully';
    } else {
      throw new Error('User not found');
    }
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const users = await getAll();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const data = await create(req.body);
      res.status(201).json(data);
    } else if (req.method === 'PUT') {
      const { id } = req.query;
      const data = await update(id, req.body);
      res.status(200).json(data);
    } else if (req.method === 'DELETE') {
      const { id } = req.query;
      const data = await remove(id);
      res.status(200).json({ message: data });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
