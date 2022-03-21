import { Input } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);
function Header () {
    return ( 
        <div className='header'>
            <div className='searchbar'>
                <Search placeholder="Search here" allowClear onSearch={onSearch} />
            </div>
            
            
                
            
        </div>
     );
}
 
export default Header;