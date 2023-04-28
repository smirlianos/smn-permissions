# SMN Permissions

A simple front-end solution to display only what the user is supposed to see.


# Getting Started with smn Permissions

This package works by creating different entities and assigning permissions for each one.
For example, one entity might be called "Projects", and have the following permissions:
* _View_
* _Create_
* _Edit_
* _Delete_

The user might have access to see the projects, but not create, edit, or delete them.

In that case, the permissions of the user could look something like this:
```javascript
const userPermissions = {
    projects: {
        view: 1,
        create: 0,
        edit: 0,
        delete: 0
    }
}
```

## Quick Startup

Install the package by running:
```bash
npm install smn-permissions
```

Create a userPermissions object, containing all the permissions for each entity. (This should be fetched from a db)
```javascript
const userPermissions = {
    projects: {
        view: 1
    },
    users: {
        view: 0,
        edit: 0
    },
    clients: {
        view: 1
    },
    suppliers: {
        view: 1
    }
}
```

Add the PermContainer as a parent to your app, and pass the userPermissions object.
```javascript
<PermsContainer userPerms={userPermissions}>
    <!-- Contents of App -->
</PermsContainer>
```

Each child element should then have a 'data-perms' attribute requiring specific permissions of a specific entity.
```javascript
<button data-perms='projects:create'>Create New Project</button>
```

## Contributing

Pull requests are welcome.