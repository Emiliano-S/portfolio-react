import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={`projects fade-in ${active && 'active'}`} id="projects">

    </div>
  );
};

export default Projects;
