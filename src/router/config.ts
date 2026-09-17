export type AppRoute = {
  path: string | string[];
  exact: boolean;
  component: string;
};

const routes: AppRoute[] = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/talent/jonathan-ruiz",
    exact: true,
    component: "TalentJonathanRuiz",
  },
];

export default routes;
