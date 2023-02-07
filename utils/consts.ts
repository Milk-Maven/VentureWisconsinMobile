import { StyleSheet } from "react-native";
import { z } from "zod";
import { Listing } from "../../VentureWisconsinShared";

export enum USER_ROLE {
  "ADMIN" = "ADMIN",
  "USER" = "USER",
}

export enum ROUTES {
  LISTING_PAGE = "MainPage",
  ADMIN_PAGE = "AdminPage",
  USER_PAGE = "UserPage",
}

export const BASE_URL: Readonly<string> = "http://localhost:3000/";

export enum SPACING {
  LARGE = 50,
  MEDIUM = 30,
  SMALL = 10,
}

export enum FONT_WEIGHT {
  THIN = "200",
  MEDIUM = "400",
  BOLD = "600",
}

export enum COLORS {
  BLACK = "#545454",
  MAIN_YELLOW = "#fccf13",
  GREY = "#CFCFCE",
  SECONDARY_RED = "red",
  WHITE = "#fff",
}

export enum FONT_SIZE {
  X_LARGE = 32,
  LARGE = 24,
  MEDIUM = 16,
  SMALL = 12,
}

export const globalStyles = StyleSheet.create({
  pageContainer: {
    // backgroundColor: "#e8e8e8",
    flex: 1,
    // borderRadius: 20,
    marginTop: 50,
  },

  contentContainer: {
    flex: 1,
  },
  textBubble: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 15,
    padding: 5,
    paddingVertical: 10,
  },
  textBubbleHeader: {
    fontSize: FONT_SIZE.LARGE,
    fontWeight: FONT_WEIGHT.BOLD,
    textAlign: "center",
    paddingVertical: 5,
  },
});

export const mockListing: Listing[] = [
  {
    id: 0,
    images: `https://fastly.4sqi.net/img/general/600x600/7582041_YW-cY_0Lh04QKuHCHaH5nXOs50JFMGUc5GKBS_79TDY.jpg`,
    attributes: "cozy blue collar college",
    city: "Hales Corners",
    displayTitle: "Bar 430",
    subTitle: "1 dollar beers",
    address: "430 N Main St, Oshkosh, WI 54901",
    name: "Bar 430",
    email: "bar430@oshkosh.com",
    website: "bar430.com",
    phone: "(920) 230-1114",
    category: "bars",
    zipcode: "53130",
    description:
      "Venue for classic bar fare with some creative twists, a robust drink menu & brunch on weekends.",
  },
  {
    id: 1,
    images:
      "https://lh3.googleusercontent.com/p/AF1QipO1NgOQV1FZIuSksxG20y4hzNxISHQW34onekQU=s1360-w1360-h1020",
    attributes: "college",
    city: "Oshkosh",
    displayTitle: "Mollys",
    subTitle: "asdf",
    zipcode: "53209",
    email: "mollys@oshkosh.com",
    website: "mollymcguiresoshkosh.com",
    phone: "(920) 233-3301",
    address: "539 Campus Pl, Oshkosh, WI 54901",
    name: "Molly McGuire's",
    category: "bars",
    description:
      "Pub grub, cocktails & draft beer served in a wood-paneled space with a pool table & arcade games.",
  },
  {
    id: 2,
    images:
      "https://s3-media0.fl.yelpcdn.com/bphoto/BpbRI-DJDoNJvRh8Gp52ug/348s.jpg",
    attributes: "college",
    city: "Oshkosh",
    displayTitle: "D PUB",
    subTitle: "additional info",
    zipcode: "53207",
    address: "515 N Main St, Oshkosh, WI 54901",
    name: "d pub",
    website: "https://www.facebook.com/DistilleryPub/",
    email: "dpub@oshkosh.com",
    phone: "(920) 233-2565",
    category: "bars",
    description:
      "Located in historic downtown Oshkosh. Quaint, laid back pub, full-service restaurant and amazing mugs of imported beer.",
  },
];

export const formValidator = z.object({
  // id: z.string().optional(),
  address: z.string().min(1),
  attributes: z.string().optional(),
  category: z.string().optional(),
  city: z.string().min(1),
  description: z.string().min(1),
  displayTitle: z.string().min(1),
  email: z.string().email().min(1),
  images: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(10),
  subTitle: z.string().optional(),
  website: z.string().min(1),
  zipcode: z.string().min(5),
});
