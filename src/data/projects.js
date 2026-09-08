import chatAppImg from '../assets/chatapp/Screenshot_20260825-120118.png';
import rzakImg from '../assets/Rzak/Screenshot_20260616-110122.png';
import cameraAppImg from '../assets/camera rental app/Screenshot_20260825-071907.png';

export const projects = [
  {
    id: '01',
    name: 'Chat App',
    category: 'Real-Time Communication',
    description:
      'A real-time mobile chat application built with React Native and Firebase, featuring OTP authentication, one-to-one messaging, media sharing, online status, push notifications, and audio/video calling using WebRTC.',
    tags: ['React Native', 'Firebase Authentication', 'Firebase Realtime Database', 'Firebase Storage', 'Firebase Cloud Messaging', 'WebRTC'],
    problem:
      'Users needed a fast, reliable messaging solution that worked seamlessly across both Android and iOS without sacrificing performance or design quality.',
    role: 'Full product development — architecture, UI, backend integration.',
    outcome:
      'A polished real-time communication app with smooth animations, reliable message delivery, and a minimal interface.',
    color: '#c8f542',
    image: chatAppImg
  },
  {
    id: '02',
    name: 'RZAK',
    category: 'Food Donation App',
    description:
      'A food donation mobile application that connects hotels and restaurants with people in need by allowing surplus food to be shared and claimed.',
    tags: ['React Native', 'Supabase', 'Resend',],
    problem:
      'An existing web store needed a dedicated mobile app that felt native, fast, and trustworthy — not a simple wrapper around a website.',
    role: 'Architecture design, React Native development, backend API integration.',
    outcome:
      'A smooth, conversion-optimised mobile commerce app with fast load times and a premium UI.',
    color: '#8b5cf6',
    image: rzakImg
  },
  {
    id: '03',
    name: 'Camera Rental App',
    category: 'Rental Management',
    description:
      'A mobile rental management application for managing professional camera equipment, including cameras, lenses, tripods, gimbals, lights, batteries, and memory cards, with daily rental pricing and customer information management.',
    tags: ['React Native', 'Firebase Firestore'],
    problem:
      'Making AI capabilities accessible within a mobile-first product without overwhelming the user or degrading performance.',
    role: 'End-to-end product development — AI integration, mobile UX, backend.',
    outcome:
      'A lightweight, fast AI companion that feels native and intentional rather than bolted-on.',
    color: '#38bdf8',
    image: cameraAppImg
  },
];
