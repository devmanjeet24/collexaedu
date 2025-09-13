

import globe from "@/public/Images/globe.svg"
import next from "@/public/Images/next.svg"
import vercel from "@/public/Images/vercel.svg"
import window from "@/public/Images/window.svg"

export interface University {
  id: number;
  Badge: string;
  name: string;
  boximg: string; 
  courses: string[];
}

export const onlineuniversity : University[] = [
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : next,
        courses: ["MBA", "BBA", "BCA"],
    },

    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : vercel,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : globe,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : window,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : next,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : vercel,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : window,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : globe,
        courses: ["MBA", "BBA", "BCA"],
    },
    {
        id: 1,
        Badge : "A+ NAAC",
        name: "Amity Online",
        boximg : next,
        courses: ["MBA", "BBA", "BCA"],
    }
]