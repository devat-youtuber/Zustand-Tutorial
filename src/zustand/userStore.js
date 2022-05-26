import axios from "axios";

const userState = {
  data: [],
  loading: false,
  error: undefined
}

let userStore = (set, get) => {
  return {
    userState,
    getUsers: async () => {
      set(
        (state) => {
          state.userState.loading = true;
        },
        false,
        `users/fetch_request`
      )

      try {
        const res = await axios.get(`/users?_sort=createdAt&_order=desc`)

        set(
          (state) => {
            state.userState.loading = false;
            state.userState.data = res.data;
          },
          false,
          `users/fetch_success`
        )
      } catch (err) {
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.error = err;
          },
          false,
          `users/fetch_error`
        )
      }
    },
    createUsers: async (newUser) => {
      set(
        (state) => {
          state.userState.loading = true;
        },
        false,
        "users/create_request"
      )
  
      try {
        const res = await axios.post(`/users`, newUser);
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.data = [res.data, ...state.userState.data];
          },
          false,
          "users/create_success"
        )
      } catch (err) {
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.error = err;
          },
          false,
          "users/create_error"
        )
      }
    },
    updateUsers: async (newUser) => {
      set(
        (state) => {
          state.userState.loading = true;
        },
        false,
        "users/update_request"
      )
  
      try {
        await axios.put(`/users/${newUser.id}`, newUser);
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.data = state.userState.data?.map(item => 
              item.id === newUser.id ? newUser: item
            )
          },
          false,
          "users/update_success"
        )
      } catch (err) {
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.error = err;
          },
          false,
          "users/update_error"
        )
      }
    },
    deleteUsers: async (id) => {
      set(
        (state) => {
          state.userState.loading = true;
        },
        false,
        "users/delete_request"
      )
  
      try {
        await axios.delete(`/users/${id}`);
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.data = state.userState.data?.filter(item => item.id !== id)
          },
          false,
          "users/delete_success"
        )
      } catch (err) {
        set(
          (state) => {
            state.userState.loading = false;
            state.userState.error = err;
          },
          false,
          "users/delete_error"
        )
      }
    }
  }
}


export default userStore