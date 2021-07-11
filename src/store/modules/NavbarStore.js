export default {
  state: {
    mainTabs: [
      {
        id: 0,
        title: "Главная",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home align-middle me-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
        route: "/",
      },
      {
        id: 1,
        title: "Мои заказы",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list align-middle me-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
        route: "/second",
      },
      {
        id: 2,
        title: "Aкции",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-percent align-middle me-2"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`,
        route: "/third",
      },
    ],
    categories: [],
  },

  mutations: {
    updateCategories(state, categories){
      state.categories = categories
    }
  },

  actions: {
    async getNewCategories(ctx){
      const req = await fetch('http://localhost:8080/api/categories', {headers:{'Authorization-Token': '9a68f80d-0f3c7c56-4733c445-8ae4f75b'}})
      const categories = await req.json()
      console.log(categories);
      ctx.commit('updateCategories', categories)
    }
  },

  getters: {
    getMainTabs(state) {return state.mainTabs},
    getCategories(state) {return state.categories},
  },
};
