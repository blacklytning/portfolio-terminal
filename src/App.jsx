import React, { useState, useEffect, useRef, useContext, createContext } from 'react';

// Theme context
const ThemeContext = createContext();

// Data imports (inline for artifact)
const aboutMe = {
  name: "Prathamesh Mhatre",
  email: "prathamesh1450@gmail.com",
  location: "Bhiwandi, Thane",
  linkedin: "https://linkedin.com/in/mhatreprathamesh",
  github: "https://github.com/blacklytning",
  bio: "Passionate individual with a strong interest in machine learning and AI, seeking opportunities to apply theoretical knowledge to real-world applications and improve problem-solving and decision-making.",
};

const education = [
  {
    institution: "A. P. Shah Institute of Technology",
    location: "Kasarvadavli, Thane",
    degree: "Bachelor of Engineering in Computer Science and Engineering (A.I. & M.L)",
    period: "Nov 2022 - Present",
  },
];

const projects = [
  {
    name: "MedVision AI",
    technologies: "Python, TensorFlow, Flask, OpenCV, Grad-CAM",
    period: "Feb 2025 – Mar 2025",
    shortDescription: "Medical AI web app for disease detection",
    details: [
      "Built a hackathon-winning medical AI web app to detect brain tumors and lung diseases from medical scans",
      "Used CNN models to classify brain tumor types and visualized tumor regions and localization with Grad-CAM",
      "Implemented a lung condition classifier to identify COVID-19, pneumonia, and normal cases from chest X-rays",
      "Developed a Flask-based interface for uploading images, displaying predictions, and visual explanations",
    ],
  },
  {
    name: "CampusSwap",
    technologies: "Python, Django, Vue.js, PostgreSQL",
    period: "Jan 2024 – Mar 2024",
    shortDescription: "Online marketplace for students",
    details: [
      "Built an online marketplace for students to sell their used-goods to fellow students at a competitive price point",
      "Developed a full-stack web application with Django as backend with Vue.js as the frontend",
      "Integrated secure user authentication and authorization mechanisms to ensure safe transactions",
      "Used PostgreSQL for robust and efficient database management and data manipulation",
    ],
  },
  {
    name: "Heath Health Detector",
    technologies: "Python, Django, PostgreSQL, Bootstrap",
    period: "Jan 2024 – Feb 2024",
    shortDescription: "Heart attack risk prediction web app",
    details: [
      "Made a web application to assess and predict the risk of heart attacks using artificial intelligence",
      "Created machine learning models to predict heart attack risk based on user information",
      "Conducted thorough testing and validation of machine learning models to ensure accuracy and reliability",
      "Deployed the application on Railway.app, ensuring high availability and scalability",
    ],
  },
  {
    name: "CarBazaar",
    technologies: "Python, Streamlit",
    period: "Aug 2023 – Oct 2023",
    shortDescription: "AI-driven used car e-commerce platform",
    details: [
      "Built an e-commerce platform for selling used cars with AI-driven price setting",
      "Utilized Python for backend development and integration of machine learning models",
      "Conducted data preprocessing and feature engineering to improve model accuracy",
      "Designed using Streamlit to create an interactive and user-friendly interface",
    ],
  },
  {
    name: "OrangeFox",
    technologies: "Android, Open Source",
    period: "Jun 2022 – Oct 2022",
    shortDescription: "Custom Android recovery for Moto G60",
    details: [
      "Designed and implemented a custom recovery specifically for the Moto G60",
      "Tested and debugged the recovery to ensure reliability and stability",
      "Collaborated with the OrangeFox Recovery Project community for support and best practices",
      "Provided detailed documentation and support for users to facilitate installation and usage",
    ],
  },
];

const skills = {
  Languages: ["Java", "Python", "SQL (Postgres)", "JavaScript", "HTML/CSS"],
  Frameworks: ["Vue.js", "Node.js", "Django", "Streamlit", "Bootstrap", "React"],
  "Developer Tools": ["Git", "Google Cloud Platform", "VS Code", "PyCharm", "IntelliJ"],
  Libraries: ["pandas", "NumPy", "Matplotlib"],
  Internships: ["AWS AI-ML Virtual Internship (AICTE)", "Google Android Dev Virtual Internship (AICTE)"],
};

