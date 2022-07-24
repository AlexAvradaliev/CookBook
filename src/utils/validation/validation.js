import isEmail from 'validator/lib/isEmail';

const title = {
    firstName: 'First name',
    lastName: 'Last name',
    password: 'Password',
    repassword: 'Confirm password'
};

export const inputText = (name, value, max, min) => {
    value = value.trim();
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (value.length > max) {
        return { [name]: [`The ${title[name]} can be maximum ${max} characters`] };

    } else if (value.length < min) {
        return { [name]: [`The ${title[name]} can be minimum ${min} characters`] };
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