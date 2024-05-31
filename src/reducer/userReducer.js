export const userInitialState = JSON.parse(window.localStorage.getItem('users')) ||  [];

export const updateUserLocalStorage = state => {
    window.localStorage.setItem('users', JSON.stringify(state));
}

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_USER':
            state = [
                ...state, 
                {
                    ...action.payload,
                }
            ];
            updateUserLocalStorage(state)
            return state;
        case 'DELETE_USER':
            state = state.filter(user => user.id !== action.payload);
            updateUserLocalStorage(state)
          return state;
        case 'DELETE_ALL_USERS':
          state = [];
            updateUserLocalStorage(state);
            return state;
        default: 
          return state;
      }
}