import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Gap from "./gap/Gap";
import LogoCarousel from "./logoCarousel/LogoCarousel";
import BrandDeals from "./brandDeals/BrandDeals";
import GroupTrips from "./groupTrips/GroupTrips";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Travel from "./travel/Travel";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";

import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const isDark = false; // Always use light mode
  const changeTheme = () => {}; // No-op function

  return (
    <div>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Travel />
            <Projects />
            <StartupProject />
            <Gap />
            <LogoCarousel />
            <Achievement />
            <BrandDeals />
            <GroupTrips />
            <Profile />
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
