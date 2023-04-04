import LogoImage from '../images/logos/logo.svg'
export const modalData = {
    edit: {
        title: 'Edit datastream',
        input: {
            id: 'input-1',
            value: 'Google Ads report',
            placeholder: 'Enter your title here',
            error: 'An error occured',
            label: 'Datastream title',
        },
        textarea: {
            id: 'textarea-1',
            value: '',
            placeholder: 'Enter your message here',
            error: 'An error occured',
            label: 'Description',
        },
        logo: {
            src: LogoImage,
            alt: 'Google Ads',
        },
        footer: {
            copyText: 'Copy link',
            embedText: 'Get embed code',
            cancelText: 'Cancel',
            applyText: 'Apply',
        },
    },
    confirm: {
        title: 'Apply changes?',
        footer: {
            applyText: 'Apply',
            cancelText: 'Cancel',
        },
        text: 'This will overwrite all visualisations on connected dashboard widgets. This action cannot be undone.',
    },
    alert: {
        title: 'Alert',
        footer: {
            applyText: 'Got it',
        },
        text: 'This is an example of an alert message that is so important that deserved a modal dialog.',
    },
}

export const appData = {
    buttons: {
        edit: 'Open Edit Modal Dialog',
        confirm: 'Open Confirm Modal Dialog',
        alert: 'Open Alert Modal Dialog',
    },
}
