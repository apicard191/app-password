import * as React from 'react';
import {ItemManager} from '../Service/Manager/ItemManager';
import ShowItem from '../Components/Item/ShowItem';

const itemManager = new ItemManager();

class ItemScreen extends React.Component {
    render() {
        return (
            <ShowItem item={itemManager.get(this.props.route.params.id)}/>

        )
    }
}

export default ItemScreen
