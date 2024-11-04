 const employees= 
    [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "newTask": true,
            "completedTask": false,
            "failedTask": false,
            "taskTitle": "Update Documentation",
            "taskDescription": "Update the user manual for version 2.0",
            "taskDate": "2024-11-01",
            "category": "Documentation"
          },
          {
            "newTask": false,
            "completedTask": true,
            "failedTask": false,
            "taskTitle": "Bug Fixing",
            "taskDescription": "Fix layout issue on mobile view",
            "taskDate": "2024-10-28",
            "category": "Development"
          },
          {
            "newTask": false,
            "completedTask": false,
            "failedTask": true,
            "taskTitle": "Database Backup",
            "taskDescription": "Backup the database for this quarter",
            "taskDate": "2024-10-25",
            "category": "Maintenance"
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "newTask": true,
            "completedTask": false,
            "failedTask": false,
            "taskTitle": "Implement Login",
            "taskDescription": "Add multi-factor authentication",
            "taskDate": "2024-11-05",
            "category": "Security"
          },
          {
            "newTask": false,
            "completedTask": true,
            "failedTask": false,
            "taskTitle": "UI Design",
            "taskDescription": "Redesign the landing page",
            "taskDate": "2024-10-30",
            "category": "Design"
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "newTask": true,
            "completedTask": false,
            "failedTask": false,
            "taskTitle": "Data Analysis",
            "taskDescription": "Analyze Q4 sales data",
            "taskDate": "2024-11-02",
            "category": "Analytics"
          },
          {
            "newTask": false,
            "completedTask": true,
            "failedTask": false,
            "taskTitle": "API Integration",
            "taskDescription": "Integrate payment API with frontend",
            "taskDate": "2024-10-29",
            "category": "Development"
          },
          {
            "newTask": false,
            "completedTask": false,
            "failedTask": true,
            "taskTitle": "Server Maintenance",
            "taskDescription": "Perform routine server checks",
            "taskDate": "2024-10-27",
            "category": "Maintenance"
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "newTask": true,
            "completedTask": false,
            "failedTask": false,
            "taskTitle": "Content Creation",
            "taskDescription": "Create social media posts for new campaign",
            "taskDate": "2024-11-06",
            "category": "Marketing"
          },
          {
            "newTask": false,
            "completedTask": true,
            "failedTask": false,
            "taskTitle": "Newsletter",
            "taskDescription": "Draft the monthly newsletter",
            "taskDate": "2024-10-31",
            "category": "Communications"
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "newTask": true,
            "completedTask": false,
            "failedTask": false,
            "taskTitle": "Team Training",
            "taskDescription": "Organize a training session on new tools",
            "taskDate": "2024-11-08",
            "category": "Training"
          },
          {
            "newTask": false,
            "completedTask": true,
            "failedTask": false,
            "taskTitle": "Client Meeting",
            "taskDescription": "Present project updates to the client",
            "taskDate": "2024-10-30",
            "category": "Client Relations"
          },
          {
            "newTask": false,
            "completedTask": false,
            "failedTask": true,
            "taskTitle": "Proposal Writing",
            "taskDescription": "Prepare proposal for new project",
            "taskDate": "2024-10-29",
            "category": "Business Development"
          }
        ]
      }
    ]

 const admin =[
         {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      ]


     export const setLocalStorage = () => {
        console.log("hello")
        localStorage.setItem("employees", JSON.stringify(employees));
        localStorage.setItem("admin", JSON.stringify(admin));
    };

    export const getlocalstorage=()=>{
        const data =JSON.parse(localStorage.getItem("employees"))
        console.log(data[1])
}


