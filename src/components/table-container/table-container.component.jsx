import BasicTable from '../../components/table/table.component'

import './table-container.styles.scss'

const TableContainer = ({ stats }) => {
    if (stats[0] == null) return

    console.log(stats)
    return (
        <div className='tables-container' >
        {stats.map((stat) => (
            <div className={`table-container t${stat.id}`} >
                <BasicTable table={stat} key={stat.id} />
            </div>
        ))}
        </div>
    )

}

export default TableContainer