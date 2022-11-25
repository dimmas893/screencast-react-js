import { atom } from 'recoil';

const authenticatedUser = atom({
    key: 'authenticatedUser',
    default: {
        user: [],
        check: true,
    }
})

export { authenticatedUser }