const extracurricular = [
  {
    organization: "A.I. & M.L. Student Association",
    role: "Technical Co-Head",
    period: "Jan 2024 – Jan 2025",
    details: [
      "Organized and managed a unique toy car race event at Exalt 2024 utilizing hand motion driving sensors, creating an interactive and engaging experience for participants of all ages",
    ],
  },
  {
    organization: "OJUS Team",
    role: "Technical Member",
    period: "Jan 2023 – Feb 2023",
    details: ["Contributed to the front-end development and animations of the Ojus event website"],
  },
  {
    organization: "Motorola Common Team",
    role: "Member",
    period: "Sep 2022 – Present",
    details: [
      "Specialized in testing and developing custom ROMs for Moto G60, focusing on enhancing user experience through optimized performance",
    ],
  },
];

const fileSystem = {
  type: "directory",
  children: {
    home: {
      type: "directory",
      children: {
        prathamesh: {
          type: "directory",
          children: {
            documents: {
              type: "directory",
              children: {
                "resume.txt": {
                  type: "file",
                  content: `PRATHAMESH MHATRE
Computer Science & Engineering (AI & ML)
A. P. Shah Institute of Technology

Email: prathamesh1450@gmail.com
Location: Bhiwandi, Thane
LinkedIn: linkedin.com/in/mhatreprathamesh
GitHub: github.com/blacklytning

Passionate individual with a strong interest in machine learning and AI,
seeking opportunities to apply theoretical knowledge to real-world
applications and improve problem-solving and decision-making.`,
                },
                "projects.md": {
                  type: "file",
                  content: `# My Projects

## MedVision AI
- Medical AI web app for disease detection
- Technologies: Python, TensorFlow, Flask, OpenCV, Grad-CAM
- Period: Feb 2025 – Mar 2025

## CampusSwap
- Online marketplace for students
- Technologies: Python, Django, Vue.js, PostgreSQL
- Period: Jan 2024 – Mar 2024

## Heath Health Detector
- Heart attack risk prediction web app
- Technologies: Python, Django, PostgreSQL, Bootstrap
- Period: Jan 2024 – Feb 2024

## CarBazaar
- AI-driven used car e-commerce platform
- Technologies: Python, Streamlit
- Period: Aug 2023 – Oct 2023

## OrangeFox
- Custom Android recovery for Moto G60
- Technologies: Android, Open Source
- Period: Jun 2022 – Oct 2022`,
                },
              },
            },
            projects: {
              type: "directory",
              children: {
                medvision: {
                  type: "directory",
                  children: {
                    "README.md": {
                      type: "file",
                      content: `# MedVision AI

A hackathon-winning medical AI web app to detect brain tumors and lung diseases from medical scans.

## Features
- CNN models for brain tumor classification
- Grad-CAM visualization for tumor localization
- Lung condition classifier for COVID-19, pneumonia detection
- Flask-based web interface

## Technologies
- Python
- TensorFlow
- Flask
- OpenCV
- Grad-CAM`,
                    },
                  },
                },
                campusswap: {
                  type: "directory",
                  children: {
                    "README.md": {
                      type: "file",
                      content: `# CampusSwap

An online marketplace for students to sell their used goods to fellow students at competitive prices.

## Features
- Full-stack web application
- Secure user authentication
- Safe transaction mechanisms
- Efficient database management

## Technologies
- Python (Django)
- Vue.js
- PostgreSQL`,
                    },
                  },
                },
              },
            },
            ".bashrc": {
              type: "file",
              content: `# Prathamesh's bash configuration
export PS1="\\u@\\h:\\w$ "
alias ll="ls -la"
alias la="ls -A"
alias l="ls -CF"
alias ..="cd .."
alias ...="cd ../.."

# Custom aliases for portfolio
alias portfolio="cd ~/portfolio"
alias projects="cd ~/projects"

echo "Welcome to Prathamesh's terminal!"`,
            },
          },
        },
      },
    },
    etc: {
      type: "directory",
      children: {
        passwd: {
          type: "file",
          content: `root:x:0:0:root:/root:/bin/bash
prathamesh:x:1000:1000:Prathamesh Mhatre:/home/prathamesh:/bin/bash`,
        },
        hostname: {
          type: "file",
          content: "portfolio-server",
        },
      },
    },
    var: {
      type: "directory",
      children: {
        log: {
          type: "directory",
          children: {
            "system.log": {
              type: "file",
              content: `[2024-01-15 10:30:00] Portfolio system started
[2024-01-15 10:30:01] Terminal interface initialized
[2024-01-15 10:30:02] All systems operational`,
            },
          },
        },
      },
    },
  },
};

