export const setUsers = (user) => {
    console.log(user);
    return { type: 'SET_USER', payload: { user } }

}