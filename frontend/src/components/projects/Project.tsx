
import Categories from "./Categories"
import Pagination from "./Pagination"
import ProjectCard from "./ProjectCard"

const Project = ({projects, currentPage, setCurrentPage, totalProjects}:any) => {
  return (
    <>
    <Categories />
    
    <div className="">
      {
        projects?.map((project:any)=>(
          <ProjectCard project={project}/>
        ))
      }
    </div>

    <Pagination totalResults={totalProjects} resultsPerPage={10} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default Project