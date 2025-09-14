

import globe from "@/public/Images/globe.svg"
import next from "@/public/Images/next.svg"
import vercel from "@/public/Images/vercel.svg"
import window from "@/public/Images/window.svg"
import { GraduationCap, Handshake, Search, Sparkles } from "lucide-react";
import { ReactNode } from "react";

export interface University {
    id: number;
    Badge: string;
    name: string;
    boximg: string;
    courses: string[];
    badgeStyle: string;
}

export interface Typeaside {
    id: number;
    text: string;

}

export interface Typecourse {
    id: number,
    name: string,
    badge: string,
    Post: string,
    month: string,
    fbutton: string,
    Details: string,
    motion: boolean
}

export interface Facultytype {
    Faultyimg: string,
    name: string,
    tech: string,
    exp: string,
    quote: string
}

export interface Collexatype {
        id: number,
        name: string,
        para: string,
        icon: ReactNode,
        color: string
}

export interface Faqtype{
    id: number,
    question: string,
    answer: string
}

export const onlineuniversity: University[] = [
    {
        id: 1,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },

    {
        id: 2,
        Badge: "A+ NAAC",
        name: "Jain Online",
        boximg: vercel,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
        id: 3,
        Badge: "A+ NAAC",
        name: "LPU Online",
        boximg: globe,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-emerald-500 to-teal-400",
    },
    {
        id: 4,
        Badge: "A+ NAAC",
        name: "Manipal Online",
        boximg: window,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
        id: 5,
        Badge: "A+ NAAC",
        name: "UPES Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
    },
    {
        id: 6,
        Badge: "A+ NAAC",
        name: "Chandigarh Univ.",
        boximg: vercel,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
        id: 7,
        Badge: "A+ NAAC",
        name: "SRM Online",
        boximg: window,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
        id: 8,
        Badge: "A+ NAAC",
        name: "IGNOU",
        boximg: globe,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-emerald-500 to-teal-400",
    },
    {
        id: 9,
        Badge: "A+ NAAC",
        name: "Symbiosis Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
        id: 10,
        Badge: "A+ NAAC",
        name: "NMIMS Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },

    {
        id: 11,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: vercel,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
        id: 12,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: globe,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-emerald-500 to-teal-400",
    },
    {
        id: 13,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: window,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
        id: 14,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
    },
    {
        id: 15,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: vercel,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
        id: 16,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: window,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-pink-500 to-rose-500",
    },
    {
        id: 17,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: globe,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-emerald-500 to-teal-400",
    },
    {
        id: 18,
        Badge: "A+ NAAC",
        name: "Amity Online",
        boximg: next,
        courses: ["MBA", "BBA", "BCA"],
        badgeStyle: "bg-gradient-to-r from-yellow-400 to-orange-500",
    }
]



export const Asidedata: Typeaside[] = [
    {
        id: 1,
        text: "PG Courses",

    },
    {
        id: 2,
        text: "Executive Education",
    },
    {
        id: 3,
        text: "Doctorate / Ph.D.",
    },
    {
        id: 4,
        text: "UG Courses",
    },
    {
        id: 5,
        text: "Job Guarantee",
    },
    {
        id: 6,
        text: "Study Abroad",
    },
    {
        id: 7,
        text: "Advanced Diploma",
    },
    {
        id: 8,
        text: "Skilling & Certificate",
    }
]


export const BrowseCourse: Typecourse[] = [
    {
        id: 1,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: true
    },
    {
        id: 2,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: true
    },
    {
        id: 3,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: true
    },
    {
        id: 4,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: false
    },
    {
        id: 5,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: true
    },
    {
        id: 6,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: false
    },
    {
        id: 7,
        name: "Online MBA",
        badge: 'ROI 100%',
        Post: "PG",
        month: "24 month",
        fbutton: "compare",
        Details: "Details",
        motion: false
    },
]


export const MainFaculty: Facultytype[] = [
    {
        Faultyimg: globe,
        name: "Dr. Neha Sharma",
        tech: "Data Science",
        exp: "Ex-IIT, 12+ yrs",
        quote: "Empowering students to solve real-world problems with data"
    },

    {
        Faultyimg: globe,
        name: "Ananya Rao",
        tech: "Product",
        exp: "Ex-Meta, 8+ yrs",
        quote: "Build for users, and success will follow"
    },

    {
        Faultyimg: globe,
        name: "Prof. Arjun Mehta",
        tech: "Marketing",
        exp: "Ex-ISB, 10+ yrs",
        quote: "Marketing is not a battle of products, it's a battle of perceptions"
    },

    {
        Faultyimg: globe,
        name: "Kunal Verma",
        tech: "Finance",
        exp: "Ex-Goldman, 9+ yrs",
        quote: "Numbers tell a story. Learn to read between the lines."
    },
]


export const Collexagroup:Collexatype[] = [
    {
        id: 1,
        name: "Unbiased Guidance",
        para: "No bias, no bakwaas. Get the real deal for YOUR goals.",
        icon: <Search />,
        color: "#163683"
    },
    {
        id: 1,
        name: "Unbiased Guidance",
        para: "No bias, no bakwaas. Get the real deal for YOUR goals.",
        icon: <GraduationCap />,
        color: "#163683"
    },
    {
        id: 1,
        name: "Unbiased Guidance",
        para: "No bias, no bakwaas. Get the real deal for YOUR goals.",
        icon: <Sparkles />,
        color: "#f0b100"
    },
        {
        id: 1,
        name: "Unbiased Guidance",
        para: "No bias, no bakwaas. Get the real deal for YOUR goals.",
        icon: <Handshake />,
        color: "#009966"
    },
    
]


export const FaqsData = [
    {
        id: 1,
        question: "How can I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
    },
    {
        id: 2,
        question: "How can I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
    },
    {
        id: 3,
        question: "How can I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
    },
    {
        id: 4,
        question: "How can I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
    },
    {
        id: 5,
        question: "How can I get started?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
    },
]