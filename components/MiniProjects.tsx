import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function MiniProjects() {
  const testimonials = [
    {
      quote:
        "An intelligent Sudoku Solver built using JavaScript that instantly solves complex puzzles using efficient backtracking algorithms.",
      name: "Sudoku Solver",
      designation: "JavaScript Logic Based Project",
      src: "/suduko.png",
      url: "https://sudoku-eight-iota.vercel.app/SsGame",
    },
    {
      quote:
        "A classic Snake Game with smooth controls, score tracking, and responsive gameplay built using HTML, CSS, and JavaScript.",
      name: "Snake Game",
      designation: "Interactive Browser Game",
      src: "/snake.png",
      url: "https://snake-game-dnxd.vercel.app/",
    },
    {
      quote:
        "A modern version of the Tetris Game featuring dynamic block movement, collision detection, and increasing difficulty levels.",
      name: "Tetris Game",
      designation: "JavaScript Arcade Game",
      src: "/tetris.png",
      url: "https://twinklekumari2.github.io/Tetris-Game/",
    },
    {
      quote:
        "A modern MERN-based Todo application that allows users to create, organize, update, and manage tasks efficiently with a clean and responsive interface.",
      name: "Paste - A Todo App",
      designation: "MERN Stack Project",
      src: "/paste.png",
      url: "https://paste-three-chi.vercel.app",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
