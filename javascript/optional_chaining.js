const data = {
  user: {
    profile: null,
    getName() {
      return "Ann";
    },
  },
};

console.log(data.user?.profile?.city); // undefined (profile is null — stops here)
console.log(data.user?.getName?.()); // 'Ann'   (method exists, so it's called)
console.log(data.admin?.getName?.()); // undefined (admin doesn't exist — never calls)
console.log(data.items?.[0]); // undefined (items doesn't exist — no crash)
