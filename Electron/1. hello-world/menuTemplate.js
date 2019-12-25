module.exports = [{
    label: 'Hello World',
    submenu: [{
            label: 'Open'
        },
        {
            label: 'Open folder'
        },
        {
            type: 'separator'
        },
        {
            label: 'Save'
        },
        {
            label: 'Save as'
        },
        {
            type: 'separator'
        },
        {
            label: 'Preferences'
        },
        {
            label: 'Settings'
        },
        {
            type: 'separator'
        },
        {
            label: 'Exit',
            role: 'quit',
            accelerator: 'CommandOrControl+Q'
        }
    ]
},
{role: 'windowMenu'}
];