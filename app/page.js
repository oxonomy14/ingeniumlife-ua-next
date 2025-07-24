import AboutSection from "@/component/about/AboutSection";
import ActivitySection from "@/component/activity/ActivitySection";
import BannerSection from "@/component/banner/BannerSection";
import BlogSection from "@/component/blog/BlogSection";
import CategorySection from "@/component/category/CategorySection";
import EventSection from "@/component/event/EventSection";
import FaqSection from "@/component/faq/FaqSection";
import FooterSection from "@/component/footer/FooterSection";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
import TestimonialSection from "@/component/testimonial/TestimonialSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoSection from "@/component/video/VideoSection";
import WorkSection from "@/component/work/WorkSection";

export const metadata = {
  title: "Школа астрологии InGenium. Обучение астрологии онлайн для начинающих",
  description:
    "Обучение астрологии по авторской программе П.Дементьева–бесплатный урок из курса натальной астрологии. Наша школа астрологии приглашает на онлайн-обучение астрологии. Курсы астрологии от 1000 грн. По окончании выдается сертификат. ☎: +38 (094) 490-75-26 $ Лучшие цены.",
};

export default function Home() {
  return (
    <>
      <NavbarSection style="" logo="img/home/main-logo-color-180x55.png" />
      <BannerSection />
      <CategorySection />
      <AboutSection />
      <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} />
      <FaqSection img="images/faq_img.jpg" />
      <WorkSection />
      <TestimonialSection />
      <ActivitySection />
      <VideoSection />
      <BlogSection />
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="" />
    </>
  );
}
