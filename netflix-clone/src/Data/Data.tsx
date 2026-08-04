import image1 from "../assets/images/bollywood.webp";
import image2 from "../assets/images/Saiyaara.webp";
import image3 from "../assets/images/wednesday.webp";
import image4 from "../assets/images/28yearslater.webp";
import image5 from "../assets/images/kapilShow.webp";
import image6 from "../assets/images/inspector.webp";
import image7 from "../assets/images/squidgame.webp";
import image8 from "../assets/images/Billionair.webp";
import image9 from "../assets/images/Narsimha.webp";
import { DownloadSvg, KidsSvg, TVSvg, WatchSvg } from "../assets/icons/Icons";

export const trendingSliderData = [
  { image: image1, rank: 1 },
  { image: image2, rank: 2 },
  { image: image3, rank: 3 },
  { image: image4, rank: 4 },
  { image: image5, rank: 5 },
  { image: image6, rank: 6 },
  { image: image7, rank: 7 },
  { image: image8, rank: 8 },
  { image: image9, rank: 9 },
];

export const OverviewDetails = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: TVSvg,
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: DownloadSvg,
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: WatchSvg,
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: KidsSvg,
  },
];

export const AccordionData = [
  {
    header: "What is Netflix?",
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
  },
  {
    header: "How much does Netflix cost?",
    content:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.",
  },
  {
    header: "Where can I watch?",
    content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },

  {
    header: "How do I cancel?",
    content: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    header: "What can I watch on Netflix?",
    content: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
  },
  {
    header: "Is Netflix good for kids?",
    content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
  }

];
