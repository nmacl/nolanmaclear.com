// Define types for the props of the Skill component
interface SkillProps {
  name: string;
  level: 'sufficient' | 'pro' | 'expert';
}

// Skill component to render individual skill and its proficiency level
const Skill: React.FC<SkillProps> = ({ name, level }) => {
  const levelClasses = {
    sufficient: 'bg-green-400 text-white',
    pro: 'bg-blue-500 text-white',
    expert: 'bg-purple-500 text-white'
  };

  const getLevelClass = (checkLevel: string) => {
    return level === checkLevel ? levelClasses[checkLevel] : 'bg-gray-300 text-gray-800';
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 border-b border-gray-700">
      <span className="text-white text-base sm:text-lg mb-2 sm:mb-0">{name}</span>
      <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
        <span className={`px-3 py-1 rounded ${getLevelClass('sufficient')} text-sm sm:text-base`}>
          Sufficient
        </span>
        <span className={`px-3 py-1 rounded ${getLevelClass('pro')} text-sm sm:text-base`}>
          Pro
        </span>
        <span className={`px-3 py-1 rounded ${getLevelClass('expert')} text-sm sm:text-base`}>
          Expert
        </span>
      </div>
    </div>
  );
};

// Define types for the skill data
interface SkillData {
  name: string;
  level: 'sufficient' | 'pro' | 'expert';
}

// Main Skills component that houses the skills list
const Skills: React.FC = () => {
  // Data for skills, easily modifiable
  const skillsData: SkillData[] = [
    { name: 'Java', level: 'expert' },
    { name: 'Python', level: 'sufficient' },
    { name: 'C++', level: 'expert' },
    { name: 'React', level: 'pro' },
    { name: 'JavaScript/TypeScript', level: 'pro' },
    { name: 'Database (SQL)', level: 'pro' },
    { name: 'Solidity', level: 'expert' }
  ];

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <p className="text-xl sm:text-2xl text-center mb-4 sm:mb-6">
        My proficiency levels in programming languages and libraries:
      </p>
      <div>
        {skillsData.map(skill => (
          <Skill key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
