import isEmail from 'validator/lib/isEmail';

const mimeType = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
const isValid = (type) => !!mimeType.find(x => x === type);

const title = {
    firstName: 'First name',
    lastName: 'Last name',
    password: 'Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    title: 'Title',
    description: 'Description',
    level: 'Level',
    cuisine: 'Cuisine',
    images: 'Images',
    cookTime: 'Cooking time',
    prepTime: 'Preparation time',
    groups: 'Groups',
    steps: 'Steps',
    ingredients: 'Ingredients'
};

const minLength = {
    firstName: 1,
    lastName: 1,
    password: 6,
    currentPassword: 6,
    newPassword: 6,
    cookTime: 1,
    prepTime: 1,
    groups: 1,
    steps: 1,
    ingredients: 1
};

const maxLength = {
    firstName: 12,
    lastName: 12,
    description: 500,
    images: 6,
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

    } else if (value !== password) {
        return { [name]: [`The Passwords don't match`] };
    }
};

export const inputNumber = (name, value) => {
    value = value.trim();
    if (value.length === 0) {
        return { [name]: ["Required"] };

    } else if (isNaN(value)) {
        return { [name]: [`Your estimate of ${title[name]} should be a number`] };

    } else if (value.length > maxLength[name]) {
        return { [name]: [`The ${title[name]} can be maximum ${maxLength[name]} minutes`] };

    } else if (value.length < minLength[name]) {
        return { [name]: [`The ${title[name]} can be minimum ${minLength[name]} minutes`] };
    };
};

export const arrayField = (name, value) => {
    let newArr = value.map(x => {
        return x.trim();
    });

    if (newArr.length === 0) {
        return { [name]: ["Required"] };
    } else if (newArr.length > maxLength[title]) {
        return { [name]: [`The ${title[name]} can be maximum ${maxLength[name]} options`] };
    } else if (newArr.length < minLength[name]) {
        return { [name]: [`The ${title[name]} can be minimum ${minLength[name]} options`] };
    };
};

export const imagesField = (value) => {
    if (value > maxLength['images']) {
        return { 'images': [`The ${title['images']} can be maximum ${maxLength['images']} images`] };
    } else if( value === 0) {
        return { 'images': ["Required"] };
    }
};


export const imagesType = (name, type) => {
    if (!isValid(type)) {
        return { [name]: ["File does not support"] };
    };
};