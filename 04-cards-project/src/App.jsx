import React from 'react'
import Card from './components/Card.jsx'

const App = () =>{
const jobOpenings = [
  {
    brandLogo: "https://www.bing.com/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?w=164&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&pid=3.1&rm=2",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Java Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=148&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.M3DpBvUfn4YP5TYXFx-iNwHaGB?w=224&h=181&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Spring Boot Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.n-qBGTTsnFyAFEnTIMj3hwHaHa?w=192&h=192&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Infosys",
    datePosted: "3 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$22/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Av0oY41bv9xfg_PZ-VzLiAHaFj?w=216&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "TCS",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.-WbEq8HRFFN_CYNCLSD97QHaEK?w=303&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Wipro",
    datePosted: "4 days ago",
    post: "REST API Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$18/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.hUZyIUCLXVjNGOKBJQcwZwHaEK?w=319&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Accenture",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.oXkipQKT-BAB4MsrxSnFgwHaEK?w=280&h=184&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Flipkart",
    datePosted: "6 days ago",
    post: "Java Microservices Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.2Z0TlS5zTCR0h8CDJ99CKwHaHa?w=164&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Paytm",
    datePosted: "2 days ago",
    post: "Fintech Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$44/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.6eF9vIFIzu-eVMuWWp6BAwHaE8?w=255&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3",
    companyName: "Zoho",
    datePosted: "8 weeks ago",
    post: "Associate Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$20/hour",
    location: "Noida, India"
  }
];


  return(
    <div className='parent'>
      {jobOpenings.map(function(element,id){
          return <div key={id}>
            <Card brandLogo={element.brandLogo} companyName={element.companyName} 
          jobPost={element.post} tag1={element.tag1} datePosted={element.datePosted}
          tag2={element.tag2} pay={element.pay} location={element.location}/>
          </div>
      })}
    </div>

    // second flex
    
  )
}
export default App
