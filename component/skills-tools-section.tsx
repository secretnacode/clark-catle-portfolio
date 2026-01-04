import { FC } from "react";

export const SkillsAndToolsSection: FC = () => {
  return (
    <div>
      <h1>Skills & Tools</h1>

      <div className="flex gap-12 justify-center items-center">
        <div>
          <h1>Skills</h1>

          <ul>
            <li>JavaScript/TypeScript</li>
            <li>Data Structures & Algorithm</li>
            <li>Version Control(Git)</li>
            <li>Databases & SQL/NoSQL</li>
            <li>Debugging</li>
            <li>Web Dev(Back end, Front end)</li>
            <li>Cloud & Deployment</li>
            <li>Problem-Solving</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Adaptability & Continuous Learning</li>
            <li>Emotional Intelligence (EQ)</li>
            <li>Time Management</li>
          </ul>
        </div>

        <div>
          <h1>Tools</h1>

          <ul>
            <li>VSCode</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Postman</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GitHub</li>
            <li>Vercel</li>
            <li>Claude</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
