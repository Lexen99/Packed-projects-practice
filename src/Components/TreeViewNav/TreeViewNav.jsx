import './styles.css';
import MenuList from './MenuList';

const TreeViewNav = ({ menus = []}) => {
    return ( 
        <div className='tree-view-container'>
            <MenuList list={menus}/>
        </div>
     );
}
 
export default TreeViewNav;