// Theme definitions
const themes = {
  carbonfox: {
    name: 'Carbon Fox',
    bg: '#161616',
    text: '#f2f4f8',
    accent: '#78a9ff',
    green: '#42be65',
    yellow: '#ffab91',
    red: '#ee5396',
    purple: '#be95ff',
    cyan: '#3ddbd9',
    prompt: '#42be65',
    secondary: '#525252',
  },
  dracula: {
    name: 'Dracula',
    bg: '#282a36',
    text: '#f8f8f2',
    accent: '#bd93f9',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    red: '#ff5555',
    purple: '#bd93f9',
    cyan: '#8be9fd',
    prompt: '#50fa7b',
    secondary: '#44475a',
  },
  nord: {
    name: 'Nord',
    bg: '#2e3440',
    text: '#d8dee9',
    accent: '#88c0d0',
    green: '#a3be8c',
    yellow: '#ebcb8b',
    red: '#bf616a',
    purple: '#b48ead',
    cyan: '#88c0d0',
    prompt: '#a3be8c',
    secondary: '#3b4252',
  },
  gruvbox: {
    name: 'Gruvbox',
    bg: '#282828',
    text: '#ebdbb2',
    accent: '#83a598',
    green: '#b8bb26',
    yellow: '#fabd2f',
    red: '#fb4934',
    purple: '#d3869b',
    cyan: '#8ec07c',
    prompt: '#b8bb26',
    secondary: '#3c3836',
  },
  tokyonight: {
    name: 'Tokyo Night',
    bg: '#1a1b26',
    text: '#c0caf5',
    accent: '#7aa2f7',
    green: '#9ece6a',
    yellow: '#e0af68',
    red: '#f7768e',
    purple: '#bb9af7',
    cyan: '#7dcfff',
    prompt: '#9ece6a',
    secondary: '#24283b',
  },
};

// ASCII Art
const asciiArt = `
██████╗ ██████╗  █████╗ ████████╗██╗  ██╗ █████╗ ███╗   ███╗███████╗███████╗██╗  ██╗
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██╔══██╗████╗ ████║██╔════╝██╔════╝██║  ██║
██████╔╝██████╔╝███████║   ██║   ███████║███████║██╔████╔██║█████╗  ███████╗███████║
██╔═══╝ ██╔══██╗██╔══██║   ██║   ██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║██╔══██║
██║     ██║  ██║██║  ██║   ██║   ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗███████║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`;

// Matrix Animation Component
const MatrixAnimation = ({ theme, onStop }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = `${theme.bg}10`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = theme.green;
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    
    const animate = () => {
      draw();
      animationRef.current = setTimeout(animate, 100);
    };
    
    animate();
    
    const handleClick = () => onStop();
    canvas.addEventListener('click', handleClick);
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      canvas.removeEventListener('click', handleClick);
    };
  }, [theme, onStop]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 cursor-pointer border rounded"
      style={{ backgroundColor: theme.bg }}
    />
  );
};

