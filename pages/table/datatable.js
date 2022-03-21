import { Table, Typography, Input } from 'antd';
import { useState,useEffect } from 'react';
import moment from 'moment';

const { Text, Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

function datatable () {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize,setPageSize] = useState(10)

    useEffect(() => {
        setLoading(true)
        fetch('../users.json')
        .then(response=>response.json())
        .then(data=>{
            setDataSource(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          sorter: (a, b) => a.position.localeCompare(b.position)
        },
        {
          title: 'Office',
          dataIndex: 'office',
          key: 'office',
          sorter: (a, b) => a.office.localeCompare(b.office)
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter:(a,b)=>{
            return a.age-b.age
          }
        },
        {
          title: 'Start Date',
          dataIndex: 'startDate',
          key: 'startDate',
          sorter: (a, b) => moment(a.startDate).unix() - moment(b.startDate).unix()
        },
        {
          title: 'Salary',
          dataIndex: 'salary',
          key: 'salary',
        },
      ];
    
    return ( 
        <div>
            <Title className="nav-title" level={2}>Tables / Data Table</Title>
            <div className="dataTable">
              <Title level={3}>DATA TABLE</Title>
              <Text>Read the <a href="https://datatables.net/">Official DataTables Documentation</a> for a full list of instructions and other options.</Text>
              <div className="search">
                <div className='searchbar'>
                  <Search placeholder="Search here" allowClear onSearch={onSearch} />
                </div>
                <Title className="search-entries" level={4}>Showing {pageSize} entries</Title>
              </div>
              
              <Table
              loading={loading}
              dataSource={dataSource}
              columns={columns}
              pagination={{
                  current: page,
                  pageSize: pageSize,
                  total: 100,
                  onChange: (page,pageSize)=>{
                      setPage(page);
                      setPageSize(pageSize)
                  }
              }}
              />
          </div>
        </div>
     );
}
 
export default datatable;