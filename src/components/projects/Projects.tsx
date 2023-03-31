import Project from '../project/Project'
import projectList from './ProjectsList'

const Projects = () => {
  return (
    <div className='flex flex-col items-center gap-12 py-6 xl:py-12'>
      {
        projectList.map(p =>
        <Project
        key={p.title}
        image={p.image}
        title={p.title}
        descriptionES={p.descriptionES}
        descriptionUS={p.descriptionUS}
        url={p.url}
        reverse={p.reverse}
        />)
      }
    </div>
  )
}
export default Projects
