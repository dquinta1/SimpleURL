export const userKeys = {
    user: ['user'],
    property: (property) => [...userKeys.user, {property}],
}

export const urlKeys = {
    all: ['urls'],
    urlByShortened: (tinyUrl) => [...urlKeys.all, {tinyUrl}],
}