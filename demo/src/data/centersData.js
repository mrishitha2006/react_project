// src/data/centersData.js
import iotCoeImage from '../assets/iotcoe.jpg';
import aiCoeImage from '../assets/aicoe.jpg';
import eyeCoeImage from '../assets/dlcoe.jpg';
import arvrCoeImage from '../assets/arcoe.jpg';
import ccImage from '../assets/ccrc.jpg';
import daImage from '../assets/darc.jpg';
import atImage from '../assets/image.png';

export const centersData = {
  coes: [
    {
      id: 1,
      name: "IoT enabled CoE",
      agency: "AICTE & M/s Smart Bridge",
      image: iotCoeImage,
      bestProject: {
        title: "IoT-Driven Traffic Management System",
        description: "A system using real-time traffic density monitoring to optimize signal timings and reduce congestion.",
      },
      ongoing: [
        {
          title: "Smart Home Automation System",
          description: "Automating home appliances like lights, fans, and locks, controllable via mobile apps or voice assistants.",
        },
        {
          title: "IoT-Based Health Monitoring System",
          description: "Wearable devices to track vital signs like heart rate and temperature, sending alerts during emergencies.",
        },
        {
          title: "IoT-Powered Smart Elderly Assistance System",
          description: "Wearables for the elderly to monitor vitals, schedule reminders, and trigger emergency SOS alerts for caregivers.",
        },
        {
          title: "IoT-Based Smart Greenhouse System",
          description: "Monitors temperature, humidity, and light to optimize greenhouse conditions for better crop yield.",
        },
      ],
      completed: [
        {
          title: "IoT-Powered Smart Agriculture System",
          description: "Automates irrigation by monitoring soil moisture, temperature, and weather conditions to conserve water.",
        },
        {
          title: "Smart Waste Management System",
          description: "IoT-enabled bins that notify waste collection systems about their fill levels to optimize collection routes.",
        },
        {
          title: "IoT-Based Smart Parking System",
          description: "A smart system to detect available parking spaces and allow reservations through a mobile app.",
        },
      ],
    },
    {
      id: 2,
      name: "CoE for Advanced Research in AI",
      agency: "AICTE Sponsored",
      image: aiCoeImage,
      bestProject: {
        title: "Advanced Computer Vision + LLM based solutions for Remote Sensing Data Insights",
        description: "Leveraging advanced computer vision and large language models to extract meaningful insights from remote sensing data.",
      },
      ongoing: [
        {
            title: "Al-Driven Crop Disease Prediction Models for Sustainable Agriculture",
            description: "Using AI to predict crop diseases, promoting sustainable agriculture and food security.",
        },
        {
            title: "Classifying Land Use and Land Cover for Sustainable Urban Planning",
            description: "Applying AI to classify land use and cover for better urban planning and environmental conservation.",
        },
        {
            title: "Healthcare Analytics for Population Health Management",
            description: "Utilizing healthcare analytics to manage population health and work towards universal good health.",
        },
      ],
      completed: [
        {
            title: "Sustainable Data Collection and Preprocessing Platform for Smart Agriculture",
            description: "A platform for collecting and preprocessing data to support smart agriculture initiatives.",
        },
        {
            title: "Blockchain-Based Healthcare Data Security and Privacy",
            description: "Using blockchain to secure healthcare data and ensure privacy in health systems.",
        },
        {
            title: "Primary Level of Land Use Land Cover Classification using Deep Learning",
            description: "A deep learning model for the basic classification of land use and land cover.",
        },
      ],
    },
    {
      id: 3,
      name: "CoE for Deep Learning in Eye Diseases Prognosis",
      agency: "DST & L V Prasad Eye Hospital",
      image: eyeCoeImage,
      bestProject: {
        title: "Retina Disease Detection",
        description: "Deep learning model predicting diabetic retinopathy from fundus images.",
      },
      ongoing: [
        {
          title: "Real-Time Eye Disease Detection on Mobile Devices with TensorFlow Lite",
          description: "Building a lightweight AI model to classify eye diseases on mobile devices with low computational requirements.",
        },
        {
          title: "Explainable AI For Detecting Eye Impairments in Retinal Images",
          description: "Developed a deep learning system to classify eye diseases, integrating Explainable AI (XAI) techniques like Grad-CAM and SHAP for transparency.",
        },
        {
          title: "Preprocessing of Retinal Fundus Images for Glaucoma Detection",
          description: "Focused on improving early glaucoma diagnosis using advanced preprocessing methods. Built a Streamlit web app for real-time visualization.",
        },
        {
          title: "NLP for Patient Feedback Analysis in Eye Disease",
          description: "Using NLP to analyze patient feedback and medical reports to extract insights about eye disease symptoms and trends.",
        },
      ],
      completed: [
        {
          title: "Custom AI Model for Eye Disease Classification",
          description: "Used Google AutoML Vision to train a custom AI model for classifying diseases like Cataract, Glaucoma, and ARMD from retinal images.",
        },
        {
          title: "Synthetic Data Generation for Rare Eye Diseases",
          description: "Utilizing GANs to generate synthetic retinal images for rare eye diseases to address data scarcity.",
        },
        {
          title: "Cloud Based Architecture for Retinal Image Processing",
          description: "Developed a cloud-based deep learning system using VGG19 and ResNet-18 on GCP to classify retinal diseases and provide instant diagnostic feedback.",
        },
      ],
    },
    {
      id: 4,
      name: "AR-VR CoE",
      agency: "Cymax Infotainment Pvt Ltd",
      image: arvrCoeImage,
      bestProject: {
        title: "AR Enhanced Historical Landmark Tours",
        description: "Use AR technology to overlay historical events, animations, and virtual guides onto physical landmarks.",
      },
      ongoing: [
        {
          title: "Enhancing Customer Shopping Experience with AR",
          description: "Developing interactive AR shopping experiences with features like virtual try-ons and 3D product visualization.",
        },
        {
          title: "Visualizing Architectural Designs with VR",
          description: "Using VR to create immersive 3D environments to explore and assess architectural designs before construction.",
        },
        {
          title: "AR Application for Mental Health Therapy",
          description: "Developing an AR application to support therapy for PTSD, anxiety, or phobias in a controlled environment.",
        },
      ],
      completed: [
        {
          title: "VR-Based Modern Farming Training",
          description: "VR modules that simulate real-world farming scenarios to train farmers in modern, sustainable techniques.",
        },
        {
          title: "AR-Based Educational Flashcards",
          description: "An AR application that enhances traditional flashcards with interactive 3D models and animations.",
        },
        {
          title: "AR Maintenance Assistance for Machinery",
          description: "Creating an AR tool that overlays maintenance instructions and diagnostics onto machinery for technicians.",
        },
      ],
    },
  ],
  rcs: [
    {
      id: 1,
      name: "Center for Data Analytics",
      image: daImage,
      bestProject: {
        title: "Al-Powered Retail Demand Forecasting",
        description: "Using time-series forecasting models to predict customer demand, optimizing inventory and reducing waste.",
      },
      ongoing: [
        {
            title: "Customer Segmentation for Targeted Marketing",
            description: "Segmenting customers based on demographic and behavioral data for targeted marketing campaigns.",
        },
        {
            title: "Al-Driven Fraud Detection in Financial Transactions",
            description: "Analyzing transactional data in real-time to detect fraudulent financial activities.",
        },
        {
            title: "Social Media Sentiment Analysis for Brand Monitoring",
            description: "Using NLP to analyze customer sentiments in social media to improve marketing strategies.",
        },
      ],
      completed: [
        {
            title: "Synthetic Data Generation for Diabetes",
            description: "Using Gen-AI tools to create synthetic data for diabetes research and model training.",
        },
        {
            title: "Predicting Customer Churn in Telecom Industry",
            description: "Using machine learning to predict whether a telecom customer is likely to leave the service.",
        },
        {
            title: "Al for Healthcare Predictive Analytics",
            description: "Using machine learning to predict the likelihood of a patient developing a chronic disease for early detection.",
        },
      ],
    },
    {
      id: 2,
      name: "Center for Assistive Technology",
      image: atImage,
      bestProject: {
        title: "Smart Wheelchair Navigation System",
        description: "Designing an intelligent wheelchair with sensors and ML algorithms to help users navigate complex environments safely.",
      },
      ongoing: [
        {
            title: "AI-Powered Communication Aids for Non-Verbal Individuals",
            description: "An AI-driven device that translates facial expressions and gestures into synthesized speech.",
        },
        {
            title: "Brain-Computer Interface for Assistive Control",
            description: "A BCI that allows individuals with severe motor disabilities to control devices using neural signals.",
        },
        {
            title: "Wearable Fall Detection System for the Elderly",
            description: "A wearable device that detects falls in real-time and alerts caregivers to enhance safety.",
        },
      ],
      completed: [
        {
            title: "Assistive Exoskeletons for Mobility Enhancement",
            description: "A wearable exoskeleton that uses real-time gait analysis to assist individuals with mobility impairments.",
        },
        {
            title: "Assistive Reading Devices for Dyslexic Individuals",
            description: "A device using OCR and text-to-speech to help individuals with dyslexia read printed text.",
        },
        {
            title: "Assistive Shopping Aids for Visually Impaired Individuals",
            description: "A device to help visually impaired individuals identify products and read labels while shopping.",
        },
      ],
    },
    {
      id: 3,
      name: "Center for Cloud Computing",
      image: ccImage,
      bestProject: {
        title: "Cloud-Based Secure File Storage and Sharing using Blockchain",
        description: "A decentralized cloud storage system that ensures data integrity and security using blockchain technology.",
      },
      ongoing: [
        {
            title: "Document Collaboration with GNITS Cloud",
            description: "A web application that allows multiple users to modify a document simultaneously using the cloud.",
        },
        {
            title: "Student Participations Collection Tool",
            description: "A web/mobile app for students to update their extra/co-curricular activities and upload certificates.",
        },
        {
            title: "Faculty Invigilation Assistant",
            description: "A web/mobile app to help coordinators schedule invigilation duties by showing free slots of faculty.",
        },
      ],
      completed: [
        {
            title: "Faculty Individual Timetable Assistant",
            description: "A web application to automate the preparation of individual faculty timetables from class timetables.",
        },
        {
            title: "Department Knowledgebase Creation",
            description: "A web application to store department details so that required information can be retrieved by category incharges.",
        },
        {
            title: "Development of Cloud-Based Chatbot",
            description: "Creating and deploying a conversational chatbot using cloud-based services and technologies.",
        },
      ],
    },
  ],
};
export default centersData;