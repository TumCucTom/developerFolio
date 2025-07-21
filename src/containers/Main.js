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
import GalleryCTAs from "../components/galleryCTAs/GalleryCTAs";
import PhotoCarousel from "../components/photoCarousel/PhotoCarousel";

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
            <GalleryCTAs />
            <PhotoCarousel 
              images={["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"]}
            />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Travel />
            <Projects />
            <StartupProject />
            <PhotoCarousel 
              images={["7.webp", "8.webp", "9.webp", "10.webp", "11.webp", "12.webp"]}
            />
            <Achievement />
            <BrandDeals />
            <LogoCarousel />
            <GroupTrips />
            <PhotoCarousel 
              images={["13.webp", "14.webp", "15.webp", "16.webp", "17.webp", "18.webp"]}
            />
            <Profile />
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
