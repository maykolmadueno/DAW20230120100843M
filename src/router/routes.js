const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/login",
        component: () => import("components/auth/Login.vue"),
      },
      {
        path: "/registro",
        component: () => import("components/auth/Register.vue"),
      },
      {
        path: "/userlog",
        component: () => import("pages/UsuarioLogueado.vue"),
      },
      // {
      //   path: "/pr",
      //   component: () => import("components/auth/pruebaReg.vue"),
      // },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
