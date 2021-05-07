const mainRoutes = {
    main: "/",
    sales: "/sales",
    analytics: "/analytics",
    list: "/list/:id?",
    profile: "/profile"
  };
  
  const authRoutes = {
    signup: "/sign",
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };

  export const links = {
    main: "/",
    list: (id: string) => `/list/${id}`,
  };