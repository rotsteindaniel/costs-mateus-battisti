
import styles from './ProjectForm.module.css'

const ProjectForm = () => {
  return (
    <form className={styles.form}>
        <div>
            <input type="text" placeholder='insira o nome do projeto' />
        </div>
        <div>
        <input type="number" placeholder='insira o orçamento total' />
        </div>
        <div>
        <select name="category_id">
            <option disabled selected>Selecione a categoria</option>
        </select>
        </div>
        <div>
        <input type="submit" value="criar projeto"/>
        </div>
    </form>
  )
}

export default ProjectForm