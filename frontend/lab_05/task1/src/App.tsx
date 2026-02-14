import UserCard from './UserCard'
import SkillList from './SkillList'
import type {User, Skill} from './types'
import './App.css'

const App = () => {
  const myUser: User = {
    name: "valeria",
    email: "valeriaaa@mail.ru",
    age: 19
  }

  const mySkills : Skill[] = [
    {id: 1, name: "React", level: "Intermediate"},
    {id: 2, name: "tpescaript", level: "Beginner"}
  ]
  return (
    <>
      <UserCard user={myUser} isActive={true}> {/*вызывается компонент и передает bio status через children*/}
        <section>
          <p><strong>Bio:</strong> developer typescaript</p>
          <p>status: active coding</p>
        </section>
        <SkillList skills={mySkills}/>
      </UserCard>
    </>
  )
}

export default App
