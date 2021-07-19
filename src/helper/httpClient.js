export default {
  get: async function(ctx, url, mutation) {
    const response = await fetch(url, {
      headers: { "Authorization-Token": localStorage.getItem("token") },
    });
    const data = await response.json();
    ctx.commit(mutation, data)
  },
};
