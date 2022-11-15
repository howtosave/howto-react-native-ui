type Navigation = {
  navigate: (scene: string) => void;
};

type MainStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Dashboard: undefined;
  About: undefined;
};

type DrawerStackParamList = {
  MainNavi: {
    isLoggedIn: boolean;
  };
  About: undefined;
};