// Command processor hook
const useTerminal = () => {
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDirectory, setCurrentDirectory] = useState('/home/prathamesh');
  const [showMatrix, setShowMatrix] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const formatOutput = (content, type = 'text') => {
    return { content, type, timestamp: Date.now() };
  };

  const navigateToDirectory = (path, currentDir, fs) => {
    if (path === '/') return '/';
    if (path === '~') return '/home/prathamesh';
    
    let targetPath;
    if (path.startsWith('/')) {
      targetPath = path;
    } else if (path === '..') {
      const parts = currentDir.split('/').filter(p => p);
      parts.pop();
      targetPath = parts.length ? '/' + parts.join('/') : '/';
    } else {
      targetPath = currentDir === '/' ? `/${path}` : `${currentDir}/${path}`;
    }
    
    // Navigate through filesystem
    const pathParts = targetPath.split('/').filter(p => p);
    let current = fs;
    
    for (const part of pathParts) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null; // Path doesn't exist
      }
    }
    
    return current.type === 'directory' ? targetPath : null;
  };

  const listDirectory = (path, fs) => {
    const pathParts = path === '/' ? [] : path.split('/').filter(p => p);
    let current = fs;
    
    for (const part of pathParts) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    
    if (current.type !== 'directory') return null;
    
    return Object.entries(current.children || {}).map(([name, item]) => ({
      name,
      type: item.type,
    }));
  };

  const getFile = (path, fs) => {
    const pathParts = path.split('/').filter(p => p);
    let current = fs;
    
    for (const part of pathParts) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      } else {
        return null;
      }
    }
    
    return current.type === 'file' ? current.content : null;
  };

  const generateTree = (obj, prefix = '', isLast = true, path = '/') => {
    const entries = Object.entries(obj.children || {});
    let result = '';
    
    entries.forEach(([name, item], index) => {
      const isLastItem = index === entries.length - 1;
      const connector = isLastItem ? '└── ' : '├── ';
      const icon = item.type === 'directory' ? '📁 ' : '📄 ';
      
      result += prefix + connector + icon + name + '\n';
      
      if (item.type === 'directory' && item.children) {
        const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
        result += generateTree(item, newPrefix, isLastItem);
      }
    });
    
    return result;
  };

  const processCommand = (input) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add to command history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    const [command, ...args] = trimmedInput.split(' ');
    const arg = args.join(' ');

    // Add command to terminal history
    setHistory(prev => [...prev, { 
      content: `${currentDirectory.replace('/home/prathamesh', '~')}$ ${trimmedInput}`, 
      type: 'command' 
    }]);

    switch (command.toLowerCase()) {
      case 'help':
        setHistory(prev => [...prev, formatOutput(`Available commands:

Core Commands:
  help              - Show this help message
  about             - Display personal information and bio
  education         - Show educational background
  projects          - List all projects
  project [name]    - Show detailed project information
  skills            - Display technical skills
  extracurricular   - Show extracurricular activities
  contact           - Display contact information
  clear             - Clear the terminal screen

File System:
  ls                - List directory contents
  cd [dir]          - Change directory
  pwd               - Show current directory
  cat [file]        - View file contents
  tree              - Display directory structure

System:
  neofetch          - Display system information
  whoami            - Show current user
  date              - Show current date and time
  uptime            - Show system uptime

Fun Commands:
  matrix            - Enter the Matrix
  fortune           - Display a random quote
  cowsay [text]     - ASCII cow says your text
  theme [name]      - Change color theme

Available themes: carbonfox, dracula, nord, gruvbox, tokyonight`)]);
        break;

      case 'about':
        setHistory(prev => [...prev, formatOutput(`About Me

${aboutMe.name}
${aboutMe.email}
${aboutMe.location}

LinkedIn: ${aboutMe.linkedin}
GitHub: ${aboutMe.github}

${aboutMe.bio}`, 'info')]);
        break;

      case 'education':
        const eduOutput = education.map(edu => 
          `${edu.institution}
${edu.location}
${edu.degree}
${edu.period}`
        ).join('\n\n');
        setHistory(prev => [...prev, formatOutput(`Education

${eduOutput}`, 'info')]);
        break;

      case 'projects':
        const projectsList = projects.map((proj, i) => 
          `${i + 1}. ${proj.name}
   ${proj.shortDescription}
   Technologies: ${proj.technologies}
   Period: ${proj.period}`
        ).join('\n\n');
        setHistory(prev => [...prev, formatOutput(`Projects

${projectsList}

Use 'project [name]' to see detailed information about a specific project.`, 'info')]);
        break;

      case 'project':
        if (!arg) {
          setHistory(prev => [...prev, formatOutput('Usage: project [name]\nAvailable projects: ' + projects.map(p => p.name.toLowerCase().replace(/\s+/g, '')).join(', '), 'error')]);
        } else {
          const project = projects.find(p => 
            p.name.toLowerCase().replace(/\s+/g, '') === arg.toLowerCase().replace(/\s+/g, '')
          );
          if (project) {
            const details = project.details.map(detail => `• ${detail}`).join('\n');
            setHistory(prev => [...prev, formatOutput(`${project.name}

Technologies: ${project.technologies}
Period: ${project.period}

Description:
${project.shortDescription}

Details:
${details}`, 'info')]);
          } else {
            setHistory(prev => [...prev, formatOutput(`Project '${arg}' not found. Use 'projects' to see all available projects.`, 'error')]);
          }
        }
        break;

      case 'skills':
        const skillsOutput = Object.entries(skills).map(([category, items]) => 
          `${category}:
  ${items.join(', ')}`
        ).join('\n\n');
        setHistory(prev => [...prev, formatOutput(`Technical Skills

${skillsOutput}`, 'info')]);
        break;

      case 'extracurricular':
        const extraOutput = extracurricular.map(activity => 
          `${activity.organization}
Role: ${activity.role}
Period: ${activity.period}

${activity.details.map(detail => `• ${detail}`).join('\n')}`
        ).join('\n\n');
        setHistory(prev => [...prev, formatOutput(`Extracurricular Activities

${extraOutput}`, 'info')]);
        break;

      case 'contact':
        setHistory(prev => [...prev, formatOutput(`Contact Information

Name: ${aboutMe.name}
Email: ${aboutMe.email}
Location: ${aboutMe.location}

Social Links:
LinkedIn: ${aboutMe.linkedin}
GitHub: ${aboutMe.github}

Feel free to reach out for opportunities or collaborations!`, 'info')]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'ls':
        const items = listDirectory(currentDirectory, fileSystem);
        if (items) {
          const output = items.map(item => {
            const icon = item.type === 'directory' ? '📁' : '📄';
            return `${icon} ${item.name}`;
          }).join('\n');
          setHistory(prev => [...prev, formatOutput(output || 'Empty directory')]);
        } else {
          setHistory(prev => [...prev, formatOutput('Directory not found', 'error')]);
        }
        break;

      case 'cd':
        if (!arg) {
          setCurrentDirectory('/home/prathamesh');
          setHistory(prev => [...prev, formatOutput('')]);
        } else {
          const newPath = navigateToDirectory(arg, currentDirectory, fileSystem);
          if (newPath) {
            setCurrentDirectory(newPath);
            setHistory(prev => [...prev, formatOutput('')]);
          } else {
            setHistory(prev => [...prev, formatOutput(`cd: ${arg}: No such file or directory`, 'error')]);
          }
        }
        break;

      case 'pwd':
        setHistory(prev => [...prev, formatOutput(currentDirectory)]);
        break;

      case 'cat':
        if (!arg) {
          setHistory(prev => [...prev, formatOutput('cat: missing file operand', 'error')]);
        } else {
          const filePath = arg.startsWith('/') ? arg : `${currentDirectory}/${arg}`;
          const content = getFile(filePath, fileSystem);
          if (content) {
            setHistory(prev => [...prev, formatOutput(content)]);
          } else {
            setHistory(prev => [...prev, formatOutput(`cat: ${arg}: No such file or directory`, 'error')]);
          }
        }
        break;

      case 'tree':
        const treeOutput = generateTree(fileSystem);
        setHistory(prev => [...prev, formatOutput(`/\n${treeOutput}`)]);
        break;

      case 'neofetch':
      case 'fastfetch':
        setHistory(prev => [...prev, formatOutput(`                    ..-^^---..
                .-'  .---.    '.
              .-'    -.   \\     \\
            ./       \\_    \\     \\
            '         __    \\     '.
          .'         _.-'   /_     \\
         /           .-'   .'  \\     \\
        |        .-'  _.-'     \\      \\
        |      .'   .'          \\      \\
        '.  .-'  _.-'            \\       \\
          '''   .'               \\       \\
               '                  \\       '
              '                    \\      '
             '                      \\    '
            '                        \\  '
           '                          ''

OS: Portfolio Linux
Host: Terminal Interface
Kernel: ReactJS 18.x
Uptime: ${Math.floor(Math.random() * 24)} hours, ${Math.floor(Math.random() * 60)} mins
Shell: portfolio-shell
Resolution: ${window.innerWidth}x${window.innerHeight}
Theme: ${theme.name}
Terminal: Prathamesh's Portfolio Terminal`, 'success')]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, formatOutput(`You are viewing ${aboutMe.name}'s portfolio
Computer Science & Engineering Student specializing in AI & ML
Currently building amazing projects and seeking new opportunities!`, 'info')]);
        break;

      case 'date':
        setHistory(prev => [...prev, formatOutput(new Date().toString())]);
        break;

      case 'uptime':
        const uptime = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        setHistory(prev => [...prev, formatOutput(`up ${uptime} hours, ${minutes} minutes, 1 user, load average: 0.${Math.floor(Math.random() * 99)}, 0.${Math.floor(Math.random() * 99)}, 0.${Math.floor(Math.random() * 99)}`)]);
        break;

      case 'matrix':
        setShowMatrix(true);
        setHistory(prev => [...prev, formatOutput('Entering the Matrix... Click to exit', 'success')]);
        break;

      case 'fortune':
        const quotes = [
          "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
          "The best error message is the one that never shows up. - Thomas Fuchs",
          "Code is like humor. When you have to explain it, it's bad. - Cory House",
          "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
          "The most important single aspect of software development is to be clear about what you are trying to build. - Bjarne Stroustrup",
          "First, solve the problem. Then, write the code. - John Johnson",
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setHistory(prev => [...prev, formatOutput(randomQuote, 'info')]);
        break;

      case 'cowsay':
        const text = arg || 'Hello, World!';
        const border = '-'.repeat(text.length + 2);
        setHistory(prev => [...prev, formatOutput(`  ${border}
< ${text} >
  ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, 'info')]);
        break;

      case 'theme':
        if (!arg) {
          setHistory(prev => [...prev, formatOutput(`Current theme: ${theme.name}

Available themes:
• carbonfox - Dark theme with blue accents (default)
• dracula - Purple and pink accents on dark background
• nord - Cool blue tones
• gruvbox - Warm earthy tones
• tokyonight - Dark blue with vibrant accents

Usage: theme [name]`, 'info')]);
        } else {
          const newTheme = themes[arg.toLowerCase()];
          if (newTheme) {
            setTheme(newTheme);
            setHistory(prev => [...prev, formatOutput(`Theme changed to ${newTheme.name}`, 'success')]);
          } else {
            setHistory(prev => [...prev, formatOutput(`Theme '${arg}' not found. Use 'theme' to see available themes.`, 'error')]);
          }
        }
        break;

      default:
        setHistory(prev => [...prev, formatOutput(`Command '${command}' not found. Type 'help' for available commands.`, 'error')]);
    }
  };

  return {
    history,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    currentDirectory,
    processCommand,
    showMatrix,
    setShowMatrix,
  };
};

// Terminal Input Component
const TerminalInput = ({ onCommand, commandHistory, historyIndex, setHistoryIndex, currentDirectory, theme }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const commands = [
    'help', 'about', 'education', 'projects', 'project', 'skills', 'extracurricular', 
    'contact', 'clear', 'ls', 'cd', 'pwd', 'cat', 'tree', 'neofetch', 'fastfetch',
    'whoami', 'date', 'uptime', 'matrix', 'fortune', 'cowsay', 'theme'
  ];

  const projectNames = projects.map(p => p.name.toLowerCase().replace(/\s+/g, ''));
  const themeNames = Object.keys(themes);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(input);
      setInput('');
      setShowSuggestions(false);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  const handleTabCompletion = () => {
    const words = input.split(' ');
    const currentWord = words[words.length - 1];
    
    let possibleCompletions = [];
    
    if (words.length === 1) {
      // Complete command
      possibleCompletions = commands.filter(cmd => cmd.startsWith(currentWord.toLowerCase()));
    } else if (words[0] === 'project') {
      // Complete project names
      possibleCompletions = projectNames.filter(name => name.startsWith(currentWord.toLowerCase()));
    } else if (words[0] === 'theme') {
      // Complete theme names
      possibleCompletions = themeNames.filter(name => name.startsWith(currentWord.toLowerCase()));
    }
    
    if (possibleCompletions.length === 1) {
      const newWords = [...words];
      newWords[newWords.length - 1] = possibleCompletions[0];
      setInput(newWords.join(' '));
    } else if (possibleCompletions.length > 1) {
      setSuggestions(possibleCompletions);
      setShowSuggestions(true);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      {showSuggestions && suggestions.length > 0 && (
        <div 
          className="absolute bottom-full left-0 mb-2 p-2 rounded border"
          style={{ 
            backgroundColor: theme.secondary, 
            borderColor: theme.accent,
            color: theme.text 
          }}
        >
          <div className="text-sm">Suggestions:</div>
          {suggestions.map((suggestion, i) => (
            <div key={i} className="cursor-pointer hover:opacity-80" onClick={() => {
              const words = input.split(' ');
              words[words.length - 1] = suggestion;
              setInput(words.join(' '));
              setShowSuggestions(false);
              inputRef.current?.focus();
            }}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center">
        <span style={{ color: theme.prompt }} className="mr-2 font-mono">
          prathamesh@portfolio:{currentDirectory.replace('/home/prathamesh', '~')}$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none font-mono"
          style={{ color: theme.text }}
          autoComplete="off"
          spellCheck="false"
        />
        <span 
          className="animate-pulse ml-1"
          style={{ color: theme.text }}
        >
          ▊
        </span>
      </div>
    </div>
  );
};

// Terminal Output Component
const TerminalOutput = ({ history, theme }) => {
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const getTextColor = (type) => {
    switch (type) {
      case 'command': return theme.secondary;
      case 'error': return theme.red;
      case 'success': return theme.green;
      case 'info': return theme.cyan;
      default: return theme.text;
    }
  };

  return (
    <div 
      ref={outputRef}
      className="flex-1 overflow-auto font-mono text-sm whitespace-pre-wrap break-words p-4"
      style={{ backgroundColor: theme.bg }}
    >
      {history.map((item, i) => (
        <div 
          key={i} 
          className="mb-1"
          style={{ color: getTextColor(item.type) }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

// Welcome Screen Component
const WelcomeScreen = ({ theme }) => {
  return (
    <div className="text-center mb-6" style={{ color: theme.accent }}>
      <pre className="text-xs md:text-sm mb-4 font-mono leading-tight">
        {asciiArt}
      </pre>
      <div className="mb-4" style={{ color: theme.text }}>
        <h2 className="text-xl font-bold mb-2">Welcome to my Terminal Portfolio</h2>
        <p className="text-sm opacity-80">
          Type 'help' to see available commands or 'neofetch' for system info.
        </p>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-1 mb-4">
        <div 
          className="h-1 rounded-full transition-all duration-1000"
          style={{ backgroundColor: theme.accent, width: '100%' }}
        ></div>
      </div>
    </div>
  );
};

// Main Terminal Component
const Terminal = () => {
  const { theme } = useContext(ThemeContext);
  const { 
    history, 
    commandHistory, 
    historyIndex, 
    setHistoryIndex, 
    currentDirectory, 
    processCommand, 
    showMatrix, 
    setShowMatrix 
  } = useTerminal();
  
  const terminalRef = useRef(null);

  const handleTerminalClick = () => {
    const input = terminalRef.current?.querySelector('input');
    input?.focus();
  };

  if (showMatrix) {
    return (
      <div className="h-screen flex flex-col" style={{ backgroundColor: theme.bg }}>
        <div className="flex-1">
          <MatrixAnimation 
            theme={theme} 
            onStop={() => setShowMatrix(false)} 
          />
        </div>
        <div className="text-center p-4" style={{ color: theme.green }}>
          Click anywhere to exit the Matrix
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={terminalRef}
      className="h-screen flex flex-col cursor-text"
      style={{ backgroundColor: theme.bg, color: theme.text }}
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div 
        className="flex items-center justify-between p-3 border-b"
        style={{ borderColor: theme.secondary, backgroundColor: theme.secondary }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="font-mono text-sm" style={{ color: theme.text }}>
            prathamesh@portfolio ~ carbonfox
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 flex flex-col">
        <TerminalOutput history={[
          { content: <WelcomeScreen theme={theme} />, type: 'component' },
          ...history
        ]} theme={theme} />
        
        <div className="p-4 border-t" style={{ borderColor: theme.secondary, backgroundColor: theme.bg }}>
          <TerminalInput
            onCommand={processCommand}
            commandHistory={commandHistory}
            historyIndex={historyIndex}
            setHistoryIndex={setHistoryIndex}
            currentDirectory={currentDirectory}
            theme={theme}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div 
        className="flex justify-between items-center px-4 py-2 border-t text-xs"
        style={{ 
          borderColor: theme.secondary, 
          backgroundColor: theme.secondary,
          color: theme.text 
        }}
      >
        <span>Theme: {theme.name}</span>
        <span>Press Tab for completion • Type 'help' for commands</span>
      </div>
    </div>
  );
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.carbonfox);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <div className="font-mono">
        <Terminal />
      </div>
    </ThemeProvider>
  );
};

export default App;
