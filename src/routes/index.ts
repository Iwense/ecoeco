const mainRoutes = {
    main: "/",
  };
  
  const authRoutes = {
    signup: "/signUp",
  };
  
  export const routes = { ...mainRoutes, ...authRoutes };

  export const links = {
    main: "/",
    exchangeCard: (offer: string) => `/userChange/offer/${offer}`,
    activeCard: (id: string) => `/userChange/active/${id}`,
    archiveCard: (id: string) => `/userChange/archive/${id}`,
  };