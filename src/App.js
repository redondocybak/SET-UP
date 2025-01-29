import { Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../src/assets/data/dishes.json'
import DescriptionsItem from 'antd/es/descriptions/Item';

function App() {
  return (
    
    <Card title={'Order Title'} style={{ margin: 20 }}> 
        <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
          <Descriptions.Item label='Customer'>Jose Ricardo Cuadra</Descriptions.Item>
          <Descriptions.Item label='Customer Address'>Calle del Simio 4, Santo Domingo, Portugal</Descriptions.Item>
        </Descriptions>
        <Divider />
    </Card>
  );
}

export default App;
