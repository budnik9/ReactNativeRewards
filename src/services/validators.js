export const amountValidator = value => /^\d{0,4}(\.\d{0,2})?$/.test(value);

export const nameValidator = value => /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value);
