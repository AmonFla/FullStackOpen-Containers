db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database'
    }
  ]
})

db.createCollection('users')
// password 123456
db.users.insert({ name: 'System Admin', username: 'admin', passwordHash: '$2b$10$i6eShdnA6hqlXxQ/jmejOOPPxX6GC5qdK2YuIvKWkVpN7oLXFL1iW' })
