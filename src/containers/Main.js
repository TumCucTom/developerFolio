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
              images={["IMG_0109.webp", "IMG_7198.webp", "IMG_7204.webp", "IMG_8388.webp", "IMG_1661.webp", "68A5FD31-CA33-4958-BBDF-A52140DE7380.webp", "IMG_2610.webp", "IMG_6366.webp", "IMG_8455.webp", "IMG_3622.webp"]}
              folder="carousels/about-me"
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
                     folder="personal-images"
                   />
            <Achievement />
            <BrandDeals />
            <LogoCarousel />
            <GroupTrips />
                               <PhotoCarousel
                     images={["IMG_7010.webp", "IMG_1492.webp", "IMG_6948.webp", "IMG_4994.webp", "IMG_7308.webp", "IMG_4249.webp", "IMG_4812.webp", "IMG_6884.webp", "IMG_4585.webp", "IMG_9130_jpg.webp", "IMG_8693.webp", "IMG_6607.webp", "b7b8d486-7d0f-4230-9d67-4bd4e123932b.webp", "IMG_1182.webp", "IMG_1200.webp", "IMG_0069.webp", "IMG_1566.webp"]}
                     folder="carousels/group-trips"
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
