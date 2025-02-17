import React from 'react';
export default function Services(){
    const servicesData = [
        {
          title: "Website & App Building",
          description: "Customized solutions to build your digital presence",
          image: "/services/s1.png",
          alt: "Laptop showing website development"
        },
        {
          title: "Events for Businesses",
          description: "Plan and execute events that leave an impact",
          image: "/services/s2.png",
          alt: "Business presentation event"
        },
        {
          title: "Influencer Marketing",
          description: "Leverage the power of influencers to boost your brand",
          image: "/services/s3.png",
          alt: "Camera recording content"
        },
        {
          title: "Brand Ambassador Roles",
          description: "Find the perfect face for your brand",
          image: "/services/s4.png",
          alt: "Professional portrait photo"
        },
        {
          title: "Content Creation",
          description: "Engaging content to grow your online presence",
          image: "/services/s8.png",
          alt: "Photography studio setup"
        },
        {
            title: "AR & VR Experiences",
            description: "Engaging content to grow your online presence",
            image: "/services/s7.png",
            alt: "Photography studio setup"
          },
          {
            title: "Advert Management",
            description: "Optimize your ads for maximum ROI",
            image: "/services/s6.png",
            alt: "Photography studio setup"
          },
          {
            title: "Business Consultancy",
            description: "Expert advice to elevate your business strategy",
            image: "/services/s5.png",
            alt: "Photography studio setup"
          }
      ];
      
      return (
        <div className="services-container">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="card">
                <img src={service.image} alt={service.alt} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}