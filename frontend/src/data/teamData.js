import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';

export const currentYear = "2025-26";

export const teamData = [
    {
        year: "2025-26",
        isPresidentStructure: false, // New flag to help with specific conditional rendering if needed
        groups: [
            {
                id: "leadership",
                title: "Chapter Leads",
                members: [
                    { id: 101, name: "Alex 'Void' Mercer", role: "Chapter Lead", image: team1 },
                    { id: 102, name: "Sarah 'Cipher' Vance", role: "Chapter Co-Lead", image: team2 },
                    { id: 103, name: "David 'Glitch' Chen", role: "Tech Lead", image: team3 }
                ]
            },
            {
                id: "admin",
                title: "Admin Team",
                members: [
                    { id: 201, name: "Emily Rose", role: "Community Manager", image: team2 },
                    { id: 202, name: "Michael Scott", role: "Secretary", image: team1 },
                    { id: 203, name: "Dwight Schrute", role: "Secretary", image: team3 },
                    { id: 204, name: "Pam Beesly", role: "Operations Manager", image: team2 }
                ]
            },
            {
                id: "technical",
                title: "Technical Team",
                members: [
                    { id: 301, name: "Jim Halpert", role: "Team Lead", image: team3 },
                    { id: 302, name: "Ryan Howard", role: "Co-Lead", image: team1 }
                ]
            },
            {
                id: "development",
                title: "Development Team",
                members: [
                    { id: 401, name: "Stanley Hudson", role: "Team Lead", image: team3 },
                    { id: 402, name: "Kevin Malone", role: "Co-Lead", image: team1 }
                ]
            },
            {
                id: "social_media",
                title: "Social Media Team",
                members: [
                    { id: 501, name: "Kelly Kapoor", role: "Team Lead", image: team2 },
                    { id: 502, name: "Erin Hannon", role: "Co-Lead", image: team2 }
                ]
            },
            {
                id: "design",
                title: "Design Team",
                members: [
                    { id: 601, name: "Oscar Martinez", role: "Team Lead", image: team3 },
                    { id: 602, name: "Angela Martin", role: "Co-Lead", image: team2 }
                ]
            },
            {
                id: "event_management",
                title: "Event Management Team",
                members: [
                    { id: 701, name: "Phyllis Vance", role: "Team Lead", image: team2 },
                    { id: 702, name: "Bob Vance", role: "Co-Lead", image: team1 }
                ]
            },
            {
                id: "marketing",
                title: "Marketing Team",
                members: [
                    { id: 801, name: "Andy Bernard", role: "Team Lead", image: team3 },
                    { id: 802, name: "Darryl Philbin", role: "Co-Lead", image: team1 }
                ]
            },
            {
                id: "pr_outreach",
                title: "PR & Outreach Team",
                members: [
                    { id: 901, name: "Jan Levinson", role: "Team Lead", image: team2 },
                    { id: 902, name: "David Wallace", role: "Co-Lead", image: team3 }
                ]
            },
            {
                id: "documentation",
                title: "Documentation Team",
                members: [
                    { id: 1001, name: "Toby Flenderson", role: "Team Lead", image: team1 },
                    { id: 1002, name: "Holly Flax", role: "Co-Lead", image: team2 }
                ]
            }
        ]
    },
    {
        year: "2024-25",
        groups: [
            {
                id: "leadership",
                title: "Chapter Leads",
                members: [
                    { id: 2401, name: "Emily 'Root' Davis", role: "Chapter Lead", image: team2 },
                    { id: 2402, name: "Michael 'Hash' Brown", role: "Tech Lead", image: team1 }
                ]
            }
        ]
    },
    {
        year: "2023-24",
        groups: [
            {
                id: "leadership",
                title: "Core Team", // Using old title for this year
                members: [
                    { id: 2301, name: "Chris 'Sudo' Wilson", role: "President", image: team3 },
                    { id: 2302, name: "Jessica 'Grep' Jones", role: "Vice President", image: team2 }
                ]
            }
        ]
    }
];
