# Getting Started with smn Permissions

A simple front-end solution to display only what the user is supposed to see.

## Quick Startup

Install the package by running:
`npm install smn-permissions'

Create a userPermissions object, containing all the permissions for each entity. (This should be fetched from a db)
`const userPermissions = {
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
}`

Add the PermContainer as a parent to your app, and pass the userPermissions object.
`<PermsContainer userPerms={userPermissions}>
    <!-- Contents of App -->
</PermsContainer>`