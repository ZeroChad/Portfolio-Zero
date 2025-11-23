import MGBDashboard from "@/assets/MGBDashboard.png";
import MGBManagement from "@/assets/MGBManagement.jpg";
import Capstone from "@/assets/Capstone.jpg";
import Maintenance from "@/assets/Maintenance.jpg";


const projects = [
  {
    title: "Digital Document Management System",
    description: "Full-stack web application with Ollama Ai",
    image: Capstone,
    tags: ["React", "Django", "MYSQL", "Docker", "Tailwindcss", "Ollama"]
  },
  { 
    title: "MBGX Exam Application",
    description: "An online examination platform for MBG Group",
    image: MGBDashboard,
    tags: ["React", "Django", "MySQL", "Jquery", "OJT"]
  },
  {
    title: "MGBGX Management System",
    description: "Document management system for MBG Group",
    image: MGBManagement,
    tags: ["Vue", "PHP", "Laravel", "MySQL", "OJT"]
  },
  {
    title: "Attendance/Payroll System",
    description: "Creating my own Attendance/Payroll System",
    image: Maintenance,
    tags: ["Ongoing"]
  }
];

export default projects;