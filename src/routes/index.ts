const mainRoutes = {
    main: "/",
    sales: "/sales",
    analytics: "/analytics",
    list: "/list",
    invoice: "/invoice/:id",
    profile: "/profile",
    code: '/code',
    createList: '/createList',
    promo: '/promo',
  };
  
  const authRoutes = {
    signup: "/sign",
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };

  export const links = {
    main: "/",
    invoice: (id: string) => `/invoice/${id}`,
  };