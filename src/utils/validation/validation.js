import isEmail from 'validator/lib/isEmail';

const title = {
    firstName: 'First name',
    lastName: 'Last name',
    password: 'Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
};

const minLength = {
    firstName: 1,
    lastName: 1,
    password: 6,
    currentPassword: 6,
    newPassword: 6,
};

const maxLength = {
    firstName: 12,
    lastName: 12,
};

export const inputText = (name, value) => {
    value = value.trim();
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (value.length > maxLength[name]) {
        return { [name]: [`The ${title[name]} can be maximum ${maxLength[name]} characters`] };

    } else if (value.length < minLength[name]) {
        return { [name]: [`The ${title[name]} can be minimum ${minLength[name]} characters`] };
    };
};

export const inputEmail = (name, value) => {
    value = value.trim();
    const email = isEmail(value);
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (!email) {
        return { [name]: [`Email must be a be valid`] };
    };
};

export const confirmPassword = (name, value, password) => {
    value = value.trim();
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (value != password) {
        return { [name]: [`The Passwords don\'t match`] };
    }
};