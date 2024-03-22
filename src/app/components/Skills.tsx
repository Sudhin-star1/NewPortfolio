import React from 'react';
import SkillsContent from './SkillsContent';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="my-auto min-h-screen flex flex-col justify-around items-center">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <SkillsContent />
    </section>
  );
};

export default Skills;