import QueryFields from '../query-fields/query-fields.component'
import './stat-queries.styles.scss'

const StatQueries = () => {
  return (
    <div className='stat-queries-container'>
      <div className='query-fields-container'>
        <QueryFields></QueryFields>
      </div>
    </div>
  )
}

export default StatQueries
