import React from 'react';

const SkillsContent: React.FC = () => {
  return (
    <div>
      {/* Full Stack Web Development Skills */}
      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-4">Full Stack Web Development Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="HTML5" />
          <SkillCard title="CSS3" />
          <SkillCard title="JavaScript" />
          <SkillCard title="BootstrapCSS" />
          <SkillCard title="ReactJS/NextJS" />
          <SkillCard title="NodeJS" />
          <SkillCard title="MongoDB" />
          <SkillCard title="MySQL" />
          {/* Add more skills as needed */}
        </div>
      </section>

      {/* Data Science Skills */}
      <section>
        <h3 className="text-3xl font-bold mb-4">Data Science Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Data Analysis" />
          <SkillCard title="Machine Learning" />
          <SkillCard title="Deep Learning" />
          <SkillCard title="Computer Vision (CV)" />
          <SkillCard title="Natural Language Processing (NLP)" />
          <SkillCard title="Transformers" />
          {/* Add more skills as needed */}
        </div>
      </section>
    </div>
  );
};

const SkillCard:React.FC<{title:string}> = ({title}) => {
    return(
        <div className="bg-white p-4 rounded-md shadow-md">
         <p className="text-lg font-semibold">{title}</p>
        </div>
    )
}

export default SkillsContent;
