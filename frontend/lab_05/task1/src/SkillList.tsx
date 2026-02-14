import type {Skill} from "./types"

export interface SkillListProps{
    skills: Skill[]
}

const GetColorLevel = (level:string) => {
    if (level === "Intermediate") return 'blue'
    if (level === "Expert") return 'green'
    return 'orange'

}

export const SkillList = ({skills} : SkillListProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id}>
                    {skill.name} - <span style={{color: GetColorLevel(skill.level)}}>{skill.level}</span>
                </li>))}
        </ul>
    )
}

export default SkillList