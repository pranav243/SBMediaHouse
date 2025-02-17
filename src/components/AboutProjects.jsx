export default function AboutProjects() {
    const projects = [
        {
          id: 1,
          title: "Ramp Walk",
          description: "This event is an initiative and the first of its kind! A ramp walk organized exclusively for a live audience at a restaurant. This combines the excitement of fashion with the charm of dining, creating an unforgettable experience for the audience. By blending haute couture and hospitality, We aim to elevate the restaurant's brand identity and deliver a remarkable, interactive marketing approach.",
          image: "/latestProjects/prj1.png"
        },
        {
          id: 2,
          title: "Magazine Shoots",
          description: "We recently had the privilege of executing a full-scale magazine shoot for a well-known boutique in Pune, designed to highlight their exquisite collection during their highly anticipated sale season. This project was aimed at creating visuals that not only enhanced the boutique’s branding but also provided  content for their social media platforms.",
          image: "/latestProjects/prj2.png"
        },
        {
          id: 3,
          title: "Other Side",
          description: " `Other Side` is an immersive live performance in XR, fusing immersive storytelling with interactions in VR. Influenced by real incidents, it speaks to the world from the perspective of three characters in a sarcastic yet touching voice, dealing with `Animal Cruelty`. This funny yet evoking show combines humour with real elements in a show that will evoke awareness and empathy.",
          image: "/latestProjects/prj3.png"
        },
        {
          id: 4,
          title: "The Blue Resurgence",
          description: "The Blue Resurgence is a 270-degree cinematic journey. This panoramic spectacle dives deep into the heart of the Southern Georgia blue whale's remarkable resurgence, as documented by the pivotal 2020 study. Crafted under the auspices of the UNESCO Climate Academy for the UN Decade of Ocean Science for Sustainable Development, my team's creativity was recognized and selected by a consortium of industry innovators. Our project proudly stands as a beacon in UNESCO's Ocean Decade celebrations and The Ocean Agency's digital showcases.",
          image: "/latestProjects/prj4.png"
        }
      ];
    
      return (
        <div className="projects-container">
          <h2 className="projects-title">Latest Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}