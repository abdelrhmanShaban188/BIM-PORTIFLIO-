const portfolioData = {
    personalInfo: {
        name: "Abdelrhman Shaban",
        title: "Electrical BIM Engineer",
        email: "abdelrhman.mohamedshaban@gmail.com",
        phone: "+201018736140",
        location: "Egypt & KSA",
        linkedIn: "https://www.linkedin.com/in/abdelrhman-shaban-/",
        about: `Electrical BIM Engineer specializing in electrical design, shop drawings, and BIM coordination. 
        Experienced in power, lighting, and low-current systems for major projects in Saudi Arabia and Egypt. 
        <br><br>Proficient in Revit, Navisworks, AutoCAD, Dialux Evo, and ETAP. Skilled in BIM modeling, clash detection, 
        and multidisciplinary coordination, ensuring efficient and optimized engineering solutions. Detail-oriented, adaptable, 
        and committed to innovation in electrical engineering.`
    },
    skills: [
        "Electrical Design", "BIM Coordination", "Shop Drawings", "Revit MEP", "Navisworks", "AutoCAD", "Dialux Evo", "ETAP", "Clash Detection", "Power Distribution", "Lighting Systems", "Low Current Systems"
    ],
    categories: [
        { id: "all", name: "All Projects" },
        { id: "bim", name: "BIM & Coordination" },
        { id: "hospitality", name: "Hospitality & Entertainment" },
        { id: "healthcare", name: "Healthcare" },
        { id: "infrastructure", name: "Infrastructure" },
        { id: "commercial", name: "Commercial & Mixed-Use" },
        { id: "school", name: "School Design" },
        { id: "addin", name: "Revit Add-ins" }
    ],
    services: [
        {
            id: "s1",
            category: "services",
            title: "Electrical BIM Modeling",
            details: "Creating highly detailed 3D models for electrical systems, integrating with other disciplines for a comprehensive project view.",
            icon: "BIM",
            technologies: ["Revit", "Navisworks"]
        },
        {
            id: "s2",
            category: "services",
            title: "Design & Shop Drawings",
            details: "Producing detailed layout blueprints, schematics, and shop drawings for power, lighting, and low-current systems.",
            icon: "Drafting",
            technologies: ["AutoCAD", "Dialux Evo", "ETAP"]
        },
        {
            id: "s3",
            category: "services",
            title: "Clash Detection & Coordination",
            details: "Identifying and resolving multidisciplinary clashes before construction to ensure smooth and cost-effective execution.",
            icon: "Coordination",
            technologies: ["Navisworks", "BIM Collaborate"]
        },
        {
            id: "s4",
            category: "services",
            title: "Low Current & ELV Systems",
            details: "Design and coordination of Fire Alarm, CCTV, Data Networks, and Building Management Systems.",
            icon: "ELV",
            technologies: ["Fire Alarm", "CCTV", "Data"]
        }
    ],
    experience: [
        {
            company: "AIM United Company Ltd",
            title: "Electrical BIM Engineer",
            period: "Mar 2025 - Present",
            location: "EGY",
            description: "Developed and managed electrical BIM models up to LOD 400 in alignment with project specifications and industry standards. • Prepared shop drawings for all electrical embedded systems including power, lighting, and low current. • Extracted and incorporated real data from material submittals into the BIM model to ensure design accuracy. • Coordinated with other disciplines (architectural, structural, mechanical) to resolve clashes and ensure seamless integration. • Participated in clash detection and coordination meetings, resolving issues efficiently to support smooth construction workflows. • Maintained model accuracy and compliance throughout design, construction, and handover stages. • Utilized Autodesk Revit, Navisworks, and AutoCAD for modeling, documentation, and coordination tasks."
        },
        {
            company: "Pioneer Engineering Consultancy LLC",
            title: "Electrical BIM Engineer",
            period: "Jun 2024 - Mar 2025",
            location: "UAE/EGY",
            description: "Work as Electrical BIM Engineer responsible for  -Creating  3D Model For Electrical Systems Like ( CableRouting-Power-Lighting-ICT-...etc)  -Clash Solutions with Other Discipline   -Presentation for Layout To hand over to Client -Design systems According To Codes  -Shop drawing for Different Discpline."
        },
        {
            company: "Eduneers",
            title: "Team Manager and Coordinator",
            period: "Apr 2023 - 2024",
            location: "Online/Egypt",
            description: "ffective Team Leadership: Led a multidisciplinary team of engineers and trainers, coordinating efforts to ensure seamless project execution and timely delivery of training programs and engineering solutions. Streamlined Project Management: Implemented project management best practices, resulting in improved task prioritization and resource allocation, leading to the successful completion of multiple training programs and engineering projects. Enhanced Client Satisfaction: Coordinated with clients to understand their needs and customized training content accordingly, leading to higher client satisfaction and repeat business. Optimized Workflow Efficiency: Developed and standardized processes for training program delivery and project management, reducing turnaround time and increasing operational efficiency."
        },
        {
            company: "ALDAR CONSULTING OFFICE",
            title: "Assistant Electrical Design Engineer",
            period: "2022 - 2023",
            location: "Egypt",
            description: "Project Involvement: Contributed to multiple large-scale projects, including water treatment plants, sewage stations, and administrative buildings. Design and Drafting: Created detailed electromechanical designs, ensuring compliance with industry standards and project requirements. Technical Coordination: Collaborated with multidisciplinary teams to integrate mechanical, electrical, and plumbing (MEP) systems into overall project designs. Project Supervision: Assisted in on-site supervision, ensuring that the implementation adhered to design specifications and timelines. Client Communication: Engaged with clients to gather requirements, provide design solutions, and ensure alignment with project objectives. Document Preparation: Developed technical drawings, specifications, and reports for project submissions, maintaining accuracy and thoroughness. Problem Solving: Resolved technical issues and provided innovative solutions to enhance project efficiency and reduce costs. Quality Control: Ensured the quality of designs and project deliverables by conducting rigorous reviews and adhering to quality assurance protocols."
        }
    ],
    education: [
        {
            school: "Mansoura University",
            degree: "Bachelor’s Degree of Electrical Engineering",
            period: "2019 - 2024",
            location: "Egypt",
            description: "Electrical Power and Machine Department. Grade: Very Good (80.67%). Graduation Project: Electrical distribution for hospital using KNX (Excellent)."
        }
    ],
    technicalSkills: [
        "C# / .NET", "Revit API", "BIM Automation", "Electrical Design", "Power Distribution", "Lighting Systems", "Low Current Systems", "Clash Detection", "Coordination", "SQL Server"
    ],
    tools: [
        "Revit", "AutoCAD", "Navisworks", "Dialux Evo", "ETAP", "Visual Studio", "Git", "Postman", "BIM360 / ACC", "Relux"
    ],
    courses: [
        { title: "BIM Application Development", provider: "KAITECH", date: "2025" },
        { title: "Technical Coordination Workshop", provider: "KAITECH", date: "2025" },
        { title: "Electrical BIM with Autodesk Revit", provider: "Eduneers", date: "2024" },
        { title: "KNX Protocol and BMS", provider: "Eduneers", date: "2024" },
        { title: "Advanced Technical Office Training", provider: "Eduneers", date: "2023" },
        { title: "Project Management Professional (PMP)", provider: "AmCham", date: "2023" },
        { title: "Autodesk Revit MEP Advanced", provider: "Udemy", date: "2023" },
        { title: "Solar Energy Training", provider: "Africa Power", date: "2022" }
    ],
    projects: [
        {
            id: 1,
            category: "bim",
            title: "SIX FLAGS-QIDDIYA",
            location: "KSA",
            consultant: "ATKINSREALIS",
            client: "QIDDYAH",
            details: "Coordination for massive theme park attractions & COBIe parameter & Asset and AsBuilt Drawing.",
            images: ["6F.png"],
            refLink: "https://sixflagsqiddiyacity.com",
            technologies: ["BIM", "Electrical", "Theme Park"]
        },
        {
            id: 2,
            category: "bim",
            title: "MOTOR SPEED PARK TRACK",
            location: "KSA",
            consultant: "WSP",
            client: "QIDDYAH",
            details: "BIM coordination for world-class FIA Grade 1 racing circuit lighting and buildings.",
            images: [
                "SPEED PARK/msp01.png",
                "SPEED PARK/msp-02.png",
                "SPEED PARK/Screenshot 2026-04-06 002633.png",
                "SPEED PARK/Screenshot 2026-04-06 002640.png",
                "SPEED PARK/image (2).jpg",
                "SPEED PARK/image (2).png",
                "SPEED PARK/image (20).png",
                "SPEED PARK/image (21).png",
                "SPEED PARK/image (22).png",
                "SPEED PARK/image (23).png",
                "SPEED PARK/image (24).png",
                "SPEED PARK/image (25).png",
                "SPEED PARK/image (26).png",
                "SPEED PARK/image (27).png",
                "SPEED PARK/image (28).png",
                "SPEED PARK/image (29).png",
                "SPEED PARK/image (3).jpg",
                "SPEED PARK/image (30).png",
                "SPEED PARK/image (31).png",
                "SPEED PARK/image (32).png",
                "SPEED PARK/image (33).png",
                "SPEED PARK/image (34).png",
                "SPEED PARK/image (35).png",
                "SPEED PARK/image (5).png"
            ],
            refLink: "https://qiddiya.com/qiddiya-city/assets/speed-park-track/",
            technologies: ["BIM", "Infrastructure", "Sports"]
        },
        {
            id: 3,
            category: "bim",
            title: "HOUSE OF AL SAUD - DIRIYAH GATE",
            location: "KSA",
            consultant: "FOSTER AND PARTNERS",
            client: "DGDA",
            details: "Intricate BIM coordination for landmark museum architectural and Electrical Shop drawing for Systems .",
            images: [
                "HOAS PROJECT/hoas.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153108.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153125.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153201.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153206.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153231.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153254.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153317.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153343.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153411.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153429.png",
                "HOAS PROJECT/Screenshot 2026-04-04 153443.png",
                "HOAS PROJECT/Screenshot 2026-04-06 235715.png",
                "HOAS PROJECT/Screenshot 2026-04-06 235815.png",
                "HOAS PROJECT/Screenshot 2026-04-07 000342.png"
            ],
            refLink: "https://www.diriyahcompany.sa",
            technologies: ["BIM", "Museum"]
        },
        {
            id: 4,
            category: "bim",
            title: "QIDDIYA WATER PARK HOTEL",
            location: "KSA",
            consultant: "DSA",
            client: "QIDDYAH",
            details: "Electrical systems coordination and BIM modeling for luxury hotel integrated within Qiddiya.",
            images: [
                "02.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153711.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153742.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153755.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153858.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153923.png",
                "WATER PARK HOT/Screenshot 2026-04-04 153929.png",
                "WATER PARK HOT/Screenshot 2026-04-04 154007.png",
                "WATER PARK HOT/Screenshot 2026-04-04 154022.png",
                "WATER PARK HOT/Screenshot 2026-04-04 154128.png"
            ],
            refLink: "https://www.omtoarchitects.com/qiddiya",
            technologies: ["Hospitality", "BIM"]
        },
        {
            id: 5,
            category: "healthcare",
            title: "SOLIMAN FAKEEH HOSPITAL",
            location: "KSA",
            consultant: "ABDULRAZEK HAKEEM CONSULTING ENGINEERS",
            client: "FAKEEH CARE",
            details: "BIM modeling for specialized healthcare electrical systems and life safety.",
            images: [
                "03.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 002834.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 002942.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003007.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003039.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003156.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003239.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003259.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003407.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003443.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003504.png",
                "SOLIMAN FAKEEH HOSIBTAL/Screenshot 2026-04-06 003545.png"
            ],
            refLink: "https://en.ahc-contracting.com/projects/dr-soliman-fakeeh-medical-center-al-zahra-jeddah",
            technologies: ["Healthcare", "BIM"]
        },
        {
            id: 6,
            category: "bim",
            title: "EVN HOTELS-H09",
            location: "KSA",
            consultant: "JT & PARTNERS",
            client: "QIDDYAH",
            details: "Electrical BIM coordination for advanced hotel facilities in the Qiddiya entertainment city.",
            images: [
                "H09/image.jpg",
                "H09/image (1).jpg",
                "H09/image (10).png",
                "H09/image (11).png",
                "H09/image (12).png",
                "H09/image (13).png",
                "H09/image (14).png",
                "H09/image (15).png",
                "H09/image (16).png",
                "H09/image (17).png",
                "H09/image (18).png",
                "H09/image (19).png",
                "H09/image (4).jpg",
                "H09/image (4).png",
                "H09/image (6).png",
                "H09/image (7).png",
                "H09/image (8).png",
                "H09/image (9).png"
            ],
            refLink: "https://qiddiya.com/",
            technologies: ["Hospitality", "BIM"]
        },
        {
            id: 7,
            category: "hospitality",
            title: "UHAUD ROFIDA HOTEL",
            location: "KSA",
            client: "ROFIDA",
            details: "Electrical Schematic Design & Space Coordination for Hospitality Facilities, Ensuring Efficient System Integration and Enhanced Guest Comfort.",
            images: [
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 223829.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 223849.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 223908.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 223920.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 230142.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 230156.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 230238.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 230258.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-05 232451.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-06 001304.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-06 001326.png",
                "AHAUD ROFIDA HOTEL/Screenshot 2026-04-06 001352.png"
            ],
            technologies: ["Hospitality", "BIM Electrical Design"]
        },
        {
            id: 8,
            category: "school",
            title: "ABHA ELMAWAHWB SCHOOL",
            location: "KSA",
            client: "Mawahib Education and Training Company",
            details: "Electrical Design & Space Coordination for school facilities and guest comfort systems.",
            images: [
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 232938.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 232952.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233222.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233250.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233300.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233313.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233619.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233710.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233927.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 233938.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234000.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234020.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234043.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234213.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234446.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234506.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234528.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234545.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234603.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234622.png",
                "ELMAWAHAEB SCHOOL/Screenshot 2026-04-05 234715.png"
            ],
            refLink: "https://mwahib.edu.sa",
            technologies: ["Design", "BIM Electrical Design"]
        },
        {
            id: 9,
            category: "bim",
            title: "AMALAA VILLAGE BUILDING",
            location: "KSA",
            details: "Asset Building, COBie parameters, and full coordination for luxury village architectural and Electrical systems.",
            images: [
                "AMALAA/Screenshot 2026-04-05 235853.png",
                "AMALAA/Screenshot 2026-04-05 235922.png",
                "AMALAA/Screenshot 2026-04-06 001547.png",
                "AMALAA/Screenshot 2026-04-06 001557.png",
                "AMALAA/Screenshot 2026-04-06 001609.png",
                "AMALAA/Screenshot 2026-04-06 001622.png",
                "AMALAA/Screenshot 2026-04-06 001642.png",
                "AMALAA/Screenshot 2026-04-06 001850.png",
                "AMALAA/Screenshot 2026-04-06 001858.png",
                "AMALAA/Screenshot 2026-04-06 001904.png",
                "AMALAA/Screenshot 2026-04-06 001915.png",
                "AMALAA/Screenshot 2026-04-06 001920.png"
            ],
            refLink: "https://www.redseaglobal.com/en/our-projects/amaala",
            technologies: ["BIM", "Electrical", "Asset Management"]
        },
        {
            id: 10,
            category: "addin",
            title: "REVIT AUTOMATION ADD-IN",
            images: [
                "cover.png",
                "https://drive.google.com/file/d/1gSDl6PfBFY9NyKtN9lnzYYKQnf3rEEAZ/view?usp=drive_link",
                "https://drive.google.com/file/d/1DctbJHrshFktrT8CK4Xn8NElCFmaowMb/view?usp=drive_link"
            ],
            badge: "Software Tool",
            refLink: "https://www.linkedin.com/in/abdelrhman-shaban-/",
            technologies: ["C#", ".NET", "Revit API", "BIM Automation"]
        },
        {
            id: 11,
            category: "addin",
            title: "AMS TOOLS CABLE",
            images: [
                "cover.png",
                "https://drive.google.com/file/d/1xnyQvCc4NtZSvbRiA9rcynpdJtkhc8i8/view?usp=drive_link"
            ],
            badge: "Software Tool",
            refLink: "https://drive.google.com/file/d/1td23e-UXVAIUTyOqVJj8szaLQS1osDnG/view?usp=drive_link",
            technologies: ["C#", ".NET", "Revit API", "BIM Automation"]
        },
        {
            id: 12,
            category: "addin",
            title: "AMS TOOLS - CLASH LIVE",
            images: [
                "cover.png",
                "https://drive.google.com/file/d/1J1NkiwcYXcLSde_UbmwTDzNWERijC8bC/view?usp=drive_link"
            ],
            badge: "Software Tool",
            refLink: "https://drive.google.com/file/d/1dGfm6Ytu7TTTcaqkPzQ6Mqpl92hWvbNW/view?usp=drive_link",
            technologies: ["C#", ".NET", "Revit API", "BIM Automation"]
        },
        {
            id: 13,
            category: "bim",
            title: "SEDRA PROJECT",
            location: "KSA",
            consultant: "DIYAR",
            client: "ROSHN GROUP",
            details: "Electrical BIM coordination For Electrical systems And Quantity Takeoff For Electrical systems For the SEDRA project.",
            images: [
                "SEDRA/1.png",
                "SEDRA/2.png",
                "SEDRA/3.png",
                "SEDRA/7.png",
                "SEDRA/4.png",
                "SEDRA/5.png",
                "SEDRA/6.png"
            ],
            technologies: ["BIM", "Electrical", "Coordination"]
        }
    ]
};